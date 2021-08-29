const contenedor = document.querySelector(".flex-container");

function crearLlave(nombre,modelo,precio) {
    img = "<img src='llave.png'>";
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3>${modelo}</h3>`;//id nos permitira buscar el modelo en la base de datos
    precio = `<p>precio: <b>$${precio}</b></p>`;
    return[img,nombre,modelo,precio];
}

 let documentFragment = document.createDocumentFragment();

 const changeHidden = (number)=>{
     document.querySelector(".key-data").value = number
 }

for (let i = 1; i <= 20; i++){
    let modeloRandom = Math.round(Math.random()*1000);//round para redondear y random para resultados aleatoreos
    let precioRandom = Math.round(Math.random()*100+3000);
    let llave = crearLlave(`llave${i}`,`modelo ${modeloRandom}`,`precio ${precioRandom}`);

    let div = document.createElement("DIV");//crear elementos(texto/objetos) dentro del contenedor div del html
    div.addEventListener("click",()=>{changeHidden(modeloRandom)});//
    div.tabIndex=i;//con esto la llave queda seleccioanda
    div.classList.add(`item-${i}`,`flex-item`);// asignar clases a los elementos que se van a crea en este caso dos clases con el "i" que sera el numero 
    div.innerHTML += llave[0] +llave[1] + llave[2] +llave[3];//esto significa yo quiero que "innerHTML" muestre en la etiqueta "div" del html el resultado
    documentFragment.appendChild(div);
}

contenedor.appendChild(documentFragment);




