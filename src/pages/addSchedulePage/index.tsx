import React from 'react'
import './index.css'
import AddSchedule from '../../components/AddSchedule'
import Navbar from '../../components/NavBar'

const AddSchedulePage: React.FC = () => {
    return (
        <div>
            <Navbar />
            <AddSchedule />
        </div>
    )
}

export default AddSchedulePage
