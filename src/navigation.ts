import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Home', href: '/' },
    { text: 'Layanan', href: '#services' },
    { text: 'Tentang Kami', href: '#about' },
    { text: 'FAQ', href: '#faq' },
  ],
  actions: [
    { text: 'Hubungi Kami', href: '#contact', variant: 'primary' } as {
      text: string;
      href: string;
      variant: 'primary';
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Layanan',
      links: [
        { text: 'Sedot WC Penuh', href: '#' },
        { text: 'Pelancaran Saluran Mampet', href: '#' },
        { text: 'Pembuatan Septic Tank Baru', href: '#' },
        { text: 'Sedot Limbah Industri', href: '#' },
      ],
    },
    {
      title: 'Informasi',
      links: [
        { text: 'Home', href: '/' },
        { text: 'Tentang Kami', href: '#about' },
        { text: 'Terms & Conditions', href: getPermalink('/terms') },
        { text: 'Privacy Policy', href: getPermalink('/privacy') },
        { text: 'FAQ', href: '#faq' },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [{ ariaLabel: 'WhatsApp', icon: 'tabler:brand-whatsapp', href: '#' }],
  footNote: `© ${new Date().getFullYear()} Pakar WC - Jasa Sedot WC Profesional`,
};
