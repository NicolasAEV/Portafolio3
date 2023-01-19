//objetos 10 productos
export let carritos = JSON.parse(localStorage.getItem("carritos")) || [{
    id : 1,
    cantidad : 1,
    nombre: 'AC: Valhalla',
    descripcion: 'AC: Valhalla: Juego de rol y aventura en el que controlas a Eivor, un vikingo que debe liderar a su clan a través de conflictos y peligros en la época de las invasions vikingas de Inglaterra. Podrás personalizar a tu personaje y tomar decisiones que afectarán la historia y el mundo del juego.',
    precio: 20000,
    imagen: '../assets/img/valhalla.jpg',
    categoria : "aventura",
    stock : "10"
}, {
    id : 2,
    cantidad : 1,
    nombre: 'Gears Of War',
    descripcion: 'Gears of War: Juego de disparos en tercera persona que se desarrolla en un mundo postapocalíptico en el que los humanos luchan por sobrevivir contra una raza alienígena invasora. Contiene una intensa historia y combate a gran escala.',
    precio: 15000,
    imagen: '../assets/img/gears.jpg',
    categoria : "aventura",
    stock : "10"
}, {
    id : 3,
    cantidad : 1,
    nombre: 'God of war',
    descripcion: 'God of War: Aventura en tercera persona en la que controlas a Kratos, un guerrero espartano en su lucha contra los dioses del Olimpo. Deberás enfrentarte a peligrosos enemigos y resolver rompecabezas mientras exploras el mundo de los dioses griegos.',
    precio: 13000,
    imagen: '../assets/img/godofwar.jpg',
    categoria : "aventura",
    stock : "10"

}, {
    id : 4,
    cantidad : 1,
    nombre: 'GR: Breackpoint',
    descripcion: 'GR: Breakpoint: Juego de disparos en tercera persona que se desarrolla en un mundo abierto y con elementos de rol. Controlarás a un soldado de élite que se encuentra atrapado en una isla tropical controlada por un grupo de soldados traicioneros. Deberás sobrevivir y descubrir la verdad detrás de la traición',
    precio: 10000,
    imagen: '../assets/img/ghost.jpg',
    categoria : "aventura",
    stock : "10"

}, {
    id : 5,
    cantidad : 1,
    nombre: 'Raimbow Six',
    descripcion: 'Raimbow Six: Juego de disparos en primera persona que se desarrolla en el mundo de la operaciones especiales y el terrorismo. Contiene modos multijugador y una historia en solitario que te llevará a través de misiones peligrosas.',
    precio: 45000,
    imagen: '../assets/img/raimbow.jpg',
    categoria : "aventura",
    stock : "10"

}, {
    id : 6,
    cantidad : 1,
    nombre: 'Call of duty mw2',
    descripcion: 'Call of Duty MW2: Juego de disparos en primera persona ambientado en la guerra moderna. Contiene modos multijugador y una historia en solitario que te llevará a través de diferentes escenarios y misiones.',
    precio: 60000,
    imagen: '../assets/img/codmw2.jpg',
    categoria : "aventura",
    stock : "10"

}, {
    id : 7,
    cantidad : 1,
    nombre: 'Elden Ring',
    descripcion: 'Elden Ring: Juego de rol y aventura en el que deberás explorar un mundo fantástico y luchar contra peligrosos enemigos mientras resuelves rompecabezas y descubres la verdad detrás de la misteriosa desaparición de Elden Ring.',
    precio: 45000,
    imagen: '../assets/img/elden.jpg',
    categoria : "aventura",
    stock : "10"
}, {
    id : 8,
    cantidad : 1,
    nombre: 'Halo 5',
    descripcion: 'Halo 5: Juego de disparos en primera persona ambientado en un mundo futurista en el que controlarás a Master Chief, un soldado cibernético, en su lucha contra una invasión alienígena. Contiene modos multijugador y una historia en solitario.',
    precio: 40000,
    imagen: '../assets/img/halo5.jpg',
    categoria : "aventura",
    stock : "10"
}, {
    id : 9,
    cantidad : 1,
    nombre: 'GTA: V',
    descripcion: 'GTA: V: Juego de mundo abierto en el que controlarás a tres personajes diferentes en su lucha por sobrevivir y prosperar en la ciudad de Los Santos. Podrás realizar misiones, robos y otras actividades ilegales mientras exploras el mundo del juego.',
    precio: 40000,
    imagen: '../assets/img/gtav.jpg',
    categoria : "aventura",
    stock : "10"
}, {
    id : 10,
    cantidad : 1,
    nombre: 'The Witcher III',
    descripcion: 'The Witcher III: Juego de rol y aventura en el que controlarás a Geralt de Rivia, un cazador de monstruos, en su búsqueda por encontrar a su adoptiva hija y luchar contra peligrosos enemigos en un mundo fantástico. Contiene una historia profunda y decisiones que afectarán el mundo del juego',
    precio: 40000,
    imagen: '../assets/img/witcher.jpg',
    categoria : "aventura",
    stock : "10"
}];
localStorage.setItem("carritos", JSON.stringify(carritos));
