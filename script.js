// Base de datos extendida con física y atmósfera
const datosCuerpos = {
    "Sol": {
        tipo: "Estrella Enana Amarilla", colorPrincipal: "#ffaa00",
        diametro: "1,392,700 km", distanciaSol: "Centro del Sistema",
        gravedad: "274 m/s²", temperatura: "5,500 °C", dia: "27 días", ano: "230M años", lunas: "0",
        inclinacion: "7.25°", composicion: "73% Hidrógeno, 25% Helio",
        descripcion: "El motor térmico de nuestro vecindario cósmico. Su inmensa gravedad mantiene a todos los planetas unidos en sus órbitas elípticas. Es una esfera casi perfecta de plasma ardiente."
    },
    "Mercurio": {
        radioOrbita: 100, tamano: 12, velocidad: 6,
        tipo: "Planeta Terrestre", colorPrincipal: "#b0bec5",
        gradiente: "linear-gradient(135deg, #cfd8dc, #90a4ae, #546e7a)",
        diametro: "4,880 km", distanciaSol: "57.9M km", gravedad: "3.7 m/s²", temperatura: "-173°C a 427°C", dia: "59 días", ano: "88 días", lunas: "0",
        inclinacion: "0.03° (Casi nula)", composicion: "Trazas de Oxígeno, Sodio, Hidrógeno",
        descripcion: "Mercurio tiene la órbita más excéntrica (menos circular) de todos los planetas. Su falta de atmósfera significa que el cielo siempre es negro, incluso de día."
    },
    "Venus": {
        radioOrbita: 150, tamano: 18, velocidad: 11,
        tipo: "Planeta Terrestre", colorPrincipal: "#ffb74d",
        gradiente: "linear-gradient(135deg, #ffe082, #ffb74d, #f57c00)",
        diametro: "12,104 km", distanciaSol: "108.2M km", gravedad: "8.87 m/s²", temperatura: "462 °C", dia: "243 días", ano: "225 días", lunas: "0",
        inclinacion: "177.3° (Gira al revés)", composicion: "96.5% Dióxido de Carbono, 3.5% Nitrógeno",
        descripcion: "Gira sobre su eje en dirección opuesta a la mayoría de los planetas (rotación retrógrada). Su densa atmósfera aplastaría a un humano instantáneamente."
    },
    "Tierra": {
        radioOrbita: 210, tamano: 20, velocidad: 15,
        tipo: "Planeta Terrestre", colorPrincipal: "#29b6f6",
        gradiente: "radial-gradient(circle at 35% 35%, #81d4fa, #29b6f6, #01579b)",
        diametro: "12,742 km", distanciaSol: "149.6M km (1 UA)", gravedad: "9.81 m/s²", temperatura: "15 °C", dia: "24 horas", ano: "365.25 días", lunas: "1",
        inclinacion: "23.4° (Genera estaciones)", composicion: "78% Nitrógeno, 21% Oxígeno",
        descripcion: "Nuestra biosfera privilegiada. Es el objeto más denso del Sistema Solar y el único geológicamente activo en su superficie con placas tectónicas fracturadas."
    },
    "Marte": {
        radioOrbita: 270, tamano: 15, velocidad: 25,
        tipo: "Planeta Terrestre", colorPrincipal: "#ef5350",
        gradiente: "linear-gradient(135deg, #ef9a9a, #ef5350, #b71c1c)",
        diametro: "6,779 km", distanciaSol: "227.9M km", gravedad: "3.71 m/s²", temperatura: "-60 °C", dia: "24.6 horas", ano: "687 días", lunas: "2",
        inclinacion: "25.2°", composicion: "95% Dióxido de Carbono, 3% Nitrógeno",
        descripcion: "Un mundo geológicamente muerto cubierto de óxido. Posee el cañón más profundo, Valles Marineris, que haría parecer al Gran Cañón terrestre un pequeño rasguño."
    },
    "Júpiter": {
        radioOrbita: 370, tamano: 45, velocidad: 45,
        tipo: "Gigante Gaseoso", colorPrincipal: "#d7ccc8",
        gradiente: "repeating-linear-gradient(15deg, #a1887f, #d7ccc8 10px, #ffcc80 20px, #a1887f 30px)",
        diametro: "139,820 km", distanciaSol: "778.5M km", gravedad: "24.79 m/s²", temperatura: "-108 °C", dia: "9.9 horas", ano: "11.8 años", lunas: "95",
        inclinacion: "3.1°", composicion: "90% Hidrógeno, 10% Helio",
        descripcion: "Su intensa gravedad actúa como una aspiradora cósmica, atrayendo asteroides que de otro modo podrían impactar la Tierra. Posee auroras boreales del tamaño de planetas."
    },
    "Saturno": {
        radioOrbita: 480, tamano: 36, velocidad: 65,
        tipo: "Gigante Gaseoso", colorPrincipal: "#ffe082",
        gradiente: "linear-gradient(135deg, #fff9c4, #ffe082, #ffb300)",
        diametro: "116,460 km", distanciaSol: "1.4 Billones km", gravedad: "10.44 m/s²", temperatura: "-139 °C", dia: "10.7 horas", ano: "29.5 años", lunas: "146",
        inclinacion: "26.7°", composicion: "96% Hidrógeno, 3% Helio",
        descripcion: "Sus imponentes anillos están compuestos por fragmentos de cometas, asteroides y lunas destrozadas por la colosal fuerza gravitacional del planeta."
    },
    "Urano": {
        radioOrbita: 580, tamano: 26, velocidad: 90,
        tipo: "Gigante de Hielo", colorPrincipal: "#4dd0e1",
        gradiente: "linear-gradient(135deg, #b2ebf2, #4dd0e1, #00838f)",
        diametro: "50,724 km", distanciaSol: "2.9 Billones km", gravedad: "8.69 m/s²", temperatura: "-195 °C", dia: "17.2 horas", ano: "84 años", lunas: "28",
        inclinacion: "97.8° (Rota de lado)", composicion: "Hidrógeno, Helio, Metano (Hielo)",
        descripcion: "El metano en su atmósfera superior absorbe la luz roja del sol y refleja la luz azul, dándole su característico y suave color cian."
    },
    "Neptuno": {
        radioOrbita: 670, tamano: 25, velocidad: 120,
        tipo: "Gigante de Hielo", colorPrincipal: "#3949ab",
        gradiente: "radial-gradient(circle at 40% 40%, #7986cb, #3949ab, #1a237e)",
        diametro: "49,244 km", distanciaSol: "4.5 Billones km", gravedad: "11.15 m/s²", temperatura: "-200 °C", dia: "16.1 horas", ano: "165 años", lunas: "16",
        inclinacion: "28.3°", composicion: "Hidrógeno, Helio, Metano (Mayor)",
        descripcion: "Un mundo de dinámica violenta y oscuro. Las nubes de metano helado son arrastradas a velocidades supersónicas que superan los 2,000 kilómetros por hora."
    }
};

