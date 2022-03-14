import {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NewSessionDoctorCard from '../../../components/NewSessionDoctorCard/NewSessionDoctorCard'
import NewSessionCardHeaders from '../../../components/NewSessionDoctorCard/NewSessionCardHeaders'
import DoctorsFilter from './DoctorsFilter'
import dayjs from 'dayjs'
import IsoWeek from 'dayjs/plugin/isoWeek'
import Styled from './StudentBookSessionsPage.styled'
import { FetchDoctors } from '../../../redux/DoctorsSlice/DoctorsSlice'

dayjs.extend(IsoWeek)

const StudentBookSessionsPage = () => {
    const dispatch = useDispatch()
    const doctors = useSelector(state => state.doctors)
    const [selectedOption, setSelectionOption] = useState(null);

    useEffect(() => {
        dispatch(FetchDoctors())
    }, [])

    const renderDoctorsIntervals = () => {
        return doctors.map(doctor => {
            const availableDays = doctor.availableIntervals.map(interval => {
                const date = dayjs(interval.from)
                return date.format('ddd')
            })
            const resultDays = availableDays.join('/')
            console.log({option: selectedOption, doctor: doctor.type, flag: selectedOption === doctor.type})
            if (selectedOption === null || selectedOption.value === doctor.type) {
                return (
                    <NewSessionDoctorCard
                        key={doctor.user_id}
                        user_id={doctor.user_id}
                        name={doctor.user.firstname + ' ' + doctor.user.lastname}
                        type={doctor.type}
                        available_days={resultDays}
                    />
                )
            }
        })
    }

    return (
        <Styled.Page>
            <DoctorsFilter selectedOption={selectedOption} setSelectionOption={setSelectionOption} />
            <NewSessionCardHeaders />
            <Styled.SessionsContainer>
                {renderDoctorsIntervals()}
            </Styled.SessionsContainer>
        </Styled.Page>
    )
}

export default StudentBookSessionsPage
