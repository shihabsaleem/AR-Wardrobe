import React, { useState, useEffect } from "react";
import { FaCamera, FaEdit, FaSave, FaTimes, FaUser, FaEnvelope, FaMapMarkerAlt, FaMapPin } from "react-icons/fa";

const Profile = () => {
  const [customerData, setCustomerData] = useState({
    name: "John Doe",
    email: "john@example.com",
    address: "123 Fashion Street",
    pinCode: "12345",
    profilePic: null
  });
  const [profilePic, setProfilePic] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);

  useEffect(() => {
    // Fetch customer data from backend
    fetch("/api/customer")
      .then((response) => response.json())
      .then((data) => setCustomerData(data))
      .catch((error) => console.error(error));
  }, []);

  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    setProfilePic(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    setPreviewUrl(null);
  };

  const handleProfileUpdate = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", event.target.name.value);
    formData.append("email", event.target.email.value);
    formData.append("address", event.target.address.value);
    formData.append("pinCode", event.target.pinCode.value);
    if (profilePic !== null) {
      formData.append("profilePic", profilePic);
    }

    fetch("/api/customer", {
      method: "PUT",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setCustomerData(data);
        setProfilePic(null);
        setPreviewUrl(null);
        setIsEditing(false);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black text-gray-900 mb-3">My Profile</h1>
          <p className="text-gray-600 text-lg">Manage your account information</p>
        </div>

        {!isEditing ? (
          // View Mode
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-primary to-primary-dark h-32"></div>

            <div className="relative px-8 pb-8">
              {/* Profile Picture */}
              <div className="flex justify-center -mt-16 mb-6">
                <div className="relative">
                  <img
                    src={customerData.profilePic || "https://via.placeholder.com/200"}
                    alt={customerData.name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl"
                  />
                  <div className="absolute bottom-0 right-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center border-4 border-white">
                    <FaUser className="text-white text-sm" />
                  </div>
                </div>
              </div>

              {/* Info Grid */}
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaUser className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 mb-1">Full Name</p>
                    <p className="text-lg font-bold text-gray-900">{customerData.name}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 mb-1">Email Address</p>
                    <p className="text-lg font-bold text-gray-900">{customerData.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 mb-1">Address</p>
                    <p className="text-lg font-bold text-gray-900">{customerData.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaMapPin className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 mb-1">Pin Code</p>
                    <p className="text-lg font-bold text-gray-900">{customerData.pinCode}</p>
                  </div>
                </div>
              </div>

              {/* Edit Button */}
              <button
                onClick={handleEditToggle}
                className="w-full py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-primary-dark hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/30 flex items-center justify-center gap-3"
              >
                <FaEdit />
                Edit Profile
              </button>
            </div>
          </div>
        ) : (
          // Edit Mode
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <form onSubmit={handleProfileUpdate} className="space-y-6">
              {/* Profile Picture Upload */}
              <div className="flex flex-col items-center mb-8">
                <div className="relative mb-4">
                  <img
                    src={previewUrl || customerData.profilePic || "https://via.placeholder.com/200"}
                    alt="Profile"
                    className="w-32 h-32 rounded-full object-cover border-4 border-primary shadow-xl"
                  />
                  <label className="absolute bottom-0 right-0 w-10 h-10 bg-primary hover:bg-primary-dark rounded-full flex items-center justify-center cursor-pointer border-4 border-white transition-colors">
                    <FaCamera className="text-white text-sm" />
                    <input
                      type="file"
                      name="profilePic"
                      accept="image/*"
                      onChange={handleProfilePicChange}
                      className="hidden"
                    />
                  </label>
                </div>
                <p className="text-sm text-gray-500">Click camera icon to change photo</p>
              </div>

              {/* Form Fields */}
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={customerData.name}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  defaultValue={customerData.email}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  defaultValue={customerData.address}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
                  Pin Code
                </label>
                <input
                  type="text"
                  name="pinCode"
                  defaultValue={customerData.pinCode}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  required
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-primary-dark hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/30 flex items-center justify-center gap-3"
                >
                  <FaSave />
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={handleEditToggle}
                  className="flex-1 py-4 bg-gray-100 text-gray-700 rounded-xl font-bold text-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-3"
                >
                  <FaTimes />
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
