import { Building2, Factory, Hotel, Zap, GlassWater, Cpu } from 'lucide-react';

// Municipal sewage treatment plants operated, by region. Capacity in MLD.
export const municipalLarge = {
  region: 'Uttar Pradesh & Rajasthan',
  plants: [
    { mld: 130, name: 'STP, Kanpur', client: 'UP Jal Nigam', note: 'Largest plant in our portfolio' },
    { mld: 36, name: 'UASB STP, Kanpur', client: 'UP Jal Nigam', note: '' },
    { mld: 20, name: 'STP, Kaladwas', client: 'Udaipur', note: '' },
    {
      mld: 5,
      name: 'UASB STP, Kanpur',
      client: 'UP Jal Nigam',
      note: 'Asia’s first pilot plant on UASB technology',
    },
  ],
};

export const municipalHimachal = {
  region: 'Himachal Pradesh',
  client: 'I&PH Department',
  plants: [
    { mld: '19.35', name: 'UASB STP, Lalpani', place: 'Shimla' },
    { mld: '5.15', name: 'STP, Dharamshala', place: 'Dharamshala' },
    { mld: '5.14', name: 'STP, Malyana', place: 'Shimla' },
    { mld: '4.44', name: 'STP, Sanjauli', place: 'Shimla' },
    { mld: '2.57', name: 'STP, Lanka Bekar', place: 'Kullu' },
    { mld: '2.5', name: 'STP, Bhootnath', place: 'Kullu' },
    { mld: '1.82', name: 'STP, Manali', place: 'Manali' },
    { mld: '1.40', name: 'STP, Tanda', place: 'Tanda' },
    { mld: '1.35', name: 'STP, Naina Devi', place: 'Naina Devi' },
    { mld: '1.20', name: 'STP, Ghumarwin', place: 'Ghumarwin' },
    { mld: '0.38', name: 'STP, Badah', place: 'Kullu' },
  ],
};

export const industrial = [
  { client: 'Godrej Consumer Products', site: 'Malanpur', scope: 'ETP operation', capacity: '800 m³/day' },
  {
    client: 'Siddhi Vinayak Agro Industries',
    site: 'Chhindwara (for KEC, Mumbai)',
    scope: 'Commissioning of UASB-based ETP',
    capacity: '500 m³/day',
  },
  {
    client: 'Ranbaxy Laboratories',
    site: 'Malanpur',
    scope: 'ETP operation, plus MEE, ATFD and RO',
    capacity: '100 m³/day',
  },
  { client: 'Crompton Greaves India', site: 'Malanpur', scope: 'Plant operation', capacity: '60 m³/day' },
  { client: 'Birla Hospital', site: 'Gwalior', scope: 'STP operation', capacity: '60 m³/day' },
  { client: 'Cadbury India', site: 'Malanpur (under NALCO)', scope: 'ETP / STP / RO operation', capacity: '' },
  {
    client: 'Hindustan Zinc',
    site: 'Dariba, Chanderia and Debari (under NALCO)',
    scope: 'ETP / STP / RO / WTP operation',
    capacity: '',
  },
];

export const manpowerSites = [
  {
    icon: GlassWater,
    group: 'PepsiCo',
    count: 5,
    sites: ['Kolkata', 'Kosi', 'Ranjangaon', 'Channo', 'Nalbari, Guwahati'],
  },
  { icon: Factory, group: 'JSW', count: 4, sites: ['Bhilwara', 'Dolvi', 'Jharsuguda', 'Boisar'] },
  {
    icon: Cpu,
    group: 'Wipro',
    count: 3,
    sites: ['Water Solutions, Mumbai', 'Hydraulics, Jaipur', 'GDC, Gurgaon'],
  },
  {
    icon: Hotel,
    group: 'Hotels and real estate',
    count: 5,
    sites: ['Taj, New Delhi', 'Oberoi, Worli', 'K Raheja, Airoli', 'Lodha, Pune', 'KRC, Kharadi'],
  },
  {
    icon: Zap,
    group: 'Power, metals and mining',
    count: 5,
    sites: [
      'TATA Power, Trombay',
      'Vedanta, Jharsuguda',
      'KPCL, Bangalore',
      'Usha Martin, Jharkhand',
      'Mukund Steels, Bangalore',
    ],
  },
  {
    icon: Building2,
    group: 'Other industry',
    count: 12,
    sites: [
      'RPL, Amravati',
      'Honda, Manesar',
      'Century Panel, Tirupati',
      'Nichhino, Badvel',
      'DCM, Bharuch',
      'Roha Dychem, Dahej',
      'Sun Pharma, Malanpur',
      'ADM Cryowest, Pune',
      'HCCB, Kalahasti',
      'KDC, Kolkata',
      'GDC, Gurgaon',
      'PDC-2, Pune',
    ],
  },
];

export const construction = {
  hospitals: [
    'Birla Institute of Medical Research, Gwalior',
    'Cancer Hospital & Research Institute, Gwalior',
    'Kilkari Hospital & Research Centre, Gwalior',
    'Kaul Nursing Home, Gwalior',
    'Niramay Nursing Home, Gwalior',
    'Joshi Nursing Home, Gwalior',
    'Mandhan Nursing Home, Gwalior',
  ],
  industry: [
    'Crompton Greaves Ltd., Malanpur',
    'Bindal Solvex Pvt. Ltd., Morena',
    'Venkatraman Food Specialities Ltd., Malanpur',
    'Invert Sugar Ltd., Malanpur',
  ],
};

export const clients = [
  { name: 'Godrej Consumer Products', place: 'Malanpur' },
  { name: 'Ranbaxy Laboratories', place: 'Malanpur' },
  { name: 'Crompton Greaves India', place: 'Malanpur' },
  { name: 'NALCO Eco Lab', place: 'Pune' },
  { name: 'Sun Pharma Industries', place: 'Malanpur' },
  { name: 'BIMR Hospitals', place: 'Gwalior' },
  { name: 'Siddhi Vinayak Agro Industries', place: 'Chhindwara' },
  { name: 'KEC – RPG International', place: 'Mumbai' },
  { name: 'Bindal Solvex', place: 'Morena' },
  { name: 'Kilkari Hospitals & Research Centre', place: 'Gwalior' },
  { name: 'ARCIL Catalyst', place: 'Nagada' },
  { name: 'Mondelez India Foods', place: 'Malanpur' },
  { name: 'Wipro Water Solutions', place: 'Mumbai' },
];
