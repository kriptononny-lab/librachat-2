"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  { q: "Работает без VPN?", a: "Да, LibraChat работает на территории России без VPN — это одно из наших ключевых преимуществ." },
  { q: "Чем отличаешься от ChatGPT?", a: "LibraChat работает без VPN, отвечает на русском языке с пониманием местного контекста, не хранит данные на серверах OpenAI." },
  { q: "Нужна ли карта для старта?", a: "Нет, начать бесплатно можно без привязки карты. Просто email и пароль." },
  { q: "Можно работать с большими файлами?", a: "На тарифе Pro — файлы до 50 МБ, на Бизнес — до 500 МБ. Поддерживаются PDF, Word, Excel, изображения." },
];

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section style={{ background: "#0d0d14", padding: "76px 24px" }}>
      <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>

        <div className="section-badge" style={{ justifyContent: "center", marginBottom: "18px" }}>
          <span className="badge-dot" />
          ЧАСТО СПРАШИВАЮТ
        </div>

        <h2 style={{
          fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 800,
          color: "#fff", letterSpacing: "-0.02em", marginBottom: "32px",
        }}>
          Остались вопросы?
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          {FAQS.map((faq, i) => (
            <div
              key={i}
              style={{
                background: "#141418",
                border: "1px solid rgba(255,255,255,0.05)",
                borderRadius: "12px", overflow: "hidden",
                transition: "background 0.15s",
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%", padding: "16px 20px",
                  display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px",
                  background: "transparent", border: "none", cursor: "pointer",
                  fontFamily: "inherit", textAlign: "left",
                }}
              >
                <span style={{ fontSize: "14px", fontWeight: 500, color: "#fff" }}>
                  {faq.q}
                </span>
                {open === i
                  ? <Minus size={16} color="rgba(255,255,255,0.3)" style={{ flexShrink: 0 }} />
                  : <Plus size={16} color="rgba(255,255,255,0.25)" style={{ flexShrink: 0 }} />
                }
              </button>
              {open === i && (
                <div style={{
                  padding: "0 20px 16px",
                  fontSize: "13px", color: "rgba(255,255,255,0.45)", lineHeight: 1.65,
                  textAlign: "left",
                }}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
