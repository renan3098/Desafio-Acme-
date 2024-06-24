import React, { useState, useEffect } from 'react';
import { getAgent, saveAgent } from './api';

const AgentForm = ({ agentId, onSaveAgent }) => {
  const [formData, setFormData] = useState({ name: '', description: '' });

  useEffect(() => {
    if (agentId) {
      fetchAgent(agentId);
    }
  }, [agentId]);

  const fetchAgent = async (id) => {
    try {
      const response = await getAgent(id);
      const { name, description } = response.data;
      setFormData({ name, description });
    } catch (error) {
      console.error('Error fetching agent:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const agentData = {
      id: agentId,
      name: formData.name,
      description: formData.description,
    };
    await saveAgent(agentData);
    onSaveAgent();
  };

  return (
    <div className="agent-form">
      <h2>{agentId ? 'Edit Agent' : 'Add Agent'}</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" value={formData.description} onChange={handleChange}></textarea>
        <button type="submit">{agentId ? 'Save Changes' : 'Add Agent'}</button>
      </form>
    </div>
  );
};

export default AgentForm;