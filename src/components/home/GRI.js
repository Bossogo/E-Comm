import Container from '../shared/Container';

export default function GRI() {
  return (
    <section className="py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <img src="/images/shipping.png" alt="Free Shipping" className="w-12 h-12 mb-4" />
            <h3 className="text-lg font-semibold">Free Shipping</h3>
            <p className="text-gray-500 text-sm mt-2 max-w-[200px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img src="/images/refund.png" alt="100% Refund" className="w-12 h-12 mb-4" />
            <h3 className="text-lg font-semibold">100% Refund</h3>
            <p className="text-gray-500 text-sm mt-2 max-w-[200px]">
              Get a full refund if the product doesn’t meet your expectations.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img src="/images/support.png" alt="Support 24/7" className="w-12 h-12 mb-4" />
            <h3 className="text-lg font-semibold">Support 24/7</h3>
            <p className="text-gray-500 text-sm mt-2 max-w-[200px]">
              Our support team is here for you anytime, anywhere.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
