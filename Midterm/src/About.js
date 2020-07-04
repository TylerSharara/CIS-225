import React from 'react';

function About() {
    return (
        <div className="jumbotron">
            <h1 className="display-4">This is a About Page!</h1>
            <p className="lead">This is a Bootstrap Jumbotron component that has been rendered from a react component!
                So that's kinda cool, yeah?</p>
            <hr className="my-4" />
            <p>This button is very important! Please Click!</p>
            <a className="btn btn-primary btn-lg" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" role="button">Learn more</a>
        </div>
    );
}

export default About;