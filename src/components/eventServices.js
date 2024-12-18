export const eventService = {
  updateEvent: async (eventId, updatedData) => {
    try {
      const response = await fetch(`${API_URL}/events/${eventId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
        throw new Error("Failed to update event");
      }

      return await response.json();
    } catch (error) {
      console.error("Error updating event:", error);
      throw error;
    }
  },
};
