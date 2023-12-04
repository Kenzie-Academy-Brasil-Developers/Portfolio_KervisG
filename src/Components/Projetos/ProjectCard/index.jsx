export const ProjectCard = ({ project }) => {

    return (
        <li>
            <div>
                <h3 className="title3 ">{project.name}</h3>
                <p className="paragraph"> {project.name} </p>
                <a className="link" href="" onClick={() => onclick(project.id)}> Saiba mais </a>
            </div>
<img src={project.img} alt={project.name} />        </li>
    )
}


