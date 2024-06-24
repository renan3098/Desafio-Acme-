const BASE_URL = 'http://localhost:8000';

export const fetchAgents = async () => {
  const response = await fetch(`${BASE_URL}/agents/`);
  return await response.json();
};

export const fetchAgent = async (agentId) => {
  const response = await fetch(`${BASE_URL}/agents/${agentId}`);
  return await response.json();
};

export const saveAgent = async (agentData) => {
  const requestOptions = {
    method: agentData.id ? 'PUT' : 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(agentData),
  };

  const response = await fetch(`${BASE_URL}/agents/${agentData.id || ''}`, requestOptions);
  return await response.json();
};

export const deleteAgent = async (agentId) => {
  const requestOptions = {
    method: 'DELETE',
  };

  const response = await fetch(`${BASE_URL}/agents/${agentId}`, requestOptions);
  return await response.json();
};
