var obj;
var salidaA = '';
var salidaB = '';
var salidaC = '';
var salidaD = '';
var valor;
var lista;
var dobleAsistencia = 0;
var appi; /*  = "https://script.google.com/macros/s/AKfycbzloNhYKVTnxaE8XRAoHceu6bDqug-4_qPck6wHR5nC0hMZ4ac/exec"; */

var url;
/*  =
    "https://script.google.com/macros/s/AKfycbz3a3hAA9kMxh9UDNOylK6L1Uue-iJYwyay2EikT6mLU413MxY/exec"; */



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
            limpiarContenido();
            pintar();
        })
        .catch(function (err) {
            console.error(err);
        });

};
/* setInterval('ft(appi)', 60000); */


function pintar() {


    lista = JSON.parse(localStorage.getItem("obj"));
    console.log(lista);
    var newArrayA = lista.filter(function (el) {
        return (el.GRUPO === "A");
    });
    /*  console.log(newArrayA); */
    /* console.log(lista); */
    newArrayA.forEach(e => {
        var porciento = (e.ASISTENCIAS*100)/16;

        salidaA = salidaA + ` 
       <div class="col s12 m12 l6">
              <div class="card sticky-action black">
                <div class="card-content">
                <div class="progress">
                        <div class="determinate" style="width: ${porciento}%"></div>
                    </div>
                  <span class="card-title white-text">${e.COMPLETO}</span>
                  <span id="${e.ID}-asi" style="border-radius: 10px;font-size:1em;font-weight: bold; background: #455a64; box-shadow: inset -9px -9px 18px #1c2428, inset 9px 9px 18px #6e90a0;" class="new badge" data-badge-caption="${e.ASISTENCIAS}"></span>
                
                  <span style="border-radius: 10px;font-size: 1em; background: #1403b1; box-shadow: inset -16px -16px 28px #090151, inset 16px 16px 28px #1f05ff;" class=" new badge datos left" data-badge-caption="${e.EQUIPO}"></span>
                  <span style="border-radius: 10px;font-size: 1em; background: background: #5501b4; box-shadow: inset -16px -16px 28px #270053, inset 16px 16px 28px #8302ff;" class="identificador new badge datos left" data-badge-caption="${e.ID}"></span>
                  <br>
                  <a id="${e.ID}-btn"  style="background: linear-gradient(315deg, #20e007, #075500)"
                     onclick="envia('${e.COMPLETO}','${e.NICK}','${e.EQUIPO}','${e.GRUPO}','${e.ID}','${e.ASISTENCIAS}');" 
                     class="btn-floating halfway-fab waves-effect waves-black ">
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

    document.getElementById("test_1").innerHTML = salidaA;

    var newArrayB = lista.filter(function (el) {
        return (el.GRUPO === "B");
    });
    /* console.log(newArray); */
    /* console.log(lista); */
    newArrayB.forEach(e => {
        var porciento = (e.ASISTENCIAS*100)/16;

        salidaB = salidaB + `
       <div class="col s12 m12 l6">
              <div  class="card sticky-action black" >
                <div class="card-content">
                <div class="progress">
                        <div class="determinate" style="width: ${porciento}%"></div>
                    </div>
                  <span class="card-title  white-text">${e.COMPLETO}</span>
                  <span id="${e.ID}-asi" style="border-radius: 10px;font-size: 1em;font-weight: bold; background: #455a64; box-shadow: inset -9px -9px 18px #1c2428, inset 9px 9px 18px #6e90a0;" class="new badge" data-badge-caption="${e.ASISTENCIAS}"></span>
                 
                  <span style="border-radius: 10px;font-size: 1em; background: #1403b1; box-shadow: inset -16px -16px 28px #090151, inset 16px 16px 28px #1f05ff;" class="new badge datos left" data-badge-caption="${e.EQUIPO}"></span>
                  <span style="border-radius: 10px;font-size: 1em; background: background: #5501b4; box-shadow: inset -16px -16px 28px #270053, inset 16px 16px 28px #8302ff;" class="identificador new badge datos left" data-badge-caption="${e.ID}"></span>
                  <br>
                  <a id="${e.ID}-btn"  style="background: linear-gradient(315deg, #20e007, #075500)"
                     onclick="envia('${e.COMPLETO}','${e.NICK}','${e.EQUIPO}','${e.GRUPO}','${e.ID}','${e.ASISTENCIAS}');" 
                     class="btn-floating halfway-fab waves-effect waves-black">
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

    document.getElementById("test_2").innerHTML = salidaB;


    var newArrayC = lista.filter(function (el) {
        return (el.GRUPO === "C");
    });
    /* console.log(newArray); */
    /* console.log(lista); */
    newArrayC.forEach(e => {

        var porciento = (e.ASISTENCIAS*100)/16;

        salidaC = salidaC + `
       <div class="col s12 m12 l6">
              <div class="card sticky-action black">
                <div class="card-content">
                <div class="progress">
                        <div class="determinate" style="width: ${porciento}%"></div>
                    </div>
                  <span class="card-title  white-text">${e.COMPLETO}</span>
                  <span id="${e.ID}-asi" style="border-radius: 10px;font-size: 1em;font-weight: bold;  background: #455a64; box-shadow: inset -9px -9px 18px #1c2428, inset 9px 9px 18px #6e90a0;" class="new badge" data-badge-caption="${e.ASISTENCIAS}"></span>
                  
                  <span style="border-radius: 10px;font-size: 1em; background: #1403b1; box-shadow: inset -16px -16px 28px #090151, inset 16px 16px 28px #1f05ff;" class="new badge datos left" data-badge-caption="${e.EQUIPO}"></span>
                  <span style="border-radius: 10px;font-size: 1em; background: background: #5501b4; box-shadow: inset -16px -16px 28px #270053, inset 16px 16px 28px #8302ff;" class="identificador new badge datos left" data-badge-caption="${e.ID}"></span>
                  <br>
                  <a id="${e.ID}-btn"  style="background: linear-gradient(315deg, #20e007, #075500)"
                     onclick="envia('${e.COMPLETO}','${e.NICK}','${e.EQUIPO}','${e.GRUPO}','${e.ID}','${e.ASISTENCIAS}');" 
                     class="btn-floating halfway-fab waves-effect waves-black ">
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

    document.getElementById("test_3").innerHTML = salidaC;


    var newArrayD = lista.filter(function (el) {
        return (el.GRUPO === "D");
    });
    /* console.log(newArray); */
    /* console.log(lista); */
    newArrayD.forEach(e => {

        var porciento = (e.ASISTENCIAS*100)/16;
        salidaD = salidaD + `
       <div class="col s12 m12 l6">
              <div class="card sticky-action black">
                <div class="card-content">
                <div class="progress">
                        <div class="determinate" style="width: ${porciento}%"></div>
                    </div>
                  <span class="card-title activator white-text">${e.COMPLETO}</span>
                  <span id="${e.ID}-asi" style="border-radius: 10px;font-size: 1em;font-weight: bold;  background: #455a64; box-shadow: inset -9px -9px 18px #1c2428, inset 9px 9px 18px #6e90a0;" class="new badge" data-badge-caption="${e.ASISTENCIAS}"></span>
                  
                  <span style="border-radius: 10px;font-size: 1em; background: #1403b1; box-shadow: inset -16px -16px 28px #090151, inset 16px 16px 28px #1f05ff;" class="new badge datos left" data-badge-caption="${e.EQUIPO}"></span>
                  <span style="border-radius: 10px;font-size: 1em; background: background: #5501b4; box-shadow: inset -16px -16px 28px #270053, inset 16px 16px 28px #8302ff;" class="identificador new badge datos left" data-badge-caption="${e.ID}"></span>
                  <br>
                  <a id="${e.ID}-btn"  style="background: linear-gradient(315deg, #20e007, #075500)" 
                     onclick="envia('${e.COMPLETO}','${e.NICK}','${e.EQUIPO}','${e.GRUPO}','${e.ID}','${e.ASISTENCIAS}');" 
                     class="btn-floating halfway-fab waves-effect waves-black">
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

    document.getElementById("test_4").innerHTML = salidaD;

    console.log("Se pinto la info");
}

var loader = function () {
    document.getElementById("contenido").innerHTML = `
            <center>
            <br>
            <div class="preloader-wrapper big active">
            <div class="spinner-layer spinner-white-only">
              <div class="circle-clipper left">
                <div class="circle"></div>
              </div><div class="gap-patch">
                <div class="circle"></div>
              </div><div class="circle-clipper right">
                <div class="circle"></div>
              </div>
            </div>
          </div>
          </center>`;
}


function periodo(num) {

    if (num === 1) {
        appi = "https://script.google.com/macros/s/AKfycbzloNhYKVTnxaE8XRAoHceu6bDqug-4_qPck6wHR5nC0hMZ4ac/exec";
        url =
            "https://script.google.com/macros/s/AKfycbz3a3hAA9kMxh9UDNOylK6L1Uue-iJYwyay2EikT6mLU413MxY/exec";
        document.getElementById("brand-logo").innerHTML = `<div class="left"><a href="index.html"><i class="material-icons white-text">arrow_back</i></a></div><span  class="brand-logo center "> Periodo 1</span>`;
        ft(appi);



    } else if (num === 2) {

        appi = "https://script.google.com/macros/s/AKfycbw87NkQkEsYqVCxJG4Peb78H03REvBrThoiLE04WQJ4bwhDxUJn/exec";
        url =
            "https://script.google.com/macros/s/AKfycbwYKAPn4uJiPDjdKNLZw3azVSngxxiaoAhFs4UHnUjXFPDevYk/exec";

        document.getElementById("brand-logo").innerHTML = `<div class="left"><a href="index.html"><i class="material-icons white-text">arrow_back</i></a></div><span  class="brand-logo center "> Periodo 2</span>`;
        ft(appi);


    } else if (num === 3) {
        appi = "https://script.google.com/macros/s/AKfycbwKs2Cs54-u_hpYg87lB50lO6SEct5DeHUr_BsTo4DGNZSgRIY/exec";
        url =
            "https://script.google.com/macros/s/AKfycbz2gNe8rtLII0sRg9h7SCRHjvMBEokiwa89e4h-wnc2ovLioys/exec";

        document.getElementById("brand-logo").innerHTML = `<div class="left"><a href="index.html"><i class="material-icons white-text">arrow_back</i></a></div><span  class="brand-logo center "> Periodo 3</span>`;
        ft(appi);

    }




}

var doble = function (e) {
    dobleAsistencia = e;
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



    envioUrl = url + "?Fecha=" + hoy.substring(1, 11) + hora + "&Completo=" + c.replace(/ /g, "_") + "&Nick=" + n.replace(/ /g, "_") + "&Equipo=" + e + "&Grupo=" + g + "&ID=" + i;

    /* console.log(envioUrl); */

    enviaDatos(envioUrl);


    /*  var iframe = document.createElement('iframe');

     iframe.src = envioUrl;
     document.getElementById("contenido").appendChild(iframe);
     
     setTimeout('limpiarContenido()', 3000); */

    document.getElementById(i + "-btn").className += " usado";
    document.getElementById(i + "-icon").innerHTML = "check";
    document.getElementById(i + "-icon").style.color = "#18f018";
    if (dobleAsistencia == 1) {
        setTimeout('enviaDatos(envioUrl);', 1000);
        document.getElementById(i + "-asi").setAttribute('data-badge-caption', parseInt(a) + 2);
        M.toast({
            html: 'Asistencias registrada',
            classes: 'rounded',
            displayLength: '2000'
        })
    } else {
        document.getElementById(i + "-asi").setAttribute('data-badge-caption', parseInt(a) + 1);
        M.toast({
            html: 'Asistencia registrada',
            classes: 'rounded',
            displayLength: '2000'
        })
    }
}

var enviaDatos = function (envioUrl) {
    var iframe = document.createElement('iframe');

    iframe.src = envioUrl;
    document.getElementById("contenido").appendChild(iframe);

    setTimeout('limpiarContenido()', 3000);

}

var limpiarContenido = function () {
    document.getElementById("contenido").innerHTML = "";

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

function limpiar() {
    document.getElementById("botones").innerHTML = "";
    document.getElementById('swt').style.display = "inline";
}

var arriba = function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

if (!navigator.onLine) {
    console.log("No hay internet");
    var internet = `
  
      <span >
          SIN CONEXIÓN
      </span>
      <br>
      <span >
            SIN CONEXIÓN
      </span>
      <br>
      <span >
            SIN CONEXIÓN
      </span>
      <br>
      <span >
            SIN CONEXIÓN
      </span>
      <br>
      <span >
            SIN CONEXIÓN
      </span>
      <br>
      <span >
            SIN CONEXIÓN
      </span>
    
`;
document.getElementById("footer").innerHTML = internet;
document.getElementById("footer").style.display = "block";
}