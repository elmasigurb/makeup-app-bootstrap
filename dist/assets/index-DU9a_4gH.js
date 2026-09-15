(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{time:`16:00`,name:`Jóna Birksdóttir`,service:`Formal Makeup`},{time:`18:00`,name:`Tinna Friðriksdóttir`,service:`Consultation`}],t=e=>`<svg viewBox="0 0 24 24" aria-hidden="true">${{home:`<path d="m3 10 9-7 9 7v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-9Z"/><path d="M9 21v-6h6v6"/>`,calendar:`<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>`,kit:`<path d="M9 3h6v7H9zM8 10h8v8H8zM7 18h10v3H7z"/><path d="M9 10V7h6v3"/>`,profile:`<circle cx="12" cy="7" r="4"/><path d="M4 21c.8-4 3.4-6 8-6s7.2 2 8 6"/>`}[e]}</svg>`,n=`.....1.2.3.4.5.6.7.8.9.10.11.12.13.14.15.16.17.18.19.20.21.22.23.24.25.26.27.28.29.30`.split(`.`),r=e=>`
  <nav class="bottom-nav" aria-label="Primary navigation">
    <a class="${e===`home`?`active`:``}" href="#home" aria-label="Home">${t(`home`)}</a>
    <a class="${e===`calendar`?`active`:``}" href="#calendar" aria-label="Calendar">${t(`calendar`)}</a>
    <a class="${e===`kit`?`active`:``}" href="#kit" aria-label="Kit list">${t(`kit`)}</a>
    <a class="${e===`clients`?`active`:``}" href="#clients" aria-label="Clients">${t(`profile`)}</a>
  </nav>`,i=()=>`
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
            <div class="day-grid">${n.map(e=>`<span class="${e===`6`?`selected-day`:``}">${e}</span>`).join(``)}</div>
          </div>
          <div class="appointments">
            ${e.map(e=>`<div class="appointment"><time>${e.time}</time><div><strong>${e.name}</strong><span>${e.service}</span></div></div>`).join(``)}
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
    ${r(`home`)}
  </section>`,a=`..1.2.3.4.5.6.7.8.9.10.11.12.13.14.15.16.17.18.19.20.21.22.23.24.25.26.27.28.29.30...`.split(`.`),o=[{time:`10:30`,name:`Birta Jóhannsdóttir`,service:`Formal Makeup`},{time:`12:00`,name:`Andrea Hansen`,service:`Bridal Trial`},{time:`13:15`,name:`Eva Jóhannsdóttir`,service:`Natural Makeup`},{time:`14:30`,name:`Agnes Gísladóttir`,service:`Formal Makeup`}],s=[{brand:`Nars`,name:`Radiant Blush`,type:`Face`,shade:`Orgasm`,opened:`2026-03-14`,expires:`2027-03-14`,notes:``},{brand:`Nars`,name:`Radiant Blush`,type:`Face`,shade:`Dolce Vita`,opened:`2026-03-14`,expires:`2027-03-14`,notes:``},{brand:`Nars`,name:`Radiant Blush`,type:`Eyes`,shade:`Sin`,opened:`2026-02-18`,expires:`2027-02-18`,notes:``},{brand:`MAC`,name:`Lip Pencil`,type:`Lips`,shade:`Soar`,opened:`2026-04-02`,expires:`2027-04-02`,notes:``}],c=`mk-kit-products`,l=()=>{try{let e=localStorage.getItem(c);return e?JSON.parse(e):s}catch{return s}},u=e=>localStorage.setItem(c,JSON.stringify(e)),d=e=>e?e.split(`-`).reverse().slice(0,2).join(`/`):`—`,f=e=>new Promise(t=>{let n=new FileReader;n.addEventListener(`load`,()=>t(String(n.result))),n.readAsDataURL(e)}),p=`mk-clients`,m=[{id:1,name:`Agnes Gísladóttir`,notes:`Sensitive skin`},{id:2,name:`Andrea Hansen`,notes:`Prefers a natural finish`},{id:3,name:`Birta Jóhannsdóttir`,notes:`Bridal makeup client`},{id:6,name:`Eva Jóhannsdóttir`,notes:`Prefers a soft, natural look`},{id:4,name:`Jóna Birksdóttir`,notes:`Allergic to waterproof mascara`},{id:5,name:`Jóna Teitsdóttir`,notes:`Warm-toned makeup looks`}],h=()=>{try{let e=localStorage.getItem(p);return e?JSON.parse(e):m}catch{return m}},g=e=>localStorage.setItem(p,JSON.stringify(e)),_=e=>e.charAt(0).toUpperCase(),v=()=>{let e=h().reduce((e,t)=>{let n=_(t.name);return(e[n]??=[]).push(t),e},{});return`
  <section class="phone-shell" aria-label="Clients">
    <header class="app-header"><span>MK</span></header>
    <div class="page-content clients-page">
      <div class="clients-title-row"><h1>Clients</h1><button class="add-client-trigger" type="button" aria-label="Add client">+</button></div>
      <label class="client-search"><span>⌕</span><input type="search" placeholder="Search clients" aria-label="Search clients" /></label>
      <section class="client-list" aria-label="Client list">${Object.entries(e).map(([e,t])=>`<div class="client-letter-group"><h2>${e}</h2>${t.map((t,n)=>`<button class="client-row" type="button" data-client-id="${t.id}"><span class="client-photo photo-${(n+e.charCodeAt(0))%4}" aria-hidden="true"></span><span>${t.name}</span><b>›</b></button>`).join(``)}</div>`).join(``)}</section>
    </div>
    <div class="client-card-modal" hidden><div class="modal-backdrop"></div><section class="client-card"><button class="close-client-card" type="button" aria-label="Close">×</button><div class="client-card-content"></div></section></div>
    <div class="client-form-modal" hidden><div class="modal-backdrop"></div><form class="client-form"><div class="form-heading"><h2>New Client</h2><button class="close-client-form" type="button" aria-label="Close">×</button></div><label>Name<input name="name" required placeholder="Client name" /></label><label>Notes<textarea name="notes" placeholder="Add notes"></textarea></label><button class="save-client" type="submit">Save Client</button></form></div>
    ${r(`clients`)}
  </section>`},y=()=>{let e=l().reduce((e,t)=>((e[t.type]??=[]).push(t),e),{});return`
  <section class="phone-shell" aria-label="Kit list">
    <header class="app-header"><span>MK</span></header>
    <div class="page-content kit-page">
      <div class="kit-title-row"><h1>Kit List</h1><button class="add-product-trigger" type="button" aria-label="Add product">+</button></div>
      <div class="product-categories">
        ${Object.entries(e).map(([e,t])=>`<section class="product-category"><h2>${e}</h2><div class="product-card">${t.map(e=>`<div class="product-row ${e.photo?`with-photo`:``}">${e.photo?`<img src="${e.photo}" alt="" />`:``}<strong class="product-brand">${e.brand}</strong><span class="product-type">${e.name}</span><span class="product-shade">${e.shade}</span><time>${d(e.expires)}</time></div>`).join(``)}</div></section>`).join(``)}
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
    ${r(`kit`)}
  </section>`},b=()=>`
  <section class="phone-shell" aria-label="Calendar">
    <header class="app-header"><span>MK</span></header>
    <div class="page-content calendar-page">
      <div class="calendar-title-row"><h1>Calendar</h1><button class="add-appointment-trigger" type="button" aria-label="Add appointment">+</button></div>
      <section class="month-calendar" aria-label="September 2026">
        <div class="month-title"><button type="button" aria-label="Previous month">‹</button><h2>September 2026</h2><button type="button" aria-label="Next month">›</button></div>
        <div class="calendar-weekdays"><span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span></div>
        <div class="full-day-grid">${a.map(e=>`<span class="${e===`6`?`calendar-selected`:``}">${e}</span>`).join(``)}</div>
      </section>
      <section class="appointment-list" aria-labelledby="appointments-title">
        <div class="appointment-list-heading"><h2 id="appointments-title">Next up</h2><span>September 6</span></div>
        <div class="appointment-group">
          <h3>11.09 Friday</h3>
          ${o.slice(0,2).map(e=>`<button class="calendar-appointment open-client" type="button" data-client-name="${e.name}"><time>${e.time}</time><span><strong>${e.name}</strong><small>${e.service}</small></span></button>`).join(``)}
        </div>
        <div class="appointment-group">
          <h3>12.09 Saturday</h3>
          ${o.slice(2).map(e=>`<button class="calendar-appointment open-client" type="button" data-client-name="${e.name}"><time>${e.time}</time><span><strong>${e.name}</strong><small>${e.service}</small></span></button>`).join(``)}
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
    ${r(`calendar`)}
  </section>`,x=document.querySelector(`#app`),S=()=>{let e=window.location.hash;x.innerHTML=e===`#calendar`?b():e===`#kit`?y():e===`#clients`?v():i();let t=x.querySelector(`.add-appointment-trigger`),n=x.querySelector(`.appointment-modal`),r=x.querySelector(`.close-form`),a=x.querySelector(`.appointment-form`);t?.addEventListener(`click`,()=>{n&&(n.hidden=!1)}),r?.addEventListener(`click`,()=>{n&&(n.hidden=!0)}),n?.querySelector(`.modal-backdrop`)?.addEventListener(`click`,()=>{n.hidden=!0}),a?.addEventListener(`submit`,e=>{e.preventDefault(),n&&(n.hidden=!0)});let o=x.querySelector(`.product-modal`);x.querySelector(`.add-product-trigger`)?.addEventListener(`click`,()=>{o&&(o.hidden=!1)}),x.querySelector(`.close-product-form`)?.addEventListener(`click`,()=>{o&&(o.hidden=!0)}),o?.querySelector(`.modal-backdrop`)?.addEventListener(`click`,()=>{o.hidden=!0}),x.querySelector(`.product-form`)?.addEventListener(`submit`,async e=>{e.preventDefault();let t=new FormData(e.currentTarget),n={brand:String(t.get(`brand`)??``),name:String(t.get(`name`)??``),type:String(t.get(`type`)??``),shade:String(t.get(`shade`)??``),opened:String(t.get(`opened`)??``),expires:String(t.get(`expires`)??``),notes:String(t.get(`notes`)??``)},r=t.get(`photo`);r instanceof File&&r.size>0&&(n.photo=await f(r)),u([...l(),n]),o&&(o.hidden=!0),S()});let s=x.querySelector(`.client-card-modal`),c=x.querySelector(`.client-card-content`),d=(e,t)=>{let n=h().find(n=>t?n.id===t:n.name===e)??{id:0,name:e,notes:`Client information will be added soon.`};n&&s&&c&&(c.innerHTML=`<span class="client-card-photo photo-${n.id%4}" aria-hidden="true"></span><h2>${n.name}</h2><div class="client-notes"><strong>Notes:</strong><p>${n.notes||`No notes yet.`}</p></div><div class="client-history"><strong>Recent appointments</strong><span>Formal Makeup · 06 Sep 2026</span><span>Bridal Trial · 21 Aug 2026</span></div>`,s.hidden=!1)};x.querySelectorAll(`.client-row`).forEach(e=>e.addEventListener(`click`,()=>d(``,Number(e.dataset.clientId)))),x.querySelectorAll(`.open-client`).forEach(e=>e.addEventListener(`click`,()=>d(String(e.dataset.clientName??`Client`)))),x.querySelector(`.close-client-card`)?.addEventListener(`click`,()=>{s&&(s.hidden=!0)}),s?.querySelector(`.modal-backdrop`)?.addEventListener(`click`,()=>{s.hidden=!0});let p=x.querySelector(`.client-form-modal`);x.querySelector(`.add-client-trigger`)?.addEventListener(`click`,()=>{p&&(p.hidden=!1)}),x.querySelector(`.close-client-form`)?.addEventListener(`click`,()=>{p&&(p.hidden=!0)}),p?.querySelector(`.modal-backdrop`)?.addEventListener(`click`,()=>{p.hidden=!0}),x.querySelector(`.client-form`)?.addEventListener(`submit`,e=>{e.preventDefault();let t=new FormData(e.currentTarget);g([...h(),{id:Date.now(),name:String(t.get(`name`)??``),notes:String(t.get(`notes`)??``)}]),p&&(p.hidden=!0),S()}),x.querySelector(`.client-search input`)?.addEventListener(`input`,e=>{let t=e.currentTarget.value.toLocaleLowerCase();x.querySelectorAll(`.client-row`).forEach(e=>{e.hidden=!e.innerText.toLocaleLowerCase().includes(t)})})};window.addEventListener(`hashchange`,S),S();