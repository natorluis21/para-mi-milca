// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos

var lyricsData = [
  { text: "Si, tal vez,", time: 11 },
  { text: "pudieras comprender", time: 13 },
  { text: "Que no sé,", time: 15 },
  { text: "como expresarme bien", time: 18 },
  { text: "Si, tal vez,", time: 22 },
  { text: "pudiera hacerte ver", time: 25 },
  { text: "Que no hay otra mujer,", time: 29 },
  { text: "mejor que tú para mí", time: 32 },
  { text: "Si, tal vez,", time: 35 },
  { text: "me harías muy feliz", time: 37 },
  { text: "Si, tal vez,", time: 40 },
  { text: "me lo podrías decir", time: 43 },
  { text: "Si, tal vez,", time: 47 },
  { text: "detalle a detalle", time: 49 },
  { text: "Podrías conquistarme,", time: 53 },
  { text: "sería tuya", time: 56 },
  { text: "Te quiero tanto, tanto, tanto, tanto, tanto", time: 60 },
  { text: "Cada día un poco más, ah ah", time: 65 },
  { text: "Te quiero tanto, tanto, tanto, tanto, tanto", time: 71 },
  { text: "Para mí no hay nadie igual,", time: 76 },
  { text: "no lo hay", time: 79 },
  { text: "Te quiero tanto, tanto, tanto, tanto amor", time: 84 },
  { text: "Que ya no puedo más", time: 89 },
  { text: "Que ya no puedo más", time: 95 },
  { text: "Pues, tal vez,", time: 103 },
  { text: "el mundo aprenderá", time: 106 },
  { text: "Con nuestro amor,", time: 109 },
  { text: "lo bello que es amar", time: 113 },
  { text: "Y tal vez,", time: 118 },
  { text: "lo vuelva a repetir", time: 120 },
  { text: "Pareja por pareja,", time: 122 },
  { text: "el mundo entero al fin", time: 126 },
  { text: "Te quiero tanto, tanto, tanto, tanto, tanto", time: 130 },
  { text: "Cada día un poco más, ah ah", time: 135 },
  { text: "Te quiero tanto, tanto, tanto, tanto, tanto", time: 139 },
  { text: "Para mí no hay nadie igual,", time: 145 },
  { text: "no lo hay", time: 148 },
  { text: "Te quiero tanto, tanto, tanto, tanto amor", time: 153 },
  { text: "Que ya no puedo más", time: 157 },
  { text: "Que ya no puedo más", time: 164 },
  { text: "Que ya no puedo más", time: 170 },
  { text: "Que ya no puedo más", time: 176 }
];


// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);