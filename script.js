/* ============================================================
   BLUE SUSHI · lógica del sitio
   1) CONFIG: tu número de WhatsApp
   2) MENU: piezas y combos (se usan en las tarjetas Y en el pedido)
   ============================================================ */

// 1) Número con código de país, sin + ni espacios (Argentina celular: 549 + código de área + número)
const CONFIG = { whatsapp: "5491125547478" };

// 2) Para agregar o quitar productos, editá esta lista.
//    cat: "pieza" o "combo"  ·  price: número en pesos, sin puntos
const MENU = [
  { id: "california", cat: "pieza", name: "California Roll", price: 9800,  desc: "Kani, palta y pepino envueltos en arroz y alga nori. 8 piezas." },
  { id: "philadelphia", cat: "pieza", name: "Philadelphia Roll", price: 11200, desc: "Salmón fresco, queso crema y ciboulette. 8 piezas." },
  { id: "blue", cat: "pieza", name: "Blue Roll", price: 12500, desc: "Langostino tempura, palta y salsa de la casa. 8 piezas." },
  { id: "furay", cat: "pieza", name: "Salmón Furay", price: 12900, desc: "Salmón rebozado, queso y sésamo. 8 piezas." },
  { id: "veggie", cat: "pieza", name: "Veggie Roll", price: 8900, desc: "Zanahoria, pepino, palta y morrón. Sin pescado. 8 piezas." },
  { id: "tuna", cat: "pieza", name: "Tuna Spicy", price: 13400, desc: "Atún, salsa picante y tobiko. 8 piezas." },
  { id: "nigiri-salmon", cat: "pieza", name: "Nigiri de salmón", price: 6500, desc: "Bocado de arroz con una lámina de salmón. 4 piezas." },
  { id: "sashimi", cat: "pieza", name: "Sashimi de salmón", price: 9500, desc: "Cortes de salmón fresco, sin arroz. 8 cortes." },

  { id: "combo1", cat: "combo", name: "Combo para 1", price: 16900, desc: "12 piezas surtidas entre rolls y nigiris." },
  { id: "combo2", cat: "combo", name: "Combo para 2", price: 31500, desc: "24 piezas surtidas con salsa de soja, wasabi y jengibre." },
  { id: "combo-blue", cat: "combo", name: "Combo Blue", price: 46000, desc: "40 piezas con nuestros rolls más pedidos. Ideal para compartir." },
  { id: "combo-veggie", cat: "combo", name: "Combo veggie", price: 14500, desc: "16 piezas sin pescado." }
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
const cardsBox = $("#cards");
function renderCards(cat) {
  cardsBox.innerHTML = "";
  MENU.filter(m => m.cat === cat).forEach(m => {
    const b = document.createElement("div");
    b.className = "card";
    b.setAttribute("role", "button");
    b.tabIndex = 0;
    b.setAttribute("aria-pressed", "false");
    b.setAttribute("aria-label", m.name + ": tocá para ver la descripción");
    b.innerHTML =
      '<div class="in">' +
        '<div class="face front"><h3>' + m.name + '</h3><div><div class="price">' + money(m.price) + '</div><small>Tocá para ver qué lleva</small></div></div>' +
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
document.querySelectorAll(".tabs button").forEach(t => t.addEventListener("click", () => {
  document.querySelectorAll(".tabs button").forEach(x => x.setAttribute("aria-selected", x === t));
  renderCards(t.dataset.cat);
}));
renderCards("pieza");

/* ---------- Lista del pedido con flechas ▲ ▼ ---------- */
const itemsBox = $("#items");
const groups = [["pieza", "Piezas"], ["combo", "Combos"]];
groups.forEach(([cat, title]) => {
  const h = document.createElement("div");
  h.className = "group-title"; h.textContent = title;
  itemsBox.appendChild(h);
  MENU.filter(m => m.cat === cat).forEach(m => {
    const row = document.createElement("div");
    row.className = "line";
    row.innerHTML =
      '<div class="nm">' + m.name + '<small>' + money(m.price) + '</small></div>' +
      '<div class="qty">' +
        '<button type="button" data-id="' + m.id + '" data-d="1" aria-label="Sumar ' + m.name + '">▲</button>' +
        '<output id="q-' + m.id + '" aria-live="polite">0</output>' +
        '<button type="button" data-id="' + m.id + '" data-d="-1" aria-label="Restar ' + m.name + '">▼</button>' +
      '</div>';
    itemsBox.appendChild(row);
  });
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
  if (!elegidos.length) return fail("Elegí al menos una pieza o combo con las flechas.");
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
