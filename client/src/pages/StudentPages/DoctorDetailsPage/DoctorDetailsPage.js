import {useEffect, useState} from 'react'
import StyledPage from './DoctorDetails.styled'
import DoctorIntervalCard from '../../../components/DoctorIntervalCard'
import { useHistory, useLocation } from 'react-router-dom'
import qs from 'querystring'
import axios from "axios";
import dayjs from "dayjs";

const DoctorDetailsPage = () => {
    const history = useHistory()
    const location = useLocation()
    const [doctorIntervals, setDoctorIntervals] = useState([])
    const [doctor, setDoctor] = useState(null)

    useEffect(() => {
        async function f() {
            const searchQuery = qs.parse(location.search.replace('?', ''))
            const response = await axios.get(`/student/get-doctor-intervals/${searchQuery.doctorId}`)
            const doctorResponse = await axios.get(`/student/get-doctor-details/${searchQuery.doctorId}`)
            setDoctor(doctorResponse.data.doctor)
            const intervals = response.data.intervals
            setDoctorIntervals(intervals)
        }

        f()
    }, [])

    const renderIntervals = () => {
        return doctorIntervals.map(interval => {
            const from = dayjs(interval.from)
            const to = dayjs(interval.to)
            return (
                <DoctorIntervalCard
                    date={from.format('DD-MM-YYYY')}
                    day={from.format('ddd')}
                    from={from.format('HH:mm A')}
                    to={to.format('HH:mm A')}
                    onClick={() => history.push('/session-booking')}
                />
            )
        })
    }

    return (
        <StyledPage.Page>
            <StyledPage.DetailsSection>
                <StyledPage.Name>
                    <p>{doctor? doctor?.user?.firstname + ' ' + doctor?.user?.lastname : "doctor's name"}</p>
                </StyledPage.Name>
                <StyledPage.Type>{doctor?.type}</StyledPage.Type>
                <StyledPage.IntervalsContainer>
                    {renderIntervals()}
                    {/*<DoctorIntervalCard date="07-11-2021" day="Sun" from="05:00" to="06:00" />*/}
                    {/*<DoctorIntervalCard date="07-11-2021" day="Sun" from="05:00" to="06:00" />*/}
                    {/*<DoctorIntervalCard date="07-11-2021" day="Sun" from="05:00" to="06:00" />*/}
                </StyledPage.IntervalsContainer>
            </StyledPage.DetailsSection>
        </StyledPage.Page>
    )
}

export default DoctorDetailsPage
