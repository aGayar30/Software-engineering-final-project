import { useState } from 'react'
import { RangePicker } from 'react-minimal-datetime-range'
import 'react-minimal-datetime-range/lib/react-minimal-datetime-range.min.css'

const IntervalPicker = ({ onConfirm }) => {
    const now = new Date()
    const [hour, setHour] = useState('00')
    const [minute, setMinute] = useState('00')
    const [month, setMonth] = useState(String(now.getMonth() + 1).padStart(2, '0'))
    const [day, setDay] = useState(String(now.getDate()).padStart(2, '0'))
    const [year, setYear] = useState(String(now.getFullYear()))



    return (
        <div>
            <RangePicker
                locale="en-us" // default is en-us
                show={false} // default is false
                disabled={false} // default is false
                allowPageClickToClose={true} // default is true
                onConfirm={onConfirm}
                onClose={() => console.log('onClose')}
                onClear={() => console.log('onClear')}
                style={{ width: '350px' }}
                placeholder={['Start Time', 'End Time']}
                showOnlyTime={false} // default is false, only select time
                ////////////////////
                // IMPORTANT DESC //
                ////////////////////
                defaultDates={[year + '-' + month + '-' + day, year + '-' + month + '-' + day]}
                // ['YYYY-MM-DD', 'YYYY-MM-DD']
                // This is the value you chosen every time.
                defaultTimes={[hour + ':' + minute, hour + ':' + minute]}
                // ['hh:mm', 'hh:mm']
                // This is the value you chosen every time.
                initialDates={[year + '-' + month + '-' + day, year + '-' + month + '-' + day]}
                // ['YYYY-MM-DD', 'YYYY-MM-DD']
                // This is the initial dates.
                // If provided, input will be reset to this value when the clear icon hits,
                // otherwise input will be display placeholder
                initialTimes={[hour + ':' + minute, hour + ':' + minute]}
                // ['hh:mm', 'hh:mm']
                // This is the initial times.
                // If provided, input will be reset to this value when the clear icon hits,
                // otherwise input will be display placeholder
            />
        </div>
    )
}

export default IntervalPicker
