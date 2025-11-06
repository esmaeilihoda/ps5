const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'API Error' }));
    throw new Error(error.message || `API Error: ${response.status}`);
  }
  return response.json();
};

export const api = {
  players: {
    getAll: async () => {
      const response = await fetch(`${API_BASE_URL}/api/players`);
      return handleResponse(response);
    },

    getById: async (id) => {
      const response = await fetch(`${API_BASE_URL}/api/players/${id}`);
      return handleResponse(response);
    },

    create: async (data) => {
      const response = await fetch(`${API_BASE_URL}/api/players`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      return handleResponse(response);
    },

    update: async (id, data) => {
      const response = await fetch(`${API_BASE_URL}/api/players/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      return handleResponse(response);
    },

    delete: async (id) => {
      const response = await fetch(`${API_BASE_URL}/api/players/${id}`, {
        method: 'DELETE',
      });
      return handleResponse(response);
    },
  },

  groups: {
    getAll: async () => {
      const response = await fetch(`${API_BASE_URL}/api/groups`);
      return handleResponse(response);
    },

    getById: async (id) => {
      const response = await fetch(`${API_BASE_URL}/api/groups/${id}`);
      return handleResponse(response);
    },

    create: async (data) => {
      const response = await fetch(`${API_BASE_URL}/api/groups`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      return handleResponse(response);
    },

    update: async (id, data) => {
      const response = await fetch(`${API_BASE_URL}/api/groups/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      return handleResponse(response);
    },

    delete: async (id) => {
      const response = await fetch(`${API_BASE_URL}/api/groups/${id}`, {
        method: 'DELETE',
      });
      return handleResponse(response);
    },
  },

  matches: {
    getAll: async () => {
      const response = await fetch(`${API_BASE_URL}/api/matches`);
      return handleResponse(response);
    },

    getById: async (id) => {
      const response = await fetch(`${API_BASE_URL}/api/matches/${id}`);
      return handleResponse(response);
    },

    getByGroupId: async (groupId) => {
      const response = await fetch(`${API_BASE_URL}/api/groups/${groupId}/matches`);
      return handleResponse(response);
    },

    create: async (data) => {
      const response = await fetch(`${API_BASE_URL}/api/matches`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      return handleResponse(response);
    },

    update: async (id, data) => {
      const response = await fetch(`${API_BASE_URL}/api/matches/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      return handleResponse(response);
    },

    delete: async (id) => {
      const response = await fetch(`${API_BASE_URL}/api/matches/${id}`, {
        method: 'DELETE',
      });
      return handleResponse(response);
    },
  },

  reports: {
    getAll: async () => {
      const response = await fetch(`${API_BASE_URL}/api/reports`);
      return handleResponse(response);
    },

    getBySlug: async (slug) => {
      const response = await fetch(`${API_BASE_URL}/api/reports/${slug}`);
      return handleResponse(response);
    },

    create: async (data) => {
      const response = await fetch(`${API_BASE_URL}/api/reports`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      return handleResponse(response);
    },

    update: async (slug, data) => {
      const response = await fetch(`${API_BASE_URL}/api/reports/${slug}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      return handleResponse(response);
    },

    delete: async (slug) => {
      const response = await fetch(`${API_BASE_URL}/api/reports/${slug}`, {
        method: 'DELETE',
      });
      return handleResponse(response);
    },
  },

  comments: {
    create: async (reportSlug, data) => {
      const response = await fetch(`${API_BASE_URL}/api/reports/${reportSlug}/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      return handleResponse(response);
    },

    delete: async (commentId) => {
      const response = await fetch(`${API_BASE_URL}/api/comments/${commentId}`, {
        method: 'DELETE',
      });
      return handleResponse(response);
    },
  },

  upload: {
    uploadFile: async (file) => {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch(`${API_BASE_URL}/api/upload`, {
        method: 'POST',
        body: formData,
      });
      return handleResponse(response);
    },
  },

  auth: {
    login: async (email, password) => {
      const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      return handleResponse(response);
    },

    logout: async () => {
      const response = await fetch(`${API_BASE_URL}/api/auth/logout`, {
        method: 'POST',
      });
      return handleResponse(response);
    },
  },
};
