import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { eventService } from '../services/eventService';

function EventActions({ event, onDelete }) {
    const navigate = useNavigate();
    const [isDeleting, setIsDeleting] = useState(false);
    const [showConfirmDelete, setShowConfirmDelete] = useState(false);

    const handleEdit = () => {
        navigate(`/events/edit/${event.id}`);
    };

    const handleDelete = async () => {
        try {
            setIsDeleting(true);
            await eventService.deleteEvent(event.id);
            onDelete(event.id);
        } catch (error) {
            console.error('Error deleting event:', error);
        } finally {
            setIsDeleting(false);
            setShowConfirmDelete(false);
        }
    };

    return (
        <div className="flex space-x-2">
            <button
                onClick={handleEdit}
                className="px-3 py-1 text-sm bg-indigo-100 text-indigo-700 rounded-md hover:bg-indigo-200"
            >
                Edit
            </button>
            <button
                onClick={() => setShowConfirmDelete(true)}
                className="px-3 py-1 text-sm bg-red-100 text-red-700 rounded-md hover:bg-red-200"
                disabled={isDeleting}
            >
                {isDeleting ? 'Deleting...' : 'Delete'}
            </button>

           
            {showConfirmDelete && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-xl">
                        <h3 className="text-lg font-medium mb-4">Confirm Delete</h3>
                        <p className="mb-4">Are you sure you want to delete this event?</p>
                        <div className="flex justify-end space-x-3">
                            <button
                                onClick={() => setShowConfirmDelete(false)}
                                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleDelete}
                                className="px-4 py-2 text-sm bg-red-600 text-white rounded-md hover:bg-red-700"
                                disabled={isDeleting}
                            >
                                {isDeleting ? 'Deleting...' : 'Delete'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default EventActions;