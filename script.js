const categories = [
  { slug:'todos', label:'Todos' },
  { slug:'profesionales', label:'Servicios Profesionales' },
  { slug:'retail', label:'Retail & Tiendas' },
  { slug:'comida', label:'Comida & Bebida' },
  { slug:'creativos', label:'Creativos & Contenido' },
  { slug:'raices', label:'Bienes Raíces' },
  { slug:'comunidad', label:'Eventos & Comunidad' },
  { slug:'educacion', label:'Educación & Herramientas' },
];

const services = [
  { n:'01', icon:'🎯', t:'Página de Aterrizaje', accent:'--teal', cat:'profesionales', tier:'Básico', rd:'6,500', usd:'110',
    d:'Un solo objetivo, cero distracciones: convertir visitantes en clientes. Diseño persuasivo con llamada a la acción y formulario de contacto.',
    tags:['Salones de belleza','Fotógrafos','Coaches','Dentistas','Abogados'] },
  { n:'02', icon:'🛒', t:'Tienda Online', accent:'--gold', cat:'retail', tier:'Premium', rd:'26,000', usd:'440',
    d:'Tu tienda abierta 24/7. Catálogo de productos, carrito, pasarela de pago y gestión de pedidos completa.',
    tags:['Ropa & calzado','Cosméticos','Accesorios','Artesanías','Electrónica'] },
  { n:'03', icon:'🏢', t:'Sitio Empresarial', accent:'--violet', cat:'profesionales', tier:'Pro', rd:'14,000', usd:'235',
    d:'Presencia completa para tu empresa. Quiénes somos, servicios, equipo y contacto — proyecta autoridad desde el primer clic.',
    tags:['Constructoras','Consultoras','Agencias','Clínicas','Despachos'] },
  { n:'04', icon:'🍽️', t:'Restaurante & Menú', accent:'--teal', cat:'comida', tier:'Pro', rd:'12,500', usd:'210',
    d:'Menú digital interactivo, galería de platos, horarios y botón directo a WhatsApp o delivery.',
    tags:['Restaurantes','Cafeterías','Food trucks','Repostería','Catering'] },
  { n:'05', icon:'🎨', t:'Portafolio Creativo', accent:'--gold', cat:'creativos', tier:'Básico', rd:'8,000', usd:'135',
    d:'Galería de proyectos, habilidades y testimonios. Deja que tu trabajo hable — nosotros le damos el escenario.',
    tags:['Diseñadores','Arquitectos','Videógrafos','Decoradores','Ilustradores'] },
  { n:'06', icon:'📅', t:'Reservaciones Online', accent:'--violet', cat:'profesionales', tier:'Premium', rd:'20,000', usd:'340',
    d:'Tus clientes agendan citas directamente, sin llamadas. Calendario integrado, confirmación automática y recordatorios.',
    tags:['Spas & salones','Médicos','Hoteles','Psicólogos','Entrenadores'] },
  { n:'07', icon:'📝', t:'Blog & Revista Digital', accent:'--teal', cat:'creativos', tier:'Pro', rd:'13,500', usd:'230',
    d:'Artículos que posicionan tu marca en Google y atraen clientes orgánicamente. Categorías y fácil gestión.',
    tags:['Médicos','Abogados','Nutricionistas','Educadores','Influencers'] },
  { n:'08', icon:'🏠', t:'Propiedades & Real Estate', accent:'--gold', cat:'raices', tier:'Premium', rd:'23,000', usd:'390',
    d:'Catálogo de propiedades con fotos, precios y filtros de búsqueda. Genera leads calificados sin intermediarios.',
    tags:['Agentes inmobiliarios','Constructoras','Arrendadores','Promotores'] },
  { n:'09', icon:'🔗', t:'Página de Links', accent:'--violet', cat:'creativos', tier:'Básico', rd:'4,500', usd:'75',
    d:'Todos tus links, redes, tienda y WhatsApp en una sola página elegante. Ideal para la bio de Instagram o TikTok.',
    tags:['Creadores de contenido','Emprendedores','Músicos','Artistas'] },
  { n:'10', icon:'🎉', t:'Eventos & Bodas', accent:'--teal', cat:'comunidad', tier:'Básico', rd:'7,500', usd:'125',
    d:'Cuenta regresiva, itinerario, galería, confirmación de asistencia (RSVP) e información clave para tus invitados.',
    tags:['Wedding planners','DJs','Organizadores','Salones de fiestas'] },
  { n:'11', icon:'🎓', t:'Cursos & Academia Online', accent:'--gold', cat:'educacion', tier:'Premium', rd:'24,000', usd:'405',
    d:'Vende tu conocimiento en internet. Cursos en video, materiales descargables y pagos en línea.',
    tags:['Profesores','Coaches','Academias','Técnicos','Tutores'] },
  { n:'12', icon:'⚡', t:'Mini Sitio Completo', accent:'--violet', cat:'profesionales', tier:'Básico', rd:'6,000', usd:'100',
    d:'Inicio, servicios, sobre nosotros, galería, testimonios y contacto en una sola página con scroll. Rápido y completo desde el día uno.',
    tags:['Startups','Servicios locales','Emprendedores nuevos'] },
  { n:'13', icon:'🚀', t:'Lanzamiento & Preventa', accent:'--gold', cat:'profesionales', tier:'Básico', rd:'5,500', usd:'95',
    d:'Cuenta regresiva, lista de espera y oferta de early-bird. Genera expectativa antes de abrir tu negocio o producto.',
    tags:['Startups','Nuevos productos','Aperturas','Preventas'] },
  { n:'14', icon:'🔐', t:'Suscripciones & Membresías', accent:'--violet', cat:'creativos', tier:'Premium', rd:'27,000', usd:'455',
    d:'Área privada con acceso por login, contenido exclusivo y cobros recurrentes automáticos.',
    tags:['Creadores de contenido','Comunidades','Coaches','Academias'] },
  { n:'15', icon:'🧮', t:'Comparador & Calculadora', accent:'--teal', cat:'educacion', tier:'Pro', rd:'15,000', usd:'255',
    d:'Herramienta interactiva: cotizador, calculadora o simulador que convierte visitas en leads calificados.',
    tags:['Aseguradoras','Financieras','Constructoras','Consultoras'] },
  { n:'16', icon:'🎮', t:'Streaming & Gaming', accent:'--gold', cat:'creativos', tier:'Básico', rd:'7,000', usd:'120',
    d:'Perfil de streamer o gamer con horarios de transmisión, redes, clips destacados y links de donación.',
    tags:['Streamers','Gamers','Creadores de contenido','Esports'] },
  { n:'17', icon:'🗂️', t:'Directorio & Marketplace', accent:'--violet', cat:'retail', tier:'Premium', rd:'29,000', usd:'490',
    d:'Múltiples proveedores o listados en un solo sitio, con búsqueda, filtros y perfiles individuales.',
    tags:['Cámaras de comercio','Asociaciones','Colectivos de negocios'] },
  { n:'18', icon:'💪', t:'Gimnasios & Fitness', accent:'--teal', cat:'profesionales', tier:'Pro', rd:'13,000', usd:'220',
    d:'Horarios de clases, planes de membresía, coaches destacados e inscripción o pago en línea.',
    tags:['Gimnasios','Box de crossfit','Entrenadores personales','Estudios de yoga'] },
  { n:'19', icon:'🤝', t:'ONG & Fundaciones', accent:'--gold', cat:'comunidad', tier:'Pro', rd:'12,000', usd:'205',
    d:'Cuenta la causa, muestra el impacto con cifras reales y recibe donaciones en línea de forma segura.',
    tags:['Fundaciones','ONGs','Voluntariados','Causas sociales'] },
  { n:'20', icon:'🌴', t:'Turismo & Tours', accent:'--violet', cat:'comunidad', tier:'Pro', rd:'14,500', usd:'245',
    d:'Paquetes turísticos con fotos, itinerarios y reservación directa. Ideal para vender experiencias, no solo información.',
    tags:['Tour operadores','Guías turísticos','Excursiones','Alquiler de botes'] },
  { n:'21', icon:'🚗', t:'Automotriz & Concesionario', accent:'--teal', cat:'retail', tier:'Premium', rd:'25,000', usd:'425',
    d:'Catálogo de vehículos con fotos, specs y filtros de búsqueda por precio, marca o año.',
    tags:['Concesionarios','Rent a car','Compra-venta de autos','Talleres'] },
  { n:'22', icon:'🎙️', t:'Podcast & Media', accent:'--gold', cat:'creativos', tier:'Básico', rd:'6,000', usd:'100',
    d:'Episodios embebidos de Spotify/YouTube, biografía del host y enlaces a todas las plataformas en un solo lugar.',
    tags:['Podcasters','Creadores de audio','Medios digitales'] },
];

