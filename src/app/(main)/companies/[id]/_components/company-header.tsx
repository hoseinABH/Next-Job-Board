import Image from 'next/image';
// UI Frameworks
import { Briefcase, Mail, MapPin, Phone, Network } from 'lucide-react';
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
          <MapPin className={iconClassName} /> {company.city}
        </span>
        <span className="flex items-center  text-muted-foreground">
          <Briefcase className={iconClassName} /> فناوری اطلاعات
        </span>
        <a
          href={`tel:02125521149`}
          className="flex items-center text-muted-foreground"
        >
          <Phone className={iconClassName} />
          021-2552-1149
        </a>
        <a
          href={company.website}
          className="flex items-center text-muted-foreground"
          target="_blank"
        >
          <Network className={iconClassName} /> {company.website}
        </a>
      </div>
    </div>
  );
}
