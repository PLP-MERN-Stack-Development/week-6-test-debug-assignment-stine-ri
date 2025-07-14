import React, { useState } from 'react';
import BugForm from './Components/BugForm';
import BugList from './Components/BugList';
import ErrorBoundary from './ErrorBoundary';
import './App.css'; 
function App() {
  const [bugs, setBugs] = useState([]);

  const addBug = (newBug) => {
    setBugs([...bugs, { ...newBug, _id: Date.now() }]);
  };

  const deleteBug = (id) => {
    setBugs(bugs.filter(bug => bug._id !== id));
  };

  return (
    <ErrorBoundary>
      <div className="max-w-md mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-6">🐞 Bug Tracker</h1>
        <BugForm onSubmit={addBug} />
        <BugList bugs={bugs} onDelete={deleteBug} />
      </div>
    </ErrorBoundary>
  );
}

export default App;