const universo = document.getElementById('universo');
const infoContent = document.getElementById('info-content');
const tooltip = document.getElementById('tooltip');
let animacionActiva = true;
let orbitasVisibles = true;
let nivelZoom = 1;

// Motor de Renderizado del DOM
function crearSistemaSolar() {
    for (const [nombre, datos] of Object.entries(datosCuerpos)) {
        if (nombre === "Sol") {
            const solDOM = document.querySelector('.sol');
            solDOM.onmouseenter = (e) => mostrarTooltip(e, nombre);
            solDOM.onmouseleave = ocultarTooltip;
            continue;
        }

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
        
        // Efecto de anillo exclusivo para Saturno
        if (nombre === "Saturno") {
            const anillo = document.createElement('div');
            anillo.className = 'anillo';
            anillo.style.width = `${datos.tamano * 2.6}px`;
            anillo.style.height = `${datos.tamano * 2.6}px`;
            planetaContenedor.appendChild(anillo);
        }

        // Lógica de interacciones
        planeta.onclick = (e) => { e.stopPropagation(); mostrarInfo(nombre); };
        planeta.onmouseenter = (e) => mostrarTooltip(e, nombre);
        planeta.onmouseleave = ocultarTooltip;

        planetaContenedor.appendChild(planeta);
        orbita.appendChild(planetaContenedor);
        universo.appendChild(orbita);
    }
}

