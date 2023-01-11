import logo from '../images/logo.svg';
import mypicture from './images/vijayaraj.jpg';
import '../App.css';
import projectList from '../data/project_details.json'
import RecentProjects from "./recentprojects";
import {MdEmail} from '@react-icons/all-files/md/MdEmail'
import {AiFillPhone} from '@react-icons/all-files/ai/AiFillPhone'
import {VscGithub} from '@react-icons/all-files/vsc/VscGithub'
import {GrYoutube} from '@react-icons/all-files/gr/GrYoutube'
import {AiOutlineFileText} from '@react-icons/all-files/ai/AiOutlineFileText'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel'

const Home = () => {
    return (
        <div className="App-header">
            <h1 className="mt-5 mb-5">VIJAYARAJ SUYAMBU</h1>

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
    return (
        <div className="row row-cols-2 mb-5">
            <div className="w-75">
                {/*<HomeCarousel/>*/}
            </div>
            <div className="w-25">
                <div className="row  row-cols-2 mt-2"><AiFillPhone className="w-auto"/><h3
                    className="fst-italic text-start w-75 ContactDetailsLink">+971
                    561661585</h3></div>
                <div className="row  row-cols-2 mt-2"><MdEmail className="w-auto "/><a
                    className="fst-italic text-start w-75 ContactDetailsLink"
                    href="mailto:Vijayfullstackdeveloper@gmail.com"
                    target="_blank"><h3>Vijayfullstackdeveloper@gmail.com</h3></a></div>
                <div className="row  row-cols-2 mt-2"><VscGithub className="w-auto"/><a
                    className=" fst-italic text-start w-75 ContactDetailsLink"
                    href="https://github.com/VIJAYARAJSVR"
                    target="_blank"><h3>GitHub</h3></a>
                </div>
                <div className="row  row-cols-2 mt-2"><AiOutlineFileText className="w-auto"/><a
                    className="fst-italic text-start w-75 ContactDetailsLink"
                    href="https://www.resumonk.com/fullstack"
                    target="_blank">
                    <h3>Online Resume</h3></a></div>
                <div className="row  row-cols-2 mt-2"><GrYoutube className="w-auto"/><a
                    className="fst-italic text-start w-75 ContactDetailsLink"
                    href="https://www.youtube.com/@vijayarajfullstack/playlists"
                    target="_blank"><h3>Playlist</h3></a>
                </div>
                <div className="row  row-cols-2 mt-2"><GrYoutube className="w-auto"/><a
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


