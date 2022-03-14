import UpcomingSessionCard from '../../../components/UpcomingSessionCard/UpcomingSessionCard'
import UpcomingSessionsCardHeaders from "../../../components/UpcomingSessionCard/UpomingSessionsCardHeaders";
import { useSelector } from 'react-redux'
import dayjs from "dayjs";

const StudentUpcomingSessionsPage = () => {
    const sessions = useSelector(state => state.upcomingSessions)

    const renderSessions = () => {
        return sessions.map(session => {
            return (
                <UpcomingSessionCard
                    doctor_name={session.specialist.user.firstname + ' ' + session.specialist.user.lastname}
                    date={dayjs(session.from).format('DD-MM-YYYY')}
                    from={dayjs(session.from).format('hh:mm A')}
                    to={dayjs(session.to).format('hh:mm A')}
                    type={session.type}
                    status={session.status}
                />
            )
        })
    }

    return (
        <div>
            <UpcomingSessionsCardHeaders />
            {renderSessions()}
            {/*<UpcomingSessionCard*/}
            {/*    doctor_name="doctor1"*/}
            {/*    date="06-11-2021"*/}
            {/*    from="01:00"*/}
            {/*    to="02:00"*/}
            {/*    type="face to face meeting"*/}
            {/*    status="accepted"*/}
            {/*/>*/}

            {/*<UpcomingSessionCard*/}
            {/*    doctor_name="doctor2"*/}
            {/*    date="08-11-2021"*/}
            {/*    from="05:00"*/}
            {/*    to="07:00"*/}
            {/*    type="chat"*/}
            {/*    status="pending"*/}
            {/*/>*/}
            {/*<UpcomingSessionCard*/}
            {/*    doctor_name="doctor1"*/}
            {/*    date="06-11-2021"*/}
            {/*    from="01:00"*/}
            {/*    to="02:00"*/}
            {/*    type="face to face meeting"*/}
            {/*    status="accepted"*/}
            {/*/>*/}

            {/*<UpcomingSessionCard*/}
            {/*    doctor_name="doctor2"*/}
            {/*    date="08-11-2021"*/}
            {/*    from="05:00"*/}
            {/*    to="07:00"*/}
            {/*    type="chat"*/}
            {/*    status="pending"*/}
            {/*/>*/}
        </div>
    )
}

export default StudentUpcomingSessionsPage
