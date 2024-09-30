import React from 'react';
import './index.css';
import Navbar from '../../components/NavBar/index';
import EventCard from '../../components/EventCard/index';
import StaffingCard from '../../components/StaffingCard/index';

const Dashboard: React.FC = () => {
    return (
        <div className="App">
            <Navbar />
            <div className="main-content">
                <div className="left-panel">
                    <EventCard title="Upcoming Events" />
                </div>
                <div className="right-panel">
                    <StaffingCard title="Staffing: September 1, 2024" />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
