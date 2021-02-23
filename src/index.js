import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./components/CommentDetail";
import ApprovalCard from "./components/ApprovalCard";

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
};

const App = () => {
  return (
    <div className="ui container comments">
    <ApprovalCard>
        <h4>Warning!</h4>
        Are you sure you want to do this?
    </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          getRandomImage={getRandomImage()}
          author={getRandomName()}
          getCurrentTime={getCurrentTime()}
          commentText={getRandomText()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          getRandomImage={getRandomImage()}
          author={getRandomName()}
          getCurrentTime={getCurrentTime()}
          commentText={getRandomText()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          getRandomImage={getRandomImage()}
          author={getRandomName()}
          getCurrentTime={getCurrentTime()}
          commentText={getRandomText()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
