import React from 'react';

function HomeJumbo() {
    return (
        <div className="jumbotron">
            <h1 className="display-4">Wewt woot!</h1>
            <p className="lead">This is a Bootstrap Jumbotron component that has been rendered from a react component!
                So that's kinda cool, yeah?</p>
            <hr className="my-4"></hr>
                <p>This button takes you to the documentation that helped me figure this thang out.</p>
                <a className="btn btn-primary btn-lg" href="https://create-react-app.dev/docs/adding-bootstrap/" role="button">Learn more</a>
        </div>
    );
}

export default HomeJumbo;