// Base de datos científica exhaustiva para el proyecto
const datosCuerpos = {
    "Sol": {
        tipo: "Estrella Enana Amarilla",
        colorPrincipal: "#ffcc00",
        gradiente: "radial-gradient(circle at 30% 30%, #ffffff, #ffcc00, #ff6600)",
        diametro: "1,392,700 km",
        distanciaSol: "0 km (Centro)",
        gravedad: "274 m/s²",
        temperatura: "5,500 °C (Superficie)",
        dia: "27 días terrestres",
        ano: "230 millones de años (Órbita galáctica)",
        lunas: "0",
        descripcion: "El Sol es una estrella de tipo-G de la secuencia principal que abarca aproximadamente el 99.86% de la masa del sistema solar. Su núcleo alcanza temperaturas de 15 millones de grados Celsius, donde ocurre la fusión nuclear que genera su inmensa energía."
    },
    "Mercurio": {
        radioOrbita: 70,
        tamano: 12,
        velocidad: 8,
        tipo: "Planeta Terrestre",
        colorPrincipal: "#a8a8a8",
        gradiente: "linear-gradient(135deg, #d3d3d3, #7a7a7a, #363636)",
        diametro: "4,880 km",
        distanciaSol: "57.9 millones km",
        gravedad: "3.7 m/s²",
        temperatura: "-173 °C a 427 °C",
        dia: "59 días terrestres",
        ano: "88 días terrestres",
        lunas: "0",
        descripcion: "El planeta más pequeño del sistema solar y el más cercano al Sol. Su superficie está intensamente craterizada, muy similar a la de nuestra Luna. Al no tener una atmósfera sustancial que retenga el calor, experimenta las fluctuaciones de temperatura más extremas del sistema solar."
    },
    "Venus": {
        radioOrbita: 110,
        tamano: 18,
        velocidad: 12,
        tipo: "Planeta Terrestre",
        colorPrincipal: "#e6c280",
        gradiente: "linear-gradient(135deg, #ffe6b3, #e6c280, #b38600)",
        diametro: "12,104 km",
        distanciaSol: "108.2 millones km",
        gravedad: "8.87 m/s²",
        temperatura: "462 °C (Media)",
        dia: "243 días terrestres",
        ano: "225 días terrestres",
        lunas: "0",
        descripcion: "A menudo llamado el 'gemelo' de la Tierra por su tamaño similar, Venus es un mundo infernal. Su espesa atmósfera de dióxido de carbono y nubes de ácido sulfúrico crean un efecto invernadero desbocado, haciéndolo el planeta más caliente de nuestro sistema."
    },
    "Tierra": {
        radioOrbita: 160,
        tamano: 20,
        velocidad: 16,
        tipo: "Planeta Terrestre",
        colorPrincipal: "#4b9cd3",
        gradiente: "radial-gradient(circle at 30% 30%, #87ceeb, #4b9cd3, #1e3f66)",
        diametro: "12,742 km",
        distanciaSol: "149.6 millones km (1 UA)",
        gravedad: "9.807 m/s²",
        temperatura: "15 °C (Media)",
        dia: "24 horas",
        ano: "365.25 días",
        lunas: "1 (La Luna)",
        descripcion: "Nuestro planeta natal es el único lugar conocido en el universo donde existe vida. Está equipado con un potente campo magnético que nos protege de la radiación solar y es el único planeta con agua líquida en su superficie."
    },
    "Marte": {
        radioOrbita: 210,
        tamano: 14,
        velocidad: 24,
        tipo: "Planeta Terrestre",
        colorPrincipal: "#c1440e",
        gradiente: "linear-gradient(135deg, #e77d11, #c1440e, #7a2000)",
        diametro: "6,779 km",
        distanciaSol: "227.9 millones km",
        gravedad: "3.721 m/s²",
        temperatura: "-60 °C (Media)",
        dia: "24.6 horas",
        ano: "687 días terrestres",
        lunas: "2 (Fobos y Deimos)",
        descripcion: "Un mundo desértico y frío. Marte es apodado el Planeta Rojo debido al óxido de hierro prevalente en su superficie. Posee estaciones, casquetes polares, volcanes extintos (incluyendo el Olympus Mons, el más grande del sistema) y cañones profundos."
    },
    "Júpiter": {
        radioOrbita: 290,
        tamano: 45,
        velocidad: 45,
        tipo: "Gigante Gaseoso",
        colorPrincipal: "#d39c7e",
        gradiente: "repeating-linear-gradient(18deg, #b07e60, #d39c7e 10px, #e8c3a5 20px, #d39c7e 30px)",
        diametro: "139,820 km",
        distanciaSol: "778.5 millones km",
        gravedad: "24.79 m/s²",
        temperatura: "-108 °C",
        dia: "9.9 horas",
        ano: "11.8 años terrestres",
        lunas: "95 (Mínimo confirmadas)",
        descripcion: "El rey de los planetas. Su masa es más del doble de la de todos los demás planetas del sistema solar juntos. Su atmósfera presenta intensas bandas de nubes y la Gran Mancha Roja, una tormenta colosal que ha durado cientos de años."
    },
    "Saturno": {
        radioOrbita: 380,
        tamano: 38,
        velocidad: 60,
        tipo: "Gigante Gaseoso",
        colorPrincipal: "#e3cc9a",
        gradiente: "linear-gradient(135deg, #f4e3b5, #e3cc9a, #b0955a)",
        diametro: "116,460 km",
        distanciaSol: "1.4 billones km",
        gravedad: "10.44 m/s²",
        temperatura: "-139 °C",
        dia: "10.7 horas",
        ano: "29.5 años terrestres",
        lunas: "146 (Mínimo confirmadas)",
        descripcion: "Adornado con un deslumbrante y complejo sistema de anillos compuestos por innumerables trozos de hielo y roca. Saturno es el planeta menos denso del sistema solar; de hecho, si existiera un océano lo suficientemente grande, Saturno flotaría en él."
    },
    "Urano": {
        radioOrbita: 460,
        tamano: 26,
        velocidad: 85,
        tipo: "Gigante de Hielo",
        colorPrincipal: "#a4d3ee",
        gradiente: "linear-gradient(135deg, #c4e4f5, #a4d3ee, #5a9abf)",
        diametro: "50,724 km",
        distanciaSol: "2.9 billones km",
        gravedad: "8.69 m/s²",
        temperatura: "-195 °C",
        dia: "17.2 horas",
        ano: "84 años terrestres",
        lunas: "28",
        descripcion: "El primer planeta descubierto con la ayuda de un telescopio. Urano es un gigante de hielo que rota de lado, con su eje de rotación casi paralelo a su plano orbital, probablemente como resultado de una colisión masiva antigua."
    },
    "Neptuno": {
        radioOrbita: 540,
        tamano: 25,
        velocidad: 110,
        tipo: "Gigante de Hielo",
        colorPrincipal: "#274687",
        gradiente: "radial-gradient(circle at 40% 40%, #4667b3, #274687, #0b1a40)",
        diametro: "49,244 km",
        distanciaSol: "4.5 billones km",
        gravedad: "11.15 m/s²",
        temperatura: "-200 °C",
        dia: "16.1 horas",
        ano: "165 años terrestres",
        lunas: "16",
        descripcion: "Oscuro, frío y muy ventoso, es el último de los planetas de nuestro sistema solar. Más de 30 veces más lejos del Sol que la Tierra, Neptuno es el único planeta de nuestro sistema solar no visible a simple vista y predicho mediante matemáticas antes de su descubrimiento."
    }
};

