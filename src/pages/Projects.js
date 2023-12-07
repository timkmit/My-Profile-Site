import Project from '../components/project/Project'

import {projects} from "./../helpers/projectsList"

const Projects = () => {
    return ( 
        <main className="section">
        <div className="container">
            <h2 className="title-1">Projects</h2>
            <h4 className="title-2" style={{textAlign: 'center'}}>Don't have any complited pet-projects now</h4>
            <ul className="projects">
                {projects.map((project, index) => {
                    return (
                        <Project key={index} 
                                title={project.title} 
                                img ={project.img}
                                index={index}
                                />
                        ); 
            })}
                

            </ul>
        </div>
    </main>
     );
}
 
export default Projects;