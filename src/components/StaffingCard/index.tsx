import React, { useState } from 'react';
import './index.css';

type Props = {
    title: string
}

// Function to format the date to "Month Day, Year" format
const formatDate = (date: any) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
};

const StaffingCard: React.FC<Props> = ({ title }) => {
    // Initial date setup (September 1, 2024)
    const [date, setDate] = useState(new Date(2024, 8, 1)); // month is 0-indexed, so September is 8
    const [scheduledHours, setScheduledHours] = useState(322.5);
    const [workedHours, setWorkedHours] = useState(141.6);

    // Function to handle changing the date
    const handleDateChange = (direction: string) => {
        let newDate = new Date(date); // Create a copy of the current date

        if (direction === 'left') {
            // Go back by 1 day
            newDate.setDate(date.getDate() - 1);
        } else {
            // Go forward by 1 day
            newDate.setDate(date.getDate() + 1);
        }

        setDate(newDate);

        // Simulating the shift data change (you can replace this with real data fetching)
        if (newDate.getDate() === 31) {
            setScheduledHours(290.0);
            setWorkedHours(130.0);
        } else if (newDate.getDate() === 2) {
            setScheduledHours(340.0);
            setWorkedHours(150.0);
        } else {
            setScheduledHours(322.5);
            setWorkedHours(141.6);
        }
    };

    return (
        <div className="graph-card">
            <div className="graph-header">
                <button className="arrow" onClick={() => handleDateChange('left')}>&lt;</button>
                <h3>{`Staffing: ${formatDate(date)}`}</h3>
                <button className="arrow" onClick={() => handleDateChange('right')}>&gt;</button>
            </div>
            <div className="shift-hours">
                <div className="hours">
                    <h1>{scheduledHours}</h1>
                    <p>Scheduled Hours</p>
                </div>
                <div className="hours">
                    <h1>{workedHours}</h1>
                    <p>Worked Hours</p>
                </div>
            </div>
        </div>
    );
}

export default StaffingCard;

