import React from 'react';

function About() {
    return (
        <section>
            <h2>About Me</h2>
            <img className="img-fluid" src={require('../../assets/images/headshot.jpg')} alt='Headshot'/>
            <p>
                Example bio paragraph about me
            </p>
        </section>
    )
}

export default About;