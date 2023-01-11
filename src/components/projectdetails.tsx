import projectList from '../data/project_details.json'

import {useParams} from 'react-router-dom'

const ProjectDetails = () => {
    // console.log(useParams());
    const {projectId} = useParams();
    const ExactProjectId = Number(projectId?.split(":")[1].toString());
    const projectDetail = getProjectDetail(ExactProjectId);

    return (
        <p style={{color: 'white'}}>{projectDetail.name}</p>
    )
}

export default ProjectDetails

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