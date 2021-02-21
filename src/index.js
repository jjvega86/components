import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./components/CommentDetail";

const getRandomImage = () => {
  let image = `${faker.image.people()}?random=${Math.round(
    Math.random() * 1000
  )}`;
  return image;
};

const getCurrentTime = () => {
  return new Date().toLocaleTimeString();
};

const getRandomText = () => {
  let text = `${faker.lorem.text()}`;
  return text;
};

const getRandomName = () => {
    let name = `${faker.name.firstName()}`;
    return name;

}

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        getRandomImage={getRandomImage()}
        author={getRandomName()}
        getCurrentTime={getCurrentTime()}
        commentText={getRandomText()}
      />
      <CommentDetail
        getRandomImage={getRandomImage()}
        author={getRandomName()}
        getCurrentTime={getCurrentTime()}
        commentText={getRandomText()}
      />
      <CommentDetail
        getRandomImage={getRandomImage()}
        author={getRandomName()}
        getCurrentTime={getCurrentTime()}
        commentText={getRandomText()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
