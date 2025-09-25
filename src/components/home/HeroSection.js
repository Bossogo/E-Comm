import Container from '../shared/Container';

function HeroSection() {
  return (
    <section className="relative w-full h-[250px] sm:h-[350px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] mb-32">
      <img
        src="/images/Promotion Image.png"
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      <Container>
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl text-white font-bold leading-tight max-w-md">
            Super Flash Sale <br /> 50% Off
          </h1>
        </div>
      </Container>

      <div className="absolute -bottom-28 left-0 right-0">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                img: '/images/image Product.png',
                title: 'FS - Quilted Maxi Cross Bag',
              },
              {
                img: '/images/image Product (1).png',
                title: 'FS - Nike Air Max 270 React',
              },
              {
                img: '/images/image Product (2).png',
                title: 'FS - Nike Red Runner',
              },
            ].map((p, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-2xl hover:scale-105 transition-transform duration-300 shadow-lg h-64"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold text-lg">{p.title}</h3>
                  <p className="line-through text-gray-300 text-sm">$534.33</p>
                  <p className="text-red-400 font-bold text-sm">24% Off</p>
                  <p className="text-sky-400 font-bold text-lg">$299.43</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}

export default HeroSection;
