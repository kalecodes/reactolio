import React from 'react';

function Resume() {
    const FrontEndSkills = [
        {
            name: 'HTML'
        },
        {
            name: 'CSS'
        },
        {
            name: 'JavaScript'
        },
        {
            name: 'jQuery'
        },
        {
            name: 'Bootstrap'
        },
        {
            name: 'Handlebars'
        },
        {
            name: 'Cookies'
        },
        {
            name: 'LocalStorage'
        },
        {
            name: 'React.js'
        },
        {
            name: 'Git'
        },
        {
            name: 'Heroku'
        }
    ]
    const BackEndSkills = [
        {
            name: 'Node.js'
        }, 
        {
            name: 'Express.js'
        },
        {
            name: 'JSON'
        },
        {
            name: 'AJAX'
        },
        {
            name: 'MySQL'
        },
        {
            name: 'MongoDB'
        },
        {
            name: 'Mongoose'
        },
        {
            name: 'Apollo Server'
        }
    ]
    return (
        <section className="container mb-5">
            <h1 className="row justify-content-center">Resume</h1>
            <span className="d-flex justify-content-center">Download my&nbsp;<a href="link" className=""> Resume</a></span>
           
            <div className="row m-5">
                <div className="col-md-6">
                    <h3 className="">Front End Experience</h3>
                    <ul className="mt-2 mb-5">
                        {FrontEndSkills.map((skill) => (
                            <li key={skill.name}>{skill.name}</li>
                        ))}
                    </ul>
                </div>
                <div className="col-md-6">
                    <h3>Back End Experience</h3>
                    <ul className="mt-2 mb-5">
                        {BackEndSkills.map((skill) => (
                            <li key={skill.name}>{skill.name}</li>
                        ))}
                    </ul>
                </div>  
            </div>           
        </section>
    )
}

export default Resume;