import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

import './card.css';

const Parent = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://www.reddit.com/r/reactjs.json');
        setPosts(response.data.data.children);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="reddit-posts">
      {posts.map((post, index) => {
        const { title,  url, score } = post.data;

        return (
          <Card
            key={index}
            title={title}
            
            url={url}
            score={score}
          />
        );
      })}
    </div>
  );
};

export default Parent;
