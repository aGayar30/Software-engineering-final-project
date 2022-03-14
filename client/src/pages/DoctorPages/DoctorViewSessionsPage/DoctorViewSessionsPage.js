import UpcomingSessionCard from "../../../components/UpcomingSessionCard";

const DoctorViewSessionsPage = () => {
    return(
        <div>
            <div>
                <UpcomingSessionCard
                    doctor_name="doctor1"
                    date="06-11-2021"
                    from="01:00"
                    to="02:00"
                    type="face to face meeting"
                    status="accepted"
                />

                <UpcomingSessionCard
                    doctor_name="doctor2"
                    date="08-11-2021"
                    from="05:00"
                    to="07:00"
                    type="chat"
                    status="pending"
                />
                <UpcomingSessionCard
                    doctor_name="doctor1"
                    date="06-11-2021"
                    from="01:00"
                    to="02:00"
                    type="face to face meeting"
                    status="accepted"
                />

                <UpcomingSessionCard
                    doctor_name="doctor2"
                    date="08-11-2021"
                    from="05:00"
                    to="07:00"
                    type="chat"
                    status="pending"
                />
            </div>
        </div>
    )
}

export default DoctorViewSessionsPage
