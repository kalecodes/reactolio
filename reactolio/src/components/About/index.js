import React from 'react';

function About() {
    return (
        <section className="container">
            <h1 className="row justify-content-center p-5">About Me</h1>    
            <div className="row">
                <img className="col-4 rounded-circle p-2" src={require('../../assets/images/headshot.jpg')} alt='Headshot'/>
                <p className="col-8 pt-5 px-5">
                    Example bio paragraph about me
                </p>    
            </div>
            
        </section>
    )
}

export default About;