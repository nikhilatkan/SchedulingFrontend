import React, { useState } from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './index.css';
import { MultiValue, ActionMeta } from 'react-select';

const employeeOptions = [
    { value: 'Eknoor', label: 'Eknoor' },
    { value: 'Pankaj', label: 'Pankaj' },
    { value: 'Manmeet', label: 'Manmeet' },
    { value: 'Raj', label: 'Raj' }
    // Add more employees as needed
];

// Add a custom "Select All" option
const selectAllOption = { value: '*', label: 'Select All Employees' };

const AddSchedule = () => {
    const [selectedEmployees, setSelectedEmployees] = useState<{ value: string; label: string; }[]>([]);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');


    const handleEmployeeChange = (newValue: MultiValue<{ value: string; label: string; }>, actionMeta: ActionMeta<{ value: string; label: string; }>) => {
        const selected = newValue as { value: string; label: string; }[];
        if (selected && selected.some(option => option.value === '*')) {
            setSelectedEmployees(employeeOptions); // Select all employees
        } else {
            setSelectedEmployees(selected || []); // Handle regular selection
        }
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (!selectedEmployees.length || !selectedDate || !startTime) {
            alert('Please fill in all required fields.');
            return;
        }
        // Logic to submit the schedule
        console.log({
            selectedEmployees,
            selectedDate,
            startTime,
            endTime
        });
        alert('Schedule added successfully!');
    };

    return (
        <div className="add-schedule-container">
            <h2 className="page-title">Add Employee Schedule</h2>
            <form className="schedule-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Select Employees</label>
                    <Select
                        isMulti
                        options={[selectAllOption, ...employeeOptions]}
                        value={selectedEmployees}
                        onChange={handleEmployeeChange}
                        className="employee-select"
                        placeholder="Choose employees"
                        isSearchable
                    />
                </div>

                <div className="form-group">
                    <label>Select Date</label>
                    <DatePicker
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        dateFormat="dd/MM/yyyy"
                        className="date-picker"
                        placeholderText="Choose date"
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Start Time</label>
                    <input
                        type="time"
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>End Time (optional)</label>
                    <input
                        type="time"
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                    />
                </div>

                <button type="submit" className="submit-btn">Add Schedule</button>
            </form>
        </div>
    );
};

export default AddSchedule;
