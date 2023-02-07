import { useParams } from 'react-router-dom';

export function ContactDetails() {
  const { id } = useParams();

  return (
    <div>
      <h1>Showing more information for contact: {id}</h1>
    </div>
  );
}
