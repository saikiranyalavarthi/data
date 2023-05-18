import React from 'react';

const Card = ({ title, selfTextHTML, url, score }) => {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <div
        className="card-content"
        dangerouslySetInnerHTML={{ __html: selfTextHTML }}
      />
      <a className="card-url" href={url} target="_blank" rel="noopener noreferrer">
        View Post
      </a>
      <div className="card-score">Score: {score}</div>
    </div>
  );
};

export default Card;
