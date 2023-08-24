import {Link, NavLink, NavLinkProps, useOutlet} from "react-router-dom";

const AppHeader = () => {
// @ts-ignore
    const getClass = ({isActive}) => (isActive ? "nav-active nav-item ActiveLink " : "inactive inActiveLink nav-item");
    return (
        // <header className="App-header">
        <header className="container-sm container-md container-lg container-xl container-xxl">
            <nav className="navbar navbar1" style={{height: '60px', fontSize: "25px"}}>
                {/*<Link to={}> </Link>*/}
                {/*<NavLink to="/Home" className={({ isActive }) => (isActive ? 'active' : 'inactive')}> Home </NavLink>*/}
                <NavLink to="Portfolio1" className={getClass}> Home </NavLink>
                <NavLink to="Portfolio1/AllProjects" className={getClass}> All Projects </NavLink>
                <NavLink to="Portfolio1/Certification" className={getClass}> Certification </NavLink>
                <NavLink to="Portfolio1/Dashboard" className={getClass}> Dashboard </NavLink>
                <NavLink to="Portfolio1/About" className={getClass}> About </NavLink>
            </nav>
        </header>
    )
}

export default AppHeader