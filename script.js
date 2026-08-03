// Sanftes Scrollen für Navigationslinks
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const ziel = document.querySelector(this.getAttribute('href'));

    if (ziel) {
      ziel.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Animation beim Scrollen
const karten = document.querySelectorAll('.card');

const observer = new IntersectionObserver((eintraege) => {
  eintraege.forEach(eintrag => {
    if (eintrag.isIntersecting) {
      eintrag.target.style.opacity = "1";
      eintrag.target.style.transform = "translateY(0)";
    }
  });
});

karten.forEach(karte => {
  karte.style.opacity = "0";
  karte.style.transform = "translateY(40px)";
  karte.style.transition = "0.6s";
  observer.observe(karte);
});

// Begrüßung in der Konsole
console.log("Kfz-Werkstatt Märkisch Linden - Website geladen");