const grid = document.getElementById('grid');
const filterBar = document.getElementById('filterBar');
const modalOverlay = document.getElementById('modalOverlay');
const modalBox = document.getElementById('modalBox');
const WA_NUMBER = '18292742131';

function priceLine(s){
  return `${s.tier} — RD$${s.rd} <span class="usd">· US$${s.usd}</span>`;
}

function waLink(service){
  const msg = `Hola! Me interesa el servicio de *${service.t}* (Catálogo #${service.n}). ¿Podemos hablar?`;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

categories.forEach(c => {
  const btn = document.createElement('button');
  btn.className = 'chip' + (c.slug === 'todos' ? ' active' : '');
  btn.textContent = c.label;
  btn.dataset.slug = c.slug;
  btn.addEventListener('click', () => {
    document.querySelectorAll('.chip').forEach(ch => ch.classList.remove('active'));
    btn.classList.add('active');
    filterCards(c.slug);
  });
  filterBar.appendChild(btn);
});

services.forEach((s, i) => {
  const card = document.createElement('article');
  card.className = 'card';
  card.dataset.cat = s.cat;
  card.style.setProperty('--accent', `var(${s.accent})`);
  card.setAttribute('tabindex', '0');
  card.setAttribute('role', 'button');
  card.setAttribute('aria-label', `Ver detalles de ${s.t}`);
  card.innerHTML = `
    <div class="card-top">
      <span class="card-index">${s.n} · CATÁLOGO</span>
      <div class="blob-badge" style="--delay:${(i%5)*-1.7}s">${s.icon}</div>
    </div>
    <h3>${s.t}</h3>
    <p>${s.d}</p>
    <div class="card-price">${priceLine(s)}</div>
    <div class="card-tags-label">Ideal para</div>
    <div class="tags">${s.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>
  `;
  card.addEventListener('click', () => openModal(s));
  card.addEventListener('keydown', e => { if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); openModal(s); } });
  grid.appendChild(card);
});

