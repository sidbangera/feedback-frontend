import { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function FeedbackInput() {
  
  const { roomId } = useParams();

  const [feedback, setFeedback] = useState('');
  
  const [isSubmitted, setIsSubmitted] = useState(false);

 const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!feedback.trim()) return; 

    try {
      // 2. The Real Backend Call! 
      // We pause and wait for the fetch to deliver the package to port 5000
      const response = await fetch(`http://localhost:5000/api/feedback/${roomId}`, {
        method: 'POST', // We are WRITING data
        headers: {
          'Content-Type': 'application/json', // Telling the waiter to expect JSON
        },
        body: JSON.stringify({ 
          feedbackText: feedback // The actual text the user typed
        }) 
      });

      // 3. If the backend replies with a success status (200 OK)
      if (response.ok) {
        setIsSubmitted(true); // Show the Thank You screen!
      } else {
        alert("Something went wrong saving your feedback.");
      }

    } catch (error) {
      console.error("Network error:", error);
      alert("Could not connect to the server.");
    }
  };


  if (isSubmitted) {
    return (
      <div style={{ padding: '50px', textAlign: 'center', fontFamily: 'sans-serif' }}>
        <h2>Thank You!</h2>
        <p style={{ color: '#555' }}>Your anonymous feedback has been sent safely.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '40px', maxWidth: '500px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h2 style={{ textAlign: 'center' }}>Submit Anonymous Feedback</h2>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '30px' }}>
        Room ID: <strong>{roomId}</strong><br/>
        <em>Your identity is completely hidden.</em>
      </p>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <textarea
          rows="6"
          placeholder="Type your honest thoughts here..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          style={{ 
            padding: '15px', 
            fontSize: '16px', 
            borderRadius: '8px', 
            border: '1px solid #ccc', 
            resize: 'vertical' 
          }}
        />
        <button
          type="submit"
          style={{ 
            padding: '14px', 
            fontSize: '16px', 
            backgroundColor: '#007bff', 
            color: 'white', 
            border: 'none', 
            borderRadius: '8px', 
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Send Feedback
        </button>
      </form>
    </div>
  );
}