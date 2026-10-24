/* ============================================================
   BLUE SUSHI · lógica del sitio
   1) CONFIG: tu número de WhatsApp
   2) MENU: piezas y combos (se usan en las tarjetas Y en el pedido)
   ============================================================ */

// 1) Número con código de país, sin + ni espacios (Argentina celular: 549 + código de área + número)
const CONFIG = { whatsapp: "5491125547478" };

// 2) Para agregar o quitar productos, editá esta lista.
//    cat: categoría del menú  ·  price: número en pesos, sin puntos
const GROUPS = [
  { id: "entradas", title: "Entradas" },
  { id: "platos", title: "Platos" },
  { id: "woks", title: "Woks" },
  { id: "salsas", title: "Salsas adicionales" },
  { id: "sushi", title: "Sushi, makis & rolls" },
  { id: "combos", title: "Combos" }
];
const MENU = [
  { id: "tartare-salmon", cat: "entradas", name: "Tartare de salmón", price: 29000, image: "img/tartare_de_salmon.jpg", desc: "Salmón rosado, palta, cebolla morada, mayonesa japonesa, salmón ahumado y caviar." },
  { id: "salmon-crispy-nuggets", cat: "entradas", name: "Salmón crispy nuggets", price: 25000, image: "img/salmon_crispy_nuggets.jpg", desc: "Bocaditos de salmón rebozados en panko con salsa teriyaki." },
  { id: "mariscos-al-fuego", cat: "entradas", name: "Mariscos al fuego", price: 35000, image: "img/mariscos_al_fuego.jpg", desc: "Frutos del mar salteados con manteca del diablo, ají molido, pimienta y pimentón." },
  { id: "ebi-furai", cat: "entradas", name: "Ebi Furai", price: 28000, image: "img/ebi_furai.jpg", desc: "Langostinos rebozados en panko con salsa teriyaki, arroz, queso Philadelphia y sésamo." },
  { id: "ebi-coco-almendras", cat: "entradas", name: "Ebi coco y almendras", price: 35000, image: "img/Ebi_coco_y_almendras.jpg", desc: "Langostinos rebozados en coco y almendras fileteadas, con salsa teriyaki, arroz, queso Philadelphia y sésamo." },
  { id: "langostinos-tempura", cat: "entradas", name: "Langostinos en tempura", price: 30000, image: "img/langostinos_con_tempura.jpg", desc: "Langostinos rebozados en tempura con salsa teriyaki." },
  { id: "gambas-ajillo", cat: "entradas", name: "Gambas salteadas al ajillo", price: 28000, image: "img/gambas_salteadas_al_ajillo.jpg", desc: "Gambas salteadas al ajillo." },
  { id: "rabas-panko", cat: "entradas", name: "Rabas en panko", price: 25000, image: "img/rabas_en_panko.jpg", desc: "Rabas rebozadas en panko." },
  { id: "korokke-mariscos", cat: "entradas", name: "Korokke de mariscos", price: 20000, image: "img/karokke_de_mariscos.jpg", desc: "Croquetas de arroz rebozadas en panko, con kanikama, langostino y mayonesa japonesa." },
  { id: "harumaki-carne", cat: "entradas", name: "Harumakis de carne", price: 15000, image: "img/Harumakis_de_carne.jpg", desc: "4 unidades por porción." },
  { id: "harumaki-vegetariano", cat: "entradas", name: "Harumakis vegetarianos", price: 15000, image: "img/harumakis_vegetarianos.jpg", desc: "4 unidades por porción." },
  { id: "harumaki-mixto", cat: "entradas", name: "Harumakis mixtos", price: 15000, image: "img/harumakis_mixtos.jpg", desc: "4 unidades por porción: dos de carne y dos de verdura." },
  { id: "ceviche-casa", cat: "entradas", name: "Ceviche de la casa", price: 25000, image: "img/ceviche_de_la_casa.jpg", desc: "Langostinos, salmón rosado, pesca blanca y guacamole." },
  { id: "ceviche-tropical", cat: "entradas", name: "Ceviche Tropical", price: 28000, image: "img/ceviche_tropical.jpg", desc: "Salmón, langostinos y calamar con cubitos de mango en salsa de maracuyá." },
  { id: "korokke-veg", cat: "entradas", name: "Korokke vegetariano", price: 14000, image: "img/korokke_vegetariano.jpg", desc: "Croquetas de arroz frito." },

  { id: "salmon-gohan", cat: "platos", name: "Salmón grillé con arroz gohan", price: 45000, image: "img/salmon_grille_con_arroz_gohan.jpg", desc: "Salmón grillé con arroz salteado con verdeo y zanahoria." },
  { id: "salmon-batatas", cat: "platos", name: "Salmón grillé con batatas", price: 45000, image: "img/salmon_grille_con_batatas.jpg", desc: "Salmón grillé con batatas en teriyaki." },

  { id: "yakimeshi-vegetariano", cat: "woks", name: "Yakimeshi vegetariano", price: 20000, image: "img/yakimeshi_vegetariano.jpg", desc: "Arroz salteado al wok con zanahoria, cebolla de verdeo y salsa de soja." },
  { id: "yakimeshi-salmon", cat: "woks", name: "Yakimeshi con salmón", price: 33000, image: "img/yakimeshi_con_salmon.jpg", desc: "Arroz salteado al wok con salmón, zanahoria, cebolla de verdeo, huevo y salsa de soja." },
  { id: "yakimeshi-pollo", cat: "woks", name: "Yakimeshi con pollo", price: 25000, image: "img/yakimeshi_con_pollo.jpg", desc: "Arroz salteado al wok con pollo, zanahoria, cebolla de verdeo, huevo y salsa de soja." },
  { id: "yakimeshi-langostinos", cat: "woks", name: "Yakimeshi con langostinos", price: 33000, desc: "Arroz salteado al wok con langostinos, zanahoria, cebolla de verdeo, huevo y salsa de soja." },
  { id: "yakisoba-lomo", cat: "woks", name: "Yakisoba con lomo", price: 30000, desc: "Fideos salteados al wok con lomo, zanahoria, cebolla de verdeo y salsa de soja." },
  { id: "yakisoba-cerdo", cat: "woks", name: "Yakisoba con cerdo", price: 25000, desc: "Fideos salteados al wok con cerdo, zanahoria, cebolla de verdeo y salsa de soja." },
  { id: "yakisoba-mariscos", cat: "woks", name: "Yakisoba con frutos de mar", price: 35000, desc: "Fideos salteados al wok con frutos de mar, zanahoria, cebolla de verdeo y salsa de soja." },

  { id: "salsa-teriyaki", cat: "salsas", name: "Salsa Teriyaki", price: 7000, desc: "Salsa agridulce." },
  { id: "salsa-sensei", cat: "salsas", name: "Salsa Sensei", price: 7000, desc: "Salsa picante." },
  { id: "salsa-buenos-aires", cat: "salsas", name: "Salsa Buenos Aires", price: 7000, desc: "Con sésamo blanco." },
  { id: "salsa-miel-mostaza", cat: "salsas", name: "Salsa Miel y Mostaza", price: 7000, desc: "Salsa de miel y mostaza." },
  { id: "salsa-roja", cat: "salsas", name: "Salsa Roja", price: 7000, desc: "Salsa agridulce." },
  { id: "salsa-maracuya", cat: "salsas", name: "Salsa de maracuyá", price: 7000, desc: "Salsa de maracuyá sin semillas." },
  { id: "guacamole", cat: "salsas", name: "Guacamole", price: 7000, desc: "Guacamole." },

  { id: "sake-maki", cat: "sushi", name: "Sake Maki", price: 25000, desc: "Maki de salmón. 8 unidades." },
  { id: "sake-smoked-maki", cat: "sushi", name: "Sake Smoked Maki", price: 30000, desc: "Maki de salmón ahumado y palta. 8 unidades." },
  { id: "futomaki", cat: "sushi", name: "Futomaki", price: 30000, desc: "Rúcula, zanahoria, palta, tomate y tamagoyaki. 8 unidades." },
  { id: "ebi-maki", cat: "sushi", name: "Ebi Maki", price: 28000, desc: "Langostinos en panko y palta. 8 unidades." },
  { id: "salmon-cheese-maki", cat: "sushi", name: "Salmon Cheese Maki", price: 28000, desc: "Salmón, queso Philadelphia y palta. 8 unidades." },
  { id: "tempura-sake-maki", cat: "sushi", name: "Sake Maki en tempura", price: 30000, desc: "Maki de salmón rebozado en tempura y frito. 8 unidades." },
  { id: "tempura-futomaki", cat: "sushi", name: "Futomaki en tempura", price: 35000, desc: "Rúcula, zanahoria, palta, tomate y tamagoyaki, rebozado en tempura y frito. 8 unidades." },
  { id: "tempura-ebi-maki", cat: "sushi", name: "Ebi Maki en tempura", price: 35000, desc: "Langostinos en panko y palta, rebozado en tempura y frito. 8 unidades." },
  { id: "tempura-salmon-cheese", cat: "sushi", name: "Salmon Cheese Maki en tempura", price: 33000, desc: "Salmón, Philadelphia y palta, rebozado en tempura y frito. 8 unidades." },
  { id: "tempura-kyuri-maki", cat: "sushi", name: "Kyuri Maki en tempura", price: 33000, desc: "Salmón, Philadelphia y pepino, rebozado en tempura y frito. 8 unidades." },
  { id: "nigiri-salmon", cat: "sushi", name: "Nigiri de salmón", price: 14000, desc: "4 unidades." },
  { id: "nigiri-langostinos", cat: "sushi", name: "Nigiri de langostinos", price: 18000, desc: "4 unidades." },
  { id: "nigiri-salmon-ahumado", cat: "sushi", name: "Nigiri de salmón ahumado", price: 16000, desc: "4 unidades." },
  { id: "nigiri-avocado", cat: "sushi", name: "Nigiri Avocado", price: 16000, desc: "Salmón y palta. 4 unidades." },
  { id: "nigiri-caramel", cat: "sushi", name: "Nigiri Caramel", price: 18000, desc: "Salmón caramelizado con topping de hilos de batata frita. 4 unidades." },
  { id: "temaki-vegetariano", cat: "sushi", name: "Temaki vegetariano", price: 15000, desc: "Zanahoria, rúcula, palta, pepino y champiñón. 1 unidad." },
  { id: "temaki-salmon", cat: "sushi", name: "Temaki de salmón", price: 18000, desc: "Salmón, queso Philadelphia y palta. 1 unidad." },
  { id: "temaki-langostinos", cat: "sushi", name: "Temaki de langostinos", price: 20000, desc: "Langostinos en tempura y Philadelphia. 1 unidad." },
  { id: "geisha-salmon", cat: "sushi", name: "Geisha de salmón", price: 15000, desc: "Feta de salmón, palta y Philadelphia. 4 unidades." },
  { id: "geisha-smoked", cat: "sushi", name: "Geisha Smoked", price: 16000, desc: "Salmón ahumado, palta y Philadelphia. 4 unidades." },
  { id: "geisha-queen", cat: "sushi", name: "Geisha Queen", price: 18000, desc: "Salmón, palta, Philadelphia y caviar. 4 unidades." },
  { id: "sashimi-salmon", cat: "sushi", name: "Sashimi de salmón", price: 16000, desc: "Fetas de salmón rosado. 4 unidades." },
  { id: "california-roll", cat: "sushi", name: "California Roll", price: 28000, desc: "Kanikama y palta. 8 unidades." },
  { id: "philadelphia-roll", cat: "sushi", name: "Philadelphia Roll", price: 26000, desc: "Salmón y queso Philadelphia. 8 unidades." },
  { id: "ebi-roll", cat: "sushi", name: "Ebi Roll", price: 28000, desc: "Langostinos y queso Philadelphia. 8 unidades." },
  { id: "rucula-roll", cat: "sushi", name: "Rúcula Roll", price: 30000, desc: "Salmón, tomates secos y rúcula. 8 unidades." },
  { id: "extasis-roll", cat: "sushi", name: "Éxtasis Roll", price: 30000, desc: "Langostinos, salmón y palta. 8 unidades." },
  { id: "new-york-roll", cat: "sushi", name: "New York Roll", price: 29000, desc: "Salmón y palta. 8 unidades." },
  { id: "new-york-phila-roll", cat: "sushi", name: "New York & Phila", price: 31000, desc: "Salmón, palta y queso Philadelphia. 8 unidades." },
  { id: "avocado-roll", cat: "sushi", name: "Avocado Roll", price: 32000, desc: "Salmón, Philadelphia y palta por fuera. 8 unidades." },
  { id: "buenos-aires-roll", cat: "sushi", name: "Buenos Aires Roll", price: 32000, desc: "Salmón, langostinos, palta y Philadelphia, con salsa de sésamo blanco. 8 unidades." },
  { id: "caviar-roll", cat: "sushi", name: "Caviar Roll", price: 32000, desc: "Langostinos y Philadelphia con topping de caviar. 8 unidades." },
  { id: "futurama-roll", cat: "sushi", name: "Futurama", price: 32000, desc: "Langostinos empanizados y Philadelphia, con salsa de miel y mostaza y batata frita por arriba. 8 unidades." },
  { id: "pera-roque-roll", cat: "sushi", name: "Pera y Roque", price: 32000, desc: "Roquefort, salmón cocido, Philadelphia y pera en almíbar. 8 unidades." },
  { id: "inca-roll", cat: "sushi", name: "Inca Roll", price: 32000, desc: "Salmón marinado en leche de tigra, cebolla morada y cilantro, bañado en salsa Huancaína. 8 unidades." },
  { id: "grateen-roll", cat: "sushi", name: "Grateen Roll", price: 32000, desc: "Salmón cocido, langostinos y queso a las finas hierbas, con parmesano gratinado. 8 unidades." },
  { id: "king-roll", cat: "sushi", name: "King Roll", price: 32000, desc: "Salmón cocido, Philadelphia y palta, bañado en suave salsa de lima. 8 unidades." },
  { id: "oliva-roll", cat: "sushi", name: "Oliva Roll", price: 32000, desc: "Salmón cocido, mayonesa, palmitos y aceitunas negras. 8 unidades." },
  { id: "blue-special-roll", cat: "sushi", name: "Blue Special Roll", price: 40000, desc: "Langostinos empanizados y Philadelphia, por fuera panko frito. 10 unidades." },
  { id: "blue-salmon-roll", cat: "sushi", name: "Blue Salmon Roll", price: 40000, desc: "Salmón cocido y Philadelphia, por fuera panko frito. 10 unidades." },
  { id: "blue-fusion-roll", cat: "sushi", name: "Blue Fusion", price: 42000, desc: "Langostinos empanizados y Philadelphia, con topping de hilos de batata, salsa de miel y mostaza y teriyaki. 10 unidades." },
  { id: "blue-cream-roll", cat: "sushi", name: "Blue Cream", price: 42000, desc: "Salmón y queso Brie, por fuera panko frito y parmesano gratinado. 10 unidades." },
  { id: "azteca-roll", cat: "sushi", name: "Azteca Roll", price: 32000, desc: "Salmón, Philadelphia y guacamole, empanado en nachos. 8 unidades. Picante xx." },
  { id: "dynamite-roll", cat: "sushi", name: "Dynamite Roll", price: 32000, desc: "Langostinos en panko, caviar con Philadelphia y mostaza japonesa, bañado en salsa Sensei extra picante. 8 unidades. Picante xxx." },
  { id: "mexicanito-roll", cat: "sushi", name: "Mexicanito", price: 32000, desc: "Salmón y guacamole. 8 unidades. Picante x." },
  { id: "philadelphia-smoked-roll", cat: "sushi", name: "Philadelphia Smoked", price: 32000, desc: "Salmón ahumado y Philadelphia. 8 unidades." },
  { id: "tokio-roll", cat: "sushi", name: "Tokio", price: 32000, desc: "Calamar, salmón cocido, picante dulce y Philadelphia, recubierto con salmón ahumado. 8 unidades." },
  { id: "smoked-california-roll", cat: "sushi", name: "Smoked California", price: 32000, desc: "Kanikama, salmón ahumado y palta. 8 unidades." },
  { id: "smoked-tropic-roll", cat: "sushi", name: "Smoked Tropic", price: 32000, desc: "Salmón ahumado y ananá. 8 unidades." },
  { id: "blue-recargado-roll", cat: "sushi", name: "Blue Recargado", price: 40000, desc: "Salmón cocido, calamar y queso a las finas hierbas, recubierto de jamón crudo, ananá y cerezas al marrasquino. 8 unidades." },
  { id: "fashion-roll", cat: "sushi", name: "Fashion Roll", price: 40000, desc: "Salmón ahumado, mango, palta y langostinos rebozados en coco y almendras, con salsa de mango, pistachos y almendras tostadas. 8 unidades." },
  { id: "chicken-dijon-roll", cat: "sushi", name: "Chicken Dijon Roll", price: 28000, desc: "Pollo, zanahoria, palmitos y salsa Dijon. 8 unidades." },
  { id: "pampa-roll", cat: "sushi", name: "Pampa Roll", price: 40000, desc: "Lomo y queso Philadelphia, rebozado en panko frito y bañado en salsa teriyaki. 8 unidades. Calentito." },
  { id: "tango-roll", cat: "sushi", name: "Tango Roll", price: 38000, desc: "Lomo, Philadelphia y rúcula, recubierto en jamón crudo. 8 unidades." },
  { id: "capresse-roll", cat: "sushi", name: "Capresse Roll", price: 25000, desc: "Philadelphia, albahaca y tomates secos. 8 unidades." },
  { id: "carrot-roll", cat: "sushi", name: "Carrot Roll", price: 22000, desc: "Zanahoria, palta y Philadelphia. 8 unidades." },
  { id: "trico-roll", cat: "sushi", name: "Trico Roll", price: 25000, desc: "Palmitos, pimiento asado y palta. 8 unidades." },
  { id: "tutti-frutti-roll", cat: "sushi", name: "Tutti Frutti Roll", price: 28000, desc: "Durazno, Philadelphia y palta, bañado en salsa de frutos del bosque. 8 unidades." },

  { id: "mix-classic-15", cat: "combos", name: "Mix Classic — 15 piezas", price: 33000, desc: "Rolls Philadelphia, New York, New York & Phila, California y Ebi; Sake Maki y niguiris de salmón." },
  { id: "mix-classic-25", cat: "combos", name: "Mix Classic — 25 piezas", price: 44000, desc: "Rolls Philadelphia, New York, New York & Phila, California y Ebi; Sake Maki y niguiris de salmón." },
  { id: "mix-classic-40", cat: "combos", name: "Mix Classic — 40 piezas", price: 84000, desc: "Rolls Philadelphia, New York, New York & Phila, California y Ebi; Sake Maki y niguiris de salmón." },
  { id: "mix-classic-55", cat: "combos", name: "Mix Classic — 55 piezas", price: 110000, desc: "Rolls Philadelphia, New York, New York & Phila, California y Ebi; Sake Maki y niguiris de salmón." },
  { id: "clasico-salmon-15", cat: "combos", name: "Clásico solo salmón — 15 piezas", price: 48000, desc: "Rolls Philadelphia, New York y New York & Phila; Sake Maki, niguiris y sashimi de salmón a pedido." },
  { id: "clasico-salmon-25", cat: "combos", name: "Clásico solo salmón — 25 piezas", price: 78700, desc: "Rolls Philadelphia, New York y New York & Phila; Sake Maki, niguiris y sashimi de salmón a pedido." },
  { id: "clasico-salmon-40", cat: "combos", name: "Clásico solo salmón — 40 piezas", price: 124000, desc: "Rolls Philadelphia, New York y New York & Phila; Sake Maki, niguiris y sashimi de salmón a pedido." },
  { id: "clasico-salmon-55", cat: "combos", name: "Clásico solo salmón — 55 piezas", price: 165000, desc: "Rolls Philadelphia, New York y New York & Phila; Sake Maki, niguiris y sashimi de salmón a pedido." },
  { id: "sugerencia-sushiman-26", cat: "combos", name: "Sugerencia del sushiman — 26 piezas", price: 95000, desc: "Rolls Tokio, Buenos Aires, Futurama, Caviar y Avocado; niguiris Avocado y sashimi a pedido." },
  { id: "sugerencia-sushiman-52", cat: "combos", name: "Sugerencia del sushiman — 52 piezas", price: 176000, desc: "Rolls Tokio, Buenos Aires, Futurama, Caviar y Avocado; niguiris Avocado y sashimi a pedido." },
  { id: "sugerencia-sushiman-78", cat: "combos", name: "Sugerencia del sushiman — 78 piezas", price: 254000, desc: "Rolls Tokio, Buenos Aires, Futurama, Caviar y Avocado; niguiris Avocado y sashimi a pedido." },
  { id: "tentacion-salmon-26", cat: "combos", name: "Tentación de Salmón — 26 piezas", price: 95000, desc: "Rolls Mediterráneo, Rúcula, Philadelphia Smoked, Éxtasis, Mexicanito y Smoked Tropic; niguiris Avocado." },
  { id: "tentacion-salmon-52", cat: "combos", name: "Tentación de Salmón — 52 piezas", price: 176000, desc: "Rolls Mediterráneo, Rúcula, Philadelphia Smoked, Éxtasis, Mexicanito y Smoked Tropic; niguiris Avocado." },
  { id: "tentacion-salmon-78", cat: "combos", name: "Tentación de Salmón — 78 piezas", price: 254000, desc: "Rolls Mediterráneo, Rúcula, Philadelphia Smoked, Éxtasis, Mexicanito y Smoked Tropic; niguiris Avocado." },
  { id: "mix-calentito-20", cat: "combos", name: "Mix Calentito — 20 piezas", price: 82000, desc: "Blue Fusion, Blue Special, Blue Salmon y Blue Cream (4 unidades de cada uno)." },
  { id: "mix-calentito-40", cat: "combos", name: "Mix Calentito — 40 piezas", price: 164000, desc: "Blue Fusion, Blue Special, Blue Salmon y Blue Cream (4 unidades de cada uno)." },
  { id: "mix-vegetariano-15", cat: "combos", name: "Mix vegetariano — 15 piezas", price: 11780, desc: "Futomaki, Capresse Roll, Carrot Roll y Trico Roll." },
  { id: "hot-cold-classic-26", cat: "combos", name: "Hot & Cold Classic — 26 piezas", price: 95000, desc: "California, Avocado, Caviar Roll, Grateen, niguiris, Blue Fusion y Blue Salmon." },
  { id: "hot-cold-classic-52", cat: "combos", name: "Hot & Cold Classic — 52 piezas", price: 176000, desc: "California, Avocado, Caviar Roll, Grateen, niguiris, Blue Fusion y Blue Salmon." },
  { id: "hot-cold-salmon-26", cat: "combos", name: "Hot & Cold 100% Salmón — 26 piezas", price: 95000, desc: "Sake Smoked, Salmon Cheese, King Roll, niguiris, Blue Cream y Blue Salmon." },
  { id: "hot-cold-salmon-52", cat: "combos", name: "Hot & Cold 100% Salmón — 52 piezas", price: 176000, desc: "Sake Smoked, Salmon Cheese, King Roll, niguiris, Blue Cream y Blue Salmon." }
];

