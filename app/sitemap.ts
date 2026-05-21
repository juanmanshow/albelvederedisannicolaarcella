import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://albelvederedisannicolaarcella.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },

    {
      url: 'https://albelvederedisannicolaarcella.com/appartamento-superior-con-balcone',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },

    {
      url: 'https://albelvederedisannicolaarcella.com/appartamento-superior',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },

    {
      url: 'https://albelvederedisannicolaarcella.com/privacy-policy',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.4,
    },

    {
      url: 'https://albelvederedisannicolaarcella.com/cookie-policy',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.4,
    },
  ]
}