// Controladores de Interfaz (Botones)
function alternarAnimacion() {
    const orbitas = document.querySelectorAll('.orbita');
    const btn = document.getElementById('btn-pausa');
    animacionActiva = !animacionActiva;

    orbitas.forEach(o => {
        if (animacionActiva) {
            o.classList.remove('animacion-pausada');
            o.classList.add('animacion-corriendo');
            btn.textContent = "Pausar Tiempo";
            btn.style.color = "var(--acento-ui)";
        } else {
            o.classList.remove('animacion-corriendo');
            o.classList.add('animacion-pausada');
            btn.textContent = "Reanudar Tiempo";
            btn.style.color = "#ff5252"; // Color rojo de advertencia
        }
    });
}

function alternarOrbitas() {
    const orbitas = document.querySelectorAll('.orbita');
    const btn = document.getElementById('btn-orbitas');
    orbitasVisibles = !orbitasVisibles;

    orbitas.forEach(o => {
        if (orbitasVisibles) {
            o.classList.remove('orbita-oculta');
            btn.textContent = "Ocultar Órbitas";
        } else {
            o.classList.add('orbita-oculta');
            btn.textContent = "Mostrar Órbitas";
        }
    });
}

function ajustarZoom(delta) {
    nivelZoom += delta;
    // Limitar el zoom entre 0.4x y 2x
    if (nivelZoom < 0.4) nivelZoom = 0.4;
    if (nivelZoom > 2) nivelZoom = 2;
    universo.style.transform = `scale(${nivelZoom})`;
}

// Tooltip Dinámico
function mostrarTooltip(evento, nombre) {
    tooltip.textContent = nombre;
    tooltip.style.color = datosCuerpos[nombre].colorPrincipal;
    tooltip.style.borderColor = datosCuerpos[nombre].colorPrincipal;
    tooltip.classList.remove('oculto');
}

function ocultarTooltip() {
    tooltip.classList.add('oculto');
}

// Rastrear el cursor en todo el documento para el tooltip flotante
document.addEventListener('mousemove', (e) => {
    if (!tooltip.classList.contains('oculto')) {
        tooltip.style.left = `${e.clientX}px`;
        tooltip.style.top = `${e.clientY}px`;
    }
});

// Actualizador del Panel Lateral
function mostrarInfo(nombre) {
    const datos = datosCuerpos[nombre];
    infoContent.innerHTML = `
        <span class="etiqueta">${datos.tipo}</span>
        <h1 style="color: ${datos.colorPrincipal}; text-shadow: 0 0 20px ${datos.colorPrincipal}60">${nombre}</h1>
        <p class="descripcion">${datos.descripcion}</p>
        
        <div class="datos-grid">
            <div class="dato-item"><span>Inclinación Axial</span><strong>${datos.inclinacion}</strong></div>
            <div class="dato-item"><span>Composición</span><strong>${datos.composicion}</strong></div>
            <div class="dato-item"><span>Diámetro</span><strong>${datos.diametro}</strong></div>
            <div class="dato-item"><span>Gravedad</span><strong>${datos.gravedad}</strong></div>
            <div class="dato-item"><span>Día (Rotación)</span><strong>${datos.dia}</strong></div>
            <div class="dato-item"><span>Año (Órbita)</span><strong>${datos.ano}</strong></div>
            <div class="dato-item"><span>Distancia Solar</span><strong>${datos.distanciaSol}</strong></div>
            <div class="dato-item"><span>Temperatura M.</span><strong>${datos.temperatura}</strong></div>
            <div class="dato-item" style="grid-column: span 2; border-left-color: ${datos.colorPrincipal}">
                <span>Satélites Naturales (Lunas Conocidas)</span>
                <strong>${datos.lunas}</strong>
            </div>
        </div>
    `;
}

// Inicialización de la aplicación
crearSistemaSolar();
mostrarInfo('Tierra'); // Selecciona la Tierra al cargar
