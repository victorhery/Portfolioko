// Chargement des sections
const sections = [
  { id: 'header',   file: 'sections/header.html' },
  { id: 'hero',     file: 'sections/hero.html' },
  { id: 'about',    file: 'sections/about.html' },
  { id: 'projects', file: 'sections/projects.html' },
  { id: 'contact',  file: 'sections/contact.html' },
  { id: 'footer',   file: 'sections/footer.html' }
];

Promise.all(
  sections.map(section =>
    fetch(section.file)
      .then(res => res.text())
      .then(html => {
        document.getElementById(section.id).innerHTML = html;
      })
  )
).then(() => {
  // Smooth scroll (ton code d'origine)
  document.querySelectorAll('.nav-links a, .footer-nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      if (targetId === '') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
});