import React from 'react';

const RepositoryDetails = ({ repo, setCurrentView }) => {
  return (
    <div>
      <button onClick={() => setCurrentView('repos')}>Back to Repositories</button>
      <h3>{repo.name}</h3>
      <p>{repo.description}</p>
      <p>{repo.language}</p>
      <p>{repo.stargazers_count} Stars</p>
      <p>{repo.forks_count} Forks</p>
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">View on GitHub</a>
    </div>
  );
};

export default RepositoryDetails;
