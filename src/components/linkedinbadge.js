import {HelmetProvider} from 'react-helmet-async'
import {Helmet} from "react-helmet";
import {useEffect} from "react";

const Badge = () => {
    // <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"/>
    // useEffect(() => {
    //     const script = document.createElement('script');
    //     script.src = "https://platform.linkedin.com/badges/js/profile.js";
    //     script.async = true;
    //     document.body.appendChild(script);
    //     return () => {
    //         document.body.removeChild(script);
    //     }
    // }, []);
    return (
        <>
            {/*<Helmet>*/}
            {/*    <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"/>*/}
            {/*</Helmet>*/}
            <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="light"
                 datatype="VERTICAL" data-vanity="vijay-fullstack" data-version="v1"><a
                className="badge-base__link LI-simple-link"
                href="https://ae.linkedin.com/in/vijay-fullstack?trk=profile-badge">Vijayaraj Suyambu</a></div>

        </>


    )

}

export default Badge