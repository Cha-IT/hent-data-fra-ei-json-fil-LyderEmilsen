import sanger from './info.json' with { type: 'json' };

const sangNummer = Math.floor(Math.random() * sanger.length)

const sangliste = document.querySelector('#sangliste');
const knapp = document.querySelector('#knapp');
const gjettKnapp = document.querySelector('#gjettKnapp');
const gjettInput = document.querySelector('#gjettInput');
let klikk = 0;

knapp.addEventListener('click', () => {
    if (klikk < sanger[sangNummer].hint.length) {
        const nestehint = sanger[sangNummer].hint[klikk];
        console.log(sanger[sangNummer]);
        const songElement = document.createElement('div');
        songElement.innerHTML = `${nestehint}`;
        sangliste.appendChild(songElement);
        klikk++;
    }
});


gjettKnapp.addEventListener('click', () => {
    const gjett = gjettInput.value;
    const riktigSvar = sanger[sangNummer].sang;
    if (gjett.toLowerCase() === riktigSvar.toLowerCase()) {
        document.querySelector('#resultat').innerHTML = "<div style='animation: spin 1.5s ease-in-out'>Riktig svar!</div>";
    } else {
        document.querySelector('#resultat').innerHTML = "<div style='color: red; animation: spin 1.5s ease-in-out'>Feil svar!</div>";
    }
});

restart.addEventListener("click", () => {
    location.reload();
}); 