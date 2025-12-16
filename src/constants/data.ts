
export type TeamMember = {
  id: number;
  name: string;
  title: string;
  imageSrc: string; 
  twitterUrl: string; 
};

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Max Mitchell',
    title: 'Founder',
    imageSrc: '/assets/Image (4).png', 
    twitterUrl: '#',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    title: 'Chief Real Estate Officer',
    imageSrc: '/assets/Image (5).png', 
    twitterUrl: '#',
  },
  {
    id: 3,
    name: 'David Brown',
    title: 'Head of Property Management',
    imageSrc: '/assets/Image (6).png', 
    twitterUrl: '#',
  },
  {
    id: 4,
    name: 'Michael Turner',
    title: 'Legal Counsel',
    imageSrc: '/assets/Image (7).png', 
    twitterUrl: '#',
  },
];


