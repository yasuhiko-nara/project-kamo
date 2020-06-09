import React from "react";

const Photo = ({ photos }) => {
  return (
    <>
      <div>
        {photos.map((url, index) => (
          <img key={index} src={url} />
        ))}
      </div>
    </>
  );
};

Photo.defaultProps = {};

export default Photo;
