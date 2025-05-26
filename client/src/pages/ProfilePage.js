
import React, { useState, useEffect } from 'react';
import './ProfilePage.css';

function ProfilePage() {
  const [profile, setProfile] = useState(null);
  const [reviewCount, setReviewCount] = useState(0);

  useEffect(() => {
    // ghet profile data and review count
    const mockProfile = {
      name: "Arhan",
      email: "arhan@example.com",
      joinDate: "November 2004"
    };
    setProfile(mockProfile);
    const count = 0;
    setReviewCount(count); // change to actual count from API
  }, []);

  if (!profile) return <div>Loading...</div>;

  return (
    <div className="profile-page">
      <div className="profile-header">
        <img src="/images/profile.jpg" alt="Profile" className="profile-pic" />
        <h2>{profile.name}</h2>
      </div>
      <div className="profile-details">
        <p><strong>Email:</strong> {profile.email}</p>
        <p><strong>Member since:</strong> {profile.joinDate}</p>
        <p><strong>Reviews written:</strong> {reviewCount}</p>
      </div>
    </div>
  );
}

export default ProfilePage;
