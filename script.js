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
                "link": "https://instagram.com/kyy.zx",
                "icon": "fab fa-instagram"
            },
            {
                "title": "Tiktok",
                "link": "https://tiktok.com/@kyybtz",
                "icon": "fab fa-tiktok"
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
    window.open('https://github.com/IkyySC', '_blank');
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

function updateDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('date').textContent = now.toLocaleDateString('id-ID', options);

    const timeWIB = now.toLocaleTimeString('id-ID', { timeZone: 'Asia/Jakarta' });
    const timeWITA = now.toLocaleTimeString('id-ID', { timeZone: 'Asia/Makassar' });
    const timeWIT = now.toLocaleTimeString('id-ID', { timeZone: 'Asia/Jayapura' });
    document.getElementById('time').innerHTML = `WIB: ${timeWIB}<br>WITA: ${timeWITA}<br>WIT: ${timeWIT}`;
}

function getIPAddress() {
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('ip').textContent = `IP Address: ${data.ip}`;
        })
        .catch(error => {
            console.error('Error fetching IP address:', error);
            document.getElementById('ip').textContent = 'IP Address: Tidak dapat mengambil IP address';
        });
}

function updateVisitors() {
    let visitors = localStorage.getItem('visitors');
    if (visitors) {
        visitors = parseInt(visitors) + 1;
    } else {
        visitors = 1;
    }
    localStorage.setItem('visitors', visitors);
    document.getElementById('visitors').textContent = `Visitors: ${visitors}`;
}

updateDateTime();
setInterval(updateDateTime, 1000);
getIPAddress();
updateVisitors(); // Panggil fungsi updateVisitors saat halaman dimuat

function createSnow() {
    const snow = document.createElement('div');
    snow.classList.add('snow');
    snow.style.left = Math.random() * 100 + '%';
    snow.style.animationDuration = Math.random() * 3 + 2 + 's';
    document.getElementById('weatherEffects').appendChild(snow);
    setTimeout(() => snow.remove(), 5000);
}

function createRain() {
    const rain = document.createElement('div');
    rain.classList.add('rain');
    rain.style.left = Math.random() * 100 + '%';
    rain.style.animationDuration = Math.random() * 1 + 0.5 + 's';
    document.getElementById('weatherEffects').appendChild(rain);
    setTimeout(() => rain.remove(), 1000);
}

function createLightning() {
    const lightning = document.createElement('div');
    lightning.classList.add('lightning');
    document.getElementById('weatherEffects').appendChild(lightning);
    setTimeout(() => lightning.style.opacity = 1, 100);
    setTimeout(() => lightning.style.opacity = 0, 200);
    setTimeout(() => lightning.remove(), 300);
}

function changeWeather() {
    const weatherEffects = document.getElementById('weatherEffects');
    weatherEffects.innerHTML = ''; // Bersihkan efek cuaca sebelumnya

    const weatherType = Math.floor(Math.random() * 3); // 0: salju, 1: hujan, 2: petir

    switch (weatherType) {
        case 0:
            for (let i = 0; i < 50; i++) {
                createSnow();
            }
            break;
        case 1:
            for (let i = 0; i < 100; i++) {
                createRain();
            }
            break;
        case 2:
            createLightning();
            break;
    }
}

setInterval(changeWeather, 6000); // Ganti cuaca setiap 2 menit (120000 ms)
changeWeather(); // Panggil fungsi changeWeather saat halaman dimuat