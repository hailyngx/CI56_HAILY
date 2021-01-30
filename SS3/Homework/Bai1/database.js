async function readAllUsers() {
    let result = await firebase.firestore().collection("users").get();
    
    for(let document of result.docs) {
        console.log(document.id, document.data());
    }
}

async function readAllAdmins() {
    let result = await firebase.firestore().collection("admins").get();
    
    for (let document of result.docs) {
        console.log(document.id, document.data());
    }
}

async function readAllMovies() {
    let result = await firebase.firestore().collection("movies").get();
    
    for (let document of result.docs) {
        console.log(document.id, document.data());
    }
}

readAllUsers();
readAllAdmins();
readAllMovies();




