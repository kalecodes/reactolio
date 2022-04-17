import React from 'react';

function Project(props) {
    const {
        projects = []
    } = props;

    return (
        <div>
            {projects.map((project) => (
                <div key={project.name}>
                    <img alt=''/>
                    <h3 key={project.name}>{project.name}</h3>
                    <p>{project.description}</p>
                </div>
            ))}
        </div>
    )
}

export default Project;