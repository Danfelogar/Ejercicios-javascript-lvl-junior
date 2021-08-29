class celular {
    constructor(color,peso,rdp,rdc,ram){
        this.color = color;
        this.peso = peso;
        this.resolucionDePantalla = rdp;
        this.resolucionDeCamara = rdc;
        this.ram = ram;
        this.encendido = false;
    }

    PresionarBotonEncendido(){
        if (this.encendido == false ) {
            alert("celular encendido");
            this.encendido =true;
        
        } else {
            alert("el celular esta apagado");
            this.encendido =false;
        }
    }

    reiniciar(){
        if (this.encendido == true ) {
            alert("reiniciando celular");
        
        } else {
            alert("el celular esta apagado");
        }
    }
    tomarFoto (){
        alert(`foto tomada en una resolución de: ${this.resolucionDeCamara}`)
    }
    grabarVideo(){
        alert(`grabamdo video en relución de: ${this.resolucionDeCamara}`)
    }
    mobileInfo(){
        return `
        Color: <b>${this.color}</b></br>
        Peso: <b>${this.peso}</b></br>
        Resolucion de patalla: <b>${this.resolucionDePantalla}</b></br>
        Resolucion de camara: <b>${this.resolucionDeCamara}</b></br>
        Memoria ram: <b>${this.ram}</b></br>
        `
    }
    
}

class CelularAltagama extends celular {
    constructor(color,peso,rdp,rdc,ram,rdce){
        super(color,peso,rdp,rdc,ram)
        this.resolucionDeCamaraExtra = rdce;
    }

    grabarVideoLento(){
        alert("estas grabando en camara lenta");
    }

    reconocimientoFacial(){
        alert("vamos a iniciar un reconocimiento facial");
    }

    mobileInfoAltagama(){
        return this.mobileInfo() + `Resolucion de camara trasera: ${this.resolucionDeCamaraExtra}`
    }
}

// celular1 = new celular("plateado", "150gr","5in"," HD", "2GB");
// celular2 = new celular("dorado", "146gr","3.5in","full HD", "3GB");
// celular3 = new celular("blanco", "200gr","4.5in","full HD 4k", "6GB");

// celular1.PresionarBotonEncendido()
// celular1.tomarFoto()
// celular1.grabarVideo()
// celular1.reiniciar()
// celular1.PresionarBotonEncendido()


celular1 = new CelularAltagama("plateado", "120gr","6in"," 4k", "12GB", "full HD");
celular2 = new CelularAltagama("dorado", "146gr","5.5in","4k", "10GB", "full HD 1080px");
celular3 = new CelularAltagama("blanco", "140gr","6.2in","4k", "6GB", "full HD");
document.write(`
${celular1.mobileInfoAltagama()} <br><br><br>
${celular2.mobileInfoAltagama()} <br><br>
${celular3.mobileInfoAltagama()} <br>
`)
