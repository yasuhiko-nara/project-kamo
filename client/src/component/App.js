import React, { useEffect, useState, useRef } from "react";
import Photo from "./Photo";
import { storage } from "../fb_config";
import styles from "./App.css";
// import { findAllByDisplayValue } from "@testing-library/react";

const App = () => {
  const inputEL = useRef(null);
  const initialState = {
    species: "",
    gender: "",
    place: "",
    description: "",
    url: "testestestes!!!!!!",
    message: "",
    photos: [],
  };
  const [state, setState] = useState(initialState);
  const { place, description, url, species, gender, message, photos } = state;

  // useEffect(setState());

  const dlPhoto = (name) => {
    return storage
      .ref("kamo")
      .child(name)
      .getDownloadURL()
      .then((url) => {
        setState({ ...state, url });
        return { ...state, url };
      });
  };

  const selectPhotos = () => {
    const query = `query{
    SelectPhotos (
        species: "${state.species}",
        gender: "${state.gender}",
        description: "${state.description}"
        place:"${state.place}"
      )
      {
        species,
        gender,
        description,
        place,
        url
      }
    }`;
    const opt = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query,
      }),
    };

    fetch("/graphql", opt)
      .then((r) => r.json())
      .then((data) => {
        const selectedPhotos = data.data.SelectPhotos;
        const urlArray = selectedPhotos.map((photo) => photo.url);
        setState({ ...state, photos: urlArray });
      });
  };

  const upload = (state) => {
    console.log(state);
    const query = `mutation
    {
      AddAPhoto (input:
        {
        species: "${state.species}",
        gender: "${state.gender}",
        description: "${state.description}"
        place:"${state.place}"
        url:"${state.url}"
        }
      )
    }`;
    const opt = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query,
      }),
    };

    fetch("/graphql", opt)
      .then((r) => r.json())
      .then((data) => setState({ ...state, message: data.data.AddAPhoto }));
  };

  const ulPhoto = (e) => {
    const img = e.target.files[0];
    storage
      .ref(`/kamo/${img.name}`)
      .put(img)
      .then(() => {
        console.log("uploaded!");
        dlPhoto(img.name).then((currentState) => {
          // console.log("state", state);
          upload(currentState);
        });
      });
  };

  return (
    <>
      <input className="hide" onChange={ulPhoto} ref={inputEL} type="file" />
      <h2>1. データベースにカモの写真をuploadする</h2>
      <h2>2. データベースのカモの写真を探す</h2>

      <div>
        場所
        <input
          value={place}
          onChange={(e) => setState({ ...state, place: e.target.value })}
        />
      </div>
      <div>
        説明
        <input
          value={description}
          onChange={(e) => setState({ ...state, description: e.target.value })}
        />
      </div>
      <div>
        種類
        <input
          value={species}
          onChange={(e) => setState({ ...state, species: e.target.value })}
        />
      </div>
      <div>
        性別
        <input
          value={gender}
          onChange={(e) => setState({ ...state, gender: e.target.value })}
        />
      </div>

      <button onClick={selectPhotos}>探す</button>
      <button onClick={() => setState(initialState)}>条件クリア</button>

      <button onClick={() => inputEL.current.click()}>アップロード</button>
      <p>写真を保存したらここにメッセージが出ます。 => {message}</p>
      <Photo photos={state.photos} />
    </>
  );
};

export default App;
