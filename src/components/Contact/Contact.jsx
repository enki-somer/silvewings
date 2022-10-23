import React from 'react'
import "../Contact/contact.css"

const Contact = () => {
    return (
        <div id="contact">

            <h1>Our experienced team will help you plan your event</h1>
            <form action="">
                <input type="text" className='name' placeholder='Name' />
                <input type="text" className='surname' placeholder='Surname' />
                <input type="email" className='email' placeholder='Email' />
                <input type="text" className='company' placeholder='Company' />
                <input type="text" className='phone' placeholder='Phone' />
                <input type="text" className='object' placeholder='Object' />
            </form>
            <textarea name="" id="message" rows="5" placeholder='Message'></textarea>
            <button className='btn'>Submit</button>

        </div>
    )
}

export default Contact