import React, { useState, useEffect } from "react";
import "./../Components/Style/profile.scss";
import img from "../Assets/img0.png";

const Profile = () => {
  const [customerData, setCustomerData] = useState({});
  const [profilePic, setProfilePic] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // fetch customer data from backend
    fetch("/api/customer")
      .then((response) => response.json())
      .then((data) => setCustomerData(data))
      .catch((error) => console.error(error));
  }, []);

  const handleProfilePicChange = (event) => {
    setProfilePic(event.target.files[0]);
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleProfileUpdate = (event) => {
    event.preventDefault();
    // update customer data in backend
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
        setIsEditing(false);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="profile">
      <h1>Customer Profile</h1>
      {!isEditing && (
        <div className="display">
          {/* <img src={customerData.profilePic} alt={customerData.name} /> */}

          <img src={img} alt={customerData.name} />
          <p>{customerData.name}Shihab</p>
          <p>{customerData.email}shihab@email.com</p>
          <p>{customerData.address}Palakkad,Kerala</p>
          <p>{customerData.pinCode}678501</p>
          <button onClick={handleEditToggle}>Edit Profile</button>
        </div>
      )}
      {isEditing && (
        <form onSubmit={handleProfileUpdate}>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" defaultValue={customerData.name} />
          <br />
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" defaultValue={customerData.email} />
          <br />
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            name="address"
            defaultValue={customerData.address}
          />
          <br />
          <label htmlFor="pinCode">Pin Code:</label>
          <input
            type="text"
            name="pinCode"
            defaultValue={customerData.pinCode}
          />
          <br />
          <label htmlFor="profilePic">Profile Picture:</label>
          <input
            type="file"
            name="profilePic"
            accept="image/*"
            onChange={handleProfilePicChange}
          />
          <br />
          <button type="submit">Save Changes</button>
          <button type="button" onClick={handleEditToggle}>
            Cancel
          </button>
        </form>
      )}
    </div>
  );
};

export default Profile;
