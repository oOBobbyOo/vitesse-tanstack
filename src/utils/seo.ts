export const seo = ({
  title,
  description,
  keywords,
  url,
  image,
}: {
  title: string
  description?: string
  keywords?: string
  url?: string
  image?: string
}) => {
  const tags = [
    { title },
    { name: 'description', content: description },
    { name: 'keywords', content: keywords },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:creator', content: '@bobby' },
    { name: 'twitter:site', content: '@bobby' },
    { name: 'og:type', content: 'website' },
    { name: 'og:title', content: title },
    { name: 'og:description', content: description },
    ...(url
      ? [
          { name: 'twitter:url', content: url },
          { name: 'og:url', content: url },
        ]
      : []),
    ...(image
      ? [
          { name: 'twitter:image', content: image },
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'og:image', content: image },
        ]
      : []),
  ]

  return tags
}
