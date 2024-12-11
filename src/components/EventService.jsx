const API_URL = "http://localhost:5173/";

export const eventService = {
  async createEvent(eventData) {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        body: eventData, // FormData object
      });
      if (!response.ok) throw new Error("Failed to create event");
      return await response.json();
    } catch (error) {
      throw error;
    }
  },

  async updateEvent(id, eventData) {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        body: eventData,
      });
      if (!response.ok) throw new Error("Failed to update event");
      return await response.json();
    } catch (error) {
      throw error;
    }
  },

  async deleteEvent(id) {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete event");
      return true;
    } catch (error) {
      throw error;
    }
  },
};
