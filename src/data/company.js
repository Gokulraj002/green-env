// Company-wide facts, taken from the GET company profile.

export const company = {
  name: 'Green Environmental Technologies',
  shortName: 'GET',
  city: 'Gwalior, Madhya Pradesh',
  tagline:
    'Operation, maintenance and manpower for effluent, sewage and water treatment plants.',
  contactPerson: 'Mr. Amit Kr. Dubey',
  phones: ['+91 8435773333', '+91 9425786353'],
  // The first address is the one the enquiry form sends to.
  emails: ['office@greenenvtech.com', 'greenenvtech@rediffmail.com'],
  registeredOffice:
    '“Amit Sadan”, behind Nagarik Sahakari Bank, Azad Nagar, Morar, Gwalior (M.P.) 474006',
  workingAddress:
    'Flat No. 301, 3rd Floor, Ravi Veena Akriti Apartment, Mall Road, Morar, Gwalior',
};

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
];

export const stats = [
  { value: 498, suffix: '', label: 'people on our team' },
  { value: 130, suffix: ' MLD', label: 'largest STP we operate' },
  { value: 34, suffix: '', label: 'client sites staffed with our operators' },
  { value: 8, suffix: '', label: 'statutory registrations held' },
];

export const team = {
  total: 498,
  groups: [
    {
      title: 'Engineers',
      count: 27,
      detail: 'Mechanical 10, Electrical 8, Process 6, Instrumentation 2, Civil 1',
    },
    { title: 'Chemists', count: 15, detail: 'Water and wastewater analysis' },
    { title: 'Technicians', count: 11, detail: 'Fitters 8, Electricians 3' },
    {
      title: 'Admin & support',
      count: 5,
      detail: 'Accountants 2, Administrative Officer 1, HR Officer 1, Peon 1',
    },
  ],
};

export const registrations = [
  'Shop Act incorporation',
  'Provident Fund',
  'Employee State Insurance',
  'Income Tax PAN',
  'GST',
  'Works Contract Tax',
  'Labour License',
  'Professional Tax',
];

export const partners = [
  {
    name: 'Deccan Environmental Consultants Pvt. Ltd.',
    place: 'Pune',
    role: 'Alliance partner',
    note: '',
  },
  { name: 'Analytika Eco Lab', place: 'Gwalior', role: 'Alliance partner', note: '' },
  {
    name: 'Swastika Safetech & Associates',
    place: 'Gwalior',
    role: 'Sister concern',
    note: 'Industrial safety items, water and waste water treatment chemicals, RO cartridges, industrial pumps.',
  },
];
