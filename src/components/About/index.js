import React from 'react';

function About() {
    return (
        <section className="container mb-5">
            <h1 className="row justify-content-center p-5">About Me</h1>    
            <div className="row align-items-center">
                <img className="col-md-6 col-lg-4 rounded-circle align-self-start p-2" src={require('../../assets/images/headshot.jpg')} alt='Headshot'/>
                <span className="col-md-6 col-lg-8 p-2 mb-5 text-center">
                    Hi, I'm Kalen.  I am a full-stack web development student currently working in accounting. <br/>
                    My favorite topics that I have learned so far have been JavaScript, MongoDB, and React. <br/>
                    Upon graduating, I plan to continue pursuing full-stack development full-time. <br/>
                    <br/>
                    When I am not studying web development, I enjoy spending time outdoors. <br/>
                    Some of my favorite outdoor activities include skiing, running, and spending time at the river. <br/>
                    <br/>
                    I was born in and spent most of my life in the Richmond, Virigina area. <br/>
                    I attended the University of South Carolina, where I studied finance and management. <br/>
                    A large part of my time was spent cheering on sports teams as a member of the cheerleading team. <br/>
                    Some of my most notable memories as a cheerleader include the unique and energetic gameday experience, and following the men's basketball team in the NCAA March Madness tournament. <br/>
                    <br/>
                    After graduating from the university I returned home to Richmond, where I continue to pursue my academic interests. <br/>

                </span>    
            </div>
            
        </section>
    )
}

export default About;