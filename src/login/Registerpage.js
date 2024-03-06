import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database'; 
import { useNavigate } from 'react-router-dom';

import Header from '../Header';

const firebaseConfig = {
  apiKey: "AIzaSyDZ5IoswPLJEcGeza8xjO7jdoPUeIwrVxI",
  authDomain: "customer-details-290d4.firebaseapp.com",
  databaseURL: "https://customer-details-290d4-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "customer-details-290d4",
  storageBucket: "customer-details-290d4.appspot.com",
  messagingSenderId: "853715057530",
  appId: "1:853715057530:web:9f2f13e2cf7ff2e1dd74c3",
  measurementId: "G-75EXTP491W"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

const validateLoginInput = (email, password) => {
  const emailValid = email && email.trim().length > 0;
  const passwordValid = password && password.trim().length > 0;

  if (!emailValid || !passwordValid) {
    alert('Email and password are required');
    return false;
  }

  return true;
};

const validateRegisterInput = (email, password, fullName, age) => {
  const emailExpression = /^[^@]+@\w+(\.\w+)+\w$/;
  const passwordLength = password.length >= 6;
  const emailValid = email && email.trim().length > 0;
  const passwordValid = password && password.trim().length > 0;
  const fullNameValid = fullName && fullName.trim().length > 0;
  const ageValid = age && age.trim().length > 0;

  if (!emailValid || !passwordValid || !fullNameValid || !ageValid) {
    alert('All fields are required');
    return false;
  }

  if (!passwordLength) {
    alert('Password must be at least 6 characters');
    return false;
  }

  return emailExpression.test(email);
};

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [mode, setMode] = useState('login'); 

  const navigate = useNavigate();

  const handleModeChange = (newMode) => {
    setMode(newMode);
  };

  const handleLogin = () => {
    if (!validateLoginInput(email, password)) {
      return;
    }
  
    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        database.ref('users/' + user.uid).update({ last_login: firebase.database.ServerValue.TIMESTAMP });
        alert('User logged in successfully!');
        navigate('/');
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleRegister = () => {
    if (!validateRegisterInput(email, password, fullName, age)) {
      return;
    }

    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const userData = {
          email: email,
          full_name: fullName,
          age: age,
          last_login: firebase.database.ServerValue.TIMESTAMP
        };
        database.ref('users/' + user.uid).set(userData);
        alert('User created successfully!');
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div style={{  }}>
      <Header />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', maxWidth: '400px', width: '100%' }}>
          <div style={{ marginBottom: '20px' }}>
            <h2 style={{ textAlign: 'center' }}>{mode === 'login' ? 'Login' : 'Register'}</h2>
          </div>
  
          {mode === 'register' && (
            <input style={{ width: '100%', marginBottom: '10px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} type="text" id="full_name" placeholder="Full name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
          )}
          
          {mode === 'register' && (
            <input style={{ width: '100%', marginBottom: '10px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} type="text" id="age" placeholder="Enter Age" value={age} onChange={(e) => setAge(e.target.value)} />
          )}

          <input style={{ width: '100%', marginBottom: '10px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} type="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input style={{ width: '100%', marginBottom: '10px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} type="password" id="password" placeholder="New Password" value={password} onChange={(e) => setPassword(e.target.value)} />
  
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
            <button style={{ padding: '10px 20px', borderRadius: '4px', border: 'none', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer' }} onClick={mode === 'login' ? handleLogin : handleRegister}>{mode === 'login' ? 'Login' : 'Register'}</button>
            <button style={{ padding: '10px 20px', borderRadius: '4px', border: 'none', backgroundColor: '#28a745', color: '#fff', cursor: 'pointer' }} onClick={() => handleModeChange(mode === 'login' ? 'register' : 'login')}>{mode === 'login' ? 'Switch to Register' : 'Switch to Login'}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;