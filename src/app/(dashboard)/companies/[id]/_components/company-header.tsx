import Image from 'next/image';
// UI Frameworks
import { Briefcase, Mail, MapPin, Phone } from 'lucide-react';
// Types
import type { Company } from '@/types/company';

interface Props {
  company: Company;
}
const iconClassName = 'ml-1 w-5 h-5';

export default function CompanyHeader({ company }: Props) {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <Image src="/javascript.webp" width={80} height={80} alt={company.name} />
      <h1 className="text-2xl font-bold">{company.name}</h1>
      <div className="flex items-center flex-wrap gap-4">
        <span className="flex items-center  text-muted-foreground">
          <MapPin className={iconClassName} /> {company.location}
        </span>
        <span className="flex items-center  text-muted-foreground">
          <Briefcase className={iconClassName} /> {company.details?.category}
        </span>
        <a
          href={`tel:${company.details?.tel}`}
          className="flex items-center text-muted-foreground"
        >
          <Phone className={iconClassName} />
          {company.details?.tel}
        </a>
        <a
          href={`mailto:${company.details?.email}`}
          className="flex items-center text-muted-foreground"
        >
          <Mail className={iconClassName} /> {company.details?.email}
        </a>
      </div>
    </div>
  );
}
