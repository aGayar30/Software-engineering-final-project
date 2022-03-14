import FeedbackCard from '../../../components/FeedbackCard'
import Styled from './NewFeedback.styled'
import axios from 'axios'
import { useEffect, useState } from 'react'

const NewFeedbackPage = () => {
    const [feedbacks, setFeedbacks] = useState([])

    useEffect(() => {
        async function f() {
            const response = await axios.get(`/student/new-feedbacks`)
            // console.log(response.data?.feedbacks)
            setFeedbacks(response.data.feedbacks)
        }

        f()
    }, [])

    return (
        <div>
            {feedbacks.map(feedback => (
                <Styled.FeedbacksContainer>
                    <h1>{feedback.content}</h1>
                </Styled.FeedbacksContainer>
            ))}
        </div>

    )
}

export default NewFeedbackPage
