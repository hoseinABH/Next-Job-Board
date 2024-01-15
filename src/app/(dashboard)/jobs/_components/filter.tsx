'use client';

import { useSearchParams } from 'next/navigation';

export default function Filter() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q');
  const location = searchParams.get('l');
  return (
    <>
      شغل {query} موقعیت مکانی {location}
    </>
  );
}
