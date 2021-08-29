import { useRef } from 'react';

export default function Home(props) {

  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const email = emailInputRef.current.value;
    const feedback = feedbackInputRef.current.value;

    const reqBody = { email, text: feedback }

    fetch('/api/feedback', {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(data => console.log(data))

  }

  return (
    <div>
      <h1>Home page</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="email">Your email address</label>
          <input type='email' id="email" ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor="feebback">Your feebback address</label>
          <textarea id="feedback" rows="5" ref={feedbackInputRef}></textarea>
        </div>
        <div>
          <button type="submit">Send feeDback</button>
        </div>
      </form>
    </div>
  )
}

