import logo from '../images/logo.svg';
import mypicture from './images/vijayaraj.jpg';
import '../App.css';
import projectList from '../data/project_details.json'
import RecentProjects from "./recentprojects";
import Marquee from "react-fast-marquee";
import {MdEmail} from '@react-icons/all-files/md/MdEmail'
import {AiFillPhone} from '@react-icons/all-files/ai/AiFillPhone'
import {VscGithub} from '@react-icons/all-files/vsc/VscGithub'
import {GrYoutube} from '@react-icons/all-files/gr/GrYoutube'
import {AiFillLinkedin} from '@react-icons/all-files/ai/AiFillLinkedin'
import {AiOutlineFileText} from '@react-icons/all-files/ai/AiOutlineFileText'
import {FaStackOverflow} from '@react-icons/all-files/fa/FaStackOverflow'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel'
import {NavLink} from "react-router-dom";
import {useLayoutEffect, useRef, useState} from "react";
import TestBarChart from "./testbarchart";
import SkillBarChart from "./skillbarchart";

const Home = () => {
    // const LinkedinStyle = { color: "blue", fontSize: "1.5em" }
    const Marquee_Style = {color: "white", fontSize: "0.6em"}

    // @ts-ignore
    return (
        <div className="App-header">
            <h1 className="mt-3 mb-2">VIJAYARAJ SUYAMBU</h1>

            <Marquee speed={120} pauseOnHover={true} className="mb-3" style={Marquee_Style}>
                This is a dynamic (not static) website that is developed using React.js, Typescript, D3.js and
                Bootstrap 5 from scratch ( I didn't used any templates).

            </Marquee>


            <div className="container-sm container-md container-lg container-xl container-xxl">
                <ContactDetails/>
                <AboutMe/>
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
    const ref = useRef(null);
    const [width, setWidth] = useState(0);

    useLayoutEffect(() => {
        // @ts-ignore
        setWidth(ref.current.offsetWidth);
    }, []);

    // const data1 = [
    //     {year: 1980, efficiency: 24.3, sales: 8949000},
    //     {year: 1985, efficiency: 27.6, sales: 10979000},
    //     {year: 1990, efficiency: 28, sales: 9303000},
    //     {year: 1991, efficiency: 28.4, sales: 8185000},
    //     {year: 1992, efficiency: 27.9, sales: 8213000},
    //     {year: 1993, efficiency: 28.4, sales: 8518000},
    //     {year: 1994, efficiency: 28.3, sales: 8991000},
    //     {year: 1995, efficiency: 28.6, sales: 8620000},
    //     {year: 1996, efficiency: 28.5, sales: 8479000},
    //     {year: 1997, efficiency: 28.7, sales: 8217000},
    //     {year: 1998, efficiency: 28.8, sales: 8085000},
    //     {year: 1999, efficiency: 28.3, sales: 8638000},
    //     {year: 2000, efficiency: 28.5, sales: 8778000},
    //     {year: 2001, efficiency: 28.8, sales: 8352000},
    //     {year: 2002, efficiency: 29, sales: 8042000},
    //     {year: 2003, efficiency: 29.5, sales: 7556000},
    //     {year: 2004, efficiency: 29.5, sales: 7483000},
    //     {year: 2005, efficiency: 30.3, sales: 7660000},
    //     {year: 2006, efficiency: 30.1, sales: 7762000},
    //     {year: 2007, efficiency: 31.2, sales: 7562000},
    //     {year: 2008, efficiency: 31.5, sales: 6769000},
    //     {year: 2009, efficiency: 32.9, sales: 5402000},
    //     {year: 2010, efficiency: 33.9, sales: 5636000},
    //     {year: 2011, efficiency: 33.1, sales: 6093000},
    //     {year: 2012, efficiency: 35.3, sales: 7245000},
    //     {year: 2013, efficiency: 36.4, sales: 7586000},
    //     {year: 2014, efficiency: 36.5, sales: 7708000},
    //     {year: 2015, efficiency: 37.2, sales: 7517000},
    //     {year: 2016, efficiency: 37.7, sales: 6873000},
    //     {year: 2017, efficiency: 39.4, sales: 6081000},
    // ]
    // const data = [98, 33, 38, 20, 88, 99, 98, 33, 123, 40, 38, 20, 98, 33, 38, 20, 88, 99, 98, 33, 123, 40, 38, 20]
    return (
        <div className="row row-cols-2 mb-5">
            <div className="w-75" ref={ref}>
                {/*<HomeCarousel/>*/}
                <div className="container" style={{color: 'darkkhaki'}}>
                    <h4 className="float-start">Technical Experience</h4>
                    <h6 className="float-start" style={{marginTop: '5px', marginLeft: '10px'}}> (Below Chart)</h6>
                </div>

                <SkillBarChart widthh={width}/>
                {/*<TestBarChart data={data1}/>*/}
            </div>
            <div className="w-25">
                <div className="row  row-cols-2 mt-2">
                    <div className="w-25"/>
                    <AiFillPhone className="w-auto"/><h4

                    className="fst-italic text-start w-50 ContactDetailsLink">+971
                    561661585</h4
                ></div>
                <div className="row  row-cols-2 mt-2">
                    <div className="w-25"/>
                    <MdEmail className="w-auto "/><a
                    className="fst-italic text-start w-50 ContactDetailsLink"
                    href="mailto:Vijayfullstackdeveloper@gmail.com"
                    target="_blank"><h4
                >Click here</h4
                ></a></div>
                <div className="row  row-cols-2 mt-2">
                    <div className="w-auto "/>
                    <div
                        className="fst-italic text-start w-75 "
                    ><h4
                    /></div>
                </div>
                <div className="row  row-cols-2 mt-2">
                    <div className="w-auto "/>
                    <div
                        className="fst-italic text-start w-75 "
                    ><h4
                    /></div>
                </div>

                <div className="row  row-cols-2 mt-2">
                    <div className="w-25"/>
                    <AiFillLinkedin style={{color: '#206cb2'}} className="w-auto"/><a
                    className=" fst-italic text-start w-50 ContactDetailsLink"
                    href="https://www.linkedin.com/in/vijay-fullstack"
                    target="_blank"><h4
                >Linkedin</h4
                ></a>
                </div>
                <div className="row  row-cols-2 mt-2">
                    <div className="w-25"/>
                    <VscGithub style={{color: 'white'}} className="w-auto"/><a
                    className=" fst-italic text-start w-50 ContactDetailsLink"
                    href="https://github.com/VIJAYARAJSVR"
                    target="_blank"><h4
                >GitHub</h4
                ></a>
                </div>
                <div className="row  row-cols-2 mt-2">
                    <div className="w-25"/>
                    <FaStackOverflow style={{color: 'orange'}} className="w-auto"/><a
                    className=" fst-italic text-start w-50 ContactDetailsLink"
                    href="https://stackoverflow.com/users/11745220/vijayaraj-suyambu/"
                    target="_blank"><h4
                >StackOverFlow</h4
                ></a>
                </div>

                <div className="row  row-cols-2 mt-2">
                    <div className="w-auto "/>
                    <div
                        className="fst-italic text-start w-75 "
                    ><h4
                    /></div>
                </div>

                <div className="row  row-cols-2 mt-2">
                    <div className="w-auto "/>
                    <div
                        className="fst-italic text-start w-75 "
                    ><h4
                    /></div>
                </div>

                <div className="row  row-cols-2 mt-2">
                    <div className="w-25"/>
                    <AiOutlineFileText style={{color: 'greenyellow'}}
                                       className="w-auto"/><a
                    className="fst-italic text-start w-50 ContactDetailsLink"
                    href="https://www.resumonk.com/fullstack"
                    target="_blank">
                    <h4
                    >Resume</h4
                    ></a></div>
                <div className="row  row-cols-2 mt-2">
                    <div className="w-25"/>
                    <GrYoutube style={{color: '#fb2201'}} className="w-auto"/><a
                    className="fst-italic text-start w-50 ContactDetailsLink"
                    href="https://www.youtube.com/@vijayarajfullstack/playlists"
                    target="_blank"><h4
                >Playlist</h4
                ></a>
                </div>

                <div className="row  row-cols-2 mt-2">
                    <div className="w-25"/>
                    <GrYoutube style={{color: '#fb2201'}} className="w-auto"/><a
                    className="fst-italic text-start w-50 ContactDetailsLink"
                    href="https://www.youtube.com/@vijayarajfullstack"
                    target="_blank"><h4
                >Video</h4
                ></a>
                </div>

                <div className="row  row-cols-2 mt-2">
                    <div className="w-25"/>
                    <GrYoutube style={{color: '#fb2201'}} className="w-auto"/><a
                    className="fst-italic text-start w-50 ContactDetailsLink"
                    href=" https://www.youtube.com/@VijayFishHobbyist"
                    target="_blank"><h4
                >Hobbies</h4
                ></a>
                </div>
            </div>
        </div>

    )
}

const AboutMe = () => {
    return (
        // <div className="d-flex flex-row flex-wrap overflow-auto">
        <div className="row row-cols-2 ">
            <img className="w-25 h-50" src={mypicture} height="350px" alt="logo"/>
            <p className="fs-4 text-start w-75 " style={{lineHeight: 1.5}}>I am having <span
                className="ms-1 mt-1 fs-2 fw-bold text-bg-warning p-1">7+</span> years of experience in software
                development Such as mobile,
                web and desktop development. So far I have development <span
                    className="ms-1 mt-1 fs-2 fw-bold text-bg-warning p-1">15</span> software projects.
            </p>
        </div>
    )
}

const RecentProjectList = () => {

    // const sStyle = {fontSize: '30px',backgroundColor:'#367FC3', borderRadius:'10px',borderColor:'#3f4c6e',  color:'white'};
    return (
        <>
            {/*<h4
             className="mt-5">Recent Projects <span className="ms-2" style={{ fontSize:'20px' }}>(Click to see full details)</span> </h4
             >*/}
            <div className="row row-cols-3 mt-5">
                <div/>
                <div>
                    <h4
                    >Recent Projects </h4
                    ><h5>(Click to see full details)</h5>
                </div>
                <div><NavLink to="/Portfolio/AllProjects">
                    <button className="w-100 h-100 anim btnSeeAll">Click to see All Projects</button>
                </NavLink></div>

            </div>
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


