import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

type Appointment = { time: string; name: string; service: string };
type Product = { brand: string; name: string; type: string; shade: string; opened: string; expires: string; notes: string; photo?: string };
type Client = { id: number; name: string; notes: string };

const appointments: Appointment[] = [
  { time: '16:00', name: 'Jóna Birksdóttir', service: 'Formal Makeup' },
  { time: '18:00', name: 'Tinna Friðriksdóttir', service: 'Consultation' },
];

const icon = (name: 'home' | 'calendar' | 'kit' | 'profile') => {
  const paths = {
    home: '<path d="m3 10 9-7 9 7v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-9Z"/><path d="M9 21v-6h6v6"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>',
    kit: '<path d="M9 3h6v7H9zM8 10h8v8H8zM7 18h10v3H7z"/><path d="M9 10V7h6v3"/>',
    profile: '<circle cx="12" cy="7" r="4"/><path d="M4 21c.8-4 3.4-6 8-6s7.2 2 8 6"/>',
  };
  return `<svg viewBox="0 0 24 24" aria-hidden="true">${paths[name]}</svg>`;
};

const calendarDays = [
  '', '', '', '', '', '1', '2',
  '3', '4', '5', '6', '7', '8', '9',
  '10', '11', '12', '13', '14', '15', '16',
  '17', '18', '19', '20', '21', '22', '23',
  '24', '25', '26', '27', '28', '29', '30',
];

const nav = (active: 'home' | 'calendar' | 'kit' | 'clients') => `
  <nav class="bottom-nav" aria-label="Primary navigation">
    <a class="${active === 'home' ? 'active' : ''}" href="#home" aria-label="Home">${icon('home')}</a>
    <a class="${active === 'calendar' ? 'active' : ''}" href="#calendar" aria-label="Calendar">${icon('calendar')}</a>
    <a class="${active === 'kit' ? 'active' : ''}" href="#kit" aria-label="Kit list">${icon('kit')}</a>
    <a class="${active === 'clients' ? 'active' : ''}" href="#clients" aria-label="Clients">${icon('profile')}</a>
  </nav>`;

const homeView = () => `
  <section class="phone-shell" aria-label="Makeup kit dashboard">
    <header class="app-header"><span>MK</span><i></i></header>
    <div class="page-content">
      <section class="welcome-card">
        <p class="eyebrow">Welcome back,</p>
        <h1>Your Kit</h1>
        <p class="muted-on-dark">Your kit is looking good!</p>
        <div class="kit-stats">
          <span><strong>75</strong>Products</span>
          <span><strong>12</strong>Products expiring soon</span>
        </div>
      </section>

      <section class="today-card" aria-labelledby="today-heading">
        <div class="section-heading"><h2 id="today-heading">Today...</h2><span>September · 2026</span></div>
        <div class="today-grid">
          <div class="mini-calendar">
            <div class="mini-month"><strong>September</strong><span>2026</span></div>
            <div class="week-labels"><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span></div>
            <div class="day-grid">${calendarDays.map(day => `<span class="${day === '6' ? 'selected-day' : ''}">${day}</span>`).join('')}</div>
          </div>
          <div class="appointments">
            ${appointments.map(item => `<div class="appointment"><time>${item.time}</time><div><strong>${item.name}</strong><span>${item.service}</span></div></div>`).join('')}
            <button class="checklist-link" type="button">Checklist (8)</button>
          </div>
        </div>
      </section>

      <section class="checklist-card" aria-labelledby="checklist-heading">
        <div class="section-heading"><h2 id="checklist-heading">Checklist</h2><span>8 items</span></div>
        <label><input type="checkbox" checked /><span>Clean brushes for today</span></label>
        <label><input type="checkbox" /><span>Pack touch-up kit</span></label>
        <label><input type="checkbox" /><span>Check product expiry dates</span></label>
      </section>
    </div>
    ${nav('home')}
  </section>`;

const fullCalendarDays = [
  '', '', '1', '2', '3', '4', '5',
  '6', '7', '8', '9', '10', '11', '12',
  '13', '14', '15', '16', '17', '18', '19',
  '20', '21', '22', '23', '24', '25', '26',
  '27', '28', '29', '30', '', '', '',
];

const calendarAppointments: Appointment[] = [
  { time: '10:30', name: 'Birta Jóhannsdóttir', service: 'Formal Makeup' },
  { time: '12:00', name: 'Andrea Hansen', service: 'Bridal Trial' },
  { time: '13:15', name: 'Eva Jóhannsdóttir', service: 'Natural Makeup' },
  { time: '14:30', name: 'Agnes Gísladóttir', service: 'Formal Makeup' },
];

