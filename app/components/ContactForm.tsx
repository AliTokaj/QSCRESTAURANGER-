"use client"; // Mark this as a Client Component

import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // New state for submission status
  const formRef = useRef<HTMLFormElement>(null); // Create a ref for the form

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission

    // Set isSubmitting to true to disable the button
    setIsSubmitting(true);

    // Access form data
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    // Basic validation
    if (!name || !email || !message) {
      alert('Alla fält är obligatoriska!');
      setIsSubmitting(false); // Re-enable the button if validation fails
      return;
    }

    try {
      // Send email using EmailJS
      const response = await emailjs.send(
        'service_2ryb1kf',
        'template_1thcuef',
        {
          name,
          email,
          message,
        },
        'GD9LpjnSaLKrIhmEc'
      );

      console.log('Email sent successfully!', response);
      setIsSubmitted(true); // Set the state to true to show the thank you message

      // Reset the form using the ref
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to send your message. Please try again later.');
    } finally {
      setIsSubmitting(false); // Re-enable the button after the request is complete
    }
  };

  return (
    <div className="p-6 md:p-8">
      {isSubmitted ? (
        <div className="text-center">
          <img
            src="/tack-unscreen.gif" // Path to your image
            alt="Big Mac"
            className="mx-auto w-80 h-80" // Adjust size as needed
          />
          <p className="text-[#F9D00F] font-bold mb-4">
            Tack för ditt meddelande. Det har skickats.
          </p>
        </div>
      ) : (
        <form ref={formRef} className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Ditt namn"
            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Din e-postadress"
            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            required
          />
          <textarea
            name="message"
            placeholder="Ditt meddelande"
            rows={5}
            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-[#F9D00F] text-white font-semibold py-3 rounded-md transition duration-300 hover:bg-[#F0AE2C] disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isSubmitting} // Disable the button when submitting
          >
            {isSubmitting ? 'Skickar...' : 'SKICKA'} {/* Change button text when submitting */}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;