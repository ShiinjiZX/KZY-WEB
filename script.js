const musicUrls = [
    "https://files.catbox.moe/x7up1q.mp3",
    "https://files.catbox.moe/3epgg3.mp3",
    "https://files.catbox.moe/2yot99.mp3",
    "https://files.catbox.moe/cof5zw.mp3",
    "https://files.catbox.moe/ezmyeb.mp3"
];

let audio;

function playAudio() {
    if (!audio) {
        audio = document.getElementById('linkmp3');
        if (!audio) return console.error("Elemen audio tidak ditemukan!");
        audio.addEventListener('ended', playNextSong);
    }
    playNextSong();

    const buttonsData = [
        { title: "WhatsApp Bot", link: "https://wa.me/6281221380234", icon: "fab fa-whatsapp" },
        { title: "Youtube", link: "https://youtube.com/@IkyyTzy_", icon: "fab fa-youtube" },
        { title: "Instagram", link: "https://instagram.com/kzy.zx", icon: "fab fa-instagram" },
        { title: "Tiktok", link: "https://tiktok.com/@kyybtz", icon: "fab fa-tiktok" },
        { title: "X", link: "https://x.com/ShiinKZY", icon: "fab fa-twitter" }
    ];

    const buttonsContainer = document.getElementById('buttons-container');
    buttonsContainer.innerHTML = buttonsData.map(btn =>
        `<a href="${btn.link}" class="btn" target="_blank">
            <i class="${btn.icon}"></i><span>${btn.title}</span>
        </a>`
    ).join('');

    buttonsContainer.style.display = 'grid';
    document.getElementById('playButton').style.display = 'none';
}

function playNextSong() {
    const randomIndex = Math.floor(Math.random() * musicUrls.length);
    audio.src = musicUrls[randomIndex];
    audio.play();
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('followButton').addEventListener('click', () => {
        window.open('https://github.com/ShiinjiZX', '_blank');
    });
    document.getElementById('messageButton').addEventListener('click', () => {
        window.open('https://wa.me/6281248845231', '_blank');
    });
    document.getElementById('playButton').addEventListener('click', playAudio);
    document.getElementById('thanksButton').addEventListener('click', () => {
        const thanksBorder = document.getElementById('thanksBorder');
        thanksBorder.style.display = (thanksBorder.style.display === 'block') ? 'none' : 'block';
    });

    // Date & time
    const dateElement = document.getElementById("date");
    const timeElement = document.getElementById("time");
    function updateDateTime() {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        dateElement.textContent = now.toLocaleDateString('id-ID', options);
        const timeWIB = now.toLocaleTimeString('id-ID', { timeZone: 'Asia/Jakarta' });
        const timeWITA = now.toLocaleTimeString('id-ID', { timeZone: 'Asia/Makassar' });
        const timeWIT = now.toLocaleTimeString('id-ID', { timeZone: 'Asia/Jayapura' });
        timeElement.innerHTML = `WIB: ${timeWIB}<br>WITA: ${timeWITA}<br>WIT: ${timeWIT}`;
    }
    updateDateTime();
    setInterval(updateDateTime, 1000);

    // Efek salju
    function createSnowflake() {
        const snowflake = document.createElement("div");
        snowflake.classList.add("snow");
        snowflake.style.left = Math.random() * 100 + "vw";
        snowflake.style.animationDuration = "3s";
        document.body.appendChild(snowflake);
        setTimeout(() => snowflake.remove(), 3000);
    }
    function startSnowfall() {
        createSnowflake();
        let snowfallInterval = setInterval(createSnowflake, 200);
        setTimeout(() => clearInterval(snowfallInterval), 3000);
    }
    setInterval(startSnowfall, 7000);
});