const universo = document.getElementById('universo');
const infoContent = document.getElementById('info-content');

// Inyección dinámica de los componentes
function crearSistemaSolar() {
    for (const [nombre, datos] of Object.entries(datosCuerpos)) {
        if (nombre === "Sol") continue;

        const orbita = document.createElement('div');
        orbita.className = 'orbita';
        orbita.style.width = `${datos.radioOrbita * 2}px`;
        orbita.style.height = `${datos.radioOrbita * 2}px`;
        orbita.style.animation = `girarOrbita ${datos.velocidad}s linear infinite`;

        const planetaContenedor = document.createElement('div');
        planetaContenedor.className = 'planeta-contenedor';
        planetaContenedor.style.top = `-${datos.tamano / 2}px`;
        planetaContenedor.style.width = `${datos.tamano}px`;
        planetaContenedor.style.height = `${datos.tamano}px`;
        planetaContenedor.style.animation = `rotacionInversa ${datos.velocidad}s linear infinite`;

        const planeta = document.createElement('div');
        planeta.className = 'planeta';
        planeta.style.width = `100%`;
        planeta.style.height = `100%`;
        planeta.style.background = datos.gradiente;
        
        if (nombre === "Saturno") {
            const anillo = document.createElement('div');
            anillo.className = 'anillo';
            anillo.style.width = `${datos.tamano * 2.2}px`;
            anillo.style.height = `${datos.tamano * 2.2}px`;
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

// Renderizar la información en el panel de cristal esmerilado
function mostrarInfo(nombre) {
    const datos = datosCuerpos[nombre];
    
    infoContent.innerHTML = `
        <span class="etiqueta-tipo">${datos.tipo}</span>
        <h1 style="color: ${datos.colorPrincipal}">${nombre}</h1>
        <p class="descripcion">${datos.descripcion}</p>
        
        <div class="datos-grid">
            <div class="dato-item">
                <span>Diámetro</span>
                <strong>${datos.diametro}</strong>
            </div>
            <div class="dato-item">
                <span>Distancia al Sol</span>
                <strong>${datos.distanciaSol}</strong>
            </div>
            <div class="dato-item">
                <span>Gravedad</span>
                <strong>${datos.gravedad}</strong>
            </div>
            <div class="dato-item">
                <span>Temperatura (Media)</span>
                <strong>${datos.temperatura}</strong>
            </div>
            <div class="dato-item">
                <span>Duración del Día</span>
                <strong>${datos.dia}</strong>
            </div>
            <div class="dato-item">
                <span>Duración del Año</span>
                <strong>${datos.ano}</strong>
            </div>
            <div class="dato-item" style="grid-column: span 2;">
                <span>Lunas Conocidas</span>
                <strong>${datos.lunas}</strong>
            </div>
        </div>
    `;
}

// Inicialización del sistema
crearSistemaSolar();
mostrarInfo('Tierra'); // Estado inicial predeterminado
