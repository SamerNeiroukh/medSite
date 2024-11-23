import React from "react";
import "../styles/ContactForm.css";

function ContactForm() {
  return (
    <div className="contact-page">
      <h1 className="contact-title">צור קשר</h1>
      <p className="contact-description">
        מלאו את הפרטים למטה ונחזור אליכם בהקדם האפשרי.
      </p>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="fullName">שם מלא:</label>
          <input
            type="text"
            id="fullName"
            placeholder="הזן את שמך"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">אימייל:</label>
          <input
            type="email"
            id="email"
            placeholder="הזן את האימייל שלך"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">מספר טלפון:</label>
          <input
            type="tel"
            id="phone"
            placeholder="הזן את הטלפון שלך (לא חובה)"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">הודעה:</label>
          <textarea
            id="message"
            rows="5"
            placeholder="הזן את ההודעה שלך"
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">
          שלח
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
