const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 px-4 ">
      <div className="max-w-6xl mx-auto  text-sm text-gray-400">
        © {new Date().getFullYear()} Aditya Wagh. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
