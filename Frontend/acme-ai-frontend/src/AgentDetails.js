import React, { useState, useEffect } from 'react';
import { fetchAgent, deleteAgent } from './api';

const AgentDetails = ({ agentId, onEditAgent }) => {
  const [agent, setAgent] = useState(null);

  useEffect(() => {
    if (agentId) {
      loadAgent(agentId);
    }
  }, [agentId]);

  const loadAgent = async (id) => {
    const data = await fetchAgent(id);
    setAgent(data);
  };

  const handleEdit = () => {
    onEditAgent(agent);
  };

  const handleDelete = async () => {
    const confirmation = window.confirm('Are you sure you want to delete this agent?');
    if (confirmation) {
      await deleteAgent(agent.id);
      setAgent(null);
    }
  };

  if (!agent) {
    return <div>Loading...</div>;
  }

  return (
    <div className="agent-details">
      <h2>Agent Details</h2>
      <p><strong>Name:</strong> {agent.name}</p>
      <p><strong>Description:</strong> {agent.description || 'N/A'}</p>
      <p><strong>Created At:</strong> {new Date(agent.created_at).toLocaleString()}</p>
      {agent.updated_at && <p><strong>Updated At:</strong> {new Date(agent.updated_at).toLocaleString()}</p>}
      <button onClick={handleEdit}>Edit Agent</button>
      <button onClick={handleDelete}>Delete Agent</button>
    </div>
  );
};

export default AgentDetails;
