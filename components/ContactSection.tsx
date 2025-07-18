'use client';

import { useState } from "react";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
      const form = e.currentTarget.form;
      if (form) {
        form.dispatchEvent(new Event("submit", { cancelable: true, bubbles: true }));
      }
    }
  };

  const formValid =
    name.trim().length > 0 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) &&
    message.trim().length > 0;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formValid) return;
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-16 scroll-mt-10 text-white bg-black border-t border-[#e0e0e0]/20">
      <h2 className="text-4xl font-bold mb-6 text-center tracking-wide text-gray-300">
        Зв'язатися з нами
      </h2>
      <p className="mb-8 text-center max-w-md mx-auto text-gray-400">
        Напишіть нам у Viber або через форму нижче
      </p>

      <div className="mb-12 text-center">
        <a
          href="viber://chat?number=%2B380689991414"
          className="inline-block bg-purple-700 hover:bg-purple-800 transition text-white px-8 py-3 rounded-full shadow-md"
          style={{ boxShadow: '0 0 10px rgba(139, 92, 246, 0.6)' }}
        >
          Написати у Viber
        </a>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-[#111111]/90 border border-[#e0e0e0]/20 rounded-xl p-8 shadow-xl backdrop-blur-md"
      >
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Ваше ім'я"
          required
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setStatus("idle");
          }}
          className="w-full mb-4 bg-black border border-[#e0e0e0]/30 rounded-md px-4 py-3 placeholder-[#bbb] text-[#e0e0e0] focus:outline-none focus:ring-2 focus:ring-[#e0e0e0]/40 transition"
        />
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Ваш email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setStatus("idle");
          }}
          className="w-full mb-4 bg-black border border-[#e0e0e0]/30 rounded-md px-4 py-3 placeholder-[#bbb] text-[#e0e0e0] focus:outline-none focus:ring-2 focus:ring-[#e0e0e0]/40 transition"
        />
        <textarea
          id="message"
          name="message"
          placeholder="Ваше повідомлення"
          rows={5}
          required
          value={message}
          onKeyDown={handleKeyDown}
          onChange={(e) => {
            setMessage(e.target.value);
            setStatus("idle");
          }}
          className="w-full mb-6 bg-black border border-[#e0e0e0]/30 rounded-md px-4 py-3 placeholder-[#bbb] text-[#e0e0e0] focus:outline-none focus:ring-2 focus:ring-[#e0e0e0]/40 resize-none transition"
        />

        <button
          type="submit"
          disabled={!formValid || status === "loading"}
          className={`w-full text-black font-semibold py-3 rounded-lg shadow-md transition
            ${
              formValid
                ? "bg-[#e0e0e0] hover:bg-white shadow-[#e0e0e0]/70"
                : "bg-[#e0e0e0]/90 bg-opacity-50 cursor-not-allowed"
            }
          `}
          style={
            formValid
              ? { boxShadow: "0 0 20px rgba(224, 224, 224, 0.8)" }
              : {}
          }
        >
          {status === "loading" ? "Надсилання..." : "Надіслати повідомлення"}
        </button>

        {status === "success" && (
          <p className="text-green-400 text-sm pt-4 text-center select-none">
            ✅ Повідомлення надіслано!
          </p>
        )}
        {status === "error" && (
          <p className="text-red-500 text-sm pt-4 text-center select-none">
            ❌ Помилка надсилання. Спробуйте пізніше.
          </p>
        )}
      </form>
    </section>
  );
}
