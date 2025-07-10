'use client';

import { useState, useEffect } from "react";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  // Контролируемые значения полей
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Валидность формы — все поля заполнены и email валиден
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
    <section
      id="contact"
      className="relative py-16 px-6 text-gray-300 scroll-mt-20"
    >
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle,_#0e6b8f_1px,_transparent_1px)] bg-[length:22px_22px] pointer-events-none -z-10" />

      <h2 className="text-4xl font-semibold mb-6 text-center tracking-wide text-cyan-400">
        Связаться с нами
      </h2>
      <p className="mb-8 text-center max-w-md mx-auto text-gray-400">
        Напишите нам в Viber или через форму ниже
      </p>

      <div className="mb-12 text-center">
        <a
          href="viber://chat?number=%2B380689991414"
          className="inline-block bg-purple-600 hover:bg-purple-700 transition text-white px-8 py-3 rounded-full shadow-md"
          style={{
            boxShadow: '0 0 10px rgba(139, 92, 246, 0.6)',
          }}
        >
          Написать в Viber
        </a>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-black bg-opacity-30 backdrop-blur-lg text-gray-200 p-8 rounded-2xl border border-cyan-600 shadow-lg"
      >
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Ваше имя"
          required
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setStatus("idle");
          }}
          className="w-full mb-4 bg-black bg-opacity-50 border border-cyan-600 rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-70"
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
          className="w-full mb-4 bg-black bg-opacity-50 border border-cyan-600 rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-70"
        />
        <textarea
          id="message"
          name="message"
          placeholder="Ваше сообщение"
          rows={5}
          required
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            setStatus("idle");
          }}
          className="w-full mb-6 bg-black bg-opacity-50 border border-cyan-600 rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-70 resize-none"
        />

        <button
  type="submit"
  disabled={!formValid || status === "loading"}
  className={`w-full text-black font-semibold py-3 rounded-lg shadow-md transition
    ${
      formValid
        ? "bg-cyan-400 hover:bg-cyan-500 shadow-cyan-400/70"
        : "bg-cyan-600 bg-opacity-50 cursor-not-allowed"
    }
  `}
  style={
    formValid
      ? { boxShadow: "0 0 20px rgba(96, 234, 255, 0.8)" }
      : {}
  }
>
  {status === "loading" ? "Отправка..." : "Отправить сообщение"}
</button>

        {status === "success" && (
          <p className="text-green-400 text-sm pt-4 text-center select-none">
            ✅ Сообщение отправлено!
          </p>
        )}
        {status === "error" && (
          <p className="text-red-500 text-sm pt-4 text-center select-none">
            ❌ Ошибка отправки. Попробуйте позже.
          </p>
        )}
      </form>
    </section>
  );
}