const starterProducts: Product[] = [
  { brand: 'Nars', name: 'Radiant Blush', type: 'Face', shade: 'Orgasm', opened: '2026-03-14', expires: '2027-03-14', notes: '' },
  { brand: 'Nars', name: 'Radiant Blush', type: 'Face', shade: 'Dolce Vita', opened: '2026-03-14', expires: '2027-03-14', notes: '' },
  { brand: 'Nars', name: 'Radiant Blush', type: 'Eyes', shade: 'Sin', opened: '2026-02-18', expires: '2027-02-18', notes: '' },
  { brand: 'MAC', name: 'Lip Pencil', type: 'Lips', shade: 'Soar', opened: '2026-04-02', expires: '2027-04-02', notes: '' },
];

const productStorageKey = 'mk-kit-products';
const products = (): Product[] => {
  try {
    const saved = localStorage.getItem(productStorageKey);
    return saved ? JSON.parse(saved) as Product[] : starterProducts;
  } catch { return starterProducts; }
};
const saveProducts = (items: Product[]) => localStorage.setItem(productStorageKey, JSON.stringify(items));
const shortDate = (date: string) => date ? date.split('-').reverse().slice(0, 2).join('/') : '—';
const fileToDataUrl = (file: File) => new Promise<string>((resolve) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => resolve(String(reader.result)));
  reader.readAsDataURL(file);
});

const clientStorageKey = 'mk-clients';
const starterClients: Client[] = [
  { id: 1, name: 'Agnes Gísladóttir', notes: 'Sensitive skin' },
  { id: 2, name: 'Andrea Hansen', notes: 'Prefers a natural finish' },
  { id: 3, name: 'Birta Jóhannsdóttir', notes: 'Bridal makeup client' },
  { id: 6, name: 'Eva Jóhannsdóttir', notes: 'Prefers a soft, natural look' },
  { id: 4, name: 'Jóna Birksdóttir', notes: 'Allergic to waterproof mascara' },
  { id: 5, name: 'Jóna Teitsdóttir', notes: 'Warm-toned makeup looks' },
];
const clients = (): Client[] => {
  try { const saved = localStorage.getItem(clientStorageKey); return saved ? JSON.parse(saved) as Client[] : starterClients; } catch { return starterClients; }
};
const saveClients = (items: Client[]) => localStorage.setItem(clientStorageKey, JSON.stringify(items));
const clientInitial = (name: string) => name.charAt(0).toUpperCase();

const clientsView = () => {
  const groupedClients = clients().reduce<Record<string, Client[]>>((result, client) => {
    const letter = clientInitial(client.name);
    (result[letter] ??= []).push(client);
    return result;
  }, {});
  return `
  <section class="phone-shell" aria-label="Clients">
    <header class="app-header"><span>MK</span></header>
    <div class="page-content clients-page">
      <div class="clients-title-row"><h1>Clients</h1><button class="add-client-trigger" type="button" aria-label="Add client">+</button></div>
      <label class="client-search"><span>⌕</span><input type="search" placeholder="Search clients" aria-label="Search clients" /></label>
      <section class="client-list" aria-label="Client list">${Object.entries(groupedClients).map(([letter, items]) => `<div class="client-letter-group"><h2>${letter}</h2>${items.map((client, index) => `<button class="client-row" type="button" data-client-id="${client.id}"><span class="client-photo photo-${(index + letter.charCodeAt(0)) % 4}" aria-hidden="true"></span><span>${client.name}</span><b>›</b></button>`).join('')}</div>`).join('')}</section>
    </div>
    <div class="client-card-modal" hidden><div class="modal-backdrop"></div><section class="client-card"><button class="close-client-card" type="button" aria-label="Close">×</button><div class="client-card-content"></div></section></div>
    <div class="client-form-modal" hidden><div class="modal-backdrop"></div><form class="client-form"><div class="form-heading"><h2>New Client</h2><button class="close-client-form" type="button" aria-label="Close">×</button></div><label>Name<input name="name" required placeholder="Client name" /></label><label>Notes<textarea name="notes" placeholder="Add notes"></textarea></label><button class="save-client" type="submit">Save Client</button></form></div>
    ${nav('clients')}
  </section>`;
};

