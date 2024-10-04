import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';   // Delete icon
import { MdPendingActions } from 'react-icons/md';  // Pending action icon
import './index.css';

const daysOfWeek = ['Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'];

const dummyData = [
    {
        name: 'Eknoor',
        shifts: [
            { date: '2024-09-27', time: '11:00 PM - 8:00 AM', duration: 8.25 }, // Friday
            { date: '2024-09-29', time: '7:00 AM - 3:00 PM', duration: 7.25 }   // Sunday
        ]
    },
    {
        name: 'Pankaj',
        shifts: [
            { date: '2024-09-27', time: '10:59 PM - 8:00 AM', duration: 8.25 }, // Friday
            { date: '2024-09-29', time: '9:00 AM - 6:00 PM', duration: 8.5 }    // Sunday
        ]
    },
    {
        name: 'Manmeet',
        shifts: [
            { date: '2024-09-28', time: '3:00 PM - 11:30 PM', duration: 7.75 },  // Saturday
            { date: '2024-10-01', time: '3:00 PM - 11:30 PM', duration: 7.75 }
        ]
    }
    // More employees with shift data
];

// Helper function to get the date range for the current week
const getWeekDates = (currentWeek: number) => {
    const today = new Date();
    const firstDayOfWeek = today.getDate() - today.getDay() + 5 + (currentWeek * 7); // Adjust to Friday as the start
    const startOfWeek = new Date(today.setDate(firstDayOfWeek));
    const dates = [];

    for (let i = 0; i < 7; i++) {
        const currentDate = new Date(startOfWeek);
        currentDate.setDate(startOfWeek.getDate() + i);
        dates.push(currentDate);
    }

    return dates;
};

const formatDate = (date: Date) => {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};

const formatDateForComparison = (date: Date) => {
    // Returns date in 'YYYY-MM-DD' format
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

const WeeklyCalendar = () => {
    const [currentWeek, setCurrentWeek] = useState(0);
    const [employees, setEmployees] = useState(dummyData);  // State for employee shifts
    const [modalData, setModalData] = useState<{ name: string, shiftTime: string, employeeIndex: number, shiftDate: string } | null>(null);  // Modal state

    const weekDates = getWeekDates(currentWeek);

    const scrollNextWeek = () => setCurrentWeek(currentWeek + 1);
    const scrollPrevWeek = () => setCurrentWeek(currentWeek - 1);

    // Function to delete a shift
    const deleteShift = () => {
        if (!modalData) return;

        const { employeeIndex, shiftDate } = modalData;

        const updatedEmployees = employees.map((employee, index) => {
            if (index === employeeIndex) {
                const updatedShifts = employee.shifts.filter(shift => shift.date !== shiftDate);
                return { ...employee, shifts: updatedShifts };
            }
            return employee;
        });

        setEmployees(updatedEmployees);
        setModalData(null);  // Close the modal after deletion
    };

    // Function to open the modal
    const openModal = (name: string, shiftTime: string, employeeIndex: number, shiftDate: string) => {
        setModalData({ name, shiftTime, employeeIndex, shiftDate });
    };

    // Function to close the modal
    const closeModal = () => {
        setModalData(null);
    };

    return (
        <div className="calendar-container">
            {/* Header displaying the week range */}
            <div className="calendar-header">
                <button onClick={scrollPrevWeek}>Previous Week</button>
                <h2>
                    Week from {formatDate(weekDates[0])} to {formatDate(weekDates[6])}
                </h2>
                <button onClick={scrollNextWeek}>Next Week</button>
            </div>

            {/* Calendar Grid with weekdays and dates */}
            <div className="calendar-grid">
                <div className="weekday-cell">Shifts</div> {/* Empty cell to shift weekdays */}

                {daysOfWeek.map((day, index) => (
                    <div key={index} className="weekday-cell">
                        {day}
                        <div>{formatDate(weekDates[index])}</div>
                        <MdPendingActions className="pending-icon" />
                    </div>
                ))}

                {/* Render employee names and shifts */}
                {employees.map((employee, rowIndex) => (
                    <React.Fragment key={rowIndex}>
                        <div className="employee-name">{employee.name}</div>
                        {weekDates.map((date, index) => {
                            // Compare each shift date with the current week dates
                            const shift = employee.shifts.find(shift => formatDateForComparison(date) === shift.date);
                            return (
                                <div key={index} className="shift-cell">
                                    {shift ? (
                                        <div className="shift-details">
                                            {shift.time} <br />
                                            {shift.duration} hrs
                                            {/* Delete icon appears on hover */}
                                            <FaTimes
                                                className="delete-icon"
                                                title="Delete Shift"
                                                onClick={() => openModal(employee.name, shift.time, rowIndex, shift.date)}
                                            />
                                        </div>
                                    ) : null}
                                </div>
                            );
                        })}
                    </React.Fragment>
                ))}
            </div>

            {/* Modal for confirming shift deletion */}
            {modalData && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h3>Confirm Delete</h3>
                        <p>
                            Do you want to delete the shift for {modalData.name} at {modalData.shiftTime}?
                        </p>
                        <button className="confirm-btn" onClick={deleteShift}>
                            Yes, Delete
                        </button>
                        <button className="cancel-btn" onClick={closeModal}>Cancel</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default WeeklyCalendar;
