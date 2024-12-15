import React from "react";
import { useEvents } from "../components/EventContext";
import { Link } from "react-router-dom";
import { format } from "date-fns";

function Dashboard() {
  const { events } = useEvents();

  // Calculate statistics
  const totalEvents = events.length;
  const upcomingEvents = events.filter((event) => new Date(event.date) > new Date()).length;
  const categories = [...new Set(events.map((event) => event.category))];
  const totalAttendees = events.reduce((sum, event) => sum + parseInt(event.maxAttendees || 0), 0);

  // Get upcoming events sorted by date
  const sortedUpcomingEvents = events
    .filter((event) => new Date(event.date) > new Date())
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 6); 

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-600 to-indigo-600 pb-32 overflow-hidden">
        <div className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full" aria-hidden="true">
          <div className="relative h-full max-w-7xl mx-auto">
            <svg
              className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
              width="404"
              height="784"
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="4" height="4" className="text-indigo-500" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="404" height="784" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
            </svg>
            <svg
              className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
              width="404"
              height="784"
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="4" height="4" className="text-indigo-500" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="404" height="784" fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)" />
            </svg>
          </div>
        </div>

        {/* Hero content */}
        <div className="relative pt-6 pb-16 sm:pb-24">
          <div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block">Welcome to Your</span>
                <span className="block text-indigo-200">Event Dashboard</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-indigo-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Manage your events and track their performance all in one place. Create, organize, and monitor your events with ease.
              </p>
              <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                <div className="rounded-md shadow">
                  <Link
                    to="/events/create"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-800 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Create New Event
                  </Link>
                </div>
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                  <Link
                    to="/events"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                  >
                    View All Events
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Overview */}
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-gradient-to-r from-purple-600 to-indigo-600"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-4">
                <div className="p-6 text-center border-b border-gray-100 sm:border-0 sm:border-r">
                  <p className="text-sm font-medium text-gray-500 truncate">Total Events</p>
                  <p className="mt-2 text-3xl font-semibold text-gray-900">{totalEvents}</p>
                </div>
                <div className="p-6 text-center border-b border-gray-100 sm:border-0 sm:border-r">
                  <p className="text-sm font-medium text-gray-500 truncate">Upcoming Events</p>
                  <p className="mt-2 text-3xl font-semibold text-gray-900">{upcomingEvents}</p>
                </div>
                <div className="p-6 text-center border-b border-gray-100 sm:border-0 sm:border-r">
                  <p className="text-sm font-medium text-gray-500 truncate">Categories</p>
                  <p className="mt-2 text-3xl font-semibold text-gray-900">{categories.length}</p>
                </div>
                <div className="p-6 text-center">
                  <p className="text-sm font-medium text-gray-500 truncate">Total Attendees</p>
                  <p className="mt-2 text-3xl font-semibold text-gray-900">{totalAttendees}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative -mt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
    </div>
  );
}

export default Dashboard;
