// script.js - small interactions
document.addEventListener('DOMContentLoaded', function(){
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // mobile menu toggle
  const toggle = document.getElementById('menuToggle');
  if(toggle){
    toggle.addEventListener('click', ()=>{
      const nav = document.getElementById('navLinks');
      if(nav.style.display==='flex') nav.style.display='none';
      else {
        nav.style.display='flex';
        nav.style.flexDirection='column';
        nav.style.position='absolute';
        nav.style.right='20px';
        nav.style.top='70px';
        nav.style.background='rgba(11,18,32,0.9)';
        nav.style.padding='12px';
        nav.style.borderRadius='10px';
      }
    });
  }

  // Contact demo submit
  const contactForm = document.getElementById('contactForm');
  if(contactForm){
    contactForm.addEventListener('submit', function(e){
      e.preventDefault();
      alert('Thanks! Your message was received (demo).');
      contactForm.reset();
    });
  }
});
