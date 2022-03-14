import {useState} from 'react'
import Styled from './BookSessionPage.styled'
import dayjs from 'dayjs'
import Select from "react-select";
import IntervalPicker from '../../../components/IntervalPicker'
import ConfirmationSweetAlert from "../../../utils/ConfirmationSweetAlert";
import { useHistory, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { FetchUpcomingSessions } from "../../../redux/UpcomingSessionsSlice/UpcomingSessionsSlice";
import axios from "axios";
import qs from 'querystring'

const options = [
    {value: 'online-meeting', label: 'Online meeting'},
    {value: 'face-to-face', label: 'Face to face'},
    {value: 'chat', label: 'Chat'}
]

const BookSessionPage = () => {
    const history = useHistory()
    const location = useLocation()
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    const [meetingOption, setMeetingOption] = useState({value: 'online-meeting', label: 'Online meeting'})
    const searchQuery = qs.parse(location.search.replace('?', ''))

    const onConfirm = async (res) => {
        const formatTemplate = 'DD-MM-YYYY hh:mm a'
        const from = dayjs(res[0])
        const to = dayjs(res[1])
        await ConfirmationSweetAlert({
            title: `Add interval from ${from.format(formatTemplate)} to ${to.format(formatTemplate)}`,
            onConfirm: async () => {
                const response = await axios.post('/student/create-session', {
                    from: from.toISOString(),
                    to: to.toISOString(),
                    type: meetingOption.value,
                    specialistId: searchQuery.doctorId,
                    studentId: auth.profile.id
                })
                console.log({ response: response.data })
                dispatch(FetchUpcomingSessions(auth.profile.id))
                history.push('/upcoming')
            },
        })
    }

    return (
        <Styled.Page>
            <p>Add Interval</p>
            <Select
                defaultValue={{ value: 'online-meeting', label: 'Online meeting'}}
                onChange={setMeetingOption}
                options={options}
                placeholder="Meeting type..."
                isClearable={true}
            />
            <IntervalPicker onConfirm={onConfirm}/>

        </Styled.Page>
    )
}

export default BookSessionPage