function filterCards(slug){
  document.querySelectorAll('.card').forEach(card => {
    const match = slug === 'todos' || card.dataset.cat === slug;
    if(match){
      card.classList.remove('filtered-out');
      card.classList.remove('in-view');
      requestAnimationFrame(() => requestAnimationFrame(() => card.classList.add('in-view')));
    } else {
      card.classList.add('filtered-out');
    }
  });
}

function openModal(s){
  modalBox.style.setProperty('--accent', `var(${s.accent})`);
  modalBox.innerHTML = `
    <button class="modal-close" id="modalClose" aria-label="Cerrar">✕</button>
    <div class="modal-icon">${s.icon}</div>
    <span class="card-index eyebrow">${s.n} · CATÁLOGO</span>
    <h3>${s.t}</h3>
    <p>${s.d}</p>
    <div class="modal-price">Plan ${priceLine(s)}</div>
    <div class="card-tags-label">Ideal para</div>
    <div class="modal-tags tags">${s.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>
    <a class="modal-cta" href="${waLink(s)}" target="_blank" rel="noopener">Quiero esta página →</a>
  `;
  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  document.getElementById('modalClose').addEventListener('click', closeModal);
}

function closeModal(){
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}
modalOverlay.addEventListener('click', e => { if(e.target === modalOverlay) closeModal(); });
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeModal(); });

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.card').forEach((card, i) => {
  card.style.transitionDelay = `${(i % 4) * 60}ms`;
  observer.observe(card);
});
