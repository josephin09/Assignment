import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserRepositories = ({ username, setCurrentView, setRepo }) => {
  const [repos, setRepos] = useState([]);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userResponse = await axios.get(`https://api.github.com/users/${username}`);
        setUserInfo(userResponse.data);
        const reposResponse = await axios.get(userResponse.data.repos_url);
        setRepos(reposResponse.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, [username]);

  const handleRepoClick = (repo) => {
    setRepo(repo);
    setCurrentView('repoDetails');
  };

  return (
    <div>
      <div>
        <img src={userInfo.avatar_url} alt={userInfo.login} />
        <p>{userInfo.name}</p>
        <p>{userInfo.bio}</p>
        <button onClick={() => setCurrentView('followers')}>View Followers</button>
      </div>
      <div>
        <h3>Repositories</h3>
        <ul>
          {repos.map((repo) => (
            <li key={repo.id} onClick={() => handleRepoClick(repo)}>
              {repo.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserRepositories;
