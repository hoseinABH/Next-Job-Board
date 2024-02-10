export interface CompanyDetails {
  size: number;
  category: string;
  tel: string;
  email: string;
  address: string;
  about: string;
}

export interface Company {
  id: string;
  name: string;
  openPosition: number;
  location: string;
  details?: CompanyDetails;
}
