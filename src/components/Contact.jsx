import React, { useRef, useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_s2rbre6', // Replace with your EmailJS Service ID
        'template_c9j9hb2', // Replace with your EmailJS Template ID
        formRef.current,
        'g1U6FUEWk26sxCSno' // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log('Success:', result.text);
          setStatus('Message sent successfully! ✅');
          formRef.current.reset(); // Clear form fields
        },
        (error) => {
          console.log('Error:', error.text);
          setStatus('Failed to send message. ❌ Please try again.');
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-royal-500">Get in Touch</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-400">
                  <Mail className="text-royal-500" />
                  <span>vinson2217@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Phone className="text-royal-500" />
                  <span>+91 9361435967</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <MapPin className="text-royal-500" />
                  <span>Erode, Tamilnadu, India</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form ref={formRef} className="space-y-4" onSubmit={sendEmail}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="from_name" // Add `name` for EmailJS
                  className="w-full px-4 py-2 bg-black/40 border border-royal-500/20 rounded-lg focus:ring-2 focus:ring-royal-500 focus:border-transparent text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email" // Add `name` for EmailJS
                  className="w-full px-4 py-2 bg-black/40 border border-royal-500/20 rounded-lg focus:ring-2 focus:ring-royal-500 focus:border-transparent text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message" // Add `name` for EmailJS
                  rows={4}
                  className="w-full px-4 py-2 bg-black/40 border border-royal-500/20 rounded-lg focus:ring-2 focus:ring-royal-500 focus:border-transparent text-white"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full border border-white hover:bg-violet-500 hover:border-none text-white px-6 py-3 rounded-lg  transition-colors"
              >
                Send Message
              </button>

            
              {status && (
                <p className="text-center text-sm mt-2 text-gray-300">{status}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
