// Contact Page - Demonstrates form handling and grid layouts
// This page includes a contact form and contact information using different grid patterns
"use client";

import { useState } from "react";

export default function Contact() {
  // 
  // State Management - Using React hooks (useState) to manage form data
  // useState returns an array with two elements:
  // 1. Current state value (formData)
  // 2. Function to update state (setFormData)
  // When the state changes, React re-renders the component
  //
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // 
  // State for form submission feedback
  // submitted: tracks whether form has been submitted
  // loading: tracks whether request is in progress
  //
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // 
  // Handle input changes
  // This function:
  // 1. Destructures name and value from the input event target
  // 2. Creates a new formData object with updated field
  // 3. Spreads (...) the existing formData to preserve other fields
  // 4. Updates state with new formData
  // 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // 
  // Handle form submission
  // e.preventDefault(): Prevents default form submission behavior (page reload)
  // In a real app, you would send data to a backend API here
  //
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call with setTimeout
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // Reset form after submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      // Hide success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-24">
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Get in Touch
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Have a question or want to work together? We'd love to hear from you.
        </p>
      </div>

      {/* 
        Main Content Grid - 2 columns layout
        md:grid-cols-2: Creates 2 equal columns on medium screens and above
        gap-12: 3rem space between columns
        items-start: Aligns content to the top of each cell
        On mobile, this stacks into 1 column
      */}
      <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
        {/* Left Column - Contact Information */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h2>

          {/* 
            Contact Details Grid - Stack vertically
            Each contact item uses flexbox (flex) to align icon and text
            gap-4: Spacing between icon and text within each item
          */}
          <div className="space-y-6">
            {/* Address */}
            <div className="flex gap-4">
              {/* Icon Container */}
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Address</h3>
                <p className="text-gray-600">123 Tech Street, San Francisco, CA 94102</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Email</h3>
                <p className="text-gray-600">hello@mywebsite.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 00.948.684l1.498 4.493a1 1 0 00.502.756l2.048 1.029a1 1 0 00.956-.012l2.048-1.029a1 1 0 00.502-.756l1.498-4.493a1 1 0 00-.948-.684H17a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Phone</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Business Hours</h3>
                <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-600">Sat - Sun: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h2>

          {/* Success Message - Conditional Rendering */}
          {/* This only renders if submitted is true */}
          {submitted && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex gap-3">
              <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p className="text-green-700">Message sent successfully! We'll get back to you soon.</p>
            </div>
          )}

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* 
              Form Group - Name Input
              flex flex-col: Stacks label and input vertically
              gap-2: 0.5rem space between label and input
            */}
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-medium text-gray-900">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              />
            </div>

            {/* Email Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-medium text-gray-900">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              />
            </div>

            {/* Subject Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="font-medium text-gray-900">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="How can we help?"
                required
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              />
            </div>

            {/* Message Textarea */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-medium text-gray-900">
                Message
              </label>
              {/* 
                Textarea with resize disabled (resize-none)
                This prevents users from changing the textarea size
              */}
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us more about your project..."
                rows={5}
                required
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      {/* 
        FAQ Section - Demonstrates another grid layout pattern
        This creates a responsive grid for frequently asked questions
      */}
      <div className="bg-gray-50 rounded-lg p-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Frequently Asked Questions
        </h2>

        {/* 
          FAQ Grid - 2 columns
          md:grid-cols-2: 2 columns on medium screens, 1 on mobile
          gap-8: Space between items
        */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* FAQ Item 1 */}
          <div className="bg-white p-6 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-3">How long does a project typically take?</h3>
            <p className="text-gray-600 text-sm">
              Project timelines vary depending on scope and complexity. We typically provide estimates after an initial consultation.
            </p>
          </div>

          {/* FAQ Item 2 */}
          <div className="bg-white p-6 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-3">Do you offer maintenance services?</h3>
            <p className="text-gray-600 text-sm">
              Yes! We provide ongoing maintenance and support packages to keep your website running smoothly.
            </p>
          </div>

          {/* FAQ Item 3 */}
          <div className="bg-white p-6 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-3">What technologies do you use?</h3>
            <p className="text-gray-600 text-sm">
              We specialize in modern web technologies including Next.js, React, Tailwind CSS, and Node.js.
            </p>
          </div>

          {/* FAQ Item 4 */}
          <div className="bg-white p-6 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-3">Can you work with my existing codebase?</h3>
            <p className="text-gray-600 text-sm">
              Absolutely! We can integrate with and enhance existing projects. Just let us know the details.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
