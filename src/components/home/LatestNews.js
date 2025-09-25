import Container from '../shared/Container';

export default function LatestNews() {
  const articles = [
    {
      id: 1,
      image: '/images/Nike_logo_emblem_logotype 1.png',
      title: 'Fashion Trends in 2025',
      excerpt:
        'Discover the latest fashion trends for this season and how to style them effortlessly.',
    },
    {
      id: 2,
      image: '/images/figma-1-logo 1.png',
      title: 'Sneaker Culture Rising',
      excerpt:
        'Sneakers have taken over the world — here’s why they are more than just shoes.',
    },
    {
      id: 3,
      image: '/images/kronos-logo-1-1 1.png',
      title: 'Accessories That Matter',
      excerpt:
        'From bags to belts, see how accessories complete your everyday style.',
    },
  ];

  return (
    <section className="py-16 ">
      <Container>
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Latest News
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div
              key={article.id}
              className="flex items-start gap-4 bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 flex-shrink-0 rounded-md overflow-hidden bg-gray-100 flex items-center justify-center">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex-1">
                <h3 className="font-semibold text-base text-gray-900">
                  {article.title}
                </h3>
                <p className="text-gray-500 text-sm mt-1 line-clamp-3">
                  {article.excerpt}
                </p>
                <a
                  href="#"
                  className="mt-3 inline-block text-blue-600 font-medium text-sm hover:underline"
                >
                  Read more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
