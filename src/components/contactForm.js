import React from "react";

function ContactForm({ firstName, lastName, email, message  }) {
    return <div className="form-container">
        <form action=""> 
        <label for="fname">{firstName}</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name"/>
        <label for="lname">{lastName}</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
        <label for="email">{email}</label>
        <input type="text" id="email" name="email" placeholder="Email.."/>
        <label for="subject">{message}</label>
        <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
        <input type="submit" value="Submit"/>
        </form>
    </div>
}

export default ContactForm;