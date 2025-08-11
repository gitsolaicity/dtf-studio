'use client';

import { useState } from "react";
import { FormBackgroundAnimated } from "../decor/FormBackgroundAnimated";
import { Paperclip } from 'lucide-react';


export default function OrderFormSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [services, setServices] = useState<string[]>([]);
  const [fileName, setFileName] = useState("");

  const handleServiceToggle = (service: string) => {
    setServices(prev =>
      prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]
    );
    setStatus("idle");
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
    services.forEach(service => formData.append("services[]", service));

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
        setServices([]);
        setFileName(""); // ✅ сбрасываем имя файла
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-16 scroll-mt-10 text-white bg-black">
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
        className="max-w-xl mx-auto border border-[#e0e0e0]/20 rounded-xl p-8 shadow-xl backdrop-blur-md"
      >
        <FormBackgroundAnimated />

        {/* Ім’я */}
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Ваше ім'я або компанія"
          required
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setStatus("idle");
          }}
          className="w-full mb-4 bg-black border border-[#e0e0e0]/30 rounded-md px-4 py-3 placeholder-[#9C9C9C] text-[#e0e0e0] focus:outline-none focus:ring-2 focus:ring-[#e0e0e0]/40 transition"
        />

        {/* Email */}
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
          className="w-full mb-4 bg-black border border-[#e0e0e0]/30 rounded-md px-4 py-3 placeholder-[#9C9C9C] text-[#e0e0e0] focus:outline-none focus:ring-2 focus:ring-[#e0e0e0]/40 transition"
        />

        {/* Вибір послуг */}
        <div className="mb-6">
          <p className="text-sm text-gray-400 mb-2">Оберіть послугу:</p>
          <div className="flex flex-wrap gap-3">
            {["DTF", "Вишивка", "Шовкографія"].map(service => (
              <label
                key={service}
                className={`cursor-pointer px-4 py-2 rounded-md border transition ${
                  services.includes(service)
                    ? "bg-white text-black border-white"
                    : "bg-black border-white/30 text-gray-300 hover:border-white/50"
                }`}
              >
                <input
                  type="checkbox"
                  name="services"
                  value={service}
                  checked={services.includes(service)}
                  onChange={() => handleServiceToggle(service)}
                  className="hidden"
                />
                {service}
              </label>
            ))}
          </div>
        </div>

        {/* Повідомлення */}
        <textarea
          id="message"
          name="message"
          placeholder="Для замовлення оберіть послугу, опишіть ваше замовлення та додайте ескіз (за бажанням)"
          rows={5}
          required
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            setStatus("idle");
          }}
          className="w-full mb-6 bg-black border border-[#e0e0e0]/30 rounded-md px-4 py-3 placeholder-[#9C9C9C] text-[#e0e0e0] focus:outline-none focus:ring-2 focus:ring-[#e0e0e0]/40 resize-none transition"
        />

  {/* Завантаження файлу */}
<div className="mb-6">
  <label htmlFor="file" className="block text-sm text-gray-400 mb-2">
    Ескіз або малюнок (до 5MB)
  </label>

  <div className="relative flex items-center justify-baseline bg-black border border-[#e0e0e0]/30 rounded-md px-4 py-2 text-[#e0e0e0]">
    {/* Кнопка завантаження */}
    <input
      type="file"
      name="file"
      id="file"
      accept="image/*,.pdf"
      onChange={(e) => {
        const file = e.target.files?.[0];
        setFileName(file ? file.name : "");
        setStatus("idle");
      }}
      className="absolute inset-0 opacity-0 cursor-pointer z-10"
    />
    <span className="bg-gray-800 text-[#e0e0e0] text-sm px-4 py-1.5 rounded-md cursor-pointer hover:border-[#e0e0e0] transition pointer-events-none inline-flex items-center gap-2">
  <Paperclip size={16} className="text-[#e0e0e0]" />
  Обрати файл
</span>

    {/* Статус файлу */}
    <span className="text-sm text-[#9C9C9C] pl-4 pointer-events-none">
      {fileName ? `✅ ${fileName}` : "Файл не обрано"}
    </span>
  </div>
</div>


        {/* Кнопка */}
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
          {status === "loading" ? "Надсилання..." : "Надіслати замовлення"}
        </button>

        {/* Статус */}
        {status === "success" && (
          <p className="text-green-400 text-sm pt-4 text-center select-none">
            ✅ Дякуємо Вам! Повідомлення надіслано!
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
