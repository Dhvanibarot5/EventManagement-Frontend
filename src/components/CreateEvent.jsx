import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEvents } from "../components/EventContext";

function CreateEvent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [imagePreview, setImagePreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
    category: "",
    maxAttendees: "",
    image: null,
  });

  const categories = ["Technology", "Business", "Design", "Marketing", "Education", "Entertainment"];

  const { addEvent, updateEvent, events } = useEvents();

  useEffect(() => {
    if (id) {
      const eventToEdit = events.find((event) => event.id === parseInt(id));
      if (eventToEdit) {
        setFormData({
          ...eventToEdit,
          date: eventToEdit.date,
          time: eventToEdit.time,
        });
        if (eventToEdit.imageUrl) {
          setImagePreview(eventToEdit.imageUrl);
        }
      } else {
        navigate("/events");
      }
    }
  }, [id, events, navigate]);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.description.trim()) newErrors.description = "Description is required";
    if (!formData.date) newErrors.date = "Date is required";
    if (!formData.time) newErrors.time = "Time is required";
    if (!formData.location.trim()) newErrors.location = "Location is required";
    if (!formData.category) newErrors.category = "Category is required";
    if (!formData.maxAttendees || formData.maxAttendees < 1) {
      newErrors.maxAttendees = "Valid maximum attendees is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? parseInt(value) || "" : value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        // 5MB limit
        setErrors((prev) => ({ ...prev, image: "Image must be less than 5MB" }));
        return;
      }
      setFormData((prev) => ({
        ...prev,
        image: file,
      }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
      // Clear image error
      setErrors((prev) => ({ ...prev, image: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      setIsSubmitting(true);

      // Create event object
      const eventObject = {
        ...formData,
        id: id || Date.now(),
        createdAt: new Date().toISOString(),
        imageUrl: imagePreview, // Store the image preview URL
      };

      if (id) {
        updateEvent(eventObject);
      } else {
        addEvent(eventObject);
      }

      navigate("/events");
    } catch (error) {
      console.error("Error saving event:", error);
      setErrors((prev) => ({
        ...prev,
        submit: "Failed to save event. Please try again.",
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">{id ? "Edit Event" : "Create New Event"}</h1>
        <p className="mt-1 text-sm text-gray-500">{id ? "Update your event details below." : "Fill in the details below to create a new event."}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white shadow-sm rounded-lg p-6">
        {/* Image Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Event Image</label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
            <div className="space-y-1 text-center">
              {imagePreview ? (
                <div className="mb-4">
                  <img src={imagePreview} alt="Preview" className="mx-auto h-32 w-auto rounded-lg" />
                </div>
              ) : (
                <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
              <div className="flex text-sm text-gray-600">
                <label className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                  <span>Upload a file</span>
                  <input type="file" className="sr-only" accept="image/*" onChange={handleImageChange} />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">PNG, JPG, GIF up to 5MB</p>
              {errors.image && <p className="text-sm text-red-600 mt-1">{errors.image}</p>}
            </div>
          </div>
        </div>

        {/* Event Details */}
        <div className="grid grid-cols-1 gap-6">
          {/* Title Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Event Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className={`mt-1 block w-full rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${
                errors.title ? "border-red-300" : "border-gray-300"
              }`}
            />
            {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title}</p>}
          </div>

          {/* Description Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows={4}
              className={`mt-1 block w-full rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${
                errors.description ? "border-red-300" : "border-gray-300"
              }`}
            />
            {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description}</p>}
          </div>

          {/* Date and Time Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                min={new Date().toISOString().split("T")[0]}
                className={`mt-1 block w-full rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${
                  errors.date ? "border-red-300" : "border-gray-300"
                }`}
              />
              {errors.date && <p className="mt-1 text-sm text-red-600">{errors.date}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Time</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                className={`mt-1 block w-full rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${
                  errors.time ? "border-red-300" : "border-gray-300"
                }`}
              />
              {errors.time && <p className="mt-1 text-sm text-red-600">{errors.time}</p>}
            </div>
          </div>

          {/* Location Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              className={`mt-1 block w-full rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${
                errors.location ? "border-red-300" : "border-gray-300"
              }`}
            />
            {errors.location && <p className="mt-1 text-sm text-red-600">{errors.location}</p>}
          </div>

          {/* Category and Max Attendees */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className={`mt-1 block w-full rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${
                  errors.category ? "border-red-300" : "border-gray-300"
                }`}
              >
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              {errors.category && <p className="mt-1 text-sm text-red-600">{errors.category}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Maximum Attendees</label>
              <input
                type="number"
                name="maxAttendees"
                value={formData.maxAttendees}
                onChange={handleInputChange}
                min="1"
                className={`mt-1 block w-full rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${
                  errors.maxAttendees ? "border-red-300" : "border-gray-300"
                }`}
              />
              {errors.maxAttendees && <p className="mt-1 text-sm text-red-600">{errors.maxAttendees}</p>}
            </div>
          </div>
        </div>

        {/* Form Actions */}
        <div className="flex justify-end space-x-4 pt-6">
          <button
            type="button"
            onClick={() => navigate("/events")}
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            disabled={isSubmitting}
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Saving..." : id ? "Update Event" : "Create Event"}
          </button>
        </div>

        {errors.submit && <p className="text-sm text-red-600 text-center mt-4">{errors.submit}</p>}
      </form>
    </div>
  );
}

export default CreateEvent;
