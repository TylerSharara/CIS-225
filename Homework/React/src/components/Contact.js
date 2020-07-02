import React from 'react';

function Contact() {
    return (
        <div className="contact-home">
            <form>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Email</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1"
                           placeholder="name@example.com" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Comment</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary" id="subbtn" value="Submit">Submit</button>
            </form>
        </div>
    );
}

export default Contact;