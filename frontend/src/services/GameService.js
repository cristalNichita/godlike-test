import api from '../api/gameApi';

const GameService = {
    getAll: async (page = 1, filters = {}) => await api.get(`/games`, {
        params: { page, ...filters },
    }),
    getOne: async (id) => await api.get(`/games/${id}`),
    create: async (data) => await api.post('/games', data),
    update: async (id, data) => await api.post(`/games/${id}`, data, {
        headers: {'Content-Type': 'multipart/form-data'},
        params: {
            _method: 'PUT',
        }
    }),
    delete: async (id) => await api.delete(`/games/${id}`),
};

export default GameService;
