<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Kfz-Werkstatt Märkisch Linden</title>

  <link rel="stylesheet" href="style.css">
</head>
<body>

<header>
  <div class="logo">
    🚗 Kfz-Werkstatt Märkisch Linden
  </div>

  <nav>
    <a href="#home">Start</a>
    <a href="#leistungen">Leistungen</a>
    <a href="#kontakt">Kontakt</a>
  </nav>
</header>

<section class="hero" id="home">
  <h1>Ihre Kfz-Werkstatt in Märkisch Linden</h1>
  <p>Schnell • Zuverlässig • Preiswert</p>

  <a href="#kontakt" class="button">
    Termin vereinbaren
  </a>
</section>

<section id="leistungen">

<h2>Unsere Leistungen</h2>

<div class="cards">

<div class="card">
<h3>🛞 Reifenwechsel</h3>
<p>Sommer- und Winterreifen professionell wechseln.</p>
</div>

<div class="card">
<h3>💡 Lampenwechsel</h3>
<p>Schneller Austausch aller Fahrzeuglampen.</p>
</div>

<div class="card">
<h3>🛢️ Ölwechsel</h3>
<p>Hochwertige Öle inklusive Ölfilterwechsel.</p>
</div>

<div class="card">
<h3>🔋 Batterie</h3>
<p>Batterietest und Austausch.</p>
</div>

<div class="card">
<h3>🛠 Bremsen</h3>
<p>Bremsbeläge und Bremsscheiben prüfen.</p>
</
*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Arial,Helvetica,sans-serif;
}

body{
background:#111;
color:white;
}

header{
display:flex;
justify-content:space-between;
align-items:center;
padding:20px;
background:#000;
position:sticky;
top:0;
}

.logo{
font-size:24px;
font-weight:bold;
color:#00aaff;
}

nav a{
color:white;
text-decoration:none;
margin-left:20px;
transition:.3s;
}

nav a:hover{
color:#00aaff;
}

.hero{
height:90vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
padding:20px;
background:linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6)),url("images/werkstatt.jpg");
background-size:cover;
background-position:center;
}

.hero h1{
font-size:50px;
margin-bottom:15px;
}

.hero p{
font-size:22px;
margin-bottom:30px;
}

.button{
background:#00aaff;
padding:15px 35px;
border-radius:8px;
color:white;
text-decoration:none;
font-weight:bold;
transition:.3s;
}

.button:hover{
background:#0088cc;
}

section{
padding:80px 20px;
}

h2{
text-align:center;
margin-bottom:40px;
font-size:35px;
}

.cards{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:20px;
}

.card{
background:#1f1f1f;
padding:25px;
border-radius:10px;
transition:.3s;
}

.card:hover{
transform:translateY(-8px);
background:#252525;
}

.card h3{
margin-bottom:10px;
color:#00aaff;
}

#kontakt{
text-align:center;
}

#kontakt p{
margin:15px;
font-size:18px;
}

footer{
background:#000;
padding:20px;
text-align:center;
margin-top:40px;
color:#aaa;
}

@media(max-width:768px){

header{
flex-direction:column;
}

nav{
margin-top:15px;
}

.hero h1{
font-size:35px;
}

.hero p{
font-size:18px;
}

}
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
