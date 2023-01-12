import logo from '../images/logo.svg';
import mypicture from './images/vijayaraj.jpg';
import '../App.css';
import projectList from '../data/project_details.json'
import RecentProjects from "./recentprojects";
import {MdEmail} from '@react-icons/all-files/md/MdEmail'
import {AiFillPhone} from '@react-icons/all-files/ai/AiFillPhone'
import {VscGithub} from '@react-icons/all-files/vsc/VscGithub'
import {GrYoutube} from '@react-icons/all-files/gr/GrYoutube'
import {AiFillLinkedin} from '@react-icons/all-files/ai/AiFillLinkedin'
import {AiOutlineFileText} from '@react-icons/all-files/ai/AiOutlineFileText'
import {FaStackOverflow} from '@react-icons/all-files/fa/FaStackOverflow'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel'

import SkillBarChart from './skillbarchart'

const Home = () => {
    // const LinkedinStyle = { color: "blue", fontSize: "1.5em" }
    const data = [
        {year: 1980, efficiency: 24.3, sales: 8949000},
        {year: 1985, efficiency: 27.6, sales: 10979000},
        {year: 1990, efficiency: 28, sales: 9303000},
        {year: 1991, efficiency: 28.4, sales: 8185000},
        {year: 1992, efficiency: 27.9, sales: 8213000},
        {year: 1993, efficiency: 28.4, sales: 8518000},
        {year: 1994, efficiency: 28.3, sales: 8991000},
        {year: 1995, efficiency: 28.6, sales: 8620000},
        {year: 1996, efficiency: 28.5, sales: 8479000},
        {year: 1997, efficiency: 28.7, sales: 8217000},
        {year: 1998, efficiency: 28.8, sales: 8085000},
        {year: 1999, efficiency: 28.3, sales: 8638000},
        {year: 2000, efficiency: 28.5, sales: 8778000},
        {year: 2001, efficiency: 28.8, sales: 8352000},
        {year: 2002, efficiency: 29, sales: 8042000},
        {year: 2003, efficiency: 29.5, sales: 7556000},
        {year: 2004, efficiency: 29.5, sales: 7483000},
        {year: 2005, efficiency: 30.3, sales: 7660000},
        {year: 2006, efficiency: 30.1, sales: 7762000},
        {year: 2007, efficiency: 31.2, sales: 7562000},
        {year: 2008, efficiency: 31.5, sales: 6769000},
        {year: 2009, efficiency: 32.9, sales: 5402000},
        {year: 2010, efficiency: 33.9, sales: 5636000},
        {year: 2011, efficiency: 33.1, sales: 6093000},
        {year: 2012, efficiency: 35.3, sales: 7245000},
        {year: 2013, efficiency: 36.4, sales: 7586000},
        {year: 2014, efficiency: 36.5, sales: 7708000},
        {year: 2015, efficiency: 37.2, sales: 7517000},
        {year: 2016, efficiency: 37.7, sales: 6873000},
        {year: 2017, efficiency: 39.4, sales: 6081000},
    ]

    // @ts-ignore
    return (
        <div className="App-header">
            <h1 className="mt-5 mb-5">VIJAYARAJ SUYAMBU</h1>

            {/*<SkillBarChart  data={data}/>*/}


            <div className="container-sm container-md container-lg container-xl container-xxl">
                <ContactDetails/>
                <Description/>
            </div>
            <div className="container-sm container-md container-lg container-xl container-xxl">
                {/*<div className="row row-cols-2"><p>Recent Projects</p> <NavLink to="AllProjects"> See All Projects </NavLink></div>*/}
                <RecentProjectList/>
            </div>
        </div>
    );
}

export default Home


