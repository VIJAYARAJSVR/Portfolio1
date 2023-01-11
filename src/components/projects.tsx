import logo from '../images/logo.svg';
import {Link} from "react-router-dom";

interface Project {
    id: number;
    name: String;
    description: String;
    technology: String;
    roles: String;
    responsibilities: String;
    location: String;
    duration: String;
    website: string;
}

// class project {
//     id: number;
//     name: String;
//     description: String;
//     technology: String;
//     roles: String;
//     responsibilities: String;
//     location: String;
//     duration: String;
//     website: string;
//
//     constructor(id: number, name: string, description: string, technology: string, roles: string, responsibilities: string, location: string, duration: string, website: string) {
//         this.id = id;
//         this.name = name;
//         this.description = description;
//         this.technology = technology;
//         this.roles = roles;
//         this.responsibilities = responsibilities;
//         this.location = location;
//         this.duration = duration;
//         this.website = website;
//     }
// }

// @ts-ignore
const Projects = ({projectList}) => {
    return (
        <div className="App-header">
            <div className="container-sm container-md container-lg container-xl container-xxl">
                {/*<div className="row row-cols-4 ">*/}
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        projectList.map((project: Project) => {
                            return (
                                <div className="col">
                                    {/*<div className="card h-200 mt-2 mb-2"  style={{marginRight: "40px"}}>*/}
                                    <div className="card h-200 mb-5 mt-2">
                                        <div className="card-body">
                                            <img className="card-img-top" src={logo} alt="logo"/>
                                            <h5 className="card-title"
                                                style={{
                                                    color: "black",
                                                    fontWeight: "bold"
                                                }}>{project.name.toUpperCase()}</h5>
                                        </div>
                                        <div className="card-footer">
                                            {/*<Link to={{ pathname: "https://google.com/" }} target="_blank">  See Full Details</Link>*/}
                                            {/*<a href={project.website} className="btn btn-primary" target="_blank">See*/}
                                            {/*    Full Details</a>*/}
                                            <Link to={"/Portfolio/ProjectDetail/" + project.id}
                                                  className="btn btn-primary"
                                            >See Full Details </Link>
                                        </div>
                                    </div>
                                </div>
                            )

                        })
                    }

                </div>
            </div>
        </div>
    )
}


export default Projects
