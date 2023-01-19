import projectList from '../data/project_details.json'

import {NavLink, useParams} from 'react-router-dom'
import {useLocation} from 'react-router-dom'
import RecentProjects from "./recentprojects";
import {useLayoutEffect, useState} from "react";
import SkillBarChart from "./skillbarchart";


interface Project {
    id: number;
    name: String;
    full_name: String;
    description: String;
    technology: String;
    roles: String;
    responsibilities: String;
    location: String;
    duration: String;
    website: string;
    thumbnail: string;
}


const ProjectDetails = () => {
    // const {state} = useLocation();
    const {projectId} = useParams();
    const ExactProjectId = Number(projectId);

    const [project, setProjectDetail] = useState(getProjectDetail(ExactProjectId));

    useLayoutEffect(() => {
        // @ts-ignore
        return setProjectDetail(getProjectDetail(ExactProjectId));
    }, []);


    return (

        <div className="container-sm container-md container-lg container-xl container-xxl">


            <ProjectHeading projName={project.full_name} proj_thumbnail={project.thumbnail}/>

            <h1 className="mt-2 w-auto" style={{color: 'white'}}>This page is under development</h1>

            <div className="App-header">
                <Websites websites={project.website}/>
                <Location locations={project.locations}/>
                <Technology technologies={project.technology}/>
                <Description desc={project.description}/>
                <Role roles={project.roles}/>
                <Responsibility responsibilities={project.responsibilities}/>
            </div>
        </div>
    )
}

// @ts-ignore
const ProjectHeading = ({projName, proj_thumbnail}) => {
    return (
        <div className="row row-cols-3 mb-5 mt-5">
            <div className="w-25"/>

            <div className="row row-cols-2 mb-5 w-75">

                <img style={{width: '100px', height: '70px', marginLeft: '30px'}}
                     src={require(`./images/project_thumbnail/${proj_thumbnail}.png`)}
                     alt={proj_thumbnail}/>
                <h2 className="mt-2 w-auto" style={{color: 'white'}}>{projName.toUpperCase()}</h2>
            </div>
        </div>
    )
}

// @ts-ignore
const Websites = ({websites}) => {
    return (
        <div className="row row-cols-3 mb-3 mt-2">
            <p> {websites}</p>
        </div>
    )
}
// @ts-ignore
const Location = ({locations}) => {
    return (
        <div className="row row-cols-3 mb-3 mt-2">
            <p> {locations}</p>
        </div>
    )
}
// @ts-ignore
const Technology = ({technologies}) => {
    return (
        <div className="row row-cols-3 mb-3 mt-2">
            <p> {technologies}</p>
        </div>
    )
}

// @ts-ignore
const Description = ({desc}) => {
    return (
        <div className="row row-cols-1 mb-3 mt-2 float-start">
            <p> {desc}</p>
        </div>
    )
}
// @ts-ignore
const Role = ({roles}) => {
    return (
        <ul>
            <li>{roles}</li>
        </ul>
    )
}
// @ts-ignore
const Responsibility = ({responsibilities}) => {
    return (
        <ul>
            <li>{responsibilities}</li>
        </ul>
    )
}


function getProjectDetail(projectId: number) {
    const projDetails = projectList.filter(function (proj) {
        return proj.id === projectId;
    });
    // if (projDetails.length === 0)
    // {
    //     return null;
    // }
    return projDetails[0];
}


export default ProjectDetails