const ContactDetails = () => {
    const data = [
        {year: 1980, efficiency: 24.3, sales: 8949000},
        {year: 1985, efficiency: 27.6, sales: 10979000},
        {year: 1990, efficiency: 28, sales: 9303000},
        {year: 1991, efficiency: 28.4, sales: 8185000},
        {year: 1992, efficiency: 27.9, sales: 8213000},
        {year: 1993, efficiency: 28.4, sales: 8518000},
        {year: 1994, efficiency: 28.3, sales: 8991000},
        {year: 1995, efficiency: 28.6, sales: 8620000},
        {year: 1996, efficiency: 28.5, sales: 8479000},
        {year: 1997, efficiency: 28.7, sales: 8217000},
        {year: 1998, efficiency: 28.8, sales: 8085000},
        {year: 1999, efficiency: 28.3, sales: 8638000},
        {year: 2000, efficiency: 28.5, sales: 8778000},
        {year: 2001, efficiency: 28.8, sales: 8352000},
        {year: 2002, efficiency: 29, sales: 8042000},
        {year: 2003, efficiency: 29.5, sales: 7556000},
        {year: 2004, efficiency: 29.5, sales: 7483000},
        {year: 2005, efficiency: 30.3, sales: 7660000},
        {year: 2006, efficiency: 30.1, sales: 7762000},
        {year: 2007, efficiency: 31.2, sales: 7562000},
        {year: 2008, efficiency: 31.5, sales: 6769000},
        {year: 2009, efficiency: 32.9, sales: 5402000},
        {year: 2010, efficiency: 33.9, sales: 5636000},
        {year: 2011, efficiency: 33.1, sales: 6093000},
        {year: 2012, efficiency: 35.3, sales: 7245000},
        {year: 2013, efficiency: 36.4, sales: 7586000},
        {year: 2014, efficiency: 36.5, sales: 7708000},
        {year: 2015, efficiency: 37.2, sales: 7517000},
        {year: 2016, efficiency: 37.7, sales: 6873000},
        {year: 2017, efficiency: 39.4, sales: 6081000},
    ]
    return (
        <div className="row row-cols-2 mb-5">
            <div className="w-75">
                {/*<HomeCarousel/>*/}
                <SkillBarChart data={data}/>
            </div>
            <div className="w-25">
                <div className="row  row-cols-2 mt-2"><AiFillPhone className="w-auto"/><h3
                    className="fst-italic text-start w-75 ContactDetailsLink">+971
                    561661585</h3></div>
                <div className="row  row-cols-2 mt-2"><MdEmail className="w-auto "/><a
                    className="fst-italic text-start w-75 ContactDetailsLink"
                    href="mailto:Vijayfullstackdeveloper@gmail.com"
                    target="_blank"><h3>Click here</h3></a></div>
                <div className="row  row-cols-2 mt-2">
                    <div className="w-auto "/>
                    <div
                        className="fst-italic text-start w-75 "
                    ><h3></h3></div>
                </div>
                <div className="row  row-cols-2 mt-2">
                    <div className="w-auto "/>
                    <div
                        className="fst-italic text-start w-75 "
                    ><h3></h3></div>
                </div>

                <div className="row  row-cols-2 mt-2"><AiFillLinkedin style={{color: '#206cb2'}} className="w-auto"/><a
                    className=" fst-italic text-start w-75 ContactDetailsLink"
                    href="https://www.linkedin.com/in/vijay-fullstack"
                    target="_blank"><h3>Linkedin</h3></a>
                </div>
                <div className="row  row-cols-2 mt-2"><VscGithub style={{color: 'white'}} className="w-auto"/><a
                    className=" fst-italic text-start w-75 ContactDetailsLink"
                    href="https://github.com/VIJAYARAJSVR"
                    target="_blank"><h3>GitHub</h3></a>
                </div>
                <div className="row  row-cols-2 mt-2"><FaStackOverflow style={{color: 'orange'}} className="w-auto"/><a
                    className=" fst-italic text-start w-75 ContactDetailsLink"
                    href="https://stackoverflow.com/users/11745220/vijayaraj-suyambu/"
                    target="_blank"><h3>StackOverFlow</h3></a>
                </div>

                <div className="row  row-cols-2 mt-2">
                    <div className="w-auto "/>
                    <div
                        className="fst-italic text-start w-75 "
                    ><h3></h3></div>
                </div>

                <div className="row  row-cols-2 mt-2">
                    <div className="w-auto "/>
                    <div
                        className="fst-italic text-start w-75 "
                    ><h3></h3></div>
                </div>

                <div className="row  row-cols-2 mt-2"><AiOutlineFileText style={{color: 'greenyellow'}}
                                                                         className="w-auto"/><a
                    className="fst-italic text-start w-75 ContactDetailsLink"
                    href="https://www.resumonk.com/fullstack"
                    target="_blank">
                    <h3>Online Resume</h3></a></div>
                <div className="row  row-cols-2 mt-2"><GrYoutube style={{color: '#fb2201'}} className="w-auto"/><a
                    className="fst-italic text-start w-75 ContactDetailsLink"
                    href="https://www.youtube.com/@vijayarajfullstack/playlists"
                    target="_blank"><h3>Playlist</h3></a>
                </div>
                <div className="row  row-cols-2 mt-2"><GrYoutube style={{color: '#fb2201'}} className="w-auto"/><a
                    className="fst-italic text-start w-75 ContactDetailsLink"
                    href="https://www.youtube.com/@vijayarajfullstack"
                    target="_blank"><h3>Video Resume</h3></a>
                </div>
            </div>
        </div>

    )
}
const Description = () => {
    return (
        // <div className="d-flex flex-row flex-wrap overflow-auto">
        <div className="row row-cols-2 ">
            <img className="w-25 h-50" src={mypicture} height="350px" alt="logo"/>
            <h4 className="text-start w-75 ">I am having 6+ years of experience in software development . India ,
                officially the Republic of India is a country in South Asia. It is the seventh-largest country by area,
                the second-most populous country with over 1.2 billion people, and the most populous democracy in the
                world. Bounded by the Indian Ocean on the south, the Arabian Sea on the south-west, and the Bay of
                Bengal on the south-east, it shares land borders with Pakistan to the west;[d] China, Nepal, and Bhutan
                to the north-east; and Burma (Myanmar) and Bangladesh to the east. In the Indian Ocean, India is in the
                vicinity of Sri Lanka and the Maldives; in addition, India's Andaman and Nicobar Islands share a
                maritime border with Thailand and Indonesia.</h4>
        </div>
    )
}

const RecentProjectList = () => {
    return (
        <>
            {/*<h3 className="mt-5">Recent Projects <span className="ms-2" style={{ fontSize:'20px' }}>(Click to see full details)</span> </h3>*/}
            <h3 className="mt-5">Recent Projects </h3><h4 className="mt-4">(Click to see full details)</h4>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    projectList.map((project, index) => {
                        if (project.id <= 3) {
                            console.log((index));
                            return (<RecentProjects key={project.id} project={project}/>)
                        }
                        return null
                    })
                }
            </div>
        </>


    )
}


const HomeCarousel = () => {
    return (
        <Carousel>
            <div>
                <img src={logo} alt="Hll"/>

            </div>
            <div>
                <img src={mypicture} alt="Hll" width="100px" height="100px"/>

            </div>
            <div>
                <img src={logo} alt="Hll"/>

            </div>
        </Carousel>
    );
}


