import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'urara-demo.netlify.app',
  title: 'Izzo',
  subtitle: 'A blog for my thoughts',
  lang: 'en-US',
  description: 'I am a programmer expressing stuff.',
  author: {
    avatar: '/assets/maskable@512.png',
    name: 'Izzo',
    status: '🌸',
    bio: 'Just join the adventure of programming.'
  },
  themeColor: '#3D4451'
}
