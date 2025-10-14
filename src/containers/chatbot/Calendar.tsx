import React from 'react'
import styled from 'styled-components'
import calendarIMG from "../../img/calendar.png";

function pad(n) {
	return n < 10 ? `0${n}` : `${n}`
}

const CalendarContainer = styled.div`
    margin: 0 auto;
    padding: 16px;
    background: #fff;
    border-radius: 16px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export default function MonthlyActivityCalendar() {


	return (
		<CalendarContainer>
			<img src={calendarIMG} alt="calendar"/>
		</CalendarContainer>
	)
}
