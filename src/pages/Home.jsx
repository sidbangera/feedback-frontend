import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const createRoom = () => {
    // Generates a random 6-character string (e.g., "a7b9x2")
    const randomId = Math.random().toString(36).substring(2, 8);
    
    // Instantly routes the user to their new feedback input page
    navigate(`/room/${randomId}`);
  };

  return (
    <div style={{ padding: '50px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1>Anonymous Feedback Collector</h1>
      <p style={{ color: '#555', marginBottom: '30px' }}>
        Create a secure room to receive honest, anonymous feedback from your peers.
      </p>
      <button 
        onClick={createRoom}
        style={{ 
          padding: '15px 30px', 
          fontSize: '18px', 
          backgroundColor: '#28a745', 
          color: 'white', 
          border: 'none', 
          borderRadius: '8px', 
          cursor: 'pointer',
          fontWeight: 'bold'
        }}
      >
        Create a New Room
      </button>
    </div>
  );
}