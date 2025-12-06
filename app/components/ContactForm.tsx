"use client";

import React, { useState, useRef } from "react";

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    // Grundläggande validering
    if (!name || !email || !message) {
      alert("Alla fält är obligatoriska!");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      console.log("E-post skickad framgångsrikt!");
      setIsSubmitted(true);

      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {
      console.error("Fel vid skickande av e-post:", error);
      alert("Kunde inte skicka ditt meddelande. Försök igen senare.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-6 md:p-8">
      {isSubmitted ? (
        <div className="text-center">
          <img
            src="/tack-unscreen.gif"
            alt="Tack"
            className="mx-auto w-80 h-80"
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
            disabled={isSubmitting}
          >
            {isSubmitting ? "Skickar..." : "SKICKA"}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
