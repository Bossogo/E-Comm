import Container from '../shared/Container';

export default function AMR() {
  return (
    <section className="bg-[#40BFFF] relative overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between py-12 lg:py-20 relative">
          <div className="text-white max-w-lg z-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Adidas Men Running Sneakers
            </h1>
            <p className="mt-4 text-sm sm:text-base lg:text-lg">
              Performance and designs. Taken right to the edge.
            </p>
            <button className="mt-6 text-white font-semibold relative group cursor-pointer">
              <span className="relative">
                SHOP NOW
                <span className="absolute left-0 -bottom-1.5 w-0 h-[2px] bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </span>
            </button>
          </div>

          <div className="relative w-full lg:w-auto h-[350px] lg:h-[450px]">
            <img
              src="/images/shoes-shoe-png-transparent-shoe-images-pluspng-17 1.png"
              alt="Adidas Running Sneakers"
              className=" z-10 -top-10 lg:-top-16 right-0 w-[280px] sm:w-[350px] lg:w-[420px] drop-shadow-xl"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
