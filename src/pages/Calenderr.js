import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'

function Calenderr() {
    const [dateState, setDateState] = useState(new Date())
    const changeDate = (e) => {
        setDateState(e)
    }
    return (
        <>
        <div className="rightside_container">
            <Calendar
                value={dateState}
                onChange={changeDate}
            />
            <p>Current selected date is <b>{moment(dateState).format('MMMM Do YYYY')}</b></p>
            </div>
        </>
    )
}
export default Calenderr;

