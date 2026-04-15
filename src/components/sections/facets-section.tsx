"use client";

import { useState } from "react";

const TABS = [
  { id: "self", label: "Для себя" },
  { id: "business", label: "Для бизнеса" },
  { id: "study", label: "Для учёбы" },
] as const;
type TabId = (typeof TABS)[number]["id"];

const CARDS: Record<TabId, { title: string; desc: string; accent: string }[]> = {
  self: [
    { title: "Контент-завод на автопилоте", desc: "Сценарии для Reels, виральные посты и контент-планы за секунды.", accent: "⚡ Креатив без тормозов" },
    { title: "Маркетинг-отдел в одном окне", desc: "Описания товаров, анализ конкурентов, ответы клиентам.", accent: "⚡ Анализ 900 строк без выдумок" },
    { title: "Турбо-режим для учёбы", desc: "Саммари лекций, разбор тем, качественные работы без галлюцинаций.", accent: "⚡ Пересказ 2 часов за 30 секунд" },
  ],
  business: [
    { title: "Аналитик под ключ", desc: "Финансовые отчёты, прогнозы, стратегии — на основе ваших данных.", accent: "⚡ От данных к решению за минуты" },
    { title: "Поддержка клиентов 24/7", desc: "Шаблоны ответов, разбор кейсов, подготовка менеджеров.", accent: "⚡ Без найма лишних людей" },
    { title: "Документы без юриста", desc: "Договоры, КП, техзадания — быстро и точно.", accent: "⚡ Готово за 5 минут" },
  ],
  study: [
    { title: "Умный репетитор 24/7", desc: "Объяснит любую тему простым языком, подберёт примеры.", accent: "⚡ Как личный преподаватель" },
    { title: "Саммари за секунды", desc: "Пересказ лекций, книг, статей — кратко и по делу.", accent: "⚡ 2 часа материала за 30 секунд" },
    { title: "Работы без страданий", desc: "Рефераты, курсовые, эссе — структурировано и без галлюцинаций.", accent: "⚡ Честный результат" },
  ],
};

export function FacetsSection() {
  const [active, setActive] = useState<TabId>("self");

  return (
    <section style={{ background: "#0d0d14", padding: "76px 24px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>

        <div className="section-badge" style={{ justifyContent: "center", marginBottom: "18px" }}>
          <span className="badge-dot" />
          СДЕЛАЕТ МНОГОЕ ДЛЯ ТЕБЯ
        </div>

        <h2 style={{
          fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 800,
          color: "#fff", letterSpacing: "-0.02em", marginBottom: "10px",
        }}>
          Посмотри, что я могу сделать для тебя
        </h2>
        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.42)", marginBottom: "28px" }}>
          Это лишь несколько идей. Но я могу больше.
        </p>

        {/* Tabs */}
        <div style={{ display: "flex", gap: "6px", justifyContent: "center", marginBottom: "32px" }}>
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              style={{
                padding: "7px 18px", borderRadius: "999px",
                fontSize: "12px", fontWeight: 500, cursor: "pointer",
                border: "none", fontFamily: "inherit", transition: "all 0.15s",
                background: active === tab.id ? "rgba(124,58,237,0.18)" : "rgba(255,255,255,0.04)",
                color: active === tab.id ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.3)",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "14px" }}>
          {CARDS[active].map((card) => (
            <div
              key={card.title}
              style={{
                background: "#141418",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "18px", padding: "24px",
                textAlign: "left", transition: "all 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = "#1a1a20";
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = "#141418";
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.06)";
              }}
            >
              <div style={{ fontSize: "14px", fontWeight: 600, color: "#fff", marginBottom: "8px" }}>
                {card.title}
              </div>
              <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.42)", lineHeight: 1.6, marginBottom: "12px" }}>
                {card.desc}
              </div>
              <div style={{ fontSize: "11px", color: "#9b7dff", fontWeight: 500 }}>
                {card.accent}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
