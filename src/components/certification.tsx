import exp from "constants";
import pythoncert from './images/certifications/Python_Cert.png';
import djangocert from './images/certifications/Django_Cert.png';


const Certification = () => {
    return (
        // <div className="App-header">
            <div className="container-sm container-md container-lg container-xl container-xxl">
                <img className="w-75 h-50 mb-5 mt-2" src={pythoncert} height="350px" alt="python certification"/>
                <img className="w-75 h-50 mb-5 mt-2" src={djangocert} height="350px" alt="python certification"/>
            </div>
        // </div>

    )
}


export default Certification
