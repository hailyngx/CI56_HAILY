async function readMoviesWithCondition(searchString) {
    let result = await firebase
    .firestore()
    .collection('movies')
    .where("title", ">=", searchString)
    .where("title", "<=", searchString + "\uf8ff")
    .get();
    
    for(let document of result.docs) {
        console.log(document.id, document.data());
    }
}
let searchString = prompt("Enter movie title: ")
readMoviesWithCondition(searchString);
