export type LoadingKeys = 'getAllCompanies' | 'getCompanyById';

export type CompanyLoading = Record<LoadingKeys, boolean>;

export interface Company {
  id: string;
  name: string;
  address: string;
  aboutUs: string;
  city: string;
  website: string;
  geolocation: {
    latitude: number;
    longitude: number;
  };
}
