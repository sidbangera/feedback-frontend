import { useParams, useSearchParams, Link } from 'react-router-dom';

export default function Dashboard() {
    
  const { roomId } = useParams();

  
  const [searchParams] = useSearchParams();
  const roomName = searchParams.get('name') || 'Unnamed Room';

  
  const publicLink = `${window.location.origin}/room/${roomId}`;

  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #ccc', paddingBottom: '20px', marginBottom: '20px' }}>
        <div>
          <h1 style={{ margin: 0 }}>{roomName}</h1>
          <p style={{ color: '#666', margin: '5px 0 0 0' }}>Dashboard ID: {roomId}</p>
        </div>
        
        
        <Link to="/" style={{ textDecoration: 'none', color: '#007bff' }}>+ Create New Room</Link>
      </div>

     
      <div style={{ backgroundColor: '#e9ecef', padding: '15px', borderRadius: '8px', marginBottom: '30px' }}>
        <strong>Share this link to collect feedback: </strong><br/>
        <a href={publicLink} target="_blank" rel="noreferrer" style={{ color: '#28a745', fontWeight: 'bold' }}>
          {publicLink}
        </a>
      </div>

      
      <h2>Collected Feedback</h2>
      <div style={{ padding: '20px', border: '1px dashed #ccc', borderRadius: '8px', textAlign: 'center', color: '#888' }}>
        No feedback yet. Share the green link above to get started!
      </div>
      
    </div>
  );
}