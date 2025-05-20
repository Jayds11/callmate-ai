import React from 'react';

export default function HomePage() {
  return (
    <main style={{ fontFamily: 'Arial, sans-serif', padding: '2rem' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>CallMate AI</h1>
      <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
        Your 24/7 AI receptionist for bookings, inquiries, and more.
      </p>
      <a
        href="https://calendly.com/jayden-magnalegacy/30min"
        style={{
          background: '#2563eb',
          color: 'white',
          padding: '0.75rem 1.5rem',
          borderRadius: '8px',
          textDecoration: 'none',
          fontSize: '1rem',
        }}
      >
        Book a Demo
      </a>
    </main>
  );
}
