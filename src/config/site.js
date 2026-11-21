// Central site configuration. Edit values here; components read from this file.
// NOTE: contact details and social URLs below are PLACEHOLDERS - replace with real ones.
// Any contact/social entry set to an empty string is hidden automatically.

export const company = {
  name: 'Prelvia Group',
  tagline: 'Building Ideas. Creating Value. Shaping Possibilities.',
  footerBlurb:
    'A diversified company built around innovation, creativity, skill development and service delivery.',
};

export const contact = {
  email: 'info@prelviagroup.com', // placeholder
  phone: '+234 000 000 0000', // placeholder
  whatsapp: '234000000000', // placeholder: digits only, with country code
};

export const social = [
  { id: 'facebook', label: 'Facebook', url: '#' }, // placeholders
  { id: 'instagram', label: 'Instagram', url: '#' },
  { id: 'linkedin', label: 'LinkedIn', url: '#' },
  { id: 'x', label: 'X', url: '#' },
];

// Set to a URL (e.g. Formspree, or your own API) to send form submissions.
// Left empty, the form validates but does NOT send anything.
export const formEndpoint = '';

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Businesses', href: '#businesses' },
  { label: 'Our Vision', href: '#vision' },
  { label: 'Contact', href: '#contact' },
];

export const divisions = [
  {
    id: 'tech',
    name: 'Prelvia Tech',
    description: 'Technology solutions and IT services.',
    image: '/images/tech.jpg',
    alt: 'Developer workstation showing code on a laptop',
    services: ['Software development', 'IT support', 'Digital solutions'],
  },
  {
    id: 'academy',
    name: 'Prelvia Academy',
    description: 'Training and skills development.',
    image: '/images/academy.jpg',
    alt: 'Students learning together in a training classroom',
    services: ['Professional training', 'Skills development', 'Practical learning'],
  },
  {
    id: 'fashion',
    name: 'Prelvia Fashion',
    description: 'Style, creativity and fashion solutions.',
    image: '/images/fashion.jpg',
    alt: 'Clothing collection on a rail in a fashion studio',
    services: ['Fashion design', 'Clothing collections', 'Creative styling'],
  },
  {
    id: 'print',
    name: 'Prelvia Print',
    description: 'Printing, branding and visual production.',
    image: '/images/print.jpg',
    alt: 'Large-format printer in a production environment',
    services: ['Printing', 'Branding materials', 'Visual production'],
  },
];

export const about = {
  title: 'Who We Are',
  paragraphs: [
    'Prelvia Group is a diversified company built around innovation, creativity, skill development and service delivery.',
    'Operating across technology, education, fashion and print, we bring ideas, expertise and creativity together to provide practical solutions and meaningful experiences.',
  ],
  image: '/images/about.jpg',
  alt: 'Modern corporate building with glass facade',
};

export const vision = {
  title: 'Our Vision',
  text: 'To build a dynamic and impactful enterprise that transforms ideas into solutions, empowers people through knowledge and creativity, and delivers value across industries.',
};

export const mission = {
  title: 'Our Mission',
  text: 'To provide quality services, practical learning opportunities, innovative solutions and creative products through our diverse business divisions.',
};
