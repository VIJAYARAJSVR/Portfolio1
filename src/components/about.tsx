// import '../components/js/about.js';

import '../components/styles/about.css';
import {useEffect} from "react";

function DisplayVideo() {

    useEffect(() => {
        // code to run after render goes here
        RunAllJavascriptFunction();
    }, []); // <-- empty array means 'run once'


    return <>
        <div className="row">
            <div className="col-2">

            </div>
            <div className="col-3">
                <video controls
                       id="videoelement" src={require(`../media/video.mp4`)} poster={require(`../media/still.png`)}
                       preload="metadata" width="800">
                </video>
            </div>
        </div>
        {/*d-flex justify-content-center*/}
        {/*margin-left*/}
        <div className="row">
            <div className="col-2">

            </div>
            <div className="col-3" id="mediacontrols">
                <div id="controlbarrail">
                    <div id="controlbarfill"></div>
                </div>
            </div>
        </div>


        <div className="row mt-1 mb-5">

            <div className="col-2">
            </div>

            <div className="col-2">
            </div>

            <div className="col-3">
                <div>
                    {/*<svg id="playbutton" xmlns="http://www.w3.org/2000/svg" width="72" height="72" fill="#367FC3" className="bi bi-play-circle-fill" viewBox="0 0 16 16">*/}
                    {/*    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>*/}
                    {/*</svg>*/}

                    <button
                        id="playbutton" type="button" className="btn  btn-lg fs-4 fw-semibold fst-italic">
                        Play
                    </button>
                    <button id="pausebutton" className="ms-3 btn  btn-lg fs-4 fw-semibold fst-italic">Pause</button>
                </div>
            </div>

            <div id="timedisplay" className="col-3 mt-1 fs-4 fw-semibold ">
                <div className="ms-4">
                    <time id="positiondisplay" className="me-4">00:00</time>
                    <time id="durationdisplay">00:00</time>
                </div>
            </div>

        </div>
    </>;
}

const About = () => {

    return (
        <div className="App-header">
            <div className="container-sm container-md container-lg container-xl container-xxl">

                {/*<Badge/>*/}

                <p className="fs-3 mb-5 mt-5">********&nbsp;&nbsp;Important &nbsp;This page is under
                    development.&nbsp;&nbsp;********</p>

                <DisplayVideo/>

                <p className="fs-4 mb-4">
                    India , officially the Republic of India is a country in South Asia. It is the seventh-largest
                    country by area, the second-most populous country with over 1.2 billion people, and the most
                    populous democracy in the world. Bounded by the Indian Ocean on the south, the Arabian Sea on the
                    south-west, and the Bay of Bengal on the south-east, it shares land borders with Pakistan to the
                    west;[d] China, Nepal, and Bhutan to the north-east; and Burma (Myanmar) and Bangladesh to the east.
                    In the Indian Ocean, India is in the vicinity of Sri Lanka and the Maldives; in addition, India's
                    Andaman and Nicobar Islands share a maritime border with Thailand and Indonesia.
                </p>

                <p className="fs-4 mb-4">
                    India , officially the Republic of India is a country in South Asia. It is the seventh-largest
                    country by area, the second-most populous country with over 1.2 billion people, and the most
                    populous democracy in the world. Bounded by the Indian Ocean on the south, the Arabian Sea on the
                    south-west, and the Bay of Bengal on the south-east, it shares land borders with Pakistan to the
                    west;[d] China, Nepal, and Bhutan to the north-east; and Burma (Myanmar) and Bangladesh to the east.
                    In the Indian Ocean, India is in the vicinity of Sri Lanka and the Maldives; in addition, India's
                    Andaman and Nicobar Islands share a maritime border with Thailand and Indonesia.
                </p>

                <p className="fs-4 mb-5">
                    India , officially the Republic of India is a country in South Asia. It is the seventh-largest
                    country by area, the second-most populous country with over 1.2 billion people, and the most
                    populous democracy in the world. Bounded by the Indian Ocean on the south, the Arabian Sea on the
                    south-west, and the Bay of Bengal on the south-east, it shares land borders with Pakistan to the
                    west;[d] China, Nepal, and Bhutan to the north-east; and Burma (Myanmar) and Bangladesh to the east.
                    In the Indian Ocean, India is in the vicinity of Sri Lanka and the Maldives; in addition, India's
                    Andaman and Nicobar Islands share a maritime border with Thailand and Indonesia.
                </p>

            </div>
        </div>

    )
}


export default About


function playMedia() {
    try {

        let media = document.querySelector('#videoelement');
        // @ts-ignore
        media.play();
    } catch (e) {
        console.log(e);
    }


}


function pauseMedia() {
    try {
        let media = document.querySelector('#videoelement');
        // @ts-ignore
        media.pause();
    } catch (e) {
        console.log(e);
    }


}


// @ts-ignore
function seekMedia(e) {
    try {
        console.log("processing seekMedia");
        let media = document.querySelector('#videoelement');
        let rail = document.querySelector('#controlbarrail');
        // @ts-ignore
        media.currentTime = e.offsetX / rail.offsetWidth * media.duration;
    } catch (e) {
        console.log(e);
    }


}


function updateTime() {
    let media = document.querySelector('#videoelement');
    let position = document.querySelector('#positiondisplay');
    let duration = document.querySelector('#durationdisplay');
// @ts-ignore
    position.textContent = timeDisplay(media.currentTime);
// @ts-ignore
    duration.textContent = timeDisplay(media.duration);
// @ts-ignore
    let currentlength = rail.clientWidth * (media.currentTime / media.duration);
    let fill = document.querySelector('#controlbarfill');
    // @ts-ignore
    fill.style.width = currentlength + 'px';
}

function timeDisplay(t: number) {
    let minutes = Math.floor(t / 60);
    let seconds = Math.floor(t - minutes * 60);
    let minutevalue;
    if (minutes < 10) {
        minutevalue = '0' + minutes;
    } else {
        minutevalue = minutes;
    }
    let secondvalue;
    if (seconds < 10) {
        secondvalue = '0' + seconds;
    } else {
        secondvalue = seconds;
    }
    return minutevalue + ':' + secondvalue;
}


function RunAllJavascriptFunction() {
    try {


        const media = document.querySelector('#videoelement');
        const play = document.querySelector('#playbutton');
        const pause = document.querySelector('#pausebutton');
        const rail = document.querySelector('#controlbarrail');
        const fill = document.querySelector('#controlbarfill');


        try {
            play?.addEventListener('click', playMedia);
            pause?.addEventListener('click', pauseMedia);
            rail?.addEventListener('click', seekMedia);
            fill?.addEventListener('click', seekMedia);
            media?.addEventListener('loadedmetadata', updateTime);
            media?.addEventListener('timeupdate', updateTime);
        } catch (e) {
            console.log(e);
        }


    } catch (e) {
        console.log(e);
    }
}






