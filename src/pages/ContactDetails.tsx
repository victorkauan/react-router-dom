import { useNavigate, useParams } from 'react-router-dom';

export function ContactDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  function handleClick() {
    console.log('Message sent successfully!');
    return navigate('/');
  }

  return (
    <div>
      <h1>Showing more information for contact: {id}</h1>
      <button onClick={handleClick}>Send message</button>
    </div>
  );
}
