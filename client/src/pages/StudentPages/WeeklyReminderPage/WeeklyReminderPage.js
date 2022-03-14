import React from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import Styled from './WeeklyReminderPage.styled'
import { useSelector } from 'react-redux'
import dayjs from "dayjs";

const minuteSeconds = 60
const hourSeconds = 3600
const daySeconds = 86400

const timerProps = {
    isPlaying: true,
    size: 120,
    strokeWidth: 6,
}

const renderTime = (dimension, time) => {
    return (
        <div className="time-wrapper">
            <Styled.Time>{time}</Styled.Time>
            <div>{dimension}</div>
        </div>
    )
}

const getTimeSeconds = time => (minuteSeconds - time) | 0
const getTimeMinutes = time => ((time % hourSeconds) / minuteSeconds) | 0
const getTimeHours = time => ((time % daySeconds) / hourSeconds) | 0
const getTimeDays = time => (time / daySeconds) | 0

export default function WeeklyReminderPage() {
    const reminderStartDate = useSelector(state => state.auth.profile.student.reminder_start_date)
    let reminderDate = dayjs(reminderStartDate)
    const now = dayjs(Date.now())

    // get the next reminder date
    while (reminderDate.isBefore(now)) {
        reminderDate = reminderDate.add(1, 'week')
        console.log({ reminder_is_before_now: reminderDate.isBefore(now), reminderDate: reminderDate.toString(), now: now.toString()})
    }

    const startTime = now.unix() // use UNIX timestamp in seconds
    const endTime = reminderDate.unix() // use UNIX timestamp in seconds

    const remainingTime = endTime - startTime
    const days = Math.ceil(remainingTime / daySeconds)
    const daysDuration = days * daySeconds

    return (
        <Styled.Container>
            <CountdownCircleTimer
                {...timerProps}
                colors={[['#7E2E84']]}
                duration={daysDuration}
                initialRemainingTime={remainingTime}
            >
                {({ elapsedTime }) => renderTime('days', getTimeDays(daysDuration - elapsedTime))}
            </CountdownCircleTimer>
            <CountdownCircleTimer
                {...timerProps}
                colors={[['#D14081']]}
                duration={daySeconds}
                initialRemainingTime={remainingTime % daySeconds}
                onComplete={totalElapsedTime => [remainingTime - totalElapsedTime > hourSeconds]}
            >
                {({ elapsedTime }) => renderTime('hours', getTimeHours(daySeconds - elapsedTime))}
            </CountdownCircleTimer>
            <CountdownCircleTimer
                {...timerProps}
                colors={[['#EF798A']]}
                duration={hourSeconds}
                initialRemainingTime={remainingTime % hourSeconds}
                onComplete={totalElapsedTime => [remainingTime - totalElapsedTime > minuteSeconds]}
            >
                {({ elapsedTime }) =>
                    renderTime('minutes', getTimeMinutes(hourSeconds - elapsedTime))
                }
            </CountdownCircleTimer>
            <CountdownCircleTimer
                {...timerProps}
                colors={[['#218380']]}
                duration={minuteSeconds}
                initialRemainingTime={remainingTime % minuteSeconds}
                onComplete={totalElapsedTime => [remainingTime - totalElapsedTime > 0]}
            >
                {({ elapsedTime }) => renderTime('seconds', getTimeSeconds(elapsedTime))}
            </CountdownCircleTimer>
        </Styled.Container>
    )
}
