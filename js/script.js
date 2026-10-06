/* ===== CONFIGURAÇÃO (edite apenas aqui) ===== */
const CONFIG = {
  whatsapp: "5534999999999",           // DDI + DDD + número, só dígitos
  email: "contato@seudominio.com.br",
  mensagem: "Olá, Bruno! Vi seu portfólio de tráfego pago para concessionárias e gostaria de conversar sobre uma operação."
};

// Links de WhatsApp e e-mail
document.querySelectorAll("[data-wa]").forEach(a => {
  a.href = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(CONFIG.mensagem)}`;
  a.target = "_blank"; a.rel = "noopener";
});
document.querySelectorAll("[data-mail]").forEach(a => { a.href = `mailto:${CONFIG.email}`; });

// Copyright automático
document.getElementById("yr").textContent = new Date().getFullYear();

// Menu mobile
const burger = document.querySelector(".burger"), nav = document.getElementById("nav");
burger.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  burger.setAttribute("aria-expanded", open);
});
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => { nav.classList.remove("open"); burger.setAttribute("aria-expanded", false); }));

// Header com fundo ao rolar
const hd = document.querySelector(".hd");
addEventListener("scroll", () => hd.classList.toggle("on", scrollY > 20), { passive: true });

// Animações de entrada
const els = document.querySelectorAll(".rv");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .15 });
  els.forEach(el => io.observe(el));
} else els.forEach(el => el.classList.add("in"));
