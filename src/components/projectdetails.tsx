import projectList from '../data/project_details.json'

import {useParams} from 'react-router-dom'

import {useLayoutEffect, useState} from "react";

const ProjectDetails = () => {
    // const {state} = useLocation();
    const {projectId} = useParams();
    const ExactProjectId = Number(projectId);

    const [project, setProjectDetail] = useState(getProjectDetail(ExactProjectId));

    useLayoutEffect(() => {
        // @ts-ignore
        return setProjectDetail(getProjectDetail(ExactProjectId));
    }, [ExactProjectId]);


    return (
        <div className="App-header">
            <div className=" container-sm container-md container-lg container-xl container-xxl">

                <ProjectHeading projName={project.full_name} proj_thumbnail={project.thumbnail}/>

                <Location locations={project.locations}/>
                <div className="card w-100 project_Value mb-5 project_Card">
                    <Websites websites={project.website}/>
                    <IosApp iosapp={project.ios_app}/>
                    <AndroidApp androidapp={project.android_app}/>
                </div>


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
        <div className="row row-cols-3 mb-1">
            <div className="w-25"/>

            <div className="row row-cols-2 mb-5 w-50 justify-content-center">

                <img style={{width: '100px', height: '70px', marginLeft: '30px'}}
                     src={require(`./images/project_thumbnail/${proj_thumbnail}.png`)}
                     alt={proj_thumbnail}/>
                <h2 className="mt-2 w-auto" style={{color: 'white'}}>{projName.toUpperCase()}</h2>
            </div>

            <div className="w-25"/>
        </div>
    )
}

// @ts-ignore
const Websites = ({websites}) => {
    if (websites.length === 0) {
        return null
    }
    return (
        <div className="row row-cols-2 mb-2 mt-2 project_Row">
            <div className="w-25">
                <div className="w-25 text-start project_Field1">dumm</div>
                <p className="w-75 text-start project_Field">Website</p>
            </div>
            <div>
                <ul>
                    {
                        // @ts-ignore
                        websites.map((website, index) => {
                            return (<li className="w-100 mb-2 text-start project_Link"><a className="project_Link"
                                                                                          href={"https://" + website}
                                                                                          key={index} target="_blank"
                                                                                          rel="noreferrer"> {website}</a>
                            </li>)
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

// @ts-ignore
const IosApp = ({iosapp}) => {
    if (iosapp.length === 0) {
        return null
    }

    return (


        <div className="row row-cols-2 mb-2 mt-2 project_Row">
            <div className="w-25">
                <div className="w-25 text-start project_Field1">dumm</div>

                {/*<FaAppStore style={{color: 'lightblue'}} className="w-25 text-start project_Field1 h-50"/>*/}

                <p className="w-75 text-start project_Field">iOS app</p>


            </div>

            <div>
                <ol>
                    {
                        // @ts-ignore
                        iosapp.map((app, index) => {
                            return (<li className="w-100 mb-2 text-start project_Link"><a className="project_Link"
                                                                                          href={"https://" + app}
                                                                                          key={index} target="_blank"
                                                                                          rel="noreferrer"> {app}</a>
                            </li>)
                        })
                    }
                </ol>
            </div>
        </div>
    )
}

// @ts-ignore
const AndroidApp = ({androidapp}) => {
    if (androidapp.length === 0) {
        return null
    }
    return (
        <div className="row row-cols-2 mb-2 mt-2 project_Row">
            <div className="w-25">
                <div className="w-25 text-start project_Field1">dumm</div>
                <p className="w-75 text-start project_Field">Android App</p>
            </div>
            <div>
                <ol>
                    {
                        // @ts-ignore
                        androidapp.map((app, index) => {
                            return (<li className="w-100 mb-2 text-start project_Link"><a className="project_Link"
                                                                                          href={"https://" + app}
                                                                                          key={index} target="_blank"
                                                                                          rel="noreferrer"> {app}</a>
                            </li>)
                        })
                    }
                </ol>
            </div>
        </div>
    )
}

// @ts-ignore
const Location = ({locations}) => {
    return (
        <div className="row row-cols-3 mb-2 mt-4 project_Row">
            <div className="w-25"/>
            <p className="w-75 text-end project_Value project_location"> {locations.join(", ")}</p>
        </div>
    )
}


interface Techno {
    id: number;
    category: string;
    skills: [string];
}


// @ts-ignore
const Technology = ({technologies}) => {
    return (
        <div className="card w-100 project_Value mb-5 project_Card">
            <div className="row row-cols-2 mb-2 mt-2 project_Row">
                <div className="w-25">
                    <div className="w-25 text-start project_Field1">dumm</div>
                    <p className="w-75 text-start project_Field">Technology</p>
                </div>
                <div className="w-75 mb-2 row">
                    {

                        technologies.map((tech: Techno) => {
                            return (

                                <div className="col" key={tech.id}>
                                    <p className="text-center text-bg-secondary card">{tech.category}</p>

                                    <Skill skills={tech.skills}/>
                                </div>


                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

// @ts-ignore
const Skill = ({skills}) => {
    let arrSkill = skills as [string]
    console.log(arrSkill);

    return (
        <div>
            {
                // @ts-ignore
                skills.map((techskill, index) => {

                    let actualskill = techskill

                    if (actualskill.trim() === "dotnet") {
                        actualskill = ".NET"
                    }

                    let image = require(`./images/skills/ios.png`)

                    try {
                        image = require(`./images/skills/` + techskill.toLowerCase() + `.png`)
                    } catch (e) {
                        console.log(e);
                        image = require(`./images/skills/default.png`)
                    }


                    return (

                        <div className="row text-start mt-2 " key={index}>
                            <div className="w-25">
                                <img className="project_skill_Image"
                                     src={image}
                                     alt={actualskill}/>
                            </div>

                            <div className="w-75 text-start ps-4 project_Skills mt-2">{actualskill} </div>
                        </div>


                    )
                })

            }
        </div>
    )
}


// @ts-ignore
const Description = ({desc}) => {
    return (
        <div className="card w-100 project_Value mb-5 project_Card">
            <div className="row row-cols-2 mb-2 mt-2 project_Row">
                <div className="w-25">
                    <div className="w-25 text-start project_Field1">dumm</div>
                    <p className="w-75 text-start project_Field">Description</p>
                </div>
                <div className="w-75 mb-2 text-start">
                    <p>{desc} Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                        ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                </div>
            </div>
        </div>
    )
}
// @ts-ignore
const Role = ({roles}) => {
    return (
        <div className="card w-100 project_Value mb-5 project_Card">
            <div className="row row-cols-2 mb-2 mt-2 project_Row">
                <div className="w-25">
                    <div className="w-25 text-start project_Field1">dumm</div>
                    <p className="w-75 text-start project_Field">Roles</p>
                </div>
                <div className="w-75 mb-2 text-start">
                    <p className="project_Value"> {roles.join(",")}</p>
                </div>
            </div>
        </div>
    )
}
// @ts-ignore
const Responsibility = ({responsibilities}) => {
    return (
        <div className="card w-100 project_Value mb-5 project_Card">
            <div className="row row-cols-2 mb-2 mt-2 project_Row">
                <div className="w-25">
                    <div className="w-25 text-start project_Field1">dumm</div>
                    <p className="w-75 text-start project_Field">Responsibility</p>
                </div>
                <div className="w-75 mb-2 text-start">
                    <p> {responsibilities}Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                </div>
            </div>
        </div>
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
