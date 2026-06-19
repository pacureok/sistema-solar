const datosCuerpos = {
    "Sol": {
        tipo: "Estrella Enana Amarilla",
        colorPrincipal: "#ffaa00",
        diametro: "1,392,700 km",
        distanciaSol: "Centro",
        gravedad: "274 m/s²",
        temperatura: "5,500 °C",
        dia: "27 días",
        ano: "230 mill. años",
        lunas: "0",
        descripcion: "El Sol contiene el 99.86% de toda la masa conocida del Sistema Solar. Su fusión nuclear convierte 600 millones de toneladas de hidrógeno en helio cada segundo, irradiando la energía que sustenta la vida en la Tierra."
    },
    "Mercurio": {
        radioOrbita: 90, tamano: 10, velocidad: 5,
        tipo: "Planeta Terrestre", colorPrincipal: "#9e9e9e", shadow: "0 0 10px #757575",
        gradiente: "linear-gradient(135deg, #e0e0e0, #9e9e9e, #424242)",
        diametro: "4,880 km", distanciaSol: "57.9M km", gravedad: "3.7 m/s²", temperatura: "-173°C a 427°C", dia: "59 días", ano: "88 días", lunas: "0",
        descripcion: "Es el planeta más cercano al Sol y el más pequeño. Carece casi por completo de atmósfera, lo que genera oscilaciones térmicas extremas entre sus caras diurna y nocturna."
    },
    "Venus": {
        radioOrbita: 130, tamano: 16, velocidad: 9,
        tipo: "Planeta Terrestre", colorPrincipal: "#e5a93b", shadow: "0 0 15px rgba(229,169,59,0.5)",
        gradiente: "linear-gradient(135deg, #fff3e0, #ffa726, #b5651d)",
        diametro: "12,104 km", distanciaSol: "108.2M km", gravedad: "8.87 m/s²", temperatura: "462 °C", dia: "243 días", ano: "225 días", lunas: "0",
        descripcion: "Venus sufre un efecto invernadero descontrolado causado por una densa atmósfera saturada de dióxido de carbono. Es el objeto más brillante en el cielo nocturno después de la Luna."
    },
    "Tierra": {
        radioOrbita: 180, tamano: 18, velocidad: 14,
        tipo: "Planeta Terrestre", colorPrincipal: "#2196f3", shadow: "0 0 15px rgba(33,150,243,0.6)",
        gradiente: "radial-gradient(circle at 30% 30%, #64b5f6, #2196f3, #0d47a1)",
        diametro: "12,742 km", distanciaSol: "149.6M km", gravedad: "9.81 m/s²", temperatura: "15 °C", dia: "24 horas", ano: "365.25 días", lunas: "1",
        descripcion: "Nuestro hogar planetario. Es el único mundo conocido con agua líquida estable en su superficie, placas tectónicas activas y una biosfera compleja y diversa."
    },
    "Marte": {
        radioOrbita: 230, tamano: 13, velocidad: 22,
        tipo: "Planeta Terrestre", colorPrincipal: "#ff5722", shadow: "0 0 12px rgba(255,87,34,0.5)",
        gradiente: "linear-gradient(135deg, #ff8a65, #ff5722, #871c1c)",
        diametro: "6,779 km", distanciaSol: "227.9M km", gravedad: "3.72 m/s²", temperatura: "-60 °C", dia: "24.6 horas", ano: "687 días", lunas: "2",
        descripcion: "Un desierto helado cubierto de regolito rico en óxido de hierro, causante de su tono rojizo. Alberga el Monte Olimpo, el volcán colosal más alto del sistema."
    },
    "Júpiter": {
        radioOrbita: 310, tamano: 42, velocidad: 38,
        tipo: "Gigante Gaseoso", colorPrincipal: "#d7ccc8", shadow: "0 0 20px rgba(215,204,200,0.4)",
        gradiente: "repeating-linear-gradient(20deg, #a1887f, #d7ccc8 8px, #ffe0b2 16px, #a1887f 24px)",
        diametro: "139,820 km", distanciaSol: "778.5M km", gravedad: "24.79 m/s²", temperatura: "-108 °C", dia: "9.9 horas", ano: "11.8 años", lunas: "95",
        descripcion: "El planeta más masivo del sistema. Compuesto principalmente de hidrógeno y helio, actúa como un escudo gravitacional protegiendo los planetas interiores al desviar cometas."
    },
    "Saturno": {
        radioOrbita: 410, tamano: 34, velocidad: 55,
        tipo: "Gigante Gaseoso", colorPrincipal: "#ffe082", shadow: "0 0 20px rgba(255,224,130,0.3)",
        gradiente: "linear-gradient(135deg, #fff8e1, #ffe082, #b38f00)",
        diametro: "116,460 km", distanciaSol: "1.4B km", gravedad: "10.44 m/s²", temperatura: "-139 °C", dia: "10.7 horas", ano: "29.5 años", lunas: "146",
        descripcion: "Reconocible mundialmente por sus espectaculares y masivos anillos macroscópicos de hielo puro. Es tan poco denso que flotaría en un océano gigante."
    },
    "Urano": {
        radioOrbita: 500, tamano: 24, velocidad: 80,
        tipo: "Gigante de Hielo", colorPrincipal: "#4dd0e1", shadow: "0 0 15px rgba(77,208,225,0.4)",
        gradiente: "linear-gradient(135deg, #e0f7fa, #4dd0e1, #006064)",
        diametro: "50,724 km", distanciaSol: "2.9B km", gravedad: "8.69 m/s²", temperatura: "-195 °C", dia: "17.2 horas", ano: "84 años", lunas: "28",
        descripcion: "Un gigante gaseoso helado con una inclinación axial extrema de 98 grados, provocando que ruede de lado en su recorrido orbital."
    },
    "Neptuno": {
        radioOrbita: 580, tamano: 23, velocidad: 110,
        tipo: "Gigante de Hielo", colorPrincipal: "#3f51b5", shadow: "0 0 18px rgba(63,81,181,0.5)",
        gradiente: "radial-gradient(circle at 30% 30%, #7986cb, #3f51b5, #1a237e)",
        diametro: "49,244 km", distanciaSol: "4.5B km", gravedad: "11.15 m/s²", temperatura: "-200 °C", dia: "16.1 horas", ano: "165 años", lunas: "16",
        descripcion: "El planeta más lejano y el más azotado por fenómenos meteorológicos violentos, registrando vientos huracanados que superan los 2,100 km/h."
    }
};

