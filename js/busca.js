var obj;
var salidaA = '';
var salidaB = '';
var salidaC = '';
var salidaD = '';
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
   
    var newArrayA = lista.filter(function (el) {
        return (el.GRUPO === "A");
    });
   /*  console.log(newArrayA); */
    /* console.log(lista); */
    newArrayA.forEach(e => {


        salidaA = salidaA + `
       <div class="col s12 m6 l6">
              <div class="card sticky-action black">
                <div class="card-content">
                  <span class="card-title activator white-text">${e.COMPLETO}</span>
                  <span id="${e.ID}-asi" style="border-radius: 10px;font-size: 1em;font-weight: bold;" class="new badge" data-badge-caption="${e.ASISTENCIAS}"></span>
                  <!--<span style="border-radius: 10px;font-size: 0.8em;" class="new badge blue left" data-badge-caption="${e.NICK}"></span> -->
                  <span style="border-radius: 10px;font-size: 1em;" class="new badge datos left" data-badge-caption="${e.EQUIPO}"></span>
                  <span style="border-radius: 10px;font-size: 1em;" class="new badge datos left" data-badge-caption="${e.ID}"></span>
                  <br>
                  <a id="${e.ID}-btn"  
                     onclick="envia('${e.COMPLETO}','${e.NICK}','${e.EQUIPO}','${e.GRUPO}','${e.ID}','${e.ASISTENCIAS}');" 
                     class="btn-floating halfway-fab waves-effect waves-black light-green">
                    <i id="${e.ID}-icon" 
                        class="material-icons" >
                        add
                    </i>
                </a>
                </div>
               <!-- <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4"><i class="material-icons right">close</i></span>
    
                </div> -->
              </div>
            </div>
       `;
    });

    document.getElementById("test1").innerHTML = salidaA;

    var newArrayB = lista.filter(function (el) {
        return (el.GRUPO === "B");
    });
    /* console.log(newArray); */
    /* console.log(lista); */
    newArrayB.forEach(e => {


        salidaB = salidaB + `
       <div class="col s12 m6 l6">
              <div class="card sticky-action black">
                <div class="card-content">
                  <span class="card-title activator white-text">${e.COMPLETO}</span>
                  <span id="${e.ID}-asi" style="border-radius: 10px;font-size: 1em;font-weight: bold;" class="new badge" data-badge-caption="${e.ASISTENCIAS}"></span>
                  <!--<span style="border-radius: 10px;font-size: 0.8em;" class="new badge blue left" data-badge-caption="${e.NICK}"></span> -->
                  <span style="border-radius: 10px;font-size: 1em;" class="new badge datos left" data-badge-caption="${e.EQUIPO}"></span>
                  <span style="border-radius: 10px;font-size: 1em;" class="new badge datos left" data-badge-caption="${e.ID}"></span>
                  <br>
                  <a id="${e.ID}-btn"  
                     onclick="envia('${e.COMPLETO}','${e.NICK}','${e.EQUIPO}','${e.GRUPO}','${e.ID}','${e.ASISTENCIAS}');" 
                     class="btn-floating halfway-fab waves-effect waves-black light-green">
                    <i id="${e.ID}-icon" 
                        class="material-icons" >
                        add
                    </i>
                </a>
                </div>
               <!-- <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4"><i class="material-icons right">close</i></span>
    
                </div> -->
              </div>
            </div>
       `;
    });

    document.getElementById("test2").innerHTML = salidaB;


    var newArrayC = lista.filter(function (el) {
        return (el.GRUPO === "C");
    });
    /* console.log(newArray); */
    /* console.log(lista); */
    newArrayC.forEach(e => {


        salidaC = salidaC + `
       <div class="col s12 m6 l6">
              <div class="card sticky-action black">
                <div class="card-content">
                  <span class="card-title activator white-text">${e.COMPLETO}</span>
                  <span id="${e.ID}-asi" style="border-radius: 10px;font-size: 1em;font-weight: bold;" class="new badge" data-badge-caption="${e.ASISTENCIAS}"></span>
                  <!--<span style="border-radius: 10px;font-size: 0.8em;" class="new badge blue left" data-badge-caption="${e.NICK}"></span> -->
                  <span style="border-radius: 10px;font-size: 1em;" class="new badge datos left" data-badge-caption="${e.EQUIPO}"></span>
                  <span style="border-radius: 10px;font-size: 1em;" class="new badge datos left" data-badge-caption="${e.ID}"></span>
                  <br>
                  <a id="${e.ID}-btn"  
                     onclick="envia('${e.COMPLETO}','${e.NICK}','${e.EQUIPO}','${e.GRUPO}','${e.ID}','${e.ASISTENCIAS}');" 
                     class="btn-floating halfway-fab waves-effect waves-black light-green">
                    <i id="${e.ID}-icon" 
                        class="material-icons" >
                        add
                    </i>
                </a>
                </div>
               <!-- <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4"><i class="material-icons right">close</i></span>
    
                </div> -->
              </div>
            </div>
       `;
    });

    document.getElementById("test3").innerHTML = salidaC;


    var newArrayD = lista.filter(function (el) {
        return (el.GRUPO === "D");
    });
    /* console.log(newArray); */
    /* console.log(lista); */
    newArrayD.forEach(e => {


        salidaD = salidaD + `
       <div class="col s12 m6 l6">
              <div class="card sticky-action black">
                <div class="card-content">
                  <span class="card-title activator white-text">${e.COMPLETO}</span>
                  <span id="${e.ID}-asi" style="border-radius: 10px;font-size: 1em;font-weight: bold;" class="new badge" data-badge-caption="${e.ASISTENCIAS}"></span>
                  <!--<span style="border-radius: 10px;font-size: 0.8em;" class="new badge blue left" data-badge-caption="${e.NICK}"></span> -->
                  <span style="border-radius: 10px;font-size: 1em;" class="new badge datos left" data-badge-caption="${e.EQUIPO}"></span>
                  <span style="border-radius: 10px;font-size: 1em;" class="new badge datos left" data-badge-caption="${e.ID}"></span>
                  <br>
                  <a id="${e.ID}-btn"  
                     onclick="envia('${e.COMPLETO}','${e.NICK}','${e.EQUIPO}','${e.GRUPO}','${e.ID}','${e.ASISTENCIAS}');" 
                     class="btn-floating halfway-fab waves-effect waves-black light-green">
                    <i id="${e.ID}-icon" 
                        class="material-icons" >
                        add
                    </i>
                </a>
                </div>
               <!-- <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4"><i class="material-icons right">close</i></span>
    
                </div> -->
              </div>
            </div>
       `;
    });

    document.getElementById("test4").innerHTML = salidaD;

    console.log("Se pinto la info");
}



function envia(c, n, e, g, i, a) {

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
    document.getElementById(i + "-btn").className += " usado";
    document.getElementById(i + "-icon").innerHTML = "check";
    document.getElementById(i + "-icon").style.color = "#18f018";
    document.getElementById(i + "-asi").setAttribute('data-badge-caption', parseInt(a) + 1);;
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