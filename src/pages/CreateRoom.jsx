import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreateRoom() {
  const [roomName, setRoomName] = useState('');
  
  const navigate = useNavigate();

  const handleCreate = (e) => {
    e.preventDefault(); 
    
    if (!roomName.trim()) return; 

    const roomId = Math.random().toString(36).substring(2, 9);

    navigate(`/dashboard/${roomId}?name=${encodeURIComponent(roomName)}`);
  };

  return (
    <div style={{ padding: '50px', maxWidth: '400px', margin: '0 auto', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h2>Create a Feedback Room</h2>
      <p style={{ color: '#555', marginBottom: '20px' }}>
        Generate a private space to collect anonymous responses.
      </p>
      
      <form onSubmit={handleCreate} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input
          type="text"
          placeholder="e.g., Portfolio Review"
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
          style={{ padding: '12px', fontSize: '16px', borderRadius: '6px', border: '1px solid #ccc' }}
        />
        <button
          type="submit"
          style={{ 
            padding: '12px', 
            fontSize: '16px', 
            backgroundColor: '#28a745', 
            color: 'white', 
            border: 'none', 
            borderRadius: '6px', 
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Generate Room Links
        </button>
      </form>
    </div>
  );
}