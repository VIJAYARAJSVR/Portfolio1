import logo from '../images/logo.svg';
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {useRef} from "react";

// @ts-ignore
const RecentProjects = ({project}) => {


    return (
        <div className="col">
            <div className="card h-200 mb-5 mt-2">
                <Link to={"/Portfolio1/ProjectDetail/" + project.id}>
                    <div className="card-body">
                        {/*<img className="card-img-top" src={logo} alt="logo"/>*/}

                        {/*<img className="card-img-top" src={`images/project_thumbnail/${project.thumbnail}.png`} alt={project.thumbnail}/>*/}
                        <img className="card-img-top h-25"
                             src={require(`./images/project_thumbnail/${project.thumbnail}.png`)}
                             alt={project.thumbnail}/>
                        {/*<h5 className="card-tit  le"*/}

                        {/*    style={{color: "black", fontWeight: "bold"}}>{project.name.toUpperCase()}</h5>*/}
                    </div>
                    <div className="card-footer">

                        <h5 className="card-title p-3"
                            style={{color: "black", fontWeight: "bold"}}>{project.name.toUpperCase()}</h5>

                        {/*<Link to={"/Portfolio/ProjectDetail/" + project.id} className="btn btn-primary">See Full*/}
                        {/*    Details </Link>*/}
                        {/*external link*/}
                        {/*<a href={project.website} className="btn btn-primary" target="_blank">See Full Details</a>*/}
                    </div>
                </Link>
            </div>
        </div>

    )
}


export default RecentProjects
