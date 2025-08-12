const musicUrls = [
    "https://files.catbox.moe/x7up1q.mp3",
    "https://files.catbox.moe/3epgg3.mp3",
    "https://files.catbox.moe/2yot99.mp3",
    "https://files.catbox.moe/cof5zw.mp3",
    "https://files.catbox.moe/ezmyeb.mp3",
    "https://files.catbox.moe/yzujwh.mp3",
    "https://files.catbox.moe/huf63r.mp3",
    "https://files.catbox.moe/ezmyeb.mp3",
    "https://files.catbox.moe/7v9s5p.mp3",
    "https://files.catbox.moe/2ipgt5.mp3",
    "https://files.catbox.moe/nlhsyh.mp3",
    "https://files.catbox.moe/t8ejtv.mp3",
    "https://files.catbox.moe/hymhg0.mp3",
    "https://files.catbox.moe/5awonj.mp3",
    "https://files.catbox.moe/l5xx59.mp3",
    "https://files.catbox.moe/sc8kj2.mp3",
    "https://files.catbox.moe/k2wfge.mp3",
    "https://files.catbox.moe/k2wfge.mp3",
    "https://files.catbox.moe/c83a4n.mp3",
    "https://files.catbox.moe/5ld1ay.mp3",
    "https://files.catbox.moe/ak3v20.mp3",
    "https://files.catbox.moe/qfqi6w.mp3",
    "https://files.catbox.moe/yfz9dp.mp3",
    "https://files.catbox.moe/ntk7bh.mp3",
    "https://files.catbox.moe/mahenr.mp3",
    "https://files.catbox.moe/clfuv9.m4a",
    "https://files.catbox.moe/pnfk40.mp3",
    "https://files.catbox.moe/ak3v20.mp3",
    "https://files.catbox.moe/ch6zby.mp3",
    "https://files.catbox.moe/hrc4m0.mp3",
    "https://files.catbox.moe/1uctuc.mp3",
    "https://files.catbox.moe/887m1y.mp3",
    "https://files.catbox.moe/vyq73h.mp3",
    "https://files.catbox.moe/5ld1ay.mp3",
    "https://files.catbox.moe/7kvvip.mp3",
    "https://files.catbox.moe/7swaxp.mp3",
    "https://files.catbox.moe/tq1vwg.mp3",
    "https://files.catbox.moe/bbx2l2.mp3",
    "https://files.catbox.moe/3n3aun.mp3",
    "https://files.catbox.moe/hs82nh.mp3",
    "https://files.catbox.moe/odstvz.mp3",
    "https://files.catbox.moe/gdtzrr.mp3",
    "https://files.catbox.moe/dfkmse.mp3",
    "https://files.catbox.moe/lrmym6.mp3",
    "https://files.catbox.moe/sy6z90.mp3",
    "https://files.catbox.moe/50pc6b.mp3",
    "https://files.catbox.moe/msp5u8.mp3",
    "https://files.catbox.moe/x7up1q.mp3"
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
        { title: "WhatsApp 2", link: "https://wa.me/6281248845231", icon: "fab fa-whatsapp" },
        { title: "Youtube", link: "https://youtube.com/@Ktz-KyyTzy", icon: "fab fa-youtube" },
        { title: "Instagram", link: "https://instagram.com/kzy.zx", icon: "fab fa-instagram" },
        { title: "Tiktok", link: "https://tiktok.com/@ikyykzy", icon: "fab fa-tiktok" },
        { title: "X", link: "https://x.com/ShiinKZY", icon: "fab fa-twitter" }, 
        { title: "Github", link: "https://github.com/ShiinjiZX", icon: "fab fa-github" }
    ];

    const buttonsContainer = document.getElementById('buttons-container');
    buttonsContainer.innerHTML = buttonsData.map(btn =>
        `<a href="${btn.link}" class="btn" target="_blank">
            <i class="${btn.icon}"></i><span>${btn.title}</span>
        </a>`
    ).join('');

    buttonsContainer.style.display = 'flex';
    document.getElementById('playButton').style.display = 'none';
}

function playNextSong() {
    const randomIndex = Math.floor(Math.random() * musicUrls.length);
    audio.src = musicUrls[randomIndex];
    audio.play();
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('followButton').addEventListener('click', () => {
        window.open('https://whatsapp.com/channel/0029Vb6ZLKPFy72HsLBqZi1x', '_blank');
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