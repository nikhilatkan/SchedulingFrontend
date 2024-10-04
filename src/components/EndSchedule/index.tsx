import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';  // Import from react-icons
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './index.css';

const employeeOptions = [
    { value: 'Eknoor', label: 'Eknoor' },
    { value: 'Pankaj', label: 'Pankaj' },
    { value: 'Manmeet', label: 'Manmeet' },
    { value: 'Raj', label: 'Raj' },
    { value: 'Simran', label: 'Simran' },
    // Add more employees as needed
];

const EndSchedule = () => {
    const [selectedEmployees, setSelectedEmployees] = useState([]);
    const [scheduleDate, setScheduleDate] = useState(new Date());  // Non-editable date
    const [startTime, setStartTime] = useState('09:00');  // Default start time
    const [endTime, setEndTime] = useState('');
    const [isStartTimeEditable, setIsStartTimeEditable] = useState(false);  // To toggle start time edit

    const handleEmployeeChange = (selected: any) => {
        setSelectedEmployees(selected || []);
    };

    const toggleStartTimeEditable = () => {
        setIsStartTimeEditable(!isStartTimeEditable);
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (!selectedEmployees.length || !endTime) {
            alert('Please fill in all required fields.');
            return;
        }
        // Logic to submit the end schedule
        console.log({
            selectedEmployees,
            scheduleDate,
            startTime,
            endTime
        });
        alert('Schedule ended successfully!');
    };

    return (
        <div className="end-schedule-container">
            <h2 className="page-title">End Employee Schedule</h2>
            <form className="schedule-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Select Employees</label>
                    <Select<{ value: string; label: string; }, true>
                        isMulti={true}
                        options={employeeOptions}
                        value={selectedEmployees}
                        onChange={handleEmployeeChange}
                        className="employee-select"
                        placeholder="Choose employees"
                    />
                </div>

                <div className="form-group">
                    <label>Schedule Date</label>
                    <DatePicker
                        selected={scheduleDate}
                        className="date-picker"
                        readOnly  // Non-editable field
                    />
                </div>

                <div className="form-group start-time-group">
                    <label>Start Time</label>
                    {isStartTimeEditable ? (
                        <input
                            type="time"
                            value={startTime}
                            onChange={(e) => setStartTime(e.target.value)}
                            className="start-time-input"
                        />
                    ) : (
                        <div className="start-time-display">{startTime}</div>
                    )}
                    <FaEdit className="edit-icon" onClick={toggleStartTimeEditable} title="Edit Start Time" />
                </div>

                <div className="form-group">
                    <label>End Time</label>
                    <input
                        type="time"
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                        required
                        className="end-time-input"
                    />
                </div>

                <button type="submit" className="submit-btn">End Schedule</button>
            </form>
        </div>
    );
};

export default EndSchedule;
