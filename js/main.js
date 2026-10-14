// ==========================================
// 1. BASE DE DATOS DE LOS 8 SUPERVIVIENTES
// ==========================================
const survivorsData = [
  {
    id: "bill",
    name: "Bill Overbeck",
    game: "l4d1",
    role: "Líder Táctico",
    img: "https://static.wikia.nocookie.net/left4dead/images/6/6a/Bill_Pan_Render.png/revision/latest/scale-to-width-down/250?cb=20130103185136",
    desc: "Veterano de Vietnam. Es el líder natural del grupo original, dispuesto a sacrificarse por la supervivencia de sus compañeros.",
    extra: "Arma favorita: Assault Rifle (M16)."
  },
  {
    id: "zoey",
    name: "Zoey",
    game: "l4d1",
    role: "Apoyo / Francotiradora",
    img: "https://static.wikia.nocookie.net/left4dead/images/9/93/Bg_survivors_bottom_zoey.jpg/revision/latest?cb=20151106040944&path-prefix=es",
    desc: "Estudiante universitaria aficionada a las películas de terror, lo que le dio una ventaja práctica inesperada ante el apocalipsis.",
    extra: "Especialista en rifles de precisión a larga distancia."
  },
  {
    id: "louis",
    name: "Louis",
    game: "l4d1",
    role: "Optimista del Equipo",
    img: "https://static.wikia.nocookie.net/left4dead/images/8/85/Bg_survivors_bottom_louis.jpg/revision/latest?cb=20151106041058&path-prefix=es",
    desc: "Analista de sistemas que mantiene la moral alta del grupo pese a la tragedia. Famoso por su adicción a los frascos de píldoras.",
    extra: "Frase icónica: 'Pills here!'"
  },
  {
    id: "francis",
    name: "Francis",
    game: "l4d1",
    role: "Tanque / Asalto",
    img: "https://static.wikia.nocookie.net/left4dead/images/3/3c/Francis_Profile.png/revision/latest?cb=20220918064846",
    desc: "Motociclista rudo y tatuado. A pesar de su actitud rebelde y de 'odiar todo', protege ferozmente a su equipo.",
    extra: "Especialista en escopetas de corto alcance."
  },
  {
    id: "coach",
    name: "Coach",
    game: "l4d2",
    role: "Líder de Moral",
    img: "https://static.wikia.nocookie.net/left4dead/images/e/ee/CoachL4D2%282%29.png/revision/latest?cb=20160512213946&path-prefix=es",
    desc: "Entrenador de fútbol americano escolar en Georgia. Hombre piadoso, alegre y con un apetito voraz por la comida rápida.",
    extra: "Mantiene al equipo unido bajo presión."
  },
  {
    id: "ellis",
    name: "Ellis",
    game: "l4d2",
    role: "Mecánico / Velocidad",
    img: "https://static.wikia.nocookie.net/left4dead/images/1/14/EllisWeaponsRender.jpg/revision/latest?cb=20120526181152&path-prefix=es",
    desc: "Joven mecánico entusiasmadísimo con las armas y los autos. Le encanta contar historias interminables de su amigo Keith.",
    extra: "Experto en reparaciones y armas automáticas."
  },
  {
    id: "nick",
    name: "Nick",
    game: "l4d2",
    role: "Tirador Cínico",
    img: "https://static.wikia.nocookie.net/left4dead/images/6/6f/Nick.png/revision/latest?cb=20110402165313&path-prefix=es",
    desc: "Apostador y estafador profesional vestimentado de traje blanco. Inicialmente desconfiado, aprende a depender de los demás.",
    extra: "Prefiere pistolas duales y armas de precisión."
  },
  {
    id: "rochelle",
    name: "Rochelle",
    game: "l4d2",
    role: "Comunicaciones",
    img: "https://static.wikia.nocookie.net/left4dead/images/e/eb/Rochelle.jpg/revision/latest?cb=20110422174102&path-prefix=es",
    desc: "Asistente de producción de un canal de noticias de televisión enviada a cubrir el brote. Muy sensata y equilibrada.",
    extra: "Mantiene la logística del grupo organizada."
  }
];