const kitView = () => {
  const grouped = products().reduce<Record<string, Product[]>>((result, product) => {
    (result[product.type] ??= []).push(product);
    return result;
  }, {});
  return `
  <section class="phone-shell" aria-label="Kit list">
    <header class="app-header"><span>MK</span></header>
    <div class="page-content kit-page">
      <div class="kit-title-row"><h1>Kit List</h1><button class="add-product-trigger" type="button" aria-label="Add product">+</button></div>
      <div class="product-categories">
        ${Object.entries(grouped).map(([type, items]) => `<section class="product-category"><h2>${type}</h2><div class="product-card">${items.map(product => `<div class="product-row ${product.photo ? 'with-photo' : ''}">${product.photo ? `<img src="${product.photo}" alt="" />` : ''}<strong class="product-brand">${product.brand}</strong><span class="product-type">${product.name}</span><span class="product-shade">${product.shade}</span><time>${shortDate(product.expires)}</time></div>`).join('')}</div></section>`).join('')}
      </div>
    </div>
    <div class="product-modal" hidden>
      <div class="modal-backdrop"></div>
      <form class="product-form">
        <div class="form-heading"><h2>Add Product</h2><button class="close-product-form" type="button" aria-label="Close">×</button></div>
        <label>Brand<input required name="brand" placeholder="Brand" /></label>
        <label>Product name<input required name="name" placeholder="Product name" /></label>
        <label>Product type<input required name="type" placeholder="e.g. Face, Eyes, Lips" /></label>
        <label>Color / shade<input name="shade" placeholder="Color or shade" /></label>
        <div class="form-date-grid"><label>Date opened<input required name="opened" type="date" /></label><label>Expiration date<input required name="expires" type="date" /></label></div>
        <label>Notes<textarea name="notes" placeholder="Add notes"></textarea></label>
        <label>Photo<input name="photo" type="file" accept="image/*" /></label>
        <button class="save-product" type="submit">Save Product</button>
      </form>
    </div>
    ${nav('kit')}
  </section>`;
};

const calendarView = () => `
  <section class="phone-shell" aria-label="Calendar">
    <header class="app-header"><span>MK</span></header>
    <div class="page-content calendar-page">
      <div class="calendar-title-row"><h1>Calendar</h1><button class="add-appointment-trigger" type="button" aria-label="Add appointment">+</button></div>
      <section class="month-calendar" aria-label="September 2026">
        <div class="month-title"><button type="button" aria-label="Previous month">‹</button><h2>September 2026</h2><button type="button" aria-label="Next month">›</button></div>
        <div class="calendar-weekdays"><span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span></div>
        <div class="full-day-grid">${fullCalendarDays.map(day => `<span class="${day === '6' ? 'calendar-selected' : ''}">${day}</span>`).join('')}</div>
      </section>
      <section class="appointment-list" aria-labelledby="appointments-title">
        <div class="appointment-list-heading"><h2 id="appointments-title">Next up</h2><span>September 6</span></div>
        <div class="appointment-group">
          <h3>11.09 Friday</h3>
          ${calendarAppointments.slice(0, 2).map(item => `<button class="calendar-appointment open-client" type="button" data-client-name="${item.name}"><time>${item.time}</time><span><strong>${item.name}</strong><small>${item.service}</small></span></button>`).join('')}
        </div>
        <div class="appointment-group">
          <h3>12.09 Saturday</h3>
          ${calendarAppointments.slice(2).map(item => `<button class="calendar-appointment open-client" type="button" data-client-name="${item.name}"><time>${item.time}</time><span><strong>${item.name}</strong><small>${item.service}</small></span></button>`).join('')}
        </div>
      </section>
    </div>
    <div class="appointment-modal" hidden>
      <div class="modal-backdrop"></div>
      <form class="appointment-form">
        <div class="form-heading"><h2>Add Appointment</h2><button class="close-form" type="button" aria-label="Close">×</button></div>
        <label>Client name<input required name="client" placeholder="Client name" /></label>
        <label>Date<input required name="date" type="date" value="2026-09-06" /></label>
        <label>Time<input required name="time" type="time" /></label>
        <label>Appointment type<input required name="type" placeholder="e.g. Formal Makeup" /></label>
        <label>Notes<textarea name="notes" placeholder="Add notes"></textarea></label>
        <button class="save-appointment" type="submit">Save Appointment</button>
      </form>
    </div>
    <div class="client-card-modal" hidden><div class="modal-backdrop"></div><section class="client-card"><button class="close-client-card" type="button" aria-label="Close">×</button><div class="client-card-content"></div></section></div>
    ${nav('calendar')}
  </section>`;

const app = document.querySelector<HTMLDivElement>('#app')!;

