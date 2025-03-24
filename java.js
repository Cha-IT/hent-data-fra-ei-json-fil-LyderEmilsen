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
    if (gjett === riktigSvar) {
        alert('Riktig!');
    } else {
        alert("Feil svar, prøv igjen!");
    }
});

restart.addEventListener("click", () => {
    location.reload();
}); 