import React, { useState } from "react";
import { useEvents } from "../components/EventContext"; // Assuming you have an EventContext for managing events
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import Login from "./Login"; // Ensure you import the Login component
import { toast } from "react-toastify"; // Import toast for notifications

function Dashboard() {
  const { events } = useEvents(); // Get events from context
  const navigate = useNavigate(); // Initialize useNavigate
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  // Function to show login modal
  const showLoginModal = () => {
    setLoginModalOpen(true);
  };

  // Function to handle user login
  const handleLogin = () => {
    // Simulated user credentials
    const validEmail = "test@example.com";
    const validPassword = "password123";

    // Check if the entered credentials match the valid ones
    if (credentials.email === validEmail && credentials.password === validPassword) {
      toast.success("Login successful!");
      setLoginModalOpen(false);
      navigate("/events"); // Redirect to main event page
    } else {
      toast.error("Invalid email or password. Please try again.");
    }
  };

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Button to open login modal */}
      <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
        <button
          onClick={showLoginModal}
          className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
        >
          View All Events
        </button>
      </div>

      {/* Login Modal */}
      {isLoginModalOpen && (
        <div className="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="modal-content bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold">Login</h2>
            <Login onLogin={handleLogin} credentials={credentials} handleInputChange={handleInputChange} />{" "}
            {/* Pass handleLogin and input change handler to Login component */}
            <button onClick={() => setLoginModalOpen(false)} className="mt-4 text-red-500">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
