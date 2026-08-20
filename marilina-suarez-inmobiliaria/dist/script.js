const button = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');
button?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  button.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.nav a').forEach((link) => link.addEventListener('click', () => nav.classList.remove('open')));
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  alert('¡Gracias por tu consulta! Próximamente responderemos a la información que nos dejaste.');
});

const whatsappUrl = 'https://wa.me/542302629322?text=Hola%20Marilina%2C%20quiero%20hacer%20una%20consulta.';
document.querySelectorAll('a[href="tel:+542302629322"]').forEach((link) => {
  link.href = whatsappUrl;
  link.target = '_blank';
  link.rel = 'noreferrer';
});
const whatsappButton = document.createElement('a');
whatsappButton.className = 'whatsapp-float';
whatsappButton.href = whatsappUrl;
whatsappButton.target = '_blank';
whatsappButton.rel = 'noreferrer';
whatsappButton.innerHTML = '<span>◉</span> WhatsApp';
document.body.appendChild(whatsappButton);
