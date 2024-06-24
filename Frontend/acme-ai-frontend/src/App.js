import React, { useState } from 'react';
import './styles.css';
import AgentList from './AgentList';
import AgentDetails from './AgentDetails';
import AgentForm from './AgentForm';

function App() {
  const [selectedAgentId, setSelectedAgentId] = useState(null);

  const handleSelectAgent = (agentId) => {
    setSelectedAgentId(agentId);
  };

  const handleAddAgent = () => {
    setSelectedAgentId(null); 
  };

  const handleSaveAgent = () => {
    setSelectedAgentId(null);
  };

  return (
    <div className="App">
      <header>
        <h1>Acme AI</h1>
      </header>
      <main className="container">
        <AgentList onSelectAgent={handleSelectAgent} onAddAgent={handleAddAgent} />
        {selectedAgentId ? (
          <AgentDetails agentId={selectedAgentId} onEditAgent={() => setSelectedAgentId(selectedAgentId)} />
        ) : (
          <AgentForm agent={null} onSaveAgent={handleSaveAgent} />
        )}
      </main>
    </div>
  );
}

export default App;
