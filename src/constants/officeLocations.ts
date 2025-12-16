interface OfficeLocation {
  id: number;
  type: 'All' | 'Regional' | 'International';
  heading: string;
  address: string;
  description: string;
  email: string;
  phone: string;
  city: string; 
}

const officeLocations: OfficeLocation[] = [
  {
    id: 1,
    type: 'Regional',
    heading: 'Main Headquarters',
    address: '123 Nestly Plaza, City Center, Metropolis',
    description: "Our main headquarters serve as the heart of Nestly. Located in the bustling city center, this is where our core team of experts operates, driving the excellence and innovation that define us.",
    email: 'info@Nestly.com',
    phone: '+1 (123) 456-7890',
    city: 'Metropolis',
  },
  {
    id: 2,
    type: 'International',
    heading: 'Regional Offices',
    address: '456 Urban Avenue, Downtown District, Metropolis',
    description: "Nestly's presence extends to multiple regions, each with its own dynamic real estate landscape. Discover our regional offices, staffed by local experts who understand the nuances of their respective markets.",
    email: 'info@Nestly.com',
    phone: '+1 (123) 628-7890',
    city: 'Metropolis',
  },
];