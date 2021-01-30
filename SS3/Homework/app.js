// Create
function createUser(data) {
    firebase.firestore().collection('users').add(data);
}

// createUser({
//     name: "Ly",
//     age: 18,
//     address: "Ha Noi",
//     status: "ế",
//     types: [
//         "dep trai",
//         "cao to"
//     ],
//     appearance: [
//         "xinh gai",
//         "cute"
//     ]
// })

// Read
async function readUserById(id) {
    let result = await firebase.firestore().collection('users').doc(id).get();
    console.log(result);
    console.log(result.data());
}

// readUserById('EDGe7d8LKiDUQPllxyYA')
async function readAllUsers() {
    let result = await firebase.firestore().collection('users').get()
    console.log(result);

    for(let document of result.docs) {
        console.log(document.id, document.data());
    }
}

// readAllUsers();
async function readUserWithCondition(field, operator, value) {
    let result = await firebase
    .firestore()
    .collection('users')
    .where(field, operator, value)
    .where("age", ">", "18")
    .get();

    console.log(result);    
    
    for(let document of result.docs) {
        console.log(document.id, document.data());
    }

}

readUserWithCondition('appearance', 'array-contains', "đẹp trai");
// operator: in, array-contains-any

// Update
function updateUser(id, data) {
    firebase.firestore().collection('users').doc(id).update(data);
}

updateUser('99J9FS55dn8rC5Zo9H5u', {
    name: "Nga",
    age: 20,
    character: [
        "dịu dàng",
        "đanh đá",
        "quạo 😌"
    ]
})

// Delete
function deleteUser() {
    firebase.firestore().collection('users').doc(id).delete();
}

// Realtime Update