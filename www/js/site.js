const imgUrls = [
    '/www/img/jumbotron/1.jpg',
    '/www/img/jumbotron/2.jpg',
    '/www/img/jumbotron/3.jpg',
    '/www/img/jumbotron/4.jpg',
    '/www/img/jumbotron/5.jpg',
    '/www/img/jumbotron/6.png'
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