import React from 'react';

function Project(props) {
    const {
        projects = []
    } = props;

    return (
        <div className="container">
            {projects.map((project) => (
                <div className="row mt-5" key={project.name}>
                    <img src={require(`../../assets/images/${project.image}`)} className="col-9 img-thumbnail img-fluid" alt={project.name + ` ` + project.description}/>
                    <div className="col-3">
                        <h3 key={project.name}>{project.name}</h3>
                        <p>{project.description}</p>    
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Project;