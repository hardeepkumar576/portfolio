// Edit this file to personalize your portfolio. Do not publish private client links or confidential information.
export const profile = {
  name: 'Hardeep Kumar',
  role: 'Backend Developer & Software Engineer',
  location: 'Jaipur, Rajasthan, India',
  email: 'hardeepkumar915@gmail.com',
  phone: '+918696156798',
  github: '', // Add real GitHub profile URL, e.g. https://github.com/yourname
  linkedin: '', // Add real LinkedIn URL
  resume: '/Hardeep-Kumar-Resume.pdf',
  availability: 'Open to India & international opportunities',
};

export const experiences = [
  {
    company: 'TDI Online Services Pvt. Ltd.', role: 'PHP / Backend Developer',
    period: 'Nov 2024 — Present', place: 'Jaipur, India', current: true,
    description: 'Building business software, backend APIs, integrations and deployment workflows.',
    highlights: ['Develop ERP, CRM, HRMS, education and eCommerce applications.', 'Integrate REST APIs, payment gateways and biometric devices.', 'Support VPS / cPanel deployment and production maintenance.'],
  },
  {
    company: 'Brosis Technologies', role: 'PHP / Backend Developer',
    period: 'Oct 2023 — Oct 2024', place: 'Jaipur, India',
    description: 'Developed and maintained PHP applications, data layers and external integrations.',
    highlights: ['Built REST API integrations and optimized MySQL queries.', 'Delivered features, debugging and performance improvements.'],
  },
  {
    company: 'TDI Online Services Pvt. Ltd.', role: 'PHP / Backend Developer',
    period: 'Oct 2022 — Sep 2023', place: 'Jaipur, India',
    description: 'Worked across implementation, debugging, testing and production deployment.',
    highlights: ['Used Laravel, CodeIgniter, Core PHP, MySQL and JavaScript.', 'Contributed to full software delivery lifecycle.'],
  },
];

export const projects = [
  { number: '01', title: 'Multi-tenant CRM & HRMS', subtitle: 'TDI CRM Software', category: 'Business platforms', stack: ['CodeIgniter', 'REST APIs', 'Multi-tenancy'], summary: 'Centralized CRM and HRMS workflows with domain whitelisting and mobile-facing APIs.', detail: 'Role-based business workflows and tenant-aware architecture for multiple organizations.', accent: 'blue' },
  { number: '02', title: 'Institute Management SaaS', subtitle: 'TDI Institute Software', category: 'Education', stack: ['Laravel', 'MySQL', 'APIs'], summary: 'Tenant-specific admin panels, domain whitelisting and API support for mobile applications.', detail: 'Designed for multiple institute accounts, each with its own management environment.', accent: 'mint' },
  { number: '03', title: 'Taxi Booking Platform', subtitle: 'SGM Taxi Booking System', category: 'Booking', stack: ['PHP', 'CodeIgniter', 'REST APIs'], summary: 'Booking, driver, vehicle, trip and payment management for transport operations.', detail: 'Coordinated operational records and API endpoints across core booking workflows.', accent: 'sand' },
  { number: '04', title: 'Insurance Operations System', subtitle: 'Insurance Management', category: 'Business platforms', stack: ['PHP', 'Laravel', 'MySQL'], summary: 'Customer information, insurance policies and administrative workflows in one system.', detail: 'Structured data handling for policy-related processes and day-to-day operations.', accent: 'lavender' },
  { number: '05', title: 'PG Student Management', subtitle: 'Student & Property Operations', category: 'Management', stack: ['PHP', 'Laravel', 'MySQL'], summary: 'Room, admission, student and fee management for PG accommodation.', detail: 'Unified operational records for housing and student administration.', accent: 'mint' },
  { number: '06', title: 'Sales Management System', subtitle: 'Mittra Sales Management', category: 'Business platforms', stack: ['PHP', 'Laravel', 'Reports'], summary: 'Products, customer records, transactions and business reporting workflows.', detail: 'Brings day-to-day sales operations into an organized platform.', accent: 'blue' },
  { number: '07', title: 'Digital Visiting Cards', subtitle: 'DVC Multi-tenant Platform', category: 'SaaS', stack: ['Multi-tenancy', 'Admin', 'REST APIs'], summary: 'Tenant-specific administration, domain whitelisting and mobile APIs for digital cards.', detail: 'Designed to support separate client environments and easy integrations.', accent: 'sand' },
];

export const skills = [
  { title: 'Backend engineering', label: 'Professional experience', items: ['PHP', 'Laravel', 'CodeIgniter', 'Core PHP', 'CakePHP', 'Node.js', 'Express.js'] },
  { title: 'Data & integrations', label: 'Professional experience', items: ['MySQL', 'MongoDB', 'REST APIs', 'Payment gateways', 'Third-party integrations'] },
  { title: 'Frontend & delivery', label: 'Working knowledge', items: ['JavaScript', 'React.js', 'HTML / CSS', 'Bootstrap', 'AJAX / jQuery', 'Shopify', 'VPS / cPanel'] },
];

export const education = [
  { qualification: 'Master of Computer Applications (MCA)', institute: 'Vivekananda Global University, Jaipur', date: 'Pursuing' },
  { qualification: 'B.Sc. — Mathematics', institute: 'Pandit Deendayal Upadhyaya Shekhawati University', date: '2019' },
  { qualification: 'Web Development Certification', institute: 'Full Stack Learning', date: '2022' },
];

// Add real Python / ML projects here as you complete them. Each should include a working GitHub or demo URL.
export const aiProjects = [];
