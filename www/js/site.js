const imgUrls = [
    '/www/img/jumbotron/cbus-portrait-lexi-matt.jpg',
    '/www/img/jumbotron/bgsu-lexi-matt-portrait.jpg',
    '/www/img/jumbotron/rocky-lexi-matt-portrait.jpg',
    '/www/img/jumbotron/rocky-lexi-matt-selfie.jpg',
    '/www/img/jumbotron/wapk-diesel-truck.jpg',
    '/www/img/jumbotron/leip-brutus-matt-portrait.png'
]
const jumbotron = document.getElementById("jumbotron");

function jumbotronPrevBtn() {
    let prevUrl = imgUrls[imgUrls.indexOf(jumbotronImgUrl()) - 1];
    if(!prevUrl) {
        prevUrl = imgUrls[imgUrls.length - 1];
    }
    setJumbotronImgUrl(prevUrl);
}
function jumbotronNextBtn() {
    let nextUrl = imgUrls[imgUrls.indexOf(jumbotronImgUrl()) + 1];
    if(!nextUrl) {
        nextUrl = imgUrls[0];
    }
    setJumbotronImgUrl(nextUrl);
}

const jumbotronImgUrl = () => {
    const cssValue = window.getComputedStyle(jumbotron).getPropertyValue("background-image");
    return '/www' + cssValue.split('/www')[1].split('"')[0];
}
function setJumbotronImgUrl(imgUrl) {
    console.log("New Url: " + imgUrl);
    console.log("New property: " + `url('${imgUrl}');`);
    if(imgUrl) 
        jumbotron.style.backgroundImage = `url('${imgUrl}')`;
}