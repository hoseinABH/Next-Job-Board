import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function useHashValue() {
  const params = useParams();
  const [hash, setHash] = useState('');
  useEffect(() => {
    setHash(window.location.hash);
  }, [params]);
  return hash;
}
