const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheck = document.querySelector(".keys-check")

let mapedKeys = [];
let audio = new Audio("src/tunes/a.wav");

// Som das teclas
const playTune = (key) => {
    audio.src = `src/tunes/${key}.wav`
    audio.play();

    const clikedKey = document.querySelector(`[data-key="${key}"]`);

    clikedKey.classList.add("active");
    setTimeout(() => {
        clikedKey.classList.remove("active");
    }, 150);
}

// Pegando as teclas - clicando nas teclas
pianoKeys.forEach((key) => {
    console.log(key.dataset.key);
    key.addEventListener("click", () => playTune(key.dataset.key));
    mapedKeys.push(key.dataset.key);
});

// Ao apertar as teclas do teclado do usuario > keydown traz um KeyboardEvent
document.addEventListener("keydown",
    (e) => {
        if (mapedKeys.includes(e.key)) {
            playTune(e.key);
        }
        // console.log(e.key);
    });

// Para ajustar o volume
const handleVolume = (e) => {
    audio.volume = e.target.value;
    // console.log(e.target.value);
};
// Para mostrar as teclas ou nao
const showHideKeys = () => {
    // toggle > add e remove a classe hide 
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}

// Evento de ajuste do volume
volumeSlider.addEventListener("input", handleVolume);

// Evento Controle das teclas > Para mostrar ou nao
keysCheck.addEventListener("click", showHideKeys);