import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import Navbar from '../../components/NavBar';

const Departments: React.FC = () => {
    const departmentsList = [
        'Kitchen am',
        'Kitchen pm',
        'Float am',
        'Float pm',
        'Plating/blast am',
        'Plating/blast pm',
        'Casing am',
        'Casing pm',
        'Sanitation morning',
        'Sanitation afternoon',
        'Sanitation night',
        'Warehouse',
        'Labelling'
    ];

    const navigate = useNavigate();

    const handleCardClick = (department: string) => {
        navigate(`/departments/${department}`);
    };

    return (
        <div className="departments-page">
            <Navbar />
            <div className="departments-header">
                <h2>Select the department before processing</h2>
            </div>

            <div className="departments-container">
                {departmentsList.map((department, index) => (
                    <div
                        key={index}
                        className="department-card"
                        onClick={() => handleCardClick(department)}
                    >
                        {department}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Departments;