// ==========================================
// 2. BASE DE DATOS DE LOS 8 INFECTADOS ESPECIALES
// ==========================================
const infectedData = [
  {
    id: "tank",
    name: "Tank",
    threat: "Extrema (5/5)",
    ability: "Fuerza Bruta Descomunal",
    img: "https://static.wikia.nocookie.net/left4dead/images/9/93/Tankidle.png/revision/latest?cb=20250622013003",
    desc: "Una masa hipertrofiada de músculo. Puede lanzar rocas, golpear automóviles y lanzar por los aires a todo un equipo de supervivientes.",
    extra: "Puntos débiles: Fuego sostenido y concentración de disparos entre todo el equipo."
  },
  {
    id: "witch",
    name: "Witch",
    threat: "Letal (5/5)",
    ability: "Ataque Instantáneo",
    img: "https://static.wikia.nocookie.net/left4dead/images/5/56/Witch_2.png/revision/latest/thumbnail/width/360/height/450?cb=20171030124036&path-prefix=es",
    desc: "Permanece llorando en el suelo. Si se le alumbra con linternas, alguien se acerca demasiado o le disparan, se enfurece e incapacita de un solo golpe.",
    extra: "Estrategia: Apagar linternas y bordearla en absoluto silencio."
  },
  {
    id: "hunter",
    name: "Hunter",
    threat: "Alta (4/5)",
    ability: "Abalanzamiento Ágil",
    img: "https://static.wikia.nocookie.net/left4dead/images/4/4b/Hunter.png/revision/latest?cb=20110317204213&path-prefix=es",
    desc: "Infectado con capucha súper ágil. Salta grandes alturas y distancias para caer sobre un superviviente e incapacitarlo a zarpazos.",
    extra: "Emite un gruñido característico antes de saltar."
  },
  {
    id: "smoker",
    name: "Smoker",
    threat: "Media-Alta (3/5)",
    ability: "Lengua Asfixiante",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2ucjyjWJ24AnAlu8d3H7paXxSa2gl2YCeWUPpnrOmLw&s=10",
    desc: "Atrapa a los supervivientes desde los tejados o a gran distancia con su larga lengua, arrastrándolos fuera de la vista de su grupo.",
    extra: "Al morir, libera una nube de humo que dificulta la visión y hace toser a los humanos."
  },
  {
    id: "boomer",
    name: "Boomer",
    threat: "Estratégica (3/5)",
    ability: "Bilis de Horda",
    img: "https://static.wikia.nocookie.net/left4dead/images/3/38/Boomer_2.png/revision/latest?cb=20160425194353&path-prefix=es",
    desc: "Infectado obeso que vomita bilis sobre los jugadores. La bilis ciega temporalmente y atrae una horda masiva de infectados comunes.",
    extra: "Explota al morir, salpicando bilis a cualquiera que esté cerca."
  },
  {
    id: "charger",
    name: "Charger",
    threat: "Alta (4/5)",
    ability: "Carga Arrolladora",
    img: "https://static.wikia.nocookie.net/left4dead/images/7/78/Charger_I.png/revision/latest?cb=20180502211147&path-prefix=es",
    desc: "Posee un brazo gigante con el que embiste a gran velocidad, dispersando al grupo y estrellando repetidamente a una víctima contra el suelo.",
    extra: "Especialmente peligroso cerca de precipicios, cornisas o ventanas."
  },
  {
    id: "jockey",
    name: "Jockey",
    threat: "Molesta (3/5)",
    ability: "Control de Movimiento",
    img: "https://static.wikia.nocookie.net/left4dead/images/c/c1/Jockey.png/revision/latest/thumbnail/width/360/height/360?cb=20110318134846&path-prefix=es",
    desc: "Infectado pequeño y jorobado que salta sobre la cabeza de los jugadores para conducirlos forzadamente hacia el peligro (fuego, hordas, etc.).",
    extra: "Emite una risa maniática fácilmente reconocible."
  },
  {
    id: "spitter",
    name: "Spitter",
    threat: "Control Zonal (4/5)",
    ability: "Ácido Corrosivo",
    img: "https://static.wikia.nocookie.net/left4dead/images/f/f8/Spitter_2.png/revision/latest?cb=20171029120756&path-prefix=es",
    desc: "Escupe un charco de ácido verdoso que inflige daño masivo acumulativo a cualquiera que permanezca parado sobre él.",
    extra: "Excelente para obligar a los supervivientes a salir de sus refugios o rincones."
  }
];

// ==========================================
// 3. FUNCIONES DE RENDERIZADO
// ==========================================

// Renderizar Supervivientes
function renderSurvivors(data) {
  const container = document.getElementById("survivors-grid");
  if (!container) return;
  container.innerHTML = "";

  data.forEach(item => {
    const card = document.createElement("div");
    card.className = `character-card ${item.game}`;
    card.onclick = () => openModal(item, false); // false indica que no es infectado

    card.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <div class="card-info">
        <h3>${item.name}</h3>
        <span>${item.role}</span>
      </div>
    `;
    container.appendChild(card);
  });
}

// Renderizar Infectados Especiales
function renderInfected() {
  const container = document.getElementById("infected-grid");
  if (!container) return;
  container.innerHTML = "";

  infectedData.forEach(zombie => {
    const card = document.createElement("div");
    card.className = "character-card infected-card";
    card.onclick = () => openModal(zombie, true); // true indica que sí es infectado

    card.innerHTML = `
      <img src="${zombie.img}" alt="${zombie.name}">
      <div class="card-info">
        <h3>${zombie.name}</h3>
        <span>Amenaza: ${zombie.threat}</span>
      </div>
    `;
    container.appendChild(card);
  });
}

// Filtrar Supervivientes por juego
function filterSurvivors(game) {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(btn => btn.classList.remove("active"));
  if (event) event.target.classList.add("active");

  if (game === "all") {
    renderSurvivors(survivorsData);
  } else {
    const filtered = survivorsData.filter(s => s.game === game);
    renderSurvivors(filtered);
  }
}

// ==========================================
// 4. LÓGICA DEL MODAL EMERGENTE
// ==========================================
function openModal(data, isInfected) {
  const overlay = document.getElementById("modal-overlay");
  const content = document.getElementById("modal-content");
  if (!overlay) return;

  document.getElementById("modal-img").src = data.img;
  document.getElementById("modal-title").innerText = data.name;
  document.getElementById("modal-subtitle").innerText = isInfected ? `Amenaza: ${data.threat}` : data.role;
  document.getElementById("modal-desc").innerText = data.desc;
  document.getElementById("modal-role").innerText = isInfected ? data.ability : data.role;
  document.getElementById("modal-extra").innerText = data.extra;

  if (isInfected) {
    content.classList.add("infected-border");
  } else {
    content.classList.remove("infected-border");
  }

  overlay.style.display = "flex";
}

function closeModal() {
  const overlay = document.getElementById("modal-overlay");
  if (overlay) {
    overlay.style.display = "none";
  }
}

// Cerrar el modal al hacer clic fuera del contenido
window.onclick = function(event) {
  const overlay = document.getElementById("modal-overlay");
  if (event.target === overlay) {
    closeModal();
  }
};

// ==========================================
// 5. CARGA AUTOMÁTICA AL ABRIR LA PÁGINA
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  renderSurvivors(survivorsData);
  renderInfected();
});