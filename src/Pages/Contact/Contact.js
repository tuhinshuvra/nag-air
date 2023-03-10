import React from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className="contact_bg col-lg-12 px-4 py-5 ">
            <div className="row align-items-center g-lg-5 py-lg-5 col-lg-10 mx-auto p-sm-0">

                <div className="col-lg-6 mx-auto animate_right">
                    <h1 className="text-3xl font-bold mb-2  animate_bottom location_heading text-center">Get in Touch!</h1>
                    <form
                        className='d-flex flex-column'
                        action="https://formspree.io/f/mbjelnwv"
                        method="POST">

                        <input type="text"

                            className=' mb-2 form-control'
                            name="username"
                            autoComplete="off"
                            placeholder='Name'
                            required
                        />

                        <input type="text"
                            className=' mb-2 form-control'
                            name="phone"
                            autoComplete="off"
                            placeholder='Phone No'
                            required
                        />

                        <input type="email"
                            className=' mb-2 form-control'
                            name="email"
                            autoComplete="off"
                            placeholder='Email Address'

                        />
                        <textarea
                            className=' mb-2 form-control'
                            name='message'
                            cols="30"
                            rows="3"
                            autoComplete="off"
                            placeholder='Message'
                            required
                        ></textarea>
                        <input className='custom_btn my-lg-2 ' type="submit" value="Send Message" />
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Contact;