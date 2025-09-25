import Container from '../Container';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            <div className="flex items-center space-x-2">
              <img
                src="/images/icon.png"
                alt="E-Comm Logo"
                className="w-8 h-8"
              />
              <span className="text-xl font-bold font-poppins text-white">
                E-comm
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed">
              The best place to find your next pair of sneakers. We deliver
              comfort, style, and innovation straight to your doorstep.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Follow Us</h3>
            <p className="mt-4 text-sm leading-relaxed">
              Stay connected with us on social media for the latest drops,
              offers, and style inspirations.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <p className="mt-4 text-sm leading-relaxed">
              Email: support@example.com <br />
              Phone: +1 234 567 890 <br />
              Address: 123 Sneaker Street, Lagos
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Information</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>About Us</li>
              <li>Delivery Information</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Service</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>My Account</li>
              <li>Order History</li>
              <li>Wishlist</li>
              <li>Our Offers</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} Ecommerce theme by www.bisenbaev.com
          </p>
          <img
            src="/images/Brands.png"
            alt="Payment Methods"
            className="mt-4 md:mt-0 h-6 object-contain"
          />
        </div>
      </Container>
    </footer>
  );
}
