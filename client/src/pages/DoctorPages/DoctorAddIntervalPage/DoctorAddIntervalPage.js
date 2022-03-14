import { useState } from 'react'
import IntervalPicker from '../../../components/IntervalPicker'
import StyledPage from './DoctorAddIntervalPage.styled'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import dayjs from 'dayjs'

const CustomSwal = withReactContent(Swal)

const DoctorAddIntervalPage = () => {
    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')

    const onConfirm = async res => {
        const formatTemplate = 'DD-MM-YYYY hh:mm a'
        setFrom(dayjs(res[0]).format(formatTemplate))
        setTo(dayjs(res[1]).format(formatTemplate))
    }

    const onClick = async e => {
        e.preventDefault()
        if (from === '' || to === '') {
            CustomSwal.fire({
                icon: 'error',
                title: 'please specify an interval',
            })
        } else {
            const result = await CustomSwal.fire({
                icon: 'question',
                title: 'Are you sure you want to add new interval',
                html: `<p>From: ${from}<br/>To: ${to}</p>`,
            })

            if (result.isConfirmed) {
                CustomSwal.fire({
                    icon: 'success',
                    text: 'Interval added successfully',
                })
            }
        }
    }

    return (
        <StyledPage.Page>
            <StyledPage.Form>
                <p>Add Interval</p>
                <IntervalPicker onConfirm={onConfirm} />
            </StyledPage.Form>
            <StyledPage.FormFooter>
                <StyledPage.Button onClick={onClick}>Confirm</StyledPage.Button>
            </StyledPage.FormFooter>
        </StyledPage.Page>
    )
}

export default DoctorAddIntervalPage
