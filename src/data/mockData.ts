export const SLIDES = [
  { 
    id: 1, 
    kr: '한-프랑스 정상회담', 
    en: 'Korea-France Summit', 
    badge: '2026 정상 외교활동',
    img: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=1920'
  },
  { 
    id: 2, 
    kr: '한-인도네시아 정상회담', 
    en: 'Korea-Indonesia Summit', 
    badge: '정상외교 성과',
    img: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=1920'
  },
  { 
    id: 3, 
    kr: '한-필리핀 정상회담', 
    en: 'Korea-Philippines Summit', 
    badge: '아세안 협력 강화',
    img: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=1920'
  },
  { 
    id: 4, 
    kr: 'G7 외교장관회의 참석', 
    en: 'G7 Foreign Ministers Meeting', 
    badge: '다자외교 활동',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920'
  },
  { 
    id: 5, 
    kr: '한-싱가포르 정상회담', 
    en: 'Korea-Singapore Summit', 
    badge: '경제외교 혁신',
    img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1920'
  },
];

export const ACTIVITIES = [
  {
    title: '한-프랑스 정상회담',
    category: '정상외교',
    date: '2026.04.05',
    img: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800',
    featured: true
  },
  {
    title: 'G7 외교장관회의 참석',
    category: '다자외교',
    date: '2026.04.02',
    img: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=600',
    featured: false
  },
  {
    title: '한-인도네시아 정상회담',
    category: '정상외교',
    date: '2026.03.28',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600',
    featured: false
  },
  {
    title: '한-싱가포르 정상회담',
    category: '정상외교',
    date: '2026.03.25',
    img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600',
    featured: false
  },
];

export const SERVICES = [
  {
    name: '여권발급',
    desc: '여권 발급 및 재발급 안내',
    icon: 'passport'
  },
  {
    name: '해외안전여행',
    desc: '국가별 안전정보 확인',
    icon: 'travel'
  },
  {
    name: '비자정보',
    desc: '사증면제·워킹홀리데이',
    icon: 'visa'
  },
  {
    name: '재외동포민원',
    desc: '온라인 영사민원 서비스',
    icon: 'minwon'
  },
  {
    name: '재외국민등록',
    desc: '등록·변경·이동 신고',
    icon: 'register'
  },
  {
    name: '영사콜센터',
    desc: '24시간 02-3210-0404',
    icon: 'phone'
  },
];

export const NEWS_DATA = {
  notice: [
    { date: '04.08', title: '2026년도 하반기 중남미 지역기구 파견 인턴 선발 공고' },
    { date: '04.05', title: '2026년 재외공관 공공외교 현장실습원 모집' },
    { date: '04.01', title: '외교부 적극행정 우수사례 공모전' },
  ],
  press: [
    { date: '04.07', title: '조현 외교부 장관 미국 상원의원 대표단 면담' },
    { date: '04.02', title: '조현 장관 G7 외교장관회의 참석' },
    { date: '04.01', title: '한-독일 외교장관 회담 개최' },
  ],
  recruit: [
    { date: '04.03', title: '2026년 외교부 인턴 최종 합격자 발표' },
    { date: '03.28', title: '외교부 계약직 연구원 채용 공고' },
    { date: '03.25', title: '주제네바 대표부 행정직원 채용' },
  ],
};

export const MISSIONS_DATA = [
  {
    id: 'laos',
    name: '주라오스 대사관',
    enName: "Lao People's Democratic Republic",
    region: 'southeast',
    type: 'embassy',
    flag: '🇱🇦',
    time: '2026.4.9 08:25am',
    phone: '+856-21-352-031(~3)',
    emergency: '+856-20-5583-9080',
    email: 'laos@mofa.go.kr',
    hours: '월~금, 08:30-12:00 / 12:30-17:00',
    address: 'Embassy of the Republic of Korea, Lao-Thai Friendship Road, Watnak Village, Sisattanak District, Vientiane, Lao PDR, P.O.Box 7567'
  },
  {
    id: 'malaysia',
    name: '주말레이시아 대사관',
    enName: "Lao People's Democratic Republic", // 시안 텍스트 준수
    region: 'southeast',
    type: 'embassy',
    flag: '🇲🇾',
    time: '2026.4.9 08:25am',
    phone: '+856-21-352-031(~3)',
    emergency: '+856-20-5583-9080',
    email: 'laos@mofa.go.kr',
    hours: '월~금, 08:30-12:00 / 12:30-17:00',
    address: 'Embassy of the Republic of Korea, Lao-Thai Friendship Road, Watnak Village, Sisattanak District, Vientiane, Lao PDR, P.O.Box 7567'
  },
  {
    id: 'vietnam',
    name: '주베트남 대사관',
    enName: "Lao People's Democratic Republic",
    region: 'southeast',
    type: 'embassy',
    flag: '🇻🇳',
    time: '2026.4.9 10:25am',
    phone: '+856-21-352-031(~3)',
    emergency: '+856-20-5583-9080',
    email: 'laos@mofa.go.kr',
    hours: '월~금, 08:30-12:00 / 12:30-17:00',
    address: 'Embassy of the Republic of Korea, Lao-Thai Friendship Road, Watnak Village, Sisattanak District, Vientiane, Lao PDR, P.O.Box 7567'
  },
  {
    id: 'singapore',
    name: '주싱가포르 대사관',
    enName: "Lao People's Democratic Republic",
    region: 'southeast',
    type: 'embassy',
    flag: '🇸🇬',
    time: '2026.4.9 10:25am',
    phone: '+856-21-352-031(~3)',
    emergency: '+856-20-5583-9080',
    email: 'laos@mofa.go.kr',
    hours: '월~금, 08:30-12:00 / 12:30-17:00',
    address: 'Embassy of the Republic of Korea, Lao-Thai Friendship Road, Watnak Village, Sisattanak District, Vientiane, Lao PDR, P.O.Box 7567'
  },
  {
    id: 'japan',
    name: '주일본 대사관',
    enName: 'Japan',
    region: 'northeast',
    type: 'embassy',
    flag: '🇯🇵',
    time: '2026.4.9 11:25am',
    phone: '+81-3-3452-7611',
    emergency: '+81-90-1693-5773',
    email: 'japan@mofa.go.kr',
    hours: '월~금, 09:00-12:00 / 13:30-18:00',
    address: '1-2-5, Minami-Azabu, Minato-ku, Tokyo, Japan'
  },
  {
    id: 'usa',
    name: '주미국 대사관',
    enName: 'United States of America',
    region: 'northamerica',
    type: 'embassy',
    flag: '🇺🇸',
    time: '2026.4.8 11:25pm',
    phone: '+1-202-939-5600',
    emergency: '+1-202-939-5600',
    email: 'usa@mofa.go.kr',
    hours: '월~금, 09:00-12:00 / 13:30-17:30',
    address: '2450 Massachusetts Avenue N.W. Washington, D.C. 20008'
  }
];