const $ = (s, el = document) => el.querySelector(s);
const money = n => "$" + n.toLocaleString("es-AR");
const qty = {};            // cantidades elegidas: { id: número }
MENU.forEach(m => qty[m.id] = 0);

/* ---------- Menú móvil ---------- */
const burger = $(".burger"), nav = $("#nav");
burger.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  burger.setAttribute("aria-expanded", open);
});
nav.addEventListener("click", e => {
  if (e.target.tagName === "A") { nav.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); }
});

/* ---------- Tarjetas reversibles ---------- */
const cardsBox = $("#cards"), tabsBox = $(".tabs");
GROUPS.forEach((group, i) => {
  const tab = document.createElement("button");
  tab.type = "button";
  tab.id = "tab-" + group.id;
  tab.setAttribute("role", "tab");
  tab.setAttribute("aria-controls", "cards");
  tab.setAttribute("aria-selected", i === 0);
  tab.tabIndex = i === 0 ? 0 : -1;
  tab.dataset.cat = group.id;
  tab.textContent = group.title;
  tabsBox.appendChild(tab);
});
cardsBox.setAttribute("role", "tabpanel");
function renderCards(cat) {
  cardsBox.innerHTML = "";
  cardsBox.setAttribute("aria-labelledby", "tab-" + cat);
  MENU.filter(m => m.cat === cat).forEach(m => {
    const b = document.createElement("div");
    b.className = m.image ? "card has-image" : "card";
    b.setAttribute("role", "button");
    b.tabIndex = 0;
    b.setAttribute("aria-pressed", "false");
    b.setAttribute("aria-label", m.name + ": tocá para ver la descripción");
    b.innerHTML =
      '<div class="in">' +
        '<div class="face front">' + (m.image ? '<img class="card-image" src="' + m.image + '" alt="' + m.name + '" loading="lazy" decoding="async"><div class="card-info"><h3>' + m.name + '</h3><div><div class="price">' + money(m.price) + '</div><small>Tocá para ver detalles</small></div></div>' : '<h3>' + m.name + '</h3><div><div class="price">' + money(m.price) + '</div><small>Tocá para ver detalles</small></div>') + '</div>' +
        '<div class="face back"><p>' + m.desc + '</p><small>' + m.name + ' · ' + money(m.price) + '</small></div>' +
      '</div>';
    const flip = () => {
      const f = b.classList.toggle("flipped");
      b.setAttribute("aria-pressed", f);
    };
    b.addEventListener("click", flip);
    b.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); flip(); }
    });
    cardsBox.appendChild(b);
  });
}
tabsBox.addEventListener("click", e => {
  const tab = e.target.closest("button[role=tab]");
  if (!tab) return;
  tabsBox.querySelectorAll("button[role=tab]").forEach(button => {
    const selected = button === tab;
    button.setAttribute("aria-selected", selected);
    button.tabIndex = selected ? 0 : -1;
  });
  renderCards(tab.dataset.cat);
});
tabsBox.addEventListener("keydown", e => {
  const tabs = [...tabsBox.querySelectorAll("button[role=tab]")];
  const current = tabs.indexOf(e.target);
  if (current < 0) return;
  let next = current;
  if (e.key === "ArrowRight") next = (current + 1) % tabs.length;
  else if (e.key === "ArrowLeft") next = (current - 1 + tabs.length) % tabs.length;
  else if (e.key === "Home") next = 0;
  else if (e.key === "End") next = tabs.length - 1;
  else return;
  e.preventDefault();
  tabs[next].focus();
  tabs[next].click();
});
renderCards(GROUPS[0].id);

