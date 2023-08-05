import React from "react";
import Navbar from "../components/common/Navbar";
import Profile from "../components/features/User/Profile";
import Footer from "../components/common/Footer";
// import "../styles/profile.scss";

const UserProfilePage = () => {
    return (
        <div>
            <Navbar />
            <Profile />
            <Footer />
        </div>
    );
};

export default UserProfilePage;
