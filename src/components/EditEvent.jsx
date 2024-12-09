function EditEvent() {
    const { updateEvent } = useEvents();
    const navigate = useNavigate();
    const { eventId } = useParams();

    const handleSubmit = async (formData) => {
        try {
            await updateEvent(eventId, formData);
            // Dispatch custom event to notify of successful update
            window.dispatchEvent(new Event('eventUpdated'));
            navigate('/events'); // Return to events list
        } catch (error) {
            console.error('Error updating event:', error);
        }
    };

    // ... rest of the component ...
}