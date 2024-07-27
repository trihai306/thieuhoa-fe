export interface SchemaDataType {
  '@context': string;
  '@type': string;
  name: string;
  url: string;
  '@id': string;
  logo: string;
  address: Address;
  alternateName: string;
  areaServed: string;
  correctionsPolicy: string;
  description: string;
  disambiguatingDescription: string;
  email: string;
  foundingDate: string;
  hasMap: string;
  image: string;
  longitude: string;
  latitude: string;
  legalName: string;
  location: Location;
  mainEntityOfPage: string;
  openingHoursSpecification: OpeningHoursSpecification[];
  priceRange: string;
  telephone: string;
  taxID: string;
  unnamedSourcesPolicy: string;
  vatID: string;
  sameAs: string[];
}

export interface Address {
  '@type': string;
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
}

export interface Location {
  '@type': string;
  address: Address2;
}

export interface Address2 {
  '@type': string;
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
}

export interface OpeningHoursSpecification {
  '@type': string;
  dayOfWeek: string[];
  opens: string;
  closes: string;
}
