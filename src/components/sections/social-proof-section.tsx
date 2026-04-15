"use client";

const REVIEWS = [
  {
    initials: "ЮШ",
    name: "Юлия Шишакова",
    role: "ИП, магазин отделочных материалов",
    quote: "«LibraChat — это не просто чат-бот, это напарник, который понимает задачи реального бизнеса.»",
    result: "↑ Стратегия за один вечер вместо месяца",
  },
  {
    initials: "ВО",
    name: "Василий Ожерельев",
    role: "Компания «Вуди», e-commerce",
    quote: "«С LibraChat мы перестали гадать, зайдёт товар или нет. Просто даю данные — получаю стратегию.»",
    result: "↑ Запуск нового товара в 5 раз быстрее",
  },
  {
    initials: "МБ",
    name: "Марианна Базаркулова",
    role: "Профессиональный маркетолог",
    quote: "«Первый сервис, который не врёт, не тупит и помнит всё о моих клиентах.»",
    result: "↑ Десятки клиентов в одном окне без хаоса",
  },
];

export function SocialProofSection() {
  return (
    <section style={{ background: "#0d0d14", padding: "76px 24px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>

        <div className="section-badge" style={{ justifyContent: "center", marginBottom: "18px" }}>
          <span className="badge-dot" />
          НАМ ДОВЕРЯЮТ
        </div>

        <h2 style={{
          fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 800,
          color: "#fff", letterSpacing: "-0.02em", marginBottom: "10px",
        }}>
          Те, кто уже со мной
        </h2>
        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.42)", marginBottom: "36px" }}>
          Реальные результаты реальных людей
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "14px" }}>
          {REVIEWS.map((r) => (
            <div
              key={r.name}
              style={{
                background: "#141418",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "18px", padding: "22px",
                textAlign: "left", transition: "background 0.15s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.background = "#1a1a20"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.background = "#141418"; }}
            >
              <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", lineHeight: 1.65, marginBottom: "12px", fontStyle: "italic" }}>
                {r.quote}
              </div>
              <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.55)", fontWeight: 600, marginBottom: "14px" }}>
                {r.result}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{
                  width: "34px", height: "34px", borderRadius: "50%",
                  background: "rgba(124,58,237,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "11px", fontWeight: 700, color: "#a78bfa", flexShrink: 0,
                }}>
                  {r.initials}
                </div>
                <div>
                  <div style={{ fontSize: "13px", fontWeight: 600, color: "#fff" }}>{r.name}</div>
                  <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.25)" }}>{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
