import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

const getRandomImage = () => {
    let image = `${faker.image.people()}?random=${Math.round(Math.random() * 1000)}`;
    return image;

}

const App = () => {
    return (
        <div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={getRandomImage()} />
                </a>
                <div className="content">
                    <a href="/" className="author">
                    Sam
                    </a>
                    <div className="metadata">
                        <span className="date">Today at 6:00pm</span>
                    </div>
                    <div className="text">Nice blog post!</div>
                </div>
            </div>
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={getRandomImage()} />
                </a>
                <div className="content">
                    <a href="/" className="author">
                    Thomas
                    </a>
                    <div className="metadata">
                        <span className="date">Today at 6:00pm</span>
                    </div>
                    <div className="text">Nice blog post!</div>
                </div>
            </div>
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={getRandomImage()} />
                </a>
                <div className="content">
                    <a href="/" className="author">
                    Susan
                    </a>
                    <div className="metadata">
                        <span className="date">Today at 6:00pm</span>
                    </div>
                    <div className="text">Nice blog post!</div>
                </div>
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));