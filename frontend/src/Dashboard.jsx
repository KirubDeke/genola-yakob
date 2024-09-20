import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './style/dashboard.css';
import img from './assets/admin.svg';

const Dashboard = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [userRole, setUserRole] = useState('');
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const storedUserId = sessionStorage.getItem('userId');
    if (storedUserId) {
      setUserId(storedUserId);
      fetchUserData(storedUserId);
    }
  }, []);

  useEffect(() => {
    if (userName && userRole) {
      console.log(`Username: ${userName}`);
      console.log(`Role: ${userRole}`);
    }
  }, [userName, userRole]);

  const fetchUserData = async (userId) => {
    try {
      const response = await fetch(`https://seversidegandy.onrender.com/api/UserNameAndRole/${userId}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const userData = await response.json();
      setUserName(userData.name);
      setUserRole(userData.role);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handleLogout = () => {
    alert('Are you sure to Log Out?')
    navigate('/');
  };

  const navigateAddPost = () => {
    navigate('/add-projects');
  };

  const navigateAdminManagement = () => {
    navigate('/admin-management');
  };
  return (
    <>
    <div className='dashboard-page'>
    <div className="sidebar">
        <div className="logo-details">
          <i className="bx bxl-c-plus-plus"></i>
          <span className="logo_name">Admin Panel</span>
        </div>
        <div className="profile">
          <div className="profile-details">
            <div className="name-job">
              <div className="name">{userName}</div>
              <div className="job">{userRole}</div>
            </div>
          </div>
        </div>
        <ul className="nav-links">
        <li>
            <div className="active" >
              Dashboard
            </div>
          </li>
          <li>
              <span className="links_name" onClick={navigateAddPost}>Manage Posts</span>
          </li>
          <li>
              <span className="links_name" onClick={navigateAdminManagement}>Manage Users</span>
          </li>
          <li className="log_out">
              <span className="links_name" onClick={handleLogout}>Log out</span>
          </li>

        </ul>
        </div>
      <div className="image">
        <img src={img} alt="image" />
      </div>
    </div>
    </>
  );
};

export default Dashboard;
