import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './components/CommentDetail';

const getRandomImage = () => {
    let image = `${faker.image.people()}?random=${Math.round(Math.random() * 1000)}`;
    return image;

}

const App = () => {
    return (
        <div className="ui container comments">
           
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));