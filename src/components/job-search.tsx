'use client';
import { ChangeEvent, FormEvent, useState } from 'react';
// Common components
import { Button } from './ui/button';
import { MapPin, Search } from 'lucide-react';
// hooks
import { useRouter } from 'next/navigation';
// Configs
import * as Routes from '@/config/routes';

interface Props {}
export default function JobSearch({}: Props) {
  const router = useRouter();

  const [searchValues, setSearchValues] = useState({
    query: '',
    location: '',
  });
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setSearchValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push(
      `${Routes.JOBS}?q=${searchValues.query}&l=${searchValues.location}`
    );
  }
  return (
    <div className="search-section">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row items-center gap-2">
          <div className="relative">
            <Search className="right-input-adornment" />
            <input
              type="text"
              name="query"
              placeholder="عنوان شغلی یا شرکت..."
              className="search-input"
              onChange={handleChange}
            />
          </div>
          <div className="relative">
            <MapPin className="right-input-adornment" />
            <input
              type="text"
              name="location"
              placeholder="شهر"
              className="search-input"
              onChange={handleChange}
            />
          </div>

          <Button type="submit" className="w-full md:w-auto mt-4 md:mt-0">
            جستجو در مشاغل
          </Button>
        </div>
      </form>
    </div>
  );
}
