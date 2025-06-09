const Footer = () => {
  return (
    <footer className="bg-teal-700 text-white py-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Contact Info */}
        <div className="text-center md:text-left w-full md:w-1/2">
          <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
          <p className="mb-2">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:sagnikdasso4@gmail.com"
              className="text-blue-300 hover:underline"
            >
              sagnikdasso4@gmail.com
            </a>
          </p>
          <p className="mb-2">
            <strong>Phone:</strong>{" "}
            <a
              href="tel:+916009978154"
              className="text-blue-300 hover:underline"
            >
              +91-6009978154
            </a>
          </p>
          <p>
            <strong>Location:</strong> Agartala, Tripura, India (NE)
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center md:text-right w-full md:w-1/2">
          <p className="text-sm text-gray-100">
            © 2024 by{" "}
            <span className="font-semibold text-white">Sagnik Das</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
