
import { PricingPackage, Testimonial, NavItem } from './types';

export const COMPANY_NAME = "Robson Quadros";
export const TAGLINE = "Patrimônios Emocionais em Formato de Cinema";
export const PHONE_NUMBER = "555499333799"; 
export const WHATSAPP_LINK = `https://wa.me/${PHONE_NUMBER}?text=Olá%20Robson,%20queremos%20que%20você%20eternize%20nossa%20história.`;

export const NAV_ITEMS: NavItem[] = [
  { label: 'O Filme', href: '#hero' },
  { label: 'Obras', href: '#portfolio' },
  { label: 'Investimento', href: '#pricing' },
  { label: 'Contato', href: '#contact' },
];

export const PORTFOLIO_PROJECTS = [
  { 
    id: 1, 
    title: "Isadora & Guilherme", 
    location: "Caminhos de Pedra, Serra Gaúcha", 
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1600",
    category: "Obra Cinematográfica"
  },
  { 
    id: 2, 
    title: "Valentina & Ricardo", 
    location: "Vinícola Lovara, Bento Gonçalves", 
    img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1600",
    category: "Short Story"
  },
  { 
    id: 3, 
    title: "Beatriz & Arthur", 
    location: "Vale dos Vinhedos, RS", 
    img: "https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&q=80&w=1600",
    category: "Cinema Autoral"
  },
  { 
    id: 4, 
    title: "Gabriela & Felipe", 
    location: "Gramado, RS", 
    img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1600",
    category: "Teaser Cinematográfico"
  },
];

export const PACKAGES: PricingPackage[] = [
  {
    id: 'essencia',
    name: 'Essência',
    priceRange: 'R$ 4.200',
    description: 'A pureza da narrativa. Focado na conexão genuína e na entrega de uma joia visual atemporal.',
    ctaText: 'Verificar Disponibilidade',
    features: [
      { text: '08 horas de imersão', included: true },
      { text: 'Filme Short Story (12-15 min)', included: true },
      { text: 'Color Grading Cinema HDR', included: true },
      { text: 'Olhar do Diretor (Robson)', included: true },
      { text: 'Consultoria Narrativa', included: false },
      { text: 'Imagens Aéreas 4K', included: false },
    ]
  },
  {
    id: 'narrativa',
    name: 'Narrativa',
    priceRange: 'R$ 7.800',
    description: 'Nossa assinatura. Um mergulho profundo na sua história para criar um legado que atravessa gerações.',
    isPopular: true,
    ctaText: 'Eternizar Minha História',
    features: [
      { text: '10+ horas de imersão total', included: true },
      { text: 'Filme Cinematic (25-30 min)', included: true },
      { text: "Teaser 'Next Day' (Reels)", included: true },
      { text: 'Consultoria Estratégica 90 dias', included: true },
      { text: 'Sessão Pré-Wedding Artística', included: true },
      { text: 'Master em 4K Cinematográfico', included: true },
    ]
  },
  {
    id: 'legado',
    name: 'Legado',
    priceRange: 'Sob Consulta',
    description: 'Para celebrações icônicas. Uma produção de alta escala com narrativa documental e equipe múltipla.',
    ctaText: 'Solicitar Consultoria VIP',
    features: [
      { text: 'Cobertura Ilimitada (Dia Todo)', included: true },
      { text: 'Documentário de Casamento Full', included: true },
      { text: 'Equipe de Cinema (Multi-Câmeras)', included: true },
      { text: 'Direção de Fotografia Completa', included: true },
      { text: 'Entrega em Box de Luxo Fine Art', included: true },
      { text: 'Arquivos Raw (Sob Acordo)', included: true },
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Ana & Lucas",
    role: "Vale dos Vinhedos",
    text: "Não recebemos apenas um vídeo, recebemos a chance de reviver o dia mais feliz das nossas vidas com a mesma intensidade de quando aconteceu.",
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    id: 2,
    name: "Mariana & Carlos",
    role: "Gramado",
    text: "O Robson tem o dom de ver o invisível. Cada detalhe, cada lágrima discreta... tudo virou poesia pura nas mãos dele.",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    id: 3,
    name: "Juliana & Pedro",
    role: "Bento Gonçalves",
    text: "A sensibilidade do Robson é algo raro. Ele capturou a essência da nossa história de uma forma que nenhum outro profissional conseguiu.",
    image: "https://images.unsplash.com/photo-1460974296241-82302de0111e?auto=format&fit=crop&q=80&w=200&h=200"
  }
];
