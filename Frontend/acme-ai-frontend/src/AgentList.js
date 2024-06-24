import React, { useState, useEffect } from 'react';
import { fetchAgents } from './api';

const AgentList = ({ onSelectAgent, onAddAgent }) => {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    loadAgents();
  }, []);

  const loadAgents = async () => {
    const data = await fetchAgents();
    setAgents(data);
  };

  return (
    <div className="agents-list">
      <h2>Agent List</h2>
      <ul>
        {agents.map(agent => (
          <li key={agent.id} onClick={() => onSelectAgent(agent.id)}>
            {agent.name}
          </li>
        ))}
      </ul>
      <button onClick={onAddAgent}>Add Agent</button>
    </div>
  );
};

export default AgentList;
