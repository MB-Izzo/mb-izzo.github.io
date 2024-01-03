import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'mb-izzo.github.io',
  title: 'Izzo',
  subtitle: 'A blog for my thoughts',
  lang: 'en-US',
  description: 'I am a programmer expressing stuff.',
  author: {
    avatar: '/assets/maskable@512.png',
    name: 'Izzo',
    status: '',
    bio: 'Dumb thoughts of a programmer.'
  },
  themeColor: '#3D4451'
}
