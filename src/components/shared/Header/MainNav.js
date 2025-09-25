export default function MainNav() {
  return (
    <nav className="w-full bg-white py-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <img src="/images/icon.png" alt="E-Comm Logo" className="w-8 h-8" />
        <span className="text-xl font-bold font-poppins">E-comm</span>
      </div>

      <ul className="hidden md:flex space-x-8 font-medium">
        <li className="hover:text-blue-500 cursor-pointer">HOME</li>
        <li className="hover:text-blue-500 cursor-pointer">BAGS</li>
        <li className="hover:text-blue-500 cursor-pointer">SNEAKERS</li>
        <li className="hover:text-blue-500 cursor-pointer">BELT</li>
        <li className="hover:text-blue-500 cursor-pointer">CONTACT</li>
      </ul>

      <div className="md:hidden cursor-pointer">
        <span className="material-icons">menu</span>
      </div>
    </nav>
  );
}
