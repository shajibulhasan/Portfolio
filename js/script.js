  document.getElementById('year').textContent = new Date().getFullYear();
  const navToggle = document.getElementById('navToggle');
  const navlinks = document.getElementById('navlinks');
  navToggle.addEventListener('click', ()=> navlinks.classList.toggle('open'));
  navlinks.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=>navlinks.classList.remove('open')));

  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('show'); });
  }, {threshold:0.1});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

  document.getElementById('contactForm').addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = e.target[0].value, email = e.target[1].value, msg = e.target[2].value;
    window.location.href = `mailto:shajibulhasan.ms@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(msg + '\n\nFrom: ' + email)}`;
  });

  // Back to top button
  const backToTop = document.getElementById('backToTop');
  window.addEventListener('scroll', ()=>{
    if(window.scrollY > 400){ backToTop.classList.add('show'); } else { backToTop.classList.remove('show'); }
  });
  backToTop.addEventListener('click', ()=> window.scrollTo({top:0, behavior:'smooth'}));