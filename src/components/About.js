import React from 'react';

const About = () => {
  return (
    <div style={{ padding: '2rem', backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <h1 style={{ color: '#333', marginBottom: '1.5rem' }}>About Us</h1>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#555' }}>
        Welcome to iNotebook! This application helps you securely manage your notes online. Whether you're a student, professional, or anyone who wants to organize thoughts and tasks, iNotebook provides a simple and intuitive platform.
      </p>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#555' }}>
        With iNotebook, you can easily:
      </p>
      <ul style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#555' }}>
        <li>Create and manage your notes.</li>
        <li>Edit or delete your notes with ease.</li>
        <li>Tag your notes for better organization.</li>
        <li>Access your notes from anywhere, securely.</li>
      </ul>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#555' }}>
        Our goal is to make note-taking as seamless as possible, so you can focus on what really matters.
      </p>
    </div>
  );
};

export default About;
