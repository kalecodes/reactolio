import React from 'react';

function Project(props) {
    const {
        projects = []
    } = props;

    return (
        <div className="container">
            {projects.map((project) => (
                <div className="row my-5 pb-5 justify-content-center" key={project.name}>
                    <img src={require(`../../assets/images/${project.image}`)} className="col-xs-12 col-lg-9 img-thumbnail img-fluid" alt={project.name + ` ` + project.description}/>
                    <div className="col-lg-3">
                        <h3 className="" key={project.name}>{project.name}</h3>
                        <p>{project.description}</p>    
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Project;