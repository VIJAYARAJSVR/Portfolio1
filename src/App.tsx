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


function App() {
    // console.log(projectList);
    return (
        <div className="App" style={{backgroundColor: "#282c34"}}>
            <AppHeader/>
            <Routes>
                <Route path="Home" element={<Home/>}/>
                <Route path="Portfolio" element={<Home/>}/>
                <Route path="About" element={<About/>}/>
                <Route path="AllProjects" element={<Projects projectList={projectList}/>}/>
                <Route path=":projectId" element={<ProjectDetails/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>

            <AppFooter/>

        </div>
    );
}
export default App;


