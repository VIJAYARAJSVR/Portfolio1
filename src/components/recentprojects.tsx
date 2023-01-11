import logo from '../images/logo.svg';

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
                    {/*<Link to={{ pathname: "https://google.com/" }} target="_blank">  See Full Details</Link>*/}
                    <a href={project.website} className="btn btn-primary" target="_blank">See Full Details</a>
                </div>
            </div>
        </div>

    )
}


export default RecentProjects

