// ===== BONUSES (edit here) =====
const BONUS_FREE_LABEL = "INCLUDED FREE";
const bonusesData = [
    {
        "badge":  "🔥 ESSENTIAL",
        "imagem":  "images/bonus1.webp",
        "titulo":  "Bonus 01: HVAC Troubleshooting Flowcharts Guide",
        "descricao":  "Follow clear decision flowcharts for common faults: no cooling, no heat, short cycling, frozen coil and more, so you diagnose with logic instead of guessing.",
        "precoAntigo":  "Regular $9.00",
        "destaque":  true
    },
    {
        "badge":  "🔥 ESSENTIAL",
        "imagem":  "images/bonus2.webp",
        "titulo":  "Bonus 02: Refrigerant \u0026amp; Superheat/Subcooling Quick Guide",
        "descricao":  "Pressure-temperature charts, common refrigerants, gauge reading and step-by-step superheat and subcooling calculations with worked examples.",
        "precoAntigo":  "Regular $8.00",
        "destaque":  false
    },
    {
        "badge":  "🔥 ESSENTIAL",
        "imagem":  "images/bonus3.webp",
        "titulo":  "Bonus 03: Wiring Diagrams \u0026amp; Electrical Symbols Manual",
        "descricao":  "Learn to read HVAC schematics: symbols, ladder diagrams, thermostat wiring and how to test capacitors, contactors and motors safely.",
        "precoAntigo":  "Regular $7.00",
        "destaque":  false
    },
    {
        "badge":  "🔥 ESSENTIAL",
        "imagem":  "images/bonus4.webp",
        "titulo":  "Bonus 04: EPA 608 Core Concepts Visual Flashcards",
        "descricao":  "Review key refrigerant-handling concepts, recovery, regulations and safety with printable flashcards. Includes 100 flashcards.",
        "precoAntigo":  "Regular $7.00",
        "destaque":  false
    }
];

document.addEventListener('DOMContentLoaded', () => {
  // 1. FAQ Accordion Toggle
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(i => i.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // 2. Bonus cards
  const bonusGrid = document.getElementById('bonusGrid');

  function BonusCard({ badge, imagem, titulo, descricao, precoAntigo, destaque }) {
    const card = document.createElement('div');
    card.className = `bonus-card ${destaque ? 'bonus-card-highlight' : ''}`;

    card.innerHTML = `
      ${badge ? `<div class="bonus-badge-top"><span>${badge}</span></div>` : ''}
      <div class="bonus-card-img-container">
        <img src="${imagem}" alt="${titulo}" class="bonus-card-img" loading="lazy" decoding="async" />
      </div>
      <div class="bonus-card-info">
        <h3 class="bonus-card-title">${titulo}</h3>
        <p class="bonus-card-desc">${descricao}</p>
        <div class="bonus-card-divider"></div>
        <div class="bonus-card-price-row">
          <span class="bonus-price-old">${precoAntigo}</span>
          <span class="bonus-price-free">${BONUS_FREE_LABEL}</span>
        </div>
      </div>
    `;

    return card;
  }

  if (bonusGrid) {
    bonusesData.forEach(data => bonusGrid.appendChild(BonusCard(data)));
  }

  // 3. Scroll Reveal Effect
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.section-title, .dor-card, .bonus-card, .pricing-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
    observer.observe(el);
  });
});
