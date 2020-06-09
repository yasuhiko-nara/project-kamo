// https://firebase.google.com/docs/web/setup?authuser=0#node.js-%E3%82%A2%E3%83%97%E3%83%AA

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";
// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/analytics";
import "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBM-UMdy6RjiH06ehfm2XNw9v5PTtUXt8M",
  authDomain: "tidal-reactor-279300.firebaseapp.com",
  databaseURL: "https://tidal-reactor-279300.firebaseio.com",
  projectId: "tidal-reactor-279300",
  storageBucket: "tidal-reactor-279300.appspot.com",
  messagingSenderId: "499984279746",
  appId: "1:499984279746:web:cd497f65a47c97ebd9b35b",
  measurementId: "G-J4DV59BLWR",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
export const storage = firebase.storage();

//ダウンロード
//https://firebase.google.com/docs/storage/web/download-files?hl=ja

//参照をつくる
//https://firebase.google.com/docs/storage/web/create-reference?hl=ja
// export const storageRef = storage.ref();
// storageRef
//   .child("duck_01_800.jpg")
//   .getDownloadURL()
//   .then((url) => console.log("URL:", url));

// 認証エラー
// https://firebase.google.com/docs/storage/web/handle-errors?hl=ja
// テスト用に認証権限を緩くする必要がある
// https://coders-shelf.com/react-firebase-image-upload/

// アップロード
// ルートには保存できない。refで保存ディレクトリを指定する必要あり
// https://firebase.google.com/docs/storage/web/upload-files?hl=ja
