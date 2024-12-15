import React, { useState, useEffect } from 'react';
import {
    format,
    startOfMonth,
    endOfMonth,
    eachDayOfInterval,
    isSameMonth,
    isToday,
    isSameDay,
    startOfWeek,
    endOfWeek
} from 'date-fns';

function Calendar() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

 
    const [events, setEvents] = useState([
        {
            id: 1,
            title: 'Tech Conference',
            date: new Date(2024, 2, 25),
            type: 'conference',
            color: 'bg-blue-100 text-blue-800'
        },
        {
            id: 2,
            title: 'Team Meeting',
            date: new Date(2024, 2, 20),
            type: 'meeting',
            color: 'bg-green-100 text-green-800'
        },
    ]);

    // Fetch events
    useEffect(() => {
        const fetchEvents = async () => {
            try {
                setIsLoading(true);
               
                setIsLoading(false);
            } catch (err) {
                setError('Failed to load events');
                setIsLoading(false);
            }
        };

        fetchEvents();
    }, [currentDate]); 

  
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(currentDate);
    const calendarStart = startOfWeek(monthStart);
    const calendarEnd = endOfWeek(monthEnd);

    const daysInCalendar = eachDayOfInterval({
        start: calendarStart,
        end: calendarEnd
    });

    // Navigation functions
    const previousMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const nextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    const goToToday = () => {
        setCurrentDate(new Date());
    };

  
    const getEventsForDay = (day) => {
        return events.filter(event => isSameDay(event.date, day));
    };

  
    const handleEventClick = (event) => {
        console.log('Event clicked:', event);
        
    };

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <p className="text-red-600 mb-4">{error}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                    >
                        Retry
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Calendar Header */}
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Calendar</h1>
                    <p className="mt-1 text-sm text-gray-500">
                        Manage and view your events
                    </p>
                </div>
                <div className="flex items-center space-x-4">
                    <button
                        onClick={goToToday}
                        className="px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Today
                    </button>
                    <div className="flex items-center space-x-2">
                        <button
                            onClick={previousMonth}
                            className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            <svg className="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <h2 className="text-xl font-semibold text-gray-900 min-w-[150px] text-center">
                            {format(currentDate, 'MMMM yyyy')}
                        </h2>
                        <button
                            onClick={nextMonth}
                            className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            <svg className="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Calendar Grid */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
                {/* Days of Week Header */}
                <div className="grid grid-cols-7 gap-px bg-gray-200 border-b">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                        <div key={day} className="px-4 py-2 text-sm font-semibold text-gray-900 bg-gray-100">
                            {day}
                        </div>
                    ))}
                </div>

                {/* Calendar Days */}
                <div className="grid grid-cols-7 gap-px bg-gray-200">
                    {daysInCalendar.map((day) => {
                        const dayEvents = getEventsForDay(day);
                        const isCurrentMonth = isSameMonth(day, currentDate);

                        return (
                            <div
                                key={day.toString()}
                                className={`min-h-[120px] bg-white ${!isCurrentMonth ? 'bg-gray-50' : ''
                                    } hover:bg-gray-50 transition-colors duration-200`}
                            >
                                <div className="px-3 py-2">
                                    <div className={`text-sm ${isToday(day)
                                            ? 'bg-indigo-600 text-white w-6 h-6 rounded-full flex items-center justify-center'
                                            : !isCurrentMonth
                                                ? 'text-gray-400'
                                                : 'text-gray-900'
                                        }`}>
                                        {format(day, 'd')}
                                    </div>
                                    <div className="mt-2 space-y-1">
                                        {dayEvents.map((event) => (
                                            <div
                                                key={event.id}
                                                onClick={() => handleEventClick(event)}
                                                className={`px-2 py-1 text-xs rounded-md ${event.color} cursor-pointer truncate hover:opacity-75 transition-opacity duration-200`}
                                                title={event.title}
                                            >
                                                {event.title}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Event Legend */}
            <div className="mt-6 flex items-center space-x-4">
                <div className="flex items-center">
                    <span className="w-3 h-3 bg-blue-100 rounded-full mr-2"></span>
                    <span className="text-sm text-gray-600">Conference</span>
                </div>
                <div className="flex items-center">
                    <span className="w-3 h-3 bg-green-100 rounded-full mr-2"></span>
                    <span className="text-sm text-gray-600">Meeting</span>
                </div>
            </div>
        </div>
    );
}

export default Calendar;