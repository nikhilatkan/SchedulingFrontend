import React from 'react';
import './index.css';

type Props = {
    title: string
}

const EventCard: React.FC<Props> = ({ title }) => {
    return (
        <div className="event-card">
            <h3>{title}</h3>
            <div className="filter-dropdown">
                <select>
                    <option>Filter</option>
                </select>
            </div>
            <div className="no-events">
                <p>No upcoming events</p>
                <p>Here you'll find various events that are taking place in the upcoming 28 days</p>
            </div>
        </div>
    );
}

export default EventCard;
