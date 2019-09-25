var contactos = [
  {
    nombre: "Macarena Poo García",
    empresa: "Retail Zipline",
    email: "macarenapoo@gmail.com",
    telefono: "5556801216"
  },
  {
    nombre: "Juan Fernando Donoso",
    empresa: "Universidad Iberoamericana",
    email: "juan.donoso@uia.mx",
    telefono: "5555555555"
  }
];

function imprimirContacto(contacto, index) {
  var lista = document.getElementById("contactos");
  lista.insertAdjacentHTML('beforeend', `<li class="contacto">
  <div class="actions">
    <a onclick="javascript:borrarContacto(` + index + `)"><i class="fa fa-trash"></i></a>
  </div>
  <i class="userIcon fa fa-user"></i>
  <h4 class="nombre">`+ contacto.nombre + `</h4>
  <div class="datos">
    <div class="dato">
      <i class="fa fa-building"></i>
      <span>`+ contacto.empresa + `</span>
    </div>
    <div class="dato">
      <i class="fa fa-envelope"></i>
      <a href="mailto:`+ contacto.email + `">` + contacto.email + `</a>
    </div>
    <div class="dato">
      <i class="fa fa-phone"></i>
      <a href="tel:`+ contacto.telefono + `">` + contacto.telefono + `</a>
    </div >
  </div >
  </li > `);

}
function imprimirTodosLosContactos() {
  document.getElementById("contactos").innerHTML = "";
  contactos.forEach(imprimirContacto);
}

function abrirModal() {
  var bodyTags = document.getElementsByTagName("body");
  var body = bodyTags[0];
  body.classList.add("modal-open");
}
function cerrarModal() {
  var bodyTags = document.getElementsByTagName("body");
  var body = bodyTags[0];
  body.classList.remove("modal-open");
}

imprimirTodosLosContactos();
