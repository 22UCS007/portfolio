// import { useState } from "react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const links = ["Home", "About", "Skills", "Projects", "Contact"];

//   return (
//     <nav className="w-full bg-teal-600 shadow-lg fixed top-0 left-0 z-50">
//       <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center h-24">
//         <h1 className="text-3xl font-bold text-white">MyPortfolio</h1>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-10 text-lg font-semibold">
//           {links.map(link => (
//             <li key={link}>
//               <a
//                 href={`#${link.toLowerCase()}`}
//                 className="text-white hover:text-yellow-300 transition duration-300"
//               >
//                 {link}
//               </a>
//             </li>
//           ))}
//         </ul>

//         {/* Mobile Menu Toggle */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden text-white focus:outline-none"
//         >
//           <svg
//             className="w-7 h-7"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             {isOpen ? (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             ) : (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//             )}
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <ul className="md:hidden bg-white px-6 pb-4 space-y-3 text-lg font-semibold">
//           {links.map(link => (
//             <li key={link}>
//               <a
//                 href={`#${link.toLowerCase()}`}
//                 className="block text-gray-700 hover:text-teal-600 transition"
//                 onClick={() => setIsOpen(false)}
//               >
//                 {link}
//               </a>
//             </li>
//           ))}
//         </ul>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <nav className="w-full bg-teal-600 shadow-lg fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center h-16">
        <h1 className="text-2xl font-bold text-white">MyPortfolio</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-lg font-semibold">
          {links.map(link => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-white hover:text-blue-300 transition duration-300"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-teal-500 px-4 pb-4 space-y-3 text-lg font-semibold">
          {links.map(link => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="block text-white hover:text-blue-300 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;