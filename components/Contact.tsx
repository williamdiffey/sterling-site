import styles from '../Styles/contact.module.scss'
import { Slide } from 'react-awesome-reveal'

export default function ContactForm() {
  return (
    <div className={styles.formContainer}>
      <div className={styles.titleContainer}>
        <Slide direction='left' delay={500} triggerOnce>
          <h1>
            Contact<span>:</span>
          </h1>
        </Slide>
      </div>
      <form
        name='contact'
        action='/success'
        method='POST'
        data-netlify='true'
        className={styles.form}
      >
        <input type='hidden' name='form-name' value='contact' />
        <p>
          <input
            type='text'
            name='name'
            id='yourname'
            placeholder='Your Name'
          />
        </p>
        <p>
          <input
            type='email'
            name='email'
            id='youremail'
            placeholder='Your Email'
          />
        </p>
        <p>
          <textarea
            name='message'
            id='yourmessage'
            placeholder='Your Message'
          ></textarea>
        </p>
        <p>
          <button id={styles.contactButton} type='submit'>
            Send
          </button>
        </p>
      </form>
    </div>
  )
}
