export interface NavLinkItem {
  name: string;
  path: string; // dedicated page route
  href: string; // backwards compatibility
  id: string;
}

export const navLinks: NavLinkItem[] = [
  { name: 'Home', path: '/', href: '/', id: 'home' },
  { name: 'About', path: '/about', href: '/about', id: 'about' },
  { name: 'Projects', path: '/projects', href: '/projects', id: 'projects' },
  { name: 'Achievements', path: '/achievements', href: '/achievements', id: 'achievements' },
  { name: 'Skills', path: '/skills', href: '/skills', id: 'skills' },
  { name: 'Journey', path: '/journey', href: '/journey', id: 'journey' },
  { name: 'Contact', path: '/contact', href: '/contact', id: 'contact' },
];
