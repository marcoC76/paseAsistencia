var obj;
var salida = '';
var valor;

var appi = "https://script.google.com/macros/s/AKfycbzloNhYKVTnxaE8XRAoHceu6bDqug-4_qPck6wHR5nC0hMZ4ac/exec";

/* console.log(obj);
console.log(obj.length); */
function ft(appi) {

    fetch(appi)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            obj = data;
            localStorage.setItem("obj", JSON.stringify(obj));
            console.log("Se solicito la info");
            pintar();
        })
        .catch(function (err) {
            console.error(err);
        });

};
/* setInterval('ft(appi)', 60000); */


function pintar() {
    var lista = JSON.parse(localStorage.getItem("obj"));
    /* console.log(lista); */
    lista.forEach(e => {


        salida = salida + `
       <div class="col s12 m6 l6">
              <div class="card sticky-action black">
                <div class="card-content">
                  <span class="card-title activator white-text">${e.COMPLETO}</span>
                  <span style="border-radius: 10px;font-size: 1em;font-weight: bold;" class="new badge grey" data-badge-caption="${e.ASISTENCIAS}"></span>
                  <!--<span style="border-radius: 10px;font-size: 0.8em;" class="new badge blue left" data-badge-caption="${e.NICK}"></span> -->
                  <span style="border-radius: 10px;font-size: 0.8em;" class="new badge red left" data-badge-caption="${e.EQUIPO}"></span>
                  <span style="border-radius: 10px;font-size: 0.8em;" class="new badge orange left" data-badge-caption="${e.ID}"></span>
                  <br>
                  <a onclick="envia('${e.COMPLETO}','${e.NICK}','${e.EQUIPO}','${e.GRUPO}','${e.ID}');" class="btn-floating halfway-fab waves-effect waves-light green"><i class="material-icons">add</i></a>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4"><i class="material-icons right">close</i></span>
    
                </div>
              </div>
            </div>
       `;
    });

    document.getElementById("lista").innerHTML = salida;
    console.log("Se pinto la info");
}



function envia(c, n, e, g, i) {
    
    var fecha = new Date();
    var hoy = JSON.stringify(fecha);
    var hora = getLogoffTime();
    /* console.log(hoy.substring(1, 11) + hora);
    console.log(c);
    console.log(n);
    console.log(e);
    console.log(g);
    console.log(i); */

    var url =
        "https://script.google.com/macros/s/AKfycbz3a3hAA9kMxh9UDNOylK6L1Uue-iJYwyay2EikT6mLU413MxY/exec";

    envioUrl = url + "?Fecha=" + hoy.substring(1, 11) + hora + "&Completo=" + c.replace(/ /g, "_") + "&Nick=" + n.replace(/ /g, "_") + "&Equipo=" + e + "&Grupo=" + g + "&ID=" + i;

    /* console.log(envioUrl); */


    var iframe = document.createElement('iframe');

    iframe.src = envioUrl;
    document.getElementById("contenido").appendChild(iframe);
    setTimeout('limpiarContenido()', 3000);   
   
}

var limpiarContenido = function () {
    document.getElementById("contenido").style.display = "none";
    
}

function getLogoffTime() {
    var now = new Date();
    var ampm = (now.getHours() >= 12) ? "P.M." : "A.M."
    var Hours = now.getHours();
    Hours = ((Hours > 12) ? Hours - 12 : Hours);
    var Minutes = ((now.getMinutes() < 10) ? ":0" : ":") + now.getMinutes();
    var Seconds = ((now.getSeconds() < 10) ? ":0" : ":") + now.getSeconds();
    OffTimeValue = ("_" + Hours + Minutes + Seconds + "_" + ampm);
    return OffTimeValue;
}