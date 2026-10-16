/* Explorador de campañas: imágenes SVG locales, filtros y galería navegable. */
(() => {
  "use strict";
  const campaigns = [{"id": "no-mercy", "name": "No Mercy", "game": "l4d1", "setting": "Hospital Mercy / ciudad", "desc": "Calles y un hospital bajo asedio. El grupo busca llegar a una evacuación en la azotea.", "kind": "city", "img": "assets/campanas/no-mercy.webp", "number": 1}, {"id": "crash-course", "name": "Crash Course", "game": "l4d1", "setting": "Carretera / zona industrial", "desc": "Tras el accidente del helicóptero, los supervivientes cruzan una zona industrial.", "kind": "city", "img": "assets/campanas/crash-course.webp", "number": 2}, {"id": "death-toll", "name": "Death Toll", "game": "l4d1", "setting": "Pueblo ribereño / muelle", "desc": "Carreteras, un pueblo abandonado y una huida desde el muelle.", "kind": "dock", "img": "assets/campanas/death-toll.webp", "number": 3}, {"id": "dead-air", "name": "Dead Air", "game": "l4d1", "setting": "Aeropuerto / terminal", "desc": "La ruta atraviesa la ciudad hasta una terminal aérea y su pista de despegue.", "kind": "city", "img": "assets/campanas/dead-air.webp", "number": 4}, {"id": "blood-harvest", "name": "Blood Harvest", "game": "l4d1", "setting": "Bosque / granja", "desc": "Senderos y vías de tren conducen a una granja aislada.", "kind": "forest", "img": "assets/campanas/blood-harvest.webp", "number": 5}, {"id": "the-sacrifice", "name": "The Sacrifice", "game": "l4d1", "setting": "Puerto / puente", "desc": "Los supervivientes originales deben activar un puente para continuar su recorrido.", "kind": "bridge", "img": "assets/campanas/the-sacrifice.webp", "number": 6}, {"id": "dead-center", "name": "Dead Center", "game": "l4d2", "setting": "Savannah / centro comercial", "desc": "El nuevo grupo escapa de un hotel y busca salir en un automóvil.", "kind": "city", "img": "assets/campanas/dead-center.webp", "number": 7}, {"id": "the-passing", "name": "The Passing", "game": "l4d2", "setting": "Pueblo / puente", "desc": "El grupo encuentra un paso bloqueado y se cruza con viejos supervivientes.", "kind": "bridge", "img": "assets/campanas/the-passing.webp", "number": 8}, {"id": "dark-carnival", "name": "Dark Carnival", "game": "l4d2", "setting": "Parque de atracciones", "desc": "Un carnaval abandonado se convierte en un recorrido lleno de amenazas.", "kind": "carnival", "img": "assets/campanas/dark-carnival.webp", "number": 9}, {"id": "swamp-fever", "name": "Swamp Fever", "game": "l4d2", "setting": "Pantano / plantación", "desc": "Senderos inundados, casas sobre el agua y una plantación.", "kind": "forest", "img": "assets/campanas/swamp-fever.webp", "number": 10}, {"id": "hard-rain", "name": "Hard Rain", "game": "l4d2", "setting": "Pueblo / tormenta", "desc": "Una búsqueda de combustible seguida por un regreso bajo lluvia intensa.", "kind": "rain", "img": "assets/campanas/hard-rain.webp", "number": 11}, {"id": "the-parish", "name": "The Parish", "game": "l4d2", "setting": "Nueva Orleans / puente", "desc": "La huida final atraviesa barrios urbanos hasta un puente.", "kind": "bridge", "img": "assets/campanas/the-parish.webp", "number": 12}, {"id": "cold-stream", "name": "Cold Stream", "game": "l4d2", "setting": "Cañón / río", "desc": "Campaña adicional por desfiladeros, bosques y corrientes de agua.", "kind": "forest", "img": "assets/campanas/cold-stream.webp", "number": 13}, {"id": "the-last-stand", "name": "The Last Stand", "game": "l4d2", "setting": "Costa / faro", "desc": "Una ruta alternativa hacia un faro costero.", "kind": "lighthouse", "img": "assets/campanas/the-last-stand.webp", "number": 14}];
  const gallery = document.getElementById("campaign-gallery");
  if (!gallery) return;
  const $ = id => document.getElementById(id);
  const filters = [...document.querySelectorAll(".campaign-filter")];
  let game = "all";
  let activeId = campaigns[0].id;
  const visible = () => campaigns.filter(c => game === "all" || c.game === game);
  function select(id, keepScroll=true) {
    const c = campaigns.find(x=>x.id===id);
    if (!c) return;
    activeId=c.id;
    $("campaign-featured-img").src=c.img;
    $("campaign-featured-img").alt=`Póster de ${c.name}`;
    $("campaign-featured-name").textContent=c.name;
    $("campaign-featured-desc").textContent=c.desc;
    $("campaign-featured-game").textContent=c.game==="l4d1"?"LEFT 4 DEAD 1":"LEFT 4 DEAD 2";
    $("campaign-featured-setting").textContent=c.setting;
    $("campaign-image-caption").textContent=`ARCHIVO ${String(c.number).padStart(3,"0")} // CEDA`;
    const v=visible();
    $("campaign-counter").textContent=`${v.findIndex(x=>x.id===id)+1} / ${v.length}`;
    gallery.querySelectorAll(".campaign-gallery-card").forEach(el=>{
      const current=el.dataset.id===id;
      el.classList.toggle("active",current);
      el.setAttribute("aria-pressed",String(current));
    });
    if(!keepScroll) $("campaign-featured").scrollIntoView({behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth",block:"center"});
  }
  function render(){
    gallery.replaceChildren();
    visible().forEach(c=>{
      const btn=document.createElement("button");
      btn.type="button";btn.className="campaign-gallery-card";btn.dataset.id=c.id;
      const img=document.createElement("img");img.src=c.img;img.alt="";img.loading="lazy";
      const words=document.createElement("span");words.className="campaign-card-text";
      const edition=document.createElement("small");edition.textContent=c.game==="l4d1"?"L4D 1":"L4D 2";
      const title=document.createElement("strong");title.textContent=c.name;
      words.append(edition,title);btn.append(img,words);
      btn.addEventListener("click",()=>select(c.id,false));
      gallery.appendChild(btn);
    });
    select(visible().some(c=>c.id===activeId)?activeId:visible()[0].id);
  }
  filters.forEach(btn=>btn.addEventListener("click",()=>{
    game=btn.dataset.game;filters.forEach(x=>{x.classList.toggle("active",x===btn);x.setAttribute("aria-pressed",String(x===btn));});render();
  }));
  function move(step){const v=visible();let i=v.findIndex(c=>c.id===activeId);select(v[(i+step+v.length)%v.length].id);}
  $("campaign-prev").addEventListener("click",()=>move(-1));
  $("campaign-next").addEventListener("click",()=>move(1));
  render();
})();