/* ---------- Lista del pedido con flechas ▲ ▼ ---------- */
const itemsBox = $("#items");
GROUPS.forEach(group => {
  const details = document.createElement("details");
  details.className = "menu-group";
  const summary = document.createElement("summary");
  summary.className = "group-title";
  summary.textContent = group.title;
  details.appendChild(summary);
  MENU.filter(m => m.cat === group.id).forEach(m => {
    const row = document.createElement("div");
    row.className = "line";
    row.innerHTML =
      '<div class="nm">' + m.name + '<small>' + money(m.price) + '</small></div>' +
      '<div class="qty">' +
        '<button type="button" data-id="' + m.id + '" data-d="1" aria-label="Sumar ' + m.name + '">▲</button>' +
        '<output id="q-' + m.id + '" aria-live="polite">0</output>' +
        '<button type="button" data-id="' + m.id + '" data-d="-1" aria-label="Restar ' + m.name + '">▼</button>' +
      '</div>';
    details.appendChild(row);
  });
  itemsBox.appendChild(details);
});
itemsBox.addEventListener("click", e => {
  const b = e.target.closest("button[data-id]");
  if (!b) return;
  const id = b.dataset.id;
  qty[id] = Math.max(0, Math.min(99, qty[id] + Number(b.dataset.d)));
  $("#q-" + id).textContent = qty[id];
  $("#total").textContent = money(total());
});
function total() { return MENU.reduce((s, m) => s + m.price * qty[m.id], 0); }

