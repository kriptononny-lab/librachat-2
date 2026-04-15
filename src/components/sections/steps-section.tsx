"use client";

const STEPS = [
  {
    number: "1",
    title: "Зарегистрируйтесь",
    desc: "Создайте аккаунт за 30 секунд. Никаких данных карты — просто email и пароль.",
  },
  {
    number: "2",
    title: "Задайте вопрос",
    desc: "Напишите любой вопрос на русском — я понимаю контекст и отвечаю сразу.",
  },
  {
    number: "3",
    title: "Получите результат",
    desc: "Деловой текст, код, анализ или перевод — готово мгновенно.",
  },
];

export function StepsSection() {
  return (
    <section style={{ background: "#07070d" }} className="section-pad">
      <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>

        <div className="section-badge" style={{ justifyContent: "center", marginBottom: "18px" }}>
          <span className="badge-dot" />
          3 ПРОСТЫХ ШАГА
        </div>

        <h2 style={{
          fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 800,
          color: "#ffffff", letterSpacing: "-0.02em", marginBottom: "10px",
        }}>
          Начни работу за 2 минуты
        </h2>
        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.45)", marginBottom: "36px" }}>
          Никаких сложных настроек — просто зайди и начни
        </p>

        <div className="grid-3col">
          {STEPS.map((step) => (
            <div
              key={step.number}
              style={{
                background: "#141418",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "18px", padding: "28px 22px",
                textAlign: "left",
              }}
            >
              <div style={{
                width: "36px", height: "36px", borderRadius: "50%",
                background: "rgba(124,58,237,0.1)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "13px", fontWeight: 700, color: "#a78bfa",
                marginBottom: "16px",
              }}>
                {step.number}
              </div>
              <div style={{ fontSize: "15px", fontWeight: 700, color: "#ffffff", marginBottom: "8px" }}>
                {step.title}
              </div>
              <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.45)", lineHeight: 1.65 }}>
                {step.desc}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
