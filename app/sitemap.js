export default function sitemap() {
  return [
    {
      url: "https://indianconstitutioninfo.vercel.app/",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://indianconstitutioninfo.vercel.app/contactus",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://indianconstitutioninfo.vercel.app/disclaimer",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://indianconstitutioninfo.vercel.app/privacypolicy",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
