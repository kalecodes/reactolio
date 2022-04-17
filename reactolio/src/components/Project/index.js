import React from 'react';

function Project(props) {
    const {
        projects = []
    } = props;

    return (
        <div>
            {projects.map((project) => (
                <div>
                    <img alt=''/>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                </div>
            ))}
        </div>
    )
}

export default Project;