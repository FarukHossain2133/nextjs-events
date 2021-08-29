import { useRef, useContext } from 'react';
import classes from './newsletter-registration.module.css';
import NotifiationContext from '../../store/notification-context';

function NewsletterRegistration() {
  const emailRef = useRef();

  const notificationCtx = useContext(NotifiationContext);

  function registrationHandler(event) {
    event.preventDefault();

    const enteredEmail = emailRef.current.value;

    notificationCtx.showNotification({
      title: "Singing up...",
      message: "Registerring for newsletter",
      status: "pending"
    });

    fetch('/api/newsletter', {
      method: "POST",
      body: JSON.stringify({ email: enteredEmail }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if(res.ok){
          return res.json()
        }
        return res.json().then(data=> {
          throw new Error(data.message || "Somethig went wrong")
        })
      })
      .then(data => {
        notificationCtx.showNotification({
          title: "Success!",
          message: "Successfully registered for newsletter",
          status: "success"
        });
        
      }).catch(error => {
        notificationCtx.showNotification({
          title: "Error!",
          message: "Failed registering for newsletter",
          status: "error"
        });
      })
  
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type='email'
            id='email'
            placeholder='Your email'
            aria-label='Your email'
            ref={emailRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;