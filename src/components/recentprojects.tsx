import logo from '../images/logo.svg';
import {Link} from "react-router-dom";
// @ts-ignore
const RecentProjects = ({project}) => {
    return (
        <div className="col">
            <div className="card h-200 mb-5 mt-2">
                <div className="card-body">
                    <img className="card-img-top" src={logo} alt="logo"/>
                    <h5 className="card-title"
                        style={{color: "black", fontWeight: "bold"}}>{project.name.toUpperCase()}</h5>
                </div>
                <div className="card-footer">
                    {/*<Link to="" target="_blank">  See Full Details</Link>*/}
                    {/*<Link to="/AllProjects" className="btn btn-primary" target="_blank">See Full Details </Link>*/}

                    <Link to={"/ProjectDetail:" + project.id} className="btn btn-primary" target="_blank">See Full
                        Details </Link>
                    {/*external link*/}
                    {/*<a href={project.website} className="btn btn-primary" target="_blank">See Full Details</a>*/}
                </div>
            </div>
        </div>

    )
}


export default RecentProjects

