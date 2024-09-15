import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './style/registerlogin.css';

const RegisterLogin = ({ onClose }) => {
  const [isRegister, setIsRegister] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isRegister) {
        // Registration logic
      } else {
        const loginResponse = await fetch(`http://localhost:3000/api/login/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        });

        if (loginResponse.ok) {
          console.log('Successful login');
          const { token, role } = await loginResponse.json();
          if (role === 'admin') {
            navigate('/dashboard');
          } else if (role === 'author') {
            navigate('/author');
          }
          onClose();
        } else {
          navigate('/');
          console.error('Error:', loginResponse.status);
        }
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const toggleForm = () => {
    setIsRegister((prevState) => !prevState);
    setFormData({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  return (
    <>
      <div className='register-form-container'>
      <div className="form-container">
  <h2>{isRegister ? 'Register' : 'Login'}</h2>
  <Form onSubmit={handleSubmit}>
    {isRegister ? (
      <>
        <Form.Group controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
      </>
    ) : (
      <>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
      </>
    )}
    <Button variant="primary" type="submit" className="mt-3">
      {isRegister ? 'Register' : 'Login'}
    </Button>
  </Form>
  <p onClick={toggleForm} style={{ cursor: 'pointer', marginTop: '10px' }}>
    {isRegister
      ? 'Already have an account? Login'
      : "Don't have an account? Register"}
  </p>
   </div>
     </div>
    </>
  
  );
};

export default RegisterLogin;