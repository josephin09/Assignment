import React, { useState } from 'react';
import UserInput from './components/UserInput';
import UserRepositories from './components/UserRepositories';
import RepositoryDetails from './components/RepositoryDetails';
import UserFollowers from './components/UserFollowers';

const App = () => {
  const [currentView, setCurrentView] = useState('input');
  const [username, setUsername] = useState('');
  const [repo, setRepo] = useState(null);

  return (
    <div>
      {currentView === 'input' && <UserInput setUsername={setUsername} setCurrentView={setCurrentView} />}
      {currentView === 'repos' && <UserRepositories username={username} setCurrentView={setCurrentView} setRepo={setRepo} />}
      {currentView === 'repoDetails' && <RepositoryDetails repo={repo} setCurrentView={setCurrentView} />}
      {currentView === 'followers' &&   <UserFollowers username={username} setCurrentView={setCurrentView} setUsername={setUsername} />}
    </div>
  );
};

export default App;
