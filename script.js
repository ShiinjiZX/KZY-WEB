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
        if (!audio) {
            console.error("Elemen audio tidak ditemukan!");
            return;
        }
        audio.addEventListener('ended', playNextSong);
    }

    playNextSong();

    // Tampilkan tombol dan link
    const buttonsContainer = document.getElementById('buttons-container');
    buttonsContainer.style.display = 'block';

function playNextSong() {
    const randomIndex = Math.floor(Math.random() * musicUrls.length);
    const randomMusicUrl = musicUrls[randomIndex];
    audio.src = randomMusicUrl;
    audio.play();
}

   const buttonsData = {
        "buttons": [
            {
                "title": "WhatsApp Bot",
                "link": "https://wa.me/6281221380234",
                "icon": "fab fa-whatsapp"
            },
            {
                "title": "Youtube",
                "link": "https://youtube.com/@IkyyTzy_",
                "icon": "fab fa-youtube"
            },
            {
                "title": "Instagram",
                "link": "https://instagram.com/kzy.zx",
                "icon": "fab fa-instagram"
            },
            {
                "title": "Tiktok",
                "link": "https://tiktok.com/@kyybtz",
                "icon": "fab fa-tiktok"
            },
            {
                "title": "X",
                "link": "https://x.com/ShiinKZY",
                "icon": "fab fa-twitter"
            }
        ]
    };

    buttonsContainer.innerHTML = ''; // Clear previous buttons

buttonsData.buttons.forEach(button => {
    var btn = document.createElement('a');
    btn.setAttribute('href', button.link);
    btn.setAttribute('class', 'btn');
    btn.setAttribute('target', '_blank');

    var icon = document.createElement('i');
    icon.setAttribute('class', button.icon);
    btn.appendChild(icon);

    var textSpan = document.createElement('span');
    textSpan.textContent = button.title;
    btn.appendChild(textSpan);

    buttonsContainer.appendChild(btn);
});

    // Sembunyikan tombol "Lihat Link"
    document.getElementById('playButton').style.display = 'none';
}

// Event listener untuk tombol Follow
document.getElementById('followButton').addEventListener('click', function() {
    window.open('https://github.com/ShiinjiZX', '_blank');
});

// Event listener untuk tombol Message
document.getElementById('messageButton').addEventListener('click', function() {
    window.open('https://wa.me/6281248845231', '_blank');
});

// Event listener untuk tombol Lihat Link
document.getElementById('playButton').addEventListener('click', playAudio);

document.getElementById('thanksButton').addEventListener('click', function() {
    var thanksBorder = document.getElementById('thanksBorder');
    if (thanksBorder.style.display === 'none' || thanksBorder.style.display === '') {
        thanksBorder.style.display = 'block';
    } else {
        thanksBorder.style.display = 'none';
    }
});

document.addEventListener("DOMContentLoaded", async function () {
    const visitorCounter = document.getElementById("visitor-counter");
    const dateElement = document.getElementById("date");
    const timeElement = document.getElementById("time");
    const ipElement = document.getElementById("ip");

    if (!visitorCounter || !dateElement || !timeElement || !ipElement) {
        console.error("Satu atau lebih elemen tidak ditemukan!");
        return;
    }

    // Update Date and Time
    function updateDateTime() {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        dateElement.textContent = now.toLocaleDateString('id-ID', options);

        const timeWIB = now.toLocaleTimeString('id-ID', { timeZone: 'Asia/Jakarta' });
        const timeWITA = now.toLocaleTimeString('id-ID', { timeZone: 'Asia/Makassar' });
        const timeWIT = now.toLocaleTimeString('id-ID', { timeZone: 'Asia/Jayapura' });
        timeElement.innerHTML = `WIB: ${timeWIB}<br>WITA: ${timeWITA}<br>WIT: ${timeWIT}`;
    }
    setInterval(updateDateTime, 1000);
    updateDateTime();

    // Visitor Counter & IP Fetch
    let storedIPs = JSON.parse(localStorage.getItem("visitorIPs")) || [];

    try {
        const response = await fetch("https://api64.ipify.org?format=json", { cache: "no-store" });
        if (!response.ok) throw new Error("Gagal mengambil IP");
        
        const data = await response.json();
        const userIP = data.ip;
        ipElement.textContent = `Your IP: ${userIP}`;

        if (!storedIPs.includes(userIP)) {
            storedIPs.push(userIP);
            localStorage.setItem("visitorIPs", JSON.stringify(storedIPs));
        }

        visitorCounter.textContent = `Visitors: ${storedIPs.length}`;
    } catch (error) {
        console.error("Error fetching IP address:", error);
        visitorCounter.textContent = "Visitors: Unable to fetch data";
        ipElement.textContent = "IP: Error fetching data";
    }
});


// Hapus semua efek cuaca kecuali salju
// Pastikan salju turun selama 3 detik dan muncul setiap 7 detik
document.addEventListener("DOMContentLoaded", function () {
    function createSnowflake() {
        const snowflake = document.createElement("div");
        snowflake.classList.add("snow");
        snowflake.style.left = Math.random() * 100 + "vw";
        snowflake.style.animationDuration = "3s";
        document.body.appendChild(snowflake);

        setTimeout(() => {
            snowflake.remove();
        }, 3000); // Hapus setelah 3 detik
    }

    function startSnowfall() {
        createSnowflake();
        let snowfallInterval = setInterval(createSnowflake, 200);

        setTimeout(() => {
            clearInterval(snowfallInterval);
        }, 3000); // Hentikan efek setelah 3 detik
    }

    setInterval(startSnowfall, 7000); // Jalankan setiap 7 detik
});
