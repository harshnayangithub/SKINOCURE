import React from 'react';
import Header from './Header';
import "./login_page.css";

export default function LoginPage() {
  return (
    <>
      <Header />
      <div className="wrapper">
        <h2>APPOINTMENT FORM</h2>
        <form action="" method="post">
          <h4>Account</h4>
          <div className="input_group">
            <div className="input_box">
              <input type="text" placeholder="Full Name" required className="name" />
              <i className="fa fa-user icon"></i>
            </div>
            <div className="input_box">
              <input type="text" placeholder="Name on Card" required className="name" />
              <i className="fa fa-user icon"></i>
            </div>
          </div>
          <div className="input_group">
            <div className="input_box">
              <input type="email" placeholder="Email Address" required className="name" />
              <i className="fa fa-envelope icon"></i>
            </div>
          </div>
          <div className="input_group">
            <div className="input_box">
              <input type="text" placeholder="Address" required className="name" />
              <i className="fa fa-map-marker icon" aria-hidden="true"></i>
            </div>
          </div>
          <div className="input_group">
            <div className="input_box">
              <input type="text" placeholder="City" required className="name" />
              <i className="fa fa-institution icon"></i>
            </div>
          </div>
          <div className="input_group">
            <div className="input_box">
              <h4>Date Of Birth</h4>
              <input type="text" placeholder="DD" required className="dob" />
              <input type="text" placeholder="MM" required className="dob" />
              <input type="text" placeholder="YYYY" required className="dob" />
            </div>
            <div className="input_box">
              <h4>Gender</h4>
              <input type="radio" name="gender" className="radio" id="b1" checked />
              <label htmlFor="b1">Male</label>
              <input type="radio" name="gender" className="radio" id="b2" />
              <label htmlFor="b2">Female</label>
            </div>
          </div>
          <div className="input_group">
            <div className="input_box">
              <h4>Payment Details</h4>
              <input type="radio" name="pay" className="radio" id="bc1" checked />
              <label htmlFor="bc1"><span><i className="fa fa-cc-visa"></i>Credit Card</span></label>
              <input type="radio" name="pay" className="radio" id="bc2" />
              <label htmlFor="bc2"><span><i className="fa fa-cc-paypal"></i>Debit Card</span></label>
            </div>
          </div>
          <div className="input_group">
            <div className="input_box">
              <input type="tel" name="" className="name" placeholder="Card Number 1789-8643-5684-9087" required />
              <i className="fa fa-credit-card icon"></i>
            </div>
          </div>
          <div className="input_group">
            <div className="input_box">
              <input type="tel" name="" className="name" placeholder="Card CVC 348" required />
              <i className="fa fa-user icon"></i>
            </div>
          </div>
          <div className="input_group">
            <div className="input_box">
              <div className="input_box">
                <input type="number" placeholder="Exp Month" required className="name" />
                <i className="fa fa-calendar icon" aria-hidden="true"></i>
              </div>
            </div>
            <div className="input_box">
              <input type="number" placeholder="Exp Year" required className="name" />
              <i className="fa fa-calendar-o icon" aria-hidden="true"></i>
            </div>
          </div>
          <div>
            <i placeholder="Pay $10" />
            <i className="fa fa-money icon" aria-hidden="true" />
          </div>
          <div className="input_group">
            <div className="input_box">
              <button type="submit">PAY NOW</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