/* ---------- Delivery / Take away (checkboxes que se excluyen) ---------- */
const delivery = $("#delivery"), takeaway = $("#takeaway"), dir = $("#direccion");
function syncEntrega(changed) {
  if (changed === delivery && delivery.checked) takeaway.checked = false;
  if (changed === takeaway && takeaway.checked) delivery.checked = false;
  if (!delivery.checked && !takeaway.checked) changed.checked = true; // siempre uno elegido
  dir.hidden = !delivery.checked;
}
delivery.addEventListener("change", () => syncEntrega(delivery));
takeaway.addEventListener("change", () => syncEntrega(takeaway));

/* ---------- Enviar por WhatsApp ---------- */
$("#form").addEventListener("submit", e => {
  e.preventDefault();
  const nombre = $("#nombre").value.trim(), calle = $("#calle").value.trim(),
        altura = $("#altura").value.trim(), pago = $("#pago").value, err = $("#error");
  const esDelivery = delivery.checked;
  const elegidos = MENU.filter(m => qty[m.id] > 0);

  if (!nombre) return fail("Escribí tu nombre completo.", "#nombre");
  if (!elegidos.length) return fail("Elegí al menos un producto con las flechas.");
  if (esDelivery && (!calle || !altura)) return fail("Para delivery necesitamos calle y altura.", calle ? "#altura" : "#calle");
  if (!pago) return fail("Elegí un método de pago.", "#pago");
  err.textContent = "";

  const lineas = [
    "*Nuevo pedido - Blue Sushi*",
    "",
    "Nombre: " + nombre,
    "",
    "*Pedido:*",
    ...elegidos.map(m => "- " + qty[m.id] + " x " + m.name),
    "",
    "Total: " + money(total()),
    "Modalidad: " + (esDelivery ? "Delivery" : "Take away"),
    ...(esDelivery ? ["Dirección: " + calle + " " + altura] : []),
    "Pago: " + pago
  ];
  const url = "https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent(lineas.join("\n"));
  window.open(url, "_blank", "noopener");

  function fail(msg, focusSel) {
    err.textContent = msg;
    if (focusSel) $(focusSel).focus();
  }
});
