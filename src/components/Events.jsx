import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEvents } from "../components/EventContext";
import { FiCalendar, FiMapPin, FiUsers, FiEdit2, FiTrash2, FiSearch, FiPlus } from "react-icons/fi"; // Install react-icons

function Events() {
  const { events, deleteEvent, refreshEvents, updateEvent } = useEvents();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState(() => localStorage.getItem("eventSearchTerm") || "");
  const [selectedCategory, setSelectedCategory] = useState(() => localStorage.getItem("eventSelectedCategory") || "all");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [eventToDelete, setEventToDelete] = useState(null);

  useEffect(() => {
    localStorage.setItem("eventSearchTerm", searchTerm);
    localStorage.setItem("eventSelectedCategory", selectedCategory);
  }, [searchTerm, selectedCategory]);

  useEffect(() => {
    refreshEvents();

    const intervalId = setInterval(() => {
      refreshEvents();
    }, 30000);

    return () => clearInterval(intervalId);
  }, [refreshEvents]);

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) || event.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleEdit = async (eventId) => {
    try {
      navigate(`/events/edit/${eventId}`);
    } catch (error) {
      console.error("Error navigating to edit page:", error);
    }
  };

  useEffect(() => {
    const handleEditSuccess = () => {
      refreshEvents();
    };

    window.addEventListener("eventUpdated", handleEditSuccess);
    return () => window.removeEventListener("eventUpdated", handleEditSuccess);
  }, [refreshEvents]);

  const handleDeleteClick = (event) => {
    setEventToDelete(event);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    if (eventToDelete) {
      await deleteEvent(eventToDelete.id);
      await refreshEvents();
      setShowDeleteModal(false);
      setEventToDelete(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 py-12 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white mb-6">Discover Events</h1>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 border-none"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 rounded-lg shadow-sm border-none focus:ring-2 focus:ring-indigo-500 bg-white"
            >
              <option value="all">All Categories</option>
              <option value="Technology">Technology</option>
              <option value="Business">Business</option>
              <option value="Design">Design</option>
              <option value="Marketing">Marketing</option>
              <option value="Education">Education</option>
              <option value="Entertainment">Entertainment</option>
            </select>
            <Link
              to="/events/create"
              className="inline-flex items-center px-6 py-3 bg-white text-indigo-600 rounded-lg shadow-sm hover:bg-indigo-50 transition-colors duration-200"
            >
              <FiPlus className="mr-2" />
              Create Event
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative">
                <img src={event.imageUrl || "default-event-image.jpg"} alt={event.title} className="w-full h-56 object-cover" />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-indigo-600 rounded-full text-sm font-medium">{event.category}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{event.title}</h3>

                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <FiCalendar className="w-5 h-5 mr-2" />
                    <span>
                      {event.date} at {event.time}
                    </span>
                  </div>

                  <div className="flex items-center text-gray-600">
                    <FiMapPin className="w-5 h-5 mr-2" />
                    <span>{event.location}</span>
                  </div>

                  <div className="flex items-center text-gray-600">
                    <FiUsers className="w-5 h-5 mr-2" />
                    <span>{event.maxAttendees} attendees max</span>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <button
                    onClick={() => handleEdit(event.id)}
                    className="inline-flex items-center px-4 py-2 bg-indigo-50 text-indigo-700 rounded-lg hover:bg-indigo-100 transition-colors duration-200"
                  >
                    <FiEdit2 className="w-4 h-4 mr-2" />
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteClick(event)}
                    className="inline-flex items-center px-4 py-2 bg-red-50 text-red-700 rounded-lg hover:bg-red-100 transition-colors duration-200"
                  >
                    <FiTrash2 className="w-4 h-4 mr-2" />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-16 bg-white rounded-xl shadow-sm">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 mb-4">
              <FiCalendar className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">No events found</h3>
            <p className="text-gray-500 mb-6">Try adjusting your search or filter criteria</p>
            <Link
              to="/events/create"
              className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200"
            >
              <FiPlus className="mr-2" />
              Create New Event
            </Link>
          </div>
        )}
      </div>

      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-100 text-red-600 mx-auto mb-4">
              <FiTrash2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">Delete Event</h3>
            <p className="text-gray-500 text-center mb-6">Are you sure you want to delete "{eventToDelete?.title}"? This action cannot be undone.</p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200"
              >
                Cancel
              </button>
              <button onClick={confirmDelete} className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200">
                Delete Event
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Events;
