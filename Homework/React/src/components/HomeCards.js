import React from 'react';

function HomeCards() {
    return (
        <div className="HomeCards">
            <div className="card">
                <img src="https://miro.medium.com/max/1024/1*9HanDsRU11ZMsgDGJwN96w.png" className="card-img-top" alt="bootstrap logo"></img>
                    <div className="card-body">
                        <h5 className="card-title">Bootstrap</h5>
                        <p className="card-text">A link to some bootstrap documentation for your benefit.</p>
                        <a href="https://getbootstrap.com/docs/4.5/getting-started/introduction/" className="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
            <div className="card">
                <img src="https://miro.medium.com/max/500/1*cPh7ujRIfcHAy4kW2ADGOw.png" className="card-img-top" alt="Reactjs logo"></img>
                <div className="card-body">
                    <h5 className="card-title">React</h5>
                    <p className="card-text">A link to some Reactjs documentation for your benefit..</p>
                    <a href="https://reactjs.org/docs/getting-started.html" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            <div className="card">
                <img src="https://cdn.worldvectorlogo.com/logos/npm-2.svg" className="card-img-top" id="npmlogo" alt="npm logo"></img>
                <div className="card-body">
                    <h5 className="card-title">NPM</h5>
                    <p className="card-text">A link to some npm documentation for your benefit.</p>
                    <a href="https://docs.npmjs.com/" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );
}

export default HomeCards;