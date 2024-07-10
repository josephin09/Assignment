import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserFollowers = ({ username, setCurrentView, setUsername }) => {
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    const fetchFollowers = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/${username}/followers`);
        setFollowers(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFollowers();
  }, [username]);

  const handleFollowerClick = (follower) => {
    setUsername(follower.login);
    setCurrentView('repos');
  };

  return (
    <div>
      <button onClick={() => setCurrentView('repos')}>Back to Repositories</button>
      <h3>Followers</h3>
      <ul>
        {followers.map((follower) => (
          <li key={follower.id} onClick={() => handleFollowerClick(follower)}>
            <img src={follower.avatar_url} alt={follower.login} />
            {follower.login}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserFollowers;

