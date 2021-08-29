import React, { useState } from 'react';
// import {useRouter} from 'next/router';
import { buildFeedbackPath, extractFeedback } from '../api/feedback';

const FeedbackPage = (props) => {
    const [feedbackData, setfeedbackData] = useState();

    // const router = useRouter();
    const loadfeedbackHandler = (id) => {
        fetch(`/api/${id}`)
            .then(response => response.json())
            .then(data => {
                setfeedbackData(data.feedback)
                console.log(data);
            })
    }
    return (
        <div>
            {feedbackData && <p>{feedbackData.email}</p>}
            <ul>
                {props.feedbackItems.map(item => (
                    <li key={item.id}>
                        {item.text}
                        <button onClick={() => loadfeedbackHandler(item.id)}>Show Details</button></li>
                ))}
            </ul>
        </div>
    )
}


export async function getStaticProps() {
    const filepath = buildFeedbackPath();
    const data = extractFeedback(filepath);

    return {
        props: {
            feedbackItems: data
        }
    }
}

export default FeedbackPage
