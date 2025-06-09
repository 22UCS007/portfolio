// const Contact = () => {
//     return (
//       <section id="contact" className="bg-gradient-to-br from-teal-100 via-white to-teal-100 py-20 px-6 md:px-12">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Contact Me</h2>
  
//           <form className="bg-white shadow-lg shadow-teal-600 rounded-2xl p-8 space-y-6">
//             {/* Full Name */}
//             <div>
//               <label htmlFor="fullName" className="block mb-1 font-bold text-teal-600">
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 className="w-full px-4 py-2 border rounded-lg shadow-lg shadow-teal-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 placeholder="Enter your full name"
//                 required
//               />
//             </div>
  
//             {/* Email Address */}
//             <div>
//               <label htmlFor="email" className="block mb-1 font-bold text-teal-600">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 className="w-full px-4 py-2 border rounded-lg shadow-lg shadow-teal-500  focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 placeholder="Enter your email"
//                 required
//               />
//             </div>
  
//             {/* Contact Number */}
//             <div>
//               <label htmlFor="contactNumber" className="block mb-1 font-bold text-teal-600">
//                 Contact Number
//               </label>
//               <input
//                 type="tel"
//                 id="contactNumber"
//                 name="contactNumber"
//                 className="w-full px-4 py-2 border rounded-lg shadow-lg shadow-teal-500  focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 placeholder="Enter your contact number"
//               />
//             </div>
  
//             {/* Email Subject */}
//             <div>
//               <label htmlFor="subject" className="block mb-1 font-bold text-teal-600">
//                 Email Subject
//               </label>
//               <input
//                 type="text"
//                 id="subject"
//                 name="subject"
//                 className="w-full px-4 py-2 border rounded-lg shadow-lg shadow-teal-500  focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 placeholder="Enter the subject"
//                 required
//               />
//             </div>

//             {/* Message */}
//             <div>
//               <label htmlFor="message" className="block mb-1 font-bold text-teal-600">
//                 Your Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 rows="5"
//                 className="w-full px-4 py-2 border rounded-lg shadow-lg shadow-teal-500  focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 placeholder="Type your message here..."
//                 required
//               ></textarea>
//             </div>
  
//             {/* Submit Button */}
//             <div className="text-center">
//               <button
//                 type="submit"
//                 className="bg-teal-600 text-white px-6 py-2 rounded-full shadow hover:bg-teal-700 transition"
//               >
//                 Send Message
//               </button>
//             </div>
//           </form>
//         </div>
//       </section>
//     );
//   };
  
//   export default Contact;
  


import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_6kqxdb8',      // your service ID
      'template_jz5v42c',     // your template ID
      form.current,
      'y2oCDqIVMtimw-i3A'     // your public key
    )
    .then(
      (result) => {
        console.log(result.text);
        alert("Message sent successfully!");
        e.target.reset(); // optional: clear the form
      },
      (error) => {
        console.log(error.text);
        alert("Failed to send message. Please try again later.");
      }
    );
  };

  return (
    <section id="contact" className="bg-gradient-to-br from-teal-100 via-white to-teal-100 py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Contact Me</h2>

        <form ref={form} onSubmit={sendEmail} className="bg-white shadow-lg shadow-teal-600 rounded-2xl p-8 space-y-6">
          {/* Full Name */}
          <div>
            <label htmlFor="name" className="block mb-1 font-bold text-teal-600">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border rounded-lg shadow-lg shadow-teal-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Email Address */}
          <div>
            <label htmlFor="email" className="block mb-1 font-bold text-teal-600">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border rounded-lg shadow-lg shadow-teal-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Contact Number */}
          <div>
            <label htmlFor="contactNumber" className="block mb-1 font-bold text-teal-600">Contact Number</label>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              className="w-full px-4 py-2 border rounded-lg shadow-lg shadow-teal-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your contact number"
            />
          </div>

          {/* Email Subject */}
          <div>
            <label htmlFor="title" className="block mb-1 font-bold text-teal-600">Email Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full px-4 py-2 border rounded-lg shadow-lg shadow-teal-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter the subject"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block mb-1 font-bold text-teal-600">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="w-full px-4 py-2 border rounded-lg shadow-lg shadow-teal-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Type your message here..."
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-teal-600 text-white px-6 py-2 rounded-full shadow hover:bg-teal-700 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
