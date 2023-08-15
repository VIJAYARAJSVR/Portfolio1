// window.addEventListener('load', function () {
//
//
//     let media = document.querySelector('#videoelement');
//     let play = document.querySelector('#playbutton');
//     let pause = document.querySelector('#pausebutton');
//     let position = document.querySelector('#positiondisplay');
//     let duration = document.querySelector('#durationdisplay');
//     let rail = document.querySelector('#controlbarrail');
//     let fill = document.querySelector('#controlbarfill');
//
//
//     try {
//         play.addEventListener('click', playMedia);
//         pause.addEventListener('click', pauseMedia);
//         rail.addEventListener('click', seekMedia);
//         fill.addEventListener('click', seekMedia);
//         media.addEventListener('loadedmetadata', updateTime);
//         media.addEventListener('timeupdate', updateTime);
//     } catch (e) {
//         console.log(e);
//     }
//
//
//     function playMedia() {
//         try {
//             media.play();
//         } catch (e) {
//             console.log(e);
//         }
//
//
//     }
//
//
//     function pauseMedia() {
//         try {
//             media.pause();
//         } catch (e) {
//             console.log(e);
//         }
//
//
//     }
//
//
//     function seekMedia(e) {
//         try {
//             console.log("processing seekMedia");
//             media.currentTime = e.offsetX / rail.offsetWidth * media.duration;
//         } catch (e) {
//             console.log(e);
//         }
//
//
//     }
//
//
//     function updateTime() {
//         position.textContent = timeDisplay(media.currentTime);
//         duration.textContent = timeDisplay(media.duration);
//         let currentlength = rail.clientWidth * (media.currentTime / media.duration);
//         fill.style.width = currentlength + 'px';
//     }
//
//     function timeDisplay(t) {
//         let minutes = Math.floor(t / 60);
//         let seconds = Math.floor(t - minutes * 60);
//         let minutevalue;
//         if (minutes < 10) {
//             minutevalue = '0' + minutes;
//         } else {
//             minutevalue = minutes;
//         }
//         let secondvalue;
//         if (seconds < 10) {
//             secondvalue = '0' + seconds;
//         } else {
//             secondvalue = seconds;
//         }
//         return minutevalue + ':' + secondvalue;
//     }
//
//
// });
// //Windows Load ending here
//
//
//
