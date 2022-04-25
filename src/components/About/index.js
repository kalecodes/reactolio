import React from 'react';

function About() {
    return (
        <section className="container mb-5">
            <h1 className="row justify-content-center p-5">About Me</h1>    
            <div className="row">
                <img className="col-md-4 rounded-circle p-2" src={require('../../assets/images/headshot.jpg')} alt='Headshot'/>
                <p className="col-md-8 p-2 mb-5 text-center">
                    Example bio paragraph about me
                </p>    
            </div>
            
        </section>
    )
}

export default About;