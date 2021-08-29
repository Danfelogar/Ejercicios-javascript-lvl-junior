class app {
    constructor(descargas,puntuacion,peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }

    abrir(){
        if (this.iniciada == false && this.instalada == true) {
            this.iniciada = true;
            alert("app encendida")
        }
    }

    cerrar(){
        if (this.iniciada == true && this.instalada == true) {
            this.iniciada = false;
            alert("app encendida")
        }
    }

    instalar(){
        if(this.instalada == false) {
            this.instalada = true;
            alert("app instalada correctamente")
        }
    }
    desinstalar(){
        if(this.instalada == true) {
            this.instalada = false;
            alert("app desinstalada correctamente")
        }
    }
    
    appInfo(){
        return `
        Descargas: <b>${this.descargas}</b></br>
        Puntiacion: <b>${this.puntuacion}</br></br>
        Peso: <b>${this.peso}</br></br>
        `
    }
}

app1 = new app("16.000","4 estrellas", "1000Mb");
app2 = new app("12.000","5 estrellas", "8000Mb");
app3 = new app("13.000","5 estrellas", "4000Mb");
app4 = new app("14.000","4.6 estrellas", "1000Mb");
app5 = new app("1.000","4.9 estrellas", "200Mb");
app6 = new app("11.000","4.8 estrellas", "300Mb");
app7 = new app("6.000","4.2 estrellas", "3000Mb");

document.write(
    `
    ${app1.appInfo()} <br>
    ${app2.appInfo()} <br>
    ${app3.appInfo()} <br>
    ${app4.appInfo()} <br>
    ${app5.appInfo()} <br>
    ${app6.appInfo()} <br>
    ${app7.appInfo()} <br>
    `
)


app1.instalar();
app1.abrir();
app1.cerrar();
app1.desinstalar();
app1.appInfo();