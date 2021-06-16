// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyBmgnIyfsyn1rlFUYfFuAaZXFavkKZIWKI",
    authDomain: "mattgoedde-github-io.firebaseapp.com",
    projectId: "mattgoedde-github-io",
    storageBucket: "mattgoedde-github-io.appspot.com",
    messagingSenderId: "908695623095",
    appId: "1:908695623095:web:5ba3e6e45e4b01c3c64432",
    measurementId: "G-YDG7RX6654"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbar'
})