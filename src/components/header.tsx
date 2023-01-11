import {Link, NavLink, NavLinkProps} from "react-router-dom";

const AppHeader = () => {
// @ts-ignore
    const getClass = ({isActive}) => (isActive ? "nav-active  " : "inactive nav-item");
    return (
        // <header className="App-header">
        <header className="container-sm container-md container-lg container-xl container-xxl">
            <nav className="navbar" style={{height: '80px', fontSize: "40px"}}>
                {/*<Link to={}> </Link>*/}
                {/*<NavLink to="/Home" className={({ isActive }) => (isActive ? 'active' : 'inactive')}> Home </NavLink>*/}
                <NavLink to="/Home" className={getClass}> Home </NavLink>
                <NavLink to="/AllProjects" className={getClass}> All Projects </NavLink>
                <NavLink to="/About" className={getClass}> About </NavLink>
            </nav>
        </header>
    )
}

export default AppHeader