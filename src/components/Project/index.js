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
                        <div className="row">
                            <a href={project.rlink} target="_blank" rel="noopener noreferrer" className="col-6">
                                <img className="img-fluid icon" src={require('../../assets/images/github.png')} alt='github icon - link to github repository'/>
                            </a>
                            <a href={project.dlink} target="_blank" rel="noopener noreferrer" className="col-6">
                                <img className="img-fluid icon" src={require('../../assets/images/menu.png')} alt='nav stack icon - link to deployed app' />
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Project;