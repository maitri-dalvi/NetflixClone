const firebaseConfig = {
    apiKey: "AIzaSyC2yAVsZQV_50B8ypOKkG59D_9wG8XhKqY",
    authDomain: "netflix-clone-e701a.firebaseapp.com",
    databaseURL: "https://netflix-clone-e701a-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "netflix-clone-e701a",
    storageBucket: "netflix-clone-e701a.appspot.com",
    messagingSenderId: "248473181524",
    appId: "1:248473181524:web:0e6a568fe3fbc68a697cc1"
};

firebase.initializeApp(firebaseConfig);

const netflixCloneDB = firebase.database().ref('NetflixClone')

document.getElementById('email-signup').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();

}

const getElementVal = (id) => {
    return document.getElementById(id).value;
}