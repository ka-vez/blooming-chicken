// reveal elements on scroll
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.15 });

reveals.forEach(r => io.observe(r));

// header link active state (simple client check)
document.querySelectorAll('.nav-link').forEach(link => {
  if (link.href === location.href || location.href.includes(link.getAttribute('href'))) {
    link.classList.add('active');
  }
});

// menu tabs filtering (menu.html)
document.addEventListener('click', (e) => {
  if (e.target.matches('.tab-btn')) {
    const cat = e.target.dataset.cat;
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');

    document.querySelectorAll('.menu-card').forEach(card => {
      if (cat === 'all' || card.dataset.cat === cat) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  }
});

// contact form: open user's email client with form data
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const subject = encodeURIComponent(`Website Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:yourbusiness@example.com?subject=${subject}&body=${body}`;
  });
}
