
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    alert("Thank you for contacting Shelly Auto!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="mx-auto max-w-6xl">

        <div className="mb-10 text-center">
          <p className="font-bold uppercase tracking-widest text-green-700">
            We are here to help
          </p>

          <h1 className="mt-2 text-4xl font-bold text-gray-900">
            Contact Us
          </h1>

          <p className="mt-3 text-gray-600">
            Have a question about our car spare parts? Send us a message.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">

          {/* Contact information */}
          <div className="rounded-xl bg-black p-8 text-white">
            <h2 className="mb-6 text-2xl font-bold">
              Get In Touch
            </h2>

            <p className="mb-8 leading-7 text-gray-300">
              Our team is ready to help you find the right spare parts
              for your vehicle.
            </p>

            <div className="mb-6">
              <h3 className="font-bold text-green-400">Email</h3>
              <p className="mt-2 text-gray-300">
                Add your business email here
              </p>
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-green-400">Phone</h3>
              <p className="mt-2 text-gray-300">
                Add your business phone number here
              </p>
            </div>

            <div>
              <h3 className="font-bold text-green-400">Location</h3>
              <p className="mt-2 text-gray-300">
                Kenya
              </p>
            </div>
          </div>

          {/* Contact form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-xl bg-white p-8 shadow-sm"
          >
            <h2 className="mb-6 text-2xl font-bold text-gray-900">
              Send Us a Message
            </h2>

            <div className="mb-4">
              <label className="mb-2 block font-medium">
                Your Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-green-600"
              />
            </div>

            <div className="mb-4">
              <label className="mb-2 block font-medium">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-green-600"
              />
            </div>

            <div className="mb-4">
              <label className="mb-2 block font-medium">
                Subject
              </label>

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What do you need help with?"
                required
                className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-green-600"
              />
            </div>

            <div className="mb-6">
              <label className="mb-2 block font-medium">
                Message
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                rows="5"
                required
                className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-green-600"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-pink-600 px-6 py-3 font-bold text-white hover:bg-green-700"
            >
              Send Message
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}

export default Contact;