const render = () => {
  const route = window.location.hash;
  app.innerHTML = route === '#calendar' ? calendarView() : route === '#kit' ? kitView() : route === '#clients' ? clientsView() : homeView();

  const openButton = app.querySelector<HTMLButtonElement>('.add-appointment-trigger');
  const modal = app.querySelector<HTMLDivElement>('.appointment-modal');
  const closeButton = app.querySelector<HTMLButtonElement>('.close-form');
  const form = app.querySelector<HTMLFormElement>('.appointment-form');
  openButton?.addEventListener('click', () => { if (modal) modal.hidden = false; });
  closeButton?.addEventListener('click', () => { if (modal) modal.hidden = true; });
  modal?.querySelector('.modal-backdrop')?.addEventListener('click', () => { modal.hidden = true; });
  form?.addEventListener('submit', (event) => { event.preventDefault(); if (modal) modal.hidden = true; });

  const productModal = app.querySelector<HTMLDivElement>('.product-modal');
  app.querySelector<HTMLButtonElement>('.add-product-trigger')?.addEventListener('click', () => { if (productModal) productModal.hidden = false; });
  app.querySelector<HTMLButtonElement>('.close-product-form')?.addEventListener('click', () => { if (productModal) productModal.hidden = true; });
  productModal?.querySelector('.modal-backdrop')?.addEventListener('click', () => { productModal.hidden = true; });
  app.querySelector<HTMLFormElement>('.product-form')?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const values = new FormData(event.currentTarget as HTMLFormElement);
    const newProduct: Product = {
      brand: String(values.get('brand') ?? ''), name: String(values.get('name') ?? ''), type: String(values.get('type') ?? ''),
      shade: String(values.get('shade') ?? ''), opened: String(values.get('opened') ?? ''), expires: String(values.get('expires') ?? ''), notes: String(values.get('notes') ?? ''),
    };
    const photo = values.get('photo');
    if (photo instanceof File && photo.size > 0) newProduct.photo = await fileToDataUrl(photo);
    saveProducts([...products(), newProduct]);
    if (productModal) productModal.hidden = true;
    render();
  });

  const clientCardModal = app.querySelector<HTMLDivElement>('.client-card-modal');
  const clientCardContent = app.querySelector<HTMLDivElement>('.client-card-content');
  const showClientCard = (name: string, id?: number) => {
    const client = clients().find((item) => id ? item.id === id : item.name === name) ?? { id: 0, name, notes: 'Client information will be added soon.' };
    if (!client || !clientCardModal || !clientCardContent) return;
    clientCardContent.innerHTML = `<span class="client-card-photo photo-${client.id % 4}" aria-hidden="true"></span><h2>${client.name}</h2><div class="client-notes"><strong>Notes:</strong><p>${client.notes || 'No notes yet.'}</p></div><div class="client-history"><strong>Recent appointments</strong><span>Formal Makeup · 06 Sep 2026</span><span>Bridal Trial · 21 Aug 2026</span></div>`;
    clientCardModal.hidden = false;
  };
  app.querySelectorAll<HTMLButtonElement>('.client-row').forEach((button) => button.addEventListener('click', () => showClientCard('', Number(button.dataset.clientId))));
  app.querySelectorAll<HTMLButtonElement>('.open-client').forEach((button) => button.addEventListener('click', () => showClientCard(String(button.dataset.clientName ?? 'Client'))));
  app.querySelector<HTMLButtonElement>('.close-client-card')?.addEventListener('click', () => { if (clientCardModal) clientCardModal.hidden = true; });
  clientCardModal?.querySelector('.modal-backdrop')?.addEventListener('click', () => { clientCardModal.hidden = true; });

  const clientFormModal = app.querySelector<HTMLDivElement>('.client-form-modal');
  app.querySelector<HTMLButtonElement>('.add-client-trigger')?.addEventListener('click', () => { if (clientFormModal) clientFormModal.hidden = false; });
  app.querySelector<HTMLButtonElement>('.close-client-form')?.addEventListener('click', () => { if (clientFormModal) clientFormModal.hidden = true; });
  clientFormModal?.querySelector('.modal-backdrop')?.addEventListener('click', () => { clientFormModal.hidden = true; });
  app.querySelector<HTMLFormElement>('.client-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const values = new FormData(event.currentTarget as HTMLFormElement);
    saveClients([...clients(), { id: Date.now(), name: String(values.get('name') ?? ''), notes: String(values.get('notes') ?? '') }]);
    if (clientFormModal) clientFormModal.hidden = true;
    render();
  });
  app.querySelector<HTMLInputElement>('.client-search input')?.addEventListener('input', (event) => {
    const query = (event.currentTarget as HTMLInputElement).value.toLocaleLowerCase();
    app.querySelectorAll<HTMLButtonElement>('.client-row').forEach((row) => { row.hidden = !row.innerText.toLocaleLowerCase().includes(query); });
  });
};

window.addEventListener('hashchange', render);
render();
