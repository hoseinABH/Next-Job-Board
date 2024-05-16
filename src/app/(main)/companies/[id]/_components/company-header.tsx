import Image from 'next/image';
// UI Frameworks
import { Briefcase, MapPin, Network, Phone } from 'lucide-react';
// Types
import type { Company } from '@/types/company';

interface Props {
  company: Company;
}
const iconClassName = 'ml-1 w-5 h-5';

export default function CompanyHeader({ company }: Props) {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Image
        // src={company.logo}
        src="/companies/alibaba.webp"
        className="rounded-sm drop-shadow-md"
        width={60}
        height={60}
        alt={company.title}
      />
      <h1 className="text-2xl font-bold">{company.title}</h1>
      <div className="flex flex-wrap items-center gap-4">
        <span className="flex items-center  text-muted-foreground">
          <MapPin className={iconClassName} /> {company.city ?? '-'}
        </span>
        <span className="flex items-center  text-muted-foreground">
          <Briefcase className={iconClassName} /> {company.category ?? '-'}
        </span>
        <a href={`tel:${company.phoneNumber}`} className="flex items-center text-muted-foreground">
          <Phone className={iconClassName} />
          {company.phoneNumber ?? '-'}
        </a>
        <a
          href={company.website ?? 'nowhere.com'}
          className="flex items-center text-muted-foreground"
          target="_blank"
        >
          <Network className={iconClassName} /> {company.website}
        </a>
      </div>
    </div>
  );
}
