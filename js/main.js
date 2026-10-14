// Base de datos oficial de los 8 Supervivientes
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
// Cargar Renderizado de Supervivientes al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  renderSurvivors(survivorsData);
});