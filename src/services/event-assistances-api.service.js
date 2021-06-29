import http from './http-common';

class EventAssistancesApiService {
    getAll(hobbyistId) {
        return http.get(`/hobbyists/${hobbyistId}/events`);
    }
    assign(hobbyistId, eventId) {
        return http.post(`/hobbyists/${hobbyistId}/events`, eventId)
    }
    unAssign(hobbyistId, eventId) {
        return http.delete(`/hobbyists/${hobbyistId}/events/${eventId}`);
    }
}

export default new EventAssistancesApiService()