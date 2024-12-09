const API_URL = 'http://localhost:5173/'; // Replace with your actual API URL

export const eventService = {
    // Create new event
    async createEvent(eventData) {
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                body: eventData // FormData object
            });
            if (!response.ok) throw new Error('Failed to create event');
            return await response.json();
        } catch (error) {
            throw error;
        }
    },

    // Update existing event
    async updateEvent(id, eventData) {
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: 'PUT',
                body: eventData
            });
            if (!response.ok) throw new Error('Failed to update event');
            return await response.json();
        } catch (error) {
            throw error;
        }
    },

    // Delete event
    async deleteEvent(id) {
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: 'DELETE'
            });
            if (!response.ok) throw new Error('Failed to delete event');
            return true;
        } catch (error) {
            throw error;
        }
    }
};
