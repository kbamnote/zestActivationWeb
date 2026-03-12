export interface Client {
  name: string;
  category: string;
  logoPath?: string;
}

export const clients: Client[] = [
  // Government
  { name: 'Government of Chhattisgarh', category: 'Government', logoPath: '/images/clients/government_cg.png' },
  { name: 'Chhattisgarh Tourism', category: 'Government', logoPath: '/images/clients/chhattisgarh_tourism.png' },
  
  // Media
  { name: 'Dainik Bhaskar', category: 'Media', logoPath: '/images/clients/dainik_bhaskar.png' },
  { name: 'Navbharat', category: 'Media', logoPath: '/images/clients/navbharat.png' },
  { name: 'Patrika', category: 'Media', logoPath: '/images/clients/patrika.png' },
  { name: 'Sakshi', category: 'Media', logoPath: '/images/clients/sakshi.png' },
  { name: 'Jagran', category: 'Media', logoPath: '/images/clients/jagran.png' },
  
  // Automotive
  { name: 'Hero', category: 'Automotive', logoPath: '/images/clients/hero.png' },
  { name: 'Hero FinCorp', category: 'Finance', logoPath: '/images/clients/hero_fincorp.png' },
  { name: 'TVS', category: 'Automotive', logoPath: '/images/clients/tvs.png' },
  { name: 'Suzuki', category: 'Automotive', logoPath: '/images/clients/suzuki.png' },
  { name: 'Tata Motors', category: 'Automotive', logoPath: '/images/clients/tata_motors.png' },
  { name: 'Audi', category: 'Automotive', logoPath: '/images/clients/audi.png' },
  
  // Energy
  { name: 'Indian Oil', category: 'Energy', logoPath: '/images/clients/indian_oil.png' },
  
  // Retail
  { name: 'Big Bazaar', category: 'Retail', logoPath: '/images/clients/big_bazaar.png' },
  { name: 'Central', category: 'Retail', logoPath: '/images/clients/central.png' },
  
  // Electronics
  { name: 'LG', category: 'Electronics', logoPath: '/images/clients/lg.png' },
  { name: 'Samsung', category: 'Electronics', logoPath: '/images/clients/samsung.png' },
  
  // Telecom
  { name: 'Nokia', category: 'Telecom', logoPath: '/images/clients/nokia.png' },
  { name: 'Vivo', category: 'Telecom', logoPath: '/images/clients/vivo.png' },
  { name: 'Oppo', category: 'Telecom', logoPath: '/images/clients/oppo.png' },
  { name: 'Vodafone', category: 'Telecom', logoPath: '/images/clients/vodafone.png' },
  { name: 'Idea', category: 'Telecom', logoPath: '/images/clients/idea.png' },
  { name: 'Reliance Jio', category: 'Telecom', logoPath: '/images/clients/jio.png' },
  { name: 'Videocon d2h', category: 'Telecom', logoPath: '/images/clients/videocon_d2h.png' },
  
  // Banking
  { name: 'HDFC Bank', category: 'Banking', logoPath: '/images/clients/hdfc_bank.png' },
  { name: 'Punjab National Bank', category: 'Banking', logoPath: '/images/clients/pnb.png' },
  { name: 'SBI', category: 'Banking', logoPath: '/images/clients/sbi.png' },
  
  // Beauty & Wellness
  { name: 'Lakme Salon', category: 'Beauty & Wellness', logoPath: '/images/clients/lakme.png' },
  
  // Healthcare
  { name: 'Apollo', category: 'Healthcare', logoPath: '/images/clients/apollo.png' },
  { name: 'Ramkrishna Care Hospitals', category: 'Healthcare', logoPath: '/images/clients/ramkrishna_care.png' },
  { name: 'NH Hospitals', category: 'Healthcare', logoPath: '/images/clients/nh_hospitals.png' },
  
  // Education
  { name: 'BYJU\'S', category: 'Education', logoPath: '/images/clients/byjus.png' },
  
  // Logistics
  { name: 'Gati', category: 'Logistics', logoPath: '/images/clients/gati.png' },
  
  // Technology
  { name: 'T-Hub', category: 'Technology', logoPath: '/images/clients/t_hub.png' },
  
  // Manufacturing
  { name: 'Ultratech Cement', category: 'Manufacturing', logoPath: '/images/clients/ultratech.png' },
  
  // Finance
  { name: 'SK Finance', category: 'Finance', logoPath: '/images/clients/sk_finance.png' },
];

// Helper function to get clients by category
export const getClientsByCategory = (category: string): Client[] => {
  return clients.filter(client => client.category === category);
};

// Helper function to get all unique categories
export const getUniqueCategories = (): string[] => {
  return Array.from(new Set(clients.map(client => client.category)));
};
