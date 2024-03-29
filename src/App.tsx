import './App.css';
import projectList from './data/project_details.json'
import Projects from "./components/projects";
import About from "./components/about";
import {Routes, Route} from "react-router-dom";
import AppHeader from "./components/header";
import AppFooter from "./components/footer";
import NotFound from "./components/notfound";
import Home from "./components/home";
import ProjectDetails from "./components/projectdetails";
import Certification from "./components/certification";
import Dashboard from "./components/dashboard";


function App() {
    // console.log(projectList);
    return (
        <div className="App" style={{backgroundColor: "#282c34"}}>
            <AppHeader/>
            <Routes>

                <Route path="Portfolio1" element={<Home/>}/>
                <Route path="Portfoli11/Home" element={<Home/>}/>
                <Route path="Portfolio1/AllProjects" element={<Projects projectList={projectList}/>}/>
                <Route path="Portfolio1/ProjectDetail/:projectId" element={<ProjectDetails/>}/>
                <Route path="Portfolio1/Certification" element={<Certification/>}/>
                <Route path="Portfolio1/Dashboard" element={<Dashboard/>}/>
                <Route path="Portfolio1/About" element={<About/>}/>
                <Route path="*" element={<NotFound/>}/>

            </Routes>

            {/*<Routes>*/}
            {/*    <Route path="/" element={<Home/>}/>*/}
            {/*    /!*<Route path="Home" element={<Home/>}/>*!/*/}
            {/*    <Route path="Portfolio" element={<Home/>}>*/}
            {/*        /!*<Route path="Home" element={<Home/>}/>*!/*/}
            {/*        /!*<Route path="Portfolio" element={<Home/>}/>*!/*/}
            {/*        /!*<Route path="About" element={<About/>}/>*!/*/}
            {/*        <Route path="AllProjects" element={<Projects projectList={projectList}/>}/>*/}
            {/*        /!*<Route path=":projectId" element={<ProjectDetails/>}/>*!/*/}
            {/*        <Route path="/ProjectDetail/:projectId" element={<ProjectDetails/>}/>*/}
            {/*        /!*<Route path="ProjectDetail" element={<ProjectDetails/>}/>*!/*/}
            {/*        <Route path="*" element={<NotFound/>}/>*/}
            {/*    </Route>*/}
            {/*</Routes>*/}

            {/*<AppFooter/>*/}

        </div>
    );
}

export default App;


