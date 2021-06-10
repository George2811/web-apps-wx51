import http from './http-common';

class HobbyistsApiService {
    getAll() {
        return http.get(`/hobbyists`);
    }
    get(hobbyistId) {
        return http.get(`/hobbyists/${hobbyistId}`);
    }
    create(data) {
        return http.post(`/hobbyists`, data);
    }
    update(hobbyistId, data) {
        return http.put(`/hobbyists/${hobbyistId}`, data);
    }
    delete(hobbyistId) {
        return http.delete(`/hobbyists/${hobbyistId}`)
    }
}

export default new HobbyistsApiService()