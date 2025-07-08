"use client";

import { useState } from "react";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
        form.reset(); // ✅ безопасная очистка формы
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
      className="py-16 px-6 bg-gray-900 text-white text-center scroll-mt-20"
    >
      <h2 className="text-3xl font-bold mb-6">Связаться с нами</h2>
      <p className="mb-4">Напишите нам в Viber или через форму ниже</p>

      {/* Viber-кнопка */}
      <div className="mb-12">
        <a
          href="viber://chat?number=%2B380689991414"
          className="inline-block bg-purple-600 hover:bg-purple-700 transition text-white px-6 py-3 rounded-full shadow"
        >
          Написать в Viber
        </a>
      </div>

      {/* Форма */}
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-white text-black p-6 rounded-lg shadow space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Ваше имя"
          required
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Ваш email"
          required
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
        <textarea
          name="message"
          placeholder="Ваше сообщение"
          rows={4}
          required
          className="w-full border border-gray-300 rounded px-4 py-2"
        />

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition disabled:opacity-50"
        >
          {status === "loading" ? "Отправка..." : "Отправить сообщение"}
        </button>

        {/* Сообщение об успехе / ошибке */}
        {status === "success" && (
          <p className="text-green-600 text-sm pt-2">✅ Сообщение отправлено!</p>
        )}
        {status === "error" && (
          <p className="text-red-600 text-sm pt-2">❌ Ошибка отправки. Попробуйте позже.</p>
        )}
      </form>
    </section>
  );
}
