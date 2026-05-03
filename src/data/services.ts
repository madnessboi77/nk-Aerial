export interface Service {
  slug: string;
  title: string;
  description: string;
  bullets: string[];
  details: {
    title: string;
    content: string;
  }[];
}

export const services: Service[] = [
  {
    slug: 'residential-development',
    title: 'Residential Development',
    description: 'We develop modern residential properties focused on maximizing comfort, structural integrity, and family-friendly living spaces.',
    bullets: ['Urban Apartment Complexes', 'High-Rise Residential Towers', 'Family-Focused Layouts'],
    details: [
      { title: 'Project Sourcing', content: 'Identifying prime urban locations for residential growth.' },
      { title: 'Design & Architecture', content: 'Creating contemporary residential facades and efficient apartment plans.' },
      { title: 'Construction Management', content: 'Ensuring strict quality control and durable building practices.' },
      { title: 'Handover', content: 'Delivering completed apartments ready for modern living.' }
    ]
  },
  {
    slug: 'commercial-development',
    title: 'Commercial Development',
    description: 'We build professional commercial spaces designed to provide businesses with a strong corporate identity and functional work environments.',
    bullets: ['Corporate Office Spaces', 'Mixed-Use Developments', 'Retail Environments'],
    details: [
      { title: 'Strategic Location', content: 'Positioning commercial projects in high-visibility business districts.' },
      { title: 'Corporate Identity', content: 'Designing distinctive glass facades and professional entry experiences.' },
      { title: 'Functional Planning', content: 'Optimizing floor plates for modern workplace requirements.' },
      { title: 'Infrastructure', content: 'Ensuring reliable power, safety, and operational facilities.' }
    ]
  },
  {
    slug: 'project-planning',
    title: 'Project Planning',
    description: 'We provide comprehensive planning services, evaluating feasibility, navigating regulatory approvals, and ensuring project viability.',
    bullets: ['Feasibility Studies', 'Regulatory Approvals', 'Conceptual Design'],
    details: [
      { title: 'Land Evaluation', content: 'Assessing site potential and development capacity.' },
      { title: 'Financial Modeling', content: 'Structuring project costs and anticipated long-term value.' },
      { title: 'Design Feasibility', content: 'Testing architectural concepts against practical constraints.' },
      { title: 'City Approvals', content: 'Managing the process of securing required development permits.' }
    ]
  },
  {
    slug: 'sales-client-support',
    title: 'Sales & Client Support',
    description: 'We guide clients through the entire property acquisition process, offering clear communication, reliable documentation, and post-handover assistance.',
    bullets: ['Transparent Transactions', 'Documentation Support', 'Post-Handover Assistance'],
    details: [
      { title: 'Client Consultation', content: 'Helping clients select the right property for their needs.' },
      { title: 'Financial Guidance', content: 'Providing clarity on payment structures and processes.' },
      { title: 'Legal Documentation', content: 'Ensuring smooth, transparent, and accurate property transfers.' },
      { title: 'After-Sales Support', content: 'Providing continuous assistance even after the project handover.' }
    ]
  }
];
