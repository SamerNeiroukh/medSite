import React from "react";
import "../styles/Register.css";

function Registration() {
  return (
    <div className="registration-page">
      <h1 className="registration-title">הרשמה</h1>
      <p className="registration-description">
        מלאו את הפרטים הבאים כדי להירשם לקורסים שלנו. ניצור איתכם קשר בהקדם!
      </p>
      <form className="registration-form">
        <div className="form-group">
          <label htmlFor="fullName">שם מלא:</label>
          <input type="text" id="fullName" placeholder="הזן את שמך" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">אימייל:</label>
          <input type="email" id="email" placeholder="הזן את האימייל שלך" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">מספר טלפון:</label>
          <input type="tel" id="phone" placeholder="הזן את הטלפון שלך" />
        </div>
        <div className="form-group">
          <label htmlFor="course">בחר קורס:</label>
          <select id="course" required>
            <option value="">בחר קורס</option>
            <option value="basic">קורס עזרה ראשונה בסיסי</option>
            <option value="advanced">קורס עזרה ראשונה מתקדמת</option>
            <option value="cpr">קורס החייאה ודפיברילטור</option>
            <option value="business">קורס חירום לעסקים</option>
          </select>
        </div>
        <button type="submit" className="submit-button">שלח</button>
      </form>
    </div>
  );
}

export default Registration;