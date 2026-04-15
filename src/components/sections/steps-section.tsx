"use client";

import Link from "next/link";
import { UserPlus, MessageCircle, Sparkles } from "lucide-react";

const STEPS = [
  {
    number: "1",
    Icon: UserPlus,
    title: "Зарегистрируйтесь",
    desc: "Создайте аккаунт за 30 секунд. Никаких данных карты — просто email и пароль.",
  },
  {
    number: "2",
    Icon: MessageCircle,
    title: "Задайте вопрос",
    desc: "Напишите любой вопрос на русском — я понимаю контекст и отвечаю сразу.",
  },
  {
    number: "3",
    Icon: Sparkles,
    title: "Получите результат",
    desc: "Деловой текст, код, анализ или перевод — готово мгновенно.",
  },
];

export function StepsSection() {
  return (
    <section style={{ background: "#080808"}} className="section-pad">
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
        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.45)", marginBottom: "48px" }}>
          Никаких сложных настроек — просто зайди и начни
        </p>

        {/* Шаги с большими иконками */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "32px", marginBottom: "48px" }}>
          {STEPS.map(({ number, Icon, title, desc }) => (
            <div key={number} style={{ textAlign: "center" }}>
              {/* Круглая иконка с номером-бейджем */}
              <div style={{ position: "relative", display: "inline-block", marginBottom: "20px" }}>
                <div style={{
                  width: "80px", height: "80px", borderRadius: "50%",
                  background: "rgba(201,162,39,0.09)",
                  border: "1px solid rgba(201,162,39,0.16)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto",
                }}>
                  <Icon size={32} color="#e8c84a" strokeWidth={1.5} />
                </div>
                {/* Номер-бейдж */}
                <div style={{
                  position: "absolute", bottom: "0", right: "0",
                  width: "24px", height: "24px", borderRadius: "50%",
                  background: "#c9a227",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "11px", fontWeight: 700, color: "#fff",
                  boxShadow: "0 0 0 2px #07070d",
                }}>
                  {number}
                </div>
              </div>
              <div style={{ fontSize: "16px", fontWeight: 700, color: "#ffffff", marginBottom: "8px" }}>
                {title}
              </div>
              <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", lineHeight: 1.65 }}>
                {desc}
              </div>
            </div>
          ))}
        </div>

        {/* CTA кнопка */}
        <div>
          <Link href="https://librachat.kz/auth">
            <button style={{
              background: "#c9a227", border: "none", color: "#fff",
              borderRadius: "999px", padding: "14px 36px",
              fontSize: "15px", fontWeight: 600, cursor: "pointer",
              display: "inline-flex", alignItems: "center", gap: "8px",
              fontFamily: "inherit",
              boxShadow: "0 4px 20px rgba(201,162,39,0.25)",
            }}>
              Начать бесплатно →
            </button>
          </Link>
          <div style={{ marginTop: "12px", fontSize: "13px", color: "rgba(255,255,255,0.3)" }}>
            30 секунд · Без карты · Без VPN
          </div>
        </div>

      </div>
    </section>
  );
}
