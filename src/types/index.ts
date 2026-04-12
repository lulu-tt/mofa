/**
 * MOFA 전역 타입 정의
 */

export interface Mission {
  id: string;
  name: string;
  enName: string;
  region: 'northeast' | 'southeast' | 'northamerica' | 'europe' | 'all';
  type: 'embassy' | 'consulate';
  flag: string;
  time: string;
  phone: string;
  emergency: string;
  email: string;
  hours: string;
  address: string;
  lat: number;
  lng: number;
}

export interface NewsItem {
  date: string;
  title: string;
  img: string;
}

export interface ActivityItem {
  title: string;
  category: string;
  date: string;
  img: string;
  featured?: boolean;
}

export interface ServiceItem {
  name: string;
  desc: string;
  icon: string;
}
