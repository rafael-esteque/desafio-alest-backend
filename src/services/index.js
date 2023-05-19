const admin = require("firebase-admin");

admin.initializeApp({
  credential: admin.credential.cert("./src/alest-firebase.json")
});


const getSwords = async () => {
    const data = await admin.firestore().collection("Inventario").get().then(response => {
        const swords = response.docs.map(espada => ({...espada.data()}))
        return swords
    })
    return data
}
module.exports = getSwords