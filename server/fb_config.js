// https://firebase.google.com/docs/web/setup?authuser=0#node.js-%E3%82%A2%E3%83%97%E3%83%AA

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
// const firebase = require("firebase/app");
// https://firebase.google.com/docs/admin/setup
// https://firebase.google.com/docs/storage/admin/start

const admin = require("firebase-admin");

const serviceAccount = require("./fb_credential.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://tidal-reactor-279300.firebaseio.com",
});

const bucket = admin.storage().bucket("tidal-reactor-279300.appspot.com");
// console.log(bucket);

const srcFilename = "duck_01_800.jpg";
const destFilename = "./img";
const options = {
  destination: destFilename,
};

bucket
  .file(srcFilename)
  .download(options)
  .then(() => console.log("DL DONE!"));

// const uploadFile = "./img";
// bucket.upload(uploadFile).then(() => console.log("UL DONE!"));

// Add the Firebase products that you want to use
// require("firebase/auth");
// require("firebase/firestore");
// require("firebase/analytics");
// require("firebase/storage");

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBM-UMdy6RjiH06ehfm2XNw9v5PTtUXt8M",
//   authDomain: "tidal-reactor-279300.firebaseapp.com",
//   databaseURL: "https://tidal-reactor-279300.firebaseio.com",
//   projectId: "tidal-reactor-279300",
//   storageBucket: "tidal-reactor-279300.appspot.com",
//   messagingSenderId: "499984279746",
//   appId: "1:499984279746:web:cd497f65a47c97ebd9b35b",
//   measurementId: "G-J4DV59BLWR",
// };
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();

//ダウンロード
//https://firebase.google.com/docs/storage/web/download-files?hl=ja
// const storage = firebase.storage();

//参照をつくる
//https://firebase.google.com/docs/storage/web/create-reference?hl=ja
// const storageRef = storage.ref();
// storageRef
//   .child("duck_01_800.jpg")
//   .getDownloadURL()
//   .then((url) => console.log("URL:", url));

// module.exports = { storage };
