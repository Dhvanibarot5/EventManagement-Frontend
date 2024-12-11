import React, { createContext, useState, useContext } from "react";

const EventContext = createContext();

export function EventProvider({ children }) {
  const [events, setEvents] = useState([]);

  const refreshEvents = async () => {
    try {
      const updatedEvents = await eventService.getAllEvents();
      setEvents(updatedEvents);
    } catch (error) {
      console.error("Error refreshing events:", error);
    }
  };

  const addEvent = (newEvent) => {
    setEvents((prev) => [...prev, { ...newEvent, id: Date.now() }]);
  };

  const updateEvent = async (eventId, updatedData) => {
    try {
      const updatedEvent = await eventService.updateEvent(eventId, updatedData);
      setEvents(events.map((event) => (event.id === eventId ? updatedEvent : event)));
      return updatedEvent;
    } catch (error) {
      console.error("Error updating event:", error);
      throw error;
    }
  };

  const deleteEvent = (eventId) => {
    setEvents((prev) => prev.filter((event) => event.id !== eventId));
  };

  const value = {
    events,
    deleteEvent,
    refreshEvents,
    addEvent,
    updateEvent,
  };

  return <EventContext.Provider value={value}>{children}</EventContext.Provider>;
}

export function useEvents() {
  return useContext(EventContext);
}