const universo = document.getElementById('universo');
const infoContent = document.getElementById('info-content');
let animacionActiva = true;

function crearSistemaSolar() {
    for (const [nombre, datos] of Object.entries(datosCuerpos)) {
        if (nombre === "Sol") continue;

        const orbita = document.createElement('div');
        orbita.className = 'orbita animacion-corriendo';
        orbita.style.width = `${datos.radioOrbita * 2}px`;
        orbita.style.height = `${datos.radioOrbita * 2}px`;
        orbita.style.animation = `girarOrbita ${datos.velocidad}s linear infinite`;

        const planetaContenedor = document.createElement('div');
        planetaContenedor.className = 'planeta-contenedor';
        planetaContenedor.style.top = `-${datos.tamano / 2}px`;
        planetaContenedor.style.width = `${datos.tamano}px`;
        planetaContenedor.style.height = `${datos.tamano}px`;

        const planeta = document.createElement('div');
        planeta.className = 'planeta';
        planeta.style.width = `100%`;
        planeta.style.height = `100%`;
        planeta.style.background = datos.gradiente;
        planeta.style.boxShadow = `inset -3px -3px 8px rgba(0,0,0,0.7), ${datos.shadow}`;
        
        if (nombre === "Saturno") {
            const anillo = document.createElement('div');
            anillo.className = 'anillo';
            anillo.style.width = `${datos.tamano * 2.4}px`;
            anillo.style.height = `${datos.tamano * 2.4}px`;
            planetaContenedor.appendChild(anillo);
        }

        planeta.onclick = (e) => {
            e.stopPropagation();
            mostrarInfo(nombre);
        };

        planetaContenedor.appendChild(planeta);
        orbita.appendChild(planetaContenedor);
        universo.appendChild(orbita);
    }
}

function alternarAnimacion() {
    const orbitas = document.querySelectorAll('.orbita');
    const btn = document.getElementById('btn-pausa');
    animacionActiva = !animacionActiva;

    orbitas.forEach(o => {
        if (animacionActiva) {
            o.classList.remove('animacion-pausada');
            o.classList.add('animacion-corriendo');
            btn.textContent = "Pausar Órbitas";
        } else {
            o.classList.remove('animacion-corriendo');
            o.classList.add('animacion-pausada');
            btn.textContent = "Reanudar Órbitas";
        }
    });
}

function mostrarInfo(nombre) {
    const datos = datosCuerpos[nombre];
    infoContent.innerHTML = `
        <span class="etiqueta-tipo">${datos.tipo}</span>
        <h1 style="color: ${datos.colorPrincipal}; text-shadow: 0 0 15px ${datos.colorPrincipal}40">${nombre}</h1>
        <p class="descripcion">${datos.descripcion}</p>
        <div class="datos-grid">
            <div class="dato-item"><span>Diámetro</span><strong>${datos.diametro}</strong></div>
            <div class="dato-item"><span>Dist. al Sol</span><strong>${datos.distanciaSol}</strong></div>
            <div class="dato-item"><span>Gravedad</span><strong>${datos.gravedad}</strong></div>
            <div class="dato-item"><span>Temperatura</span><strong>${datos.temperatura}</strong></div>
            <div class="dato-item"><span>Duración Día</span><strong>${datos.dia}</strong></div>
            <div class="dato-item"><span>Duración Año</span><strong>${datos.ano}</strong></div>
            <div class="dato-item" style="grid-column: span 2;"><span>Satélites Naturales (Lunas)</span><strong>${datos.lunas}</strong></div>
        </div>
    `;
}

crearSistemaSolar();
mostrarInfo('Tierra');
