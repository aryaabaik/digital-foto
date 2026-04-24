/**
 * music.js — Global persistent music player (Playlist)
 * Mendukung beberapa lagu: lagu berikutnya otomatis diputar saat lagu sebelumnya selesai.
 * State (playing, track index, posisi) disimpan di localStorage agar tidak putus saat pindah halaman.
 */
(function () {

    // ── Playlist ──────────────────────────────────────────────────────
    const PLAYLIST = [
        {
            src:   "sound/I%E2%80%99d%20like%20to%20watch%20you%20sleeping%20-%20Sal%20Priadi%20_%20Lirik%20Lagu.mp3",
            title: "Sal Priadi — I’d like to watch you sleeping",
            lyrics: `I'd like to watch you sleeping
Lebih sering menganga
Aku lihat ada tempat longgar di sana
Aku ingin tinggal di belakang gigimu

Aku banyak takutnya
Misalnya kehilangan dirimu sekali lagi
Dan patah hati perasaan sendiri
Bukan hal yang aku suka
Hal yang paling kusuka didekatmu

Kau adalah orang favoritku nomor satu
Nomor dua, tiga, empat, lima, enam
Isinya namamu huruf besar semua
Dan hitungan ke seribu
Seribu tahun lagi maksudku
Hiduplah terus, ada terus
Seperti tokoh kartun di televisi itu

I'd like to watch you sleeping
Cari cara bagaimana kita bisa menjelajahi alam-alam mimpi
Lalu berdua akhirnya bisa terbang dan bermain-main di awan
Berenang-renang ke dasar samudera biru
Berdua di sana

Tubuh kita menguap menjadi bulir hujan yang diharapkan
Setelah musim kemarau yang sangat panjang
Serupa berkat, deras jatuh
Deras jatuh ke bumi
Menyirami bunga-bunga indah yang mekar
Hiasi hutan-hutan raksasa itu
(I'd like to watch you sleeping)

I'd like to watch you sleeping
Lebih sering menganga
Aku lihat ada tempat longgar di sana
Aku ingin tinggal di belakang gigimu

Satu yang tak bisa lepas, percayalah
Hanya kau yang mampu mencuri hatiku
Aku pun tak mengerti
Satu yang tak bisa lepas, percayalah
Hanya kau yang mampu mencuri hatiku
Aku pun tak mengerti
Satu yang tak bisa lepas
Bawalah kembali jiwa yang luka
Dan perasaan yang lemah ini
Menyentuh sendiriku`
        },
        {
            src:   "sound/Abe%20Parker%20-%20Butterflies%20_%20Lirik%20Terjemahan.mp3",
            title: "Abe Parker — Butterflies",
            lyrics: `How do I tell you I need you?
When you steal the breath in my lungs?
My body shakes 'til the blood in my face
Makes me awkward smile and turn around
How do I tell you I'm falling?
When I'm terrified of the floor?
One look at me and it feels like everything
Is written marker on my face

Mmm
Hoping maybe you could tell me now

[hook]Am I[/hook]
[hook]✨ The only one that's catching butterflies ✨[/hook]
[hook]Am I a moth in your flame[/hook]
[hook]Do you burn the same when I[/hook]
[hook]Look in your eyes[/hook]
[hook]Do you get butterflies?[/hook]

I don't know what I'd do without you
And that's why you're not here in my arms
I'm so scared to lose what we already have
Asking for everything that I want
'Cause maybe I raised all your red flags
And these green lights are just in my head
I swear that there's something we both can't explain
And I'm terrified to lose it

Ooo
Hoping maybe you could tell me now

[hook]Am I[/hook]
[hook]✨ The only one that's catching butterflies ✨[/hook]
[hook]Am I a moth in your flame[/hook]
[hook]Do you burn the same when I[/hook]

Hoping maybe you could tell me now
[hook]Am I[/hook]
[hook]✨ The only one that's catching butterflies ✨[/hook]
[hook]Am I a moth in your flame[/hook]
[hook]Do you burn the same when I[/hook]
[hook]Look in your eyes[/hook]
[hook]Look in my eyes[/hook]
[hook]Do you get butterflies?[/hook]`
        },
        {
            src:   "sound/Sal%20Priadi%20-%20Mesra-mesraannya%20kecil-kecilan%20dulu%20_%20Lirik%20Lagu.mp3",
            title: "Sal Priadi — Mesra-mesraannya kecil-kecilan dulu",
            lyrics: `Ba, sementara
Kita mesra-mesraannya
Kecil-kecilan dulu, ya
Tunggu sampai semua mereda

'Kan kukenalkan
Penampilan hujan di tempat lain
Pemandangan bagus di tempat yang jauh
Bukan yang di dekat rumah saja
Kita 'kan tangkap
Banyak kejadian yang menarik
Koleksi suasana asyik
Perasaan-p'rasaan yang baik
Cintanya besar-besaran
Meski mesranya kecil-kecilan

Ba, sementara
Kita mesra-mesraannya
Kecil-kecilan dulu, ya
Tunggu sampai semua mereda

Baju pergimu
Jangan kekecilan dulu
Kalau iya, nanti beli baru
Kar'na engkau tiba-tiba besar

Kita 'kan tangkap
Kejadian yang menarik
Koleksi suasana asyik
Perasaan-p'rasaan yang baik
Cintanya besar-besaran
Meski mesranya kecil-kecilan`
        },
        {
            src:   "sound/NUCA%20-%20MASA%20INI%2C%20NANTI%2C%20DAN%20MASA%20INDAH%20LAINNYA%20_%20LIRIK%20LAGU.mp3",
            title: "NUCA — Masa Ini, Nanti, dan Masa Indah Lainnya",
            lyrics: `Hai kau datang di saat yang tepat
Kau ajarkan apa itu cinta
Lewat mata kau berbicara

Hai mungkin aku tlah menanti lama
Tapi ternyata tak sia-sia
Tuhan berikan malaikat surga

Izinkan ku berjalan bersamamu
Mimpi yang tlah lama ku dambakan
Kini semua terasa indah
Hitam putih pun mulai berwarna

Kau adalah semua jawaban
Dari doa yang ku panjatkan
Dengan hadirmu di hidupku
Sudah ku merasa cukup

Hati ini tlah menetapkan
Engkau sosok yang kan temani
Di masa ini masa nanti dan masa indah lainnya

Semua kata yang terucap
Semua tertuju padamu
Semua arah yang ku tempuh
Semua tertuju padamu

Kau adalah semua jawaban
Dari doa yang ku panjatkan
Dengan hadirmu di hidupku
Sudah ku merasa cukup

Hati ini tlah menetapkan
Engkau sosok yang kan temani
Di masa ini masa nanti dan masa indah lainnya
Di masa ini masa nanti dan masa indah lainnya`
        },
        {
            src:   "sound/Bergema%20Sampai%20Selamanya%20-%20Nadhif%20Basalamah%20_%20Lirik%20Lagu.mp3",
            title: "Nadhif Basalamah — Bergema Sampai Selamanya",
            lyrics: `Aku ingin jadi teman nyamanmu
Tempat kauhilangkan keluh kesahmu
Kita berbincang tak karuan tanpa beban
Dan juga khayalan tentang masa depan

Ku tak ingin cepat berlalu
Waktu yang kupunya denganmu
Kita berdansa dan tertawa, gandeng tangan
Semoga bergema sampai selamanya

Dunia pasti ada akhirnya
Bintang-bintang pun ada umurnya
Maka tenang saja kita di sini berdua
Nikmati sementara yang ada

Bersandar padaku taruh di bahuku
Relakan semua bebas semaumu
Percayalah ini sayang terlewatkan
Kusampaikan dalam nyanyian bergema sampai selamanya

Dunia pasti ada akhirnya
Bintang-bintang pun ada umurnya
Maka tenang saja kita di sini berdua
Nikmati sementara yang ada

Nikmati sementara yang ada
Nikmati sementara yang ada
Nikmati sementara yang ada`
        }
    ];

    const LS_PLAYING = 'df_musikPlaying';
    const LS_TIME    = 'df_musikTime';
    const LS_TRACK   = 'df_musikTrack';

    // ── 1. Inject CSS ──────────────────────────────────────────────────
    const style = document.createElement('style');
    style.textContent = `
        #df-music-wrap {
            position: fixed;
            top: 18px;
            right: 20px;
            z-index: 9999;
            display: flex;
            align-items: center;
            gap: 5px;
        }

        /* Tooltip track title — slides in from right on hover */
        #df-track-title {
            font-family: 'Courier Prime', 'Courier New', monospace;
            font-size: 10px;
            letter-spacing: 1.5px;
            color: rgba(196,180,158,0.6);
            max-width: 0;
            overflow: hidden;
            white-space: nowrap;
            transition: max-width 0.5s ease, opacity 0.5s ease;
            opacity: 0;
            pointer-events: none;
            text-align: right;
        }
        #df-music-wrap:hover #df-track-title {
            max-width: 240px;
            opacity: 1;
        }

        /* Shared button style */
        .df-music-btn-base {
            border-radius: 50%;
            background: linear-gradient(145deg, #3a322d, #29221e);
            border: 1px solid #4e4540;
            box-shadow:
                inset 1px 1px 3px rgba(255,255,255,0.07),
                inset -1px -1px 3px rgba(0,0,0,0.5),
                0 4px 10px rgba(0,0,0,0.6);
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: box-shadow 0.3s, background 0.3s;
            outline: none;
            position: relative;
            flex-shrink: 0;
        }
        .df-music-btn-base:hover {
            background: linear-gradient(145deg, #4a3f38, #352d27);
        }

        /* Prev & Next — kecil */
        #df-prev-btn, #df-skip-btn {
            width: 30px;
            height: 30px;
        }
        #df-prev-btn svg, #df-skip-btn svg { width: 13px; height: 13px; }

        /* Play — ukuran normal */
        #df-music-btn {
            width: 38px;
            height: 38px;
        }
        #df-music-btn svg { width: 17px; height: 17px; }

        /* Play button glow when playing */
        #df-music-btn.playing {
            box-shadow:
                inset 1px 1px 3px rgba(255,255,255,0.07),
                inset -1px -1px 3px rgba(0,0,0,0.5),
                0 0 16px rgba(196, 180, 158, 0.45),
                0 4px 10px rgba(0,0,0,0.6);
        }

        /* Pulse ring on playing button */
        @keyframes df-pulse-ring {
            0%   { transform: scale(1);    opacity: 0.5; }
            100% { transform: scale(1.75); opacity: 0;   }
        }
        #df-music-btn.playing::after {
            content: '';
            position: absolute;
            width: 38px;
            height: 38px;
            border-radius: 50%;
            border: 1px solid rgba(196,180,158,0.45);
            animation: df-pulse-ring 1.8s ease-out infinite;
            pointer-events: none;
        }

        /* Track change toast */
        @keyframes df-track-flash {
            0%   { opacity: 0;   transform: translateX(-50%) translateY(8px); }
            15%  { opacity: 1;   transform: translateX(-50%) translateY(0);   }
            80%  { opacity: 1;   transform: translateX(-50%) translateY(0);   }
            100% { opacity: 0;   transform: translateX(-50%) translateY(4px); }
        }
        #df-track-toast {
            position: fixed;
            bottom: 28px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 9998;
            font-family: 'Courier Prime', 'Courier New', monospace;
            font-size: 11px;
            letter-spacing: 2.5px;
            color: rgba(220,208,186,0.80);
            background: rgba(20,15,12,0.78);
            border: 1px solid rgba(196,180,158,0.15);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            padding: 9px 22px;
            border-radius: 30px;
            pointer-events: none;
            opacity: 0;
            white-space: nowrap;
        }
        #df-track-toast.show {
            animation: df-track-flash 3.2s ease forwards;
        }

        /* Lyrics Button */
        #df-lyrics-btn {
            width: 30px;
            height: 30px;
            margin-right: 4px;
        }
        #df-lyrics-btn svg { width: 14px; height: 14px; fill: #928373; }

        /* ── Lyrics Modal — Cinematic Ambient UI ── */
        @keyframes df-modal-backdrop-in {
            from { opacity: 0; backdrop-filter: blur(0px); }
            to   { opacity: 1; backdrop-filter: blur(14px); }
        }
        @keyframes df-content-rise {
            from { opacity: 0; transform: scale(0.88) translateY(24px); }
            to   { opacity: 1; transform: scale(1)   translateY(0);     }
        }
        @keyframes df-title-slide {
            from { opacity: 0; transform: translateY(-12px); }
            to   { opacity: 1; transform: translateY(0);     }
        }
        @keyframes df-lyric-line-in {
            from { opacity: 0; transform: translateY(10px); }
            to   { opacity: 1; transform: translateY(0);    }
        }
        @keyframes df-sparkle-float {
            0%   { transform: translateY(0)   rotate(0deg)   scale(1);    opacity: 0.7; }
            50%  { transform: translateY(-18px) rotate(180deg) scale(1.2); opacity: 1;   }
            100% { transform: translateY(-38px) rotate(360deg) scale(0.6); opacity: 0;   }
        }
        @keyframes df-sparkle-burst {
            0%   { transform: translateY(0)   scale(1);   opacity: 1;   }
            60%  { transform: translateY(-28px) scale(1.6); opacity: 0.9; }
            100% { transform: translateY(-55px) scale(0.4); opacity: 0;   }
        }
        @keyframes df-glow-pulse {
            0%, 100% { box-shadow: 0 0 30px rgba(196,158,90,0.08),  0 25px 60px rgba(0,0,0,0.85); }
            50%       { box-shadow: 0 0 55px rgba(196,158,90,0.18),  0 25px 60px rgba(0,0,0,0.85); }
        }
        @keyframes df-hook-glow {
            0%, 100% { text-shadow: 0 0 8px rgba(220,195,130,0.3); }
            50%       { text-shadow: 0 0 22px rgba(220,195,130,0.85); }
        }
        @keyframes df-close-idle-pulse {
            0%, 100% { box-shadow: none; }
            50%       { box-shadow: 0 0 8px rgba(196,168,118,0.2); }
        }
        @keyframes df-hint-arrow-pulse {
            0%, 100% { opacity: 0.18; transform: translateY(-50%) scale(1); }
            50%       { opacity: 0.38; transform: translateY(-50%) scale(1.12); }
        }

        #df-lyrics-modal {
            position: fixed;
            inset: 0;
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.5s ease;
        }
        #df-lyrics-modal.active {
            opacity: 1;
            pointer-events: all;
        }
        #df-lyrics-backdrop {
            position: absolute;
            inset: 0;
            background: rgba(6,4,3,0.88);
            backdrop-filter: blur(0px);
            -webkit-backdrop-filter: blur(0px);
            transition: backdrop-filter 0.6s ease;
        }
        #df-lyrics-modal.active #df-lyrics-backdrop {
            backdrop-filter: blur(14px);
            -webkit-backdrop-filter: blur(14px);
            animation: df-modal-backdrop-in 0.6s ease forwards;
        }
        /* Vignette overlay inside backdrop */
        #df-lyrics-backdrop::after {
            content: '';
            position: absolute;
            inset: 0;
            background: radial-gradient(ellipse at 50% 40%, transparent 30%, rgba(2,1,1,0.65) 100%);
            pointer-events: none;
        }

        /* Sparkle container */
        #df-sparkle-layer {
            position: absolute;
            inset: 0;
            pointer-events: none;
            overflow: hidden;
            z-index: 0;
        }
        .df-sparkle {
            position: absolute;
            border-radius: 50%;
            pointer-events: none;
            animation: df-sparkle-float linear infinite;
        }

        #df-lyrics-content {
            position: relative;
            z-index: 1;
            width: 90%;
            max-width: 460px;
            max-height: 72vh;
            background: linear-gradient(160deg, #221d1a 0%, #16110f 50%, #0e0b09 100%);
            border: 1px solid rgba(196,180,158,0.18);
            border-radius: 24px;
            padding: 44px 34px 36px;
            box-shadow: 0 25px 60px rgba(0,0,0,0.85), inset 0 1px 0 rgba(255,255,255,0.04);
            overflow-y: auto;
            opacity: 0;
            transform: scale(0.88) translateY(24px);
            transition: none;
            animation: df-glow-pulse 4s ease-in-out infinite;
            /* Custom scrollbar — webkit */
            scrollbar-width: thin;
            scrollbar-color: rgba(196,168,118,0.25) transparent;
        }
        #df-lyrics-content::-webkit-scrollbar { width: 4px; }
        #df-lyrics-content::-webkit-scrollbar-track { background: transparent; }
        #df-lyrics-content::-webkit-scrollbar-thumb {
            background: rgba(196,168,118,0.25);
            border-radius: 4px;
        }
        #df-lyrics-content::-webkit-scrollbar-thumb:hover {
            background: rgba(196,168,118,0.5);
        }
        #df-lyrics-modal.active #df-lyrics-content {
            animation: df-content-rise 0.55s cubic-bezier(0.16,1,0.3,1) 0.1s forwards,
                       df-glow-pulse 4s ease-in-out 0.7s infinite;
        }
        /* Top gradient fade inside content */
        #df-lyrics-content::before {
            content: '';
            position: sticky;
            display: block;
            top: 0;
            height: 30px;
            margin: -44px -34px 10px;
            background: linear-gradient(to bottom, #16110f, transparent);
            pointer-events: none;
            z-index: 2;
        }

        /* Navigation hint arrows — edge of card */
        #df-lyrics-content::after {
            content: '';
            display: none; /* replaced by JS-injected arrows */
        }
        .df-nav-hint {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 28px;
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            pointer-events: none;
            z-index: 2;
            animation: df-hint-arrow-pulse 2.4s ease-in-out infinite;
        }
        .df-nav-hint.left  { left: -38px; }
        .df-nav-hint.right { right: -38px; }
        .df-nav-hint svg { width: 18px; height: 18px; fill: rgba(196,168,118,0.5); }

        #df-lyrics-title {
            font-family: 'Dancing Script', cursive;
            font-size: 28px;
            color: #dcd0ba;
            margin-bottom: 6px;
            text-align: center;
            padding-bottom: 14px;
            border-bottom: 1px solid rgba(196,180,158,0.12);
            opacity: 0;
            letter-spacing: 0.5px;
        }
        #df-lyrics-title-icon {
            display: block;
            font-size: 16px;
            margin-bottom: 4px;
            opacity: 0.7;
            letter-spacing: 6px;
        }
        #df-lyrics-modal.active #df-lyrics-title {
            animation: df-title-slide 0.5s ease 0.4s forwards;
        }
        #df-lyrics-subtitle {
            font-family: 'Courier Prime', monospace;
            font-size: 10px;
            letter-spacing: 3px;
            text-transform: uppercase;
            color: rgba(196,168,118,0.4);
            text-align: center;
            margin-bottom: 22px;
            opacity: 0;
        }
        #df-lyrics-modal.active #df-lyrics-subtitle {
            animation: df-title-slide 0.5s ease 0.55s forwards;
        }

        /* Lyric lines */
        .df-lyric-line {
            display: block;
            opacity: 0;
            color: rgba(200,185,160,0.5); /* dim by default — spotlight effect */
            animation: df-lyric-line-in 0.45s ease forwards;
            transition: color 0.4s ease, text-shadow 0.4s ease;
        }
        /* Regular lines when revealed: slightly brighter but still subdued */
        .df-lyric-line.revealed {
            color: rgba(210,195,168,0.65);
        }
        /* Hook lines: bright spotlight */
        .df-lyric-line.hook {
            color: #eeddb8;
            font-weight: bold;
            font-size: 15.5px;
            letter-spacing: 0.4px;
            animation: df-lyric-line-in 0.45s ease forwards,
                       df-hook-glow 2.5s ease-in-out infinite;
        }
        .df-lyric-line.hook.revealed { color: #f0e0b8; }
        .df-lyric-line.empty {
            height: 14px;
            display: block;
        }

        /* Close button — upgraded with idle pulse */
        #df-lyrics-close {
            position: absolute;
            top: 14px;
            right: 14px;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background: rgba(196,168,118,0.08);
            border: 1px solid rgba(196,168,118,0.15);
            color: rgba(196,180,158,0.5);
            font-size: 18px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            line-height: 1;
            transition: background 0.25s, color 0.25s, box-shadow 0.25s, transform 0.2s;
            animation: df-close-idle-pulse 3s ease-in-out infinite;
        }
        #df-lyrics-close:hover {
            animation: none;
            background: rgba(196,168,118,0.2);
            color: #ffe8b0;
            box-shadow: 0 0 14px rgba(196,168,118,0.5);
            transform: scale(1.12) rotate(90deg);
        }

        /* Track counter badge — bolder & more readable */
        #df-lyrics-track-counter {
            font-family: 'Courier Prime', monospace;
            font-size: 11px;
            letter-spacing: 3px;
            text-transform: uppercase;
            color: rgba(220,190,120,0.7);
            text-align: center;
            margin-bottom: 4px;
            opacity: 0;
            background: rgba(196,168,118,0.06);
            border: 1px solid rgba(196,168,118,0.12);
            border-radius: 20px;
            display: inline-block;
            padding: 3px 14px;
            width: auto;
            left: 50%;
        }
        /* Center the badge */
        #df-lyrics-track-counter-wrap {
            text-align: center;
            margin-bottom: 6px;
        }
        #df-lyrics-modal.active #df-lyrics-track-counter {
            animation: df-title-slide 0.5s ease 0.25s forwards;
        }

        /* In-modal nav bar */
        #df-modal-nav {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 18px;
            padding-top: 14px;
            border-top: 1px solid rgba(196,180,158,0.08);
            gap: 10px;
        }
        .df-modal-nav-btn {
            width: 34px;
            height: 34px;
            border-radius: 50%;
            background: rgba(196,168,118,0.07);
            border: 1px solid rgba(196,168,118,0.15);
            color: rgba(196,180,158,0.55);
            font-size: 16px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            transition: background 0.25s, color 0.25s, box-shadow 0.25s, transform 0.15s;
        }
        .df-modal-nav-btn:hover {
            background: rgba(196,168,118,0.18);
            color: #ffe8b0;
            box-shadow: 0 0 10px rgba(196,168,118,0.35);
            transform: scale(1.1);
        }
        .df-modal-nav-btn:active { transform: scale(0.95); }
        .df-modal-nav-btn svg { width: 14px; height: 14px; pointer-events: none; }

        /* Playlist dot indicators */
        #df-modal-dots {
            display: flex;
            gap: 7px;
            align-items: center;
            justify-content: center;
            flex: 1;
        }
        .df-modal-dot {
            width: 5px;
            height: 5px;
            border-radius: 50%;
            background: rgba(196,168,118,0.25);
            cursor: pointer;
            transition: background 0.3s, transform 0.3s, box-shadow 0.3s;
            flex-shrink: 0;
        }
        .df-modal-dot.active {
            background: rgba(220,200,160,0.85);
            transform: scale(1.55);
            box-shadow: 0 0 7px rgba(220,195,130,0.6);
        }
        .df-modal-dot:hover:not(.active) {
            background: rgba(196,168,118,0.5);
            transform: scale(1.2);
        }

        /* Lyric body — blur+fade transition */
        #df-lyrics-body {
            font-family: 'Courier Prime', monospace;
            font-size: 14px;
            line-height: 2.0;
            text-align: center;
            white-space: pre-line;
            transition: opacity 0.38s ease, filter 0.38s ease;
        }
        #df-lyrics-body.fading {
            opacity: 0 !important;
            filter: blur(6px) !important;
        }

        /* ── Mobile Responsive Music Player ── */
        @media (max-width: 768px) {
            #df-music-wrap { top: 16px; right: 16px; gap: 4px; }
            #df-lyrics-btn { width: 28px; height: 28px; margin-right: 2px; }
            #df-lyrics-btn svg { width: 12px; height: 12px; }
            #df-prev-btn, #df-skip-btn { width: 28px; height: 28px; }
            #df-prev-btn svg, #df-skip-btn svg { width: 11px; height: 11px; }
            #df-music-btn { width: 34px; height: 34px; }
            #df-music-btn svg { width: 15px; height: 15px; }
            #df-music-btn.playing::after { width: 34px; height: 34px; }
            #df-lyrics-content { padding: 34px 24px 26px; width: 92%; }
        }
    `;
    document.head.appendChild(style);

    // ── 2. Inject Audio element ────────────────────────────────────────
    const audio = document.createElement('audio');
    audio.id      = 'df-bg-music';
    audio.preload = 'auto';
    document.body.appendChild(audio);

    // ── 3. Inject UI wrapper ───────────────────────────────────────────
    const wrap = document.createElement('div');
    wrap.id = 'df-music-wrap';

    // Track title label (hidden, shows on hover)
    const titleEl = document.createElement('span');
    titleEl.id = 'df-track-title';
    wrap.appendChild(titleEl);

    // Lyrics button
    const lyricsBtn = document.createElement('button');
    lyricsBtn.id = 'df-lyrics-btn';
    lyricsBtn.className = 'df-music-btn-base';
    lyricsBtn.setAttribute('aria-label', 'Lihat lirik');
    lyricsBtn.title = 'Lihat lirik';
    lyricsBtn.innerHTML = `
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2M18 20H6V4H13V9H18V20M16 11H8V13H16V11M16 15H8V17H16V15Z"/>
        </svg>
    `;
    wrap.appendChild(lyricsBtn);

    // Prev button
    const prevBtn = document.createElement('button');
    prevBtn.id = 'df-prev-btn';
    prevBtn.className = 'df-music-btn-base';
    prevBtn.setAttribute('aria-label', 'Lagu sebelumnya');
    prevBtn.title = 'Lagu sebelumnya';
    prevBtn.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="4" width="2.5" height="16" rx="1" fill="#928373"/>
            <polygon points="19,4 9,12 19,20" fill="#928373"/>
        </svg>
    `;
    wrap.appendChild(prevBtn);

    // Skip (next) button
    const skipBtn = document.createElement('button');
    skipBtn.id = 'df-skip-btn';
    skipBtn.className = 'df-music-btn-base';
    skipBtn.setAttribute('aria-label', 'Lagu berikutnya');
    skipBtn.title = 'Lagu berikutnya';
    skipBtn.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="5,4 15,12 5,20" fill="#928373"/>
            <rect x="17" y="4" width="2.5" height="16" rx="1" fill="#928373"/>
        </svg>
    `;
    wrap.appendChild(skipBtn);

    // Play/Pause button — diletakkan di TENGAH antara prev dan next
    const btn = document.createElement('button');
    btn.id = 'df-music-btn';
    btn.className = 'df-music-btn-base';
    btn.setAttribute('aria-label', 'Toggle musik');
    btn.title = 'On/Off Musik';
    btn.innerHTML = `
        <!-- Play icon -->
        <svg id="df-icon-on" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="6,4 20,12 6,20" fill="#c4b49e"/>
        </svg>
        <!-- Pause icon -->
        <svg id="df-icon-off" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="display:none">
            <rect x="5"  y="4" width="4" height="16" rx="1.5" fill="#c4b49e"/>
            <rect x="15" y="4" width="4" height="16" rx="1.5" fill="#c4b49e"/>
        </svg>
    `;
    // Susun urutan: prev | play | next
    wrap.insertBefore(btn, skipBtn);

    document.body.appendChild(wrap);

    // Toast notification
    const toast = document.createElement('div');
    toast.id = 'df-track-toast';
    document.body.appendChild(toast);

    // Lyrics Modal
    const modal = document.createElement('div');
    modal.id = 'df-lyrics-modal';
    modal.innerHTML = `
        <div id="df-lyrics-backdrop"></div>
        <div id="df-sparkle-layer"></div>
        <div id="df-lyrics-content">
            <button id="df-lyrics-close" aria-label="Tutup">&times;</button>
            <div id="df-lyrics-track-counter-wrap">
                <span id="df-lyrics-track-counter">Track 1 of 5</span>
            </div>
            <div id="df-lyrics-title">
                <span id="df-lyrics-title-icon">🎵 ♡ 🎵</span>
                <span id="df-lyrics-title-text">Judul Lagu</span>
            </div>
            <div id="df-lyrics-subtitle">now playing</div>
            <div id="df-lyrics-body"></div>
            <div id="df-modal-nav">
                <button class="df-modal-nav-btn" id="df-modal-prev" aria-label="Lagu sebelumnya">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="4" y="4" width="2.5" height="16" rx="1" fill="currentColor"/>
                        <polygon points="19,4 9,12 19,20" fill="currentColor"/>
                    </svg>
                </button>
                <div id="df-modal-dots"></div>
                <button class="df-modal-nav-btn" id="df-modal-next" aria-label="Lagu berikutnya">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <polygon points="5,4 15,12 5,20" fill="currentColor"/>
                        <rect x="17" y="4" width="2.5" height="16" rx="1" fill="currentColor"/>
                    </svg>
                </button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    // ── Inject nav hint arrows on card edges ─────────────────────────
    const contentCard = modal.querySelector('#df-lyrics-content');
    const hintLeft  = document.createElement('div');
    const hintRight = document.createElement('div');
    hintLeft.className  = 'df-nav-hint left';
    hintRight.className = 'df-nav-hint right';
    hintLeft.innerHTML  = `<svg viewBox="0 0 24 24"><polygon points="15,4 5,12 15,20"/></svg>`;
    hintRight.innerHTML = `<svg viewBox="0 0 24 24"><polygon points="9,4 19,12 9,20"/></svg>`;
    contentCard.appendChild(hintLeft);
    contentCard.appendChild(hintRight);
    // Hide hints when only 1 track
    if (PLAYLIST.length <= 1) {
        hintLeft.style.display = hintRight.style.display = 'none';
    }

    // ── Sparkle particles ──────────────────────────────────────────────
    const sparkleLayer = modal.querySelector('#df-sparkle-layer');
    const SPARKLE_COLORS = [
        'rgba(255,220,140,0.8)', 'rgba(220,200,160,0.7)',
        'rgba(255,240,180,0.9)', 'rgba(196,168,118,0.6)',
        'rgba(255,255,200,0.5)'
    ];
    function createSparkles(count) {
        sparkleLayer.innerHTML = '';
        for (let i = 0; i < count; i++) {
            const s = document.createElement('div');
            s.className = 'df-sparkle';
            const size = Math.random() * 4 + 2;
            s.style.cssText = [
                `width:${size}px`,
                `height:${size}px`,
                `left:${Math.random() * 100}%`,
                `top:${Math.random() * 100 + 20}%`,
                `background:${SPARKLE_COLORS[Math.floor(Math.random()*SPARKLE_COLORS.length)]}`,
                `animation-duration:${(Math.random()*3+2).toFixed(2)}s`,
                `animation-delay:${(Math.random()*4).toFixed(2)}s`,
                `opacity:0`
            ].join(';');
            sparkleLayer.appendChild(s);
        }
    }
    createSparkles(28);

    // ── Render lyrics with line animation + revealed + hook burst ────────
    function renderLyrics(raw) {
        const body = modal.querySelector('#df-lyrics-body');
        body.innerHTML = '';
        const lines = raw.split('\n');
        let delay = 0.55;
        lines.forEach(line => {
            const trimmed = line.trim();
            const span = document.createElement('span');
            const hookMatch = trimmed.match(/^\[hook\](.+?)\[\/hook\]$/);
            if (!trimmed) {
                span.className = 'df-lyric-line empty';
                span.style.animationDelay = delay + 's';
            } else if (hookMatch) {
                span.className = 'df-lyric-line hook';
                span.textContent = hookMatch[1];
                span.style.animationDelay = delay + 's';
                // Add revealed class after animation + fire sparkle burst
                const d = delay;
                setTimeout(() => {
                    span.classList.add('revealed');
                    fireHookSparkles(span);
                }, (d + 0.45) * 1000);
                delay += 0.04;
            } else {
                span.className = 'df-lyric-line';
                span.textContent = trimmed;
                span.style.animationDelay = delay + 's';
                const d = delay;
                setTimeout(() => span.classList.add('revealed'), (d + 0.45) * 1000);
                delay += 0.035;
            }
            body.appendChild(span);
        });
    }

    // ── Hook sparkle burst ──────────────────────────────────────────
    function fireHookSparkles(hookEl) {
        const rect = hookEl.getBoundingClientRect();
        const modalRect = sparkleLayer.getBoundingClientRect();
        const centerX = rect.left - modalRect.left + rect.width / 2;
        const centerY = rect.top  - modalRect.top;
        const BURST_COLORS = [
            'rgba(255,235,150,0.95)', 'rgba(255,210,100,0.9)',
            'rgba(220,200,140,0.8)', 'rgba(255,255,180,1)'
        ];
        for (let i = 0; i < 7; i++) {
            const s = document.createElement('div');
            s.className = 'df-sparkle';
            const size = Math.random() * 5 + 3;
            const spread = (Math.random() - 0.5) * rect.width * 0.8;
            s.style.cssText = [
                `width:${size}px`,
                `height:${size}px`,
                `left:${centerX + spread}px`,
                `top:${centerY}px`,
                `background:${BURST_COLORS[Math.floor(Math.random()*BURST_COLORS.length)]}`,
                `animation:df-sparkle-burst 0.9s ease-out forwards`,
                `animation-delay:${(Math.random()*0.15).toFixed(2)}s`,
                `position:absolute`,
                `border-radius:50%`,
                `pointer-events:none`
            ].join(';');
            sparkleLayer.appendChild(s);
            // Remove after animation
            setTimeout(() => s.remove(), 1200);
        }
    }

    const lyricTitle   = modal.querySelector('#df-lyrics-title-text');
    const lyricCounter = modal.querySelector('#df-lyrics-track-counter');
    const lyricBody    = modal.querySelector('#df-lyrics-body');
    const lyricClose   = modal.querySelector('#df-lyrics-close');
    const lyricBack    = modal.querySelector('#df-lyrics-backdrop');
    const modalDots    = modal.querySelector('#df-modal-dots');
    const modalPrev    = modal.querySelector('#df-modal-prev');
    const modalNext    = modal.querySelector('#df-modal-next');

    // ── Build playlist dots ───────────────────────────────────────────
    function buildModalDots() {
        modalDots.innerHTML = '';
        PLAYLIST.forEach((_, i) => {
            const d = document.createElement('span');
            d.className = 'df-modal-dot' + (i === currentTrack ? ' active' : '');
            d.dataset.idx = i;
            d.title = PLAYLIST[i].title;
            d.addEventListener('click', () => switchModalTrack(i));
            modalDots.appendChild(d);
        });
    }
    function updateModalDots() {
        modalDots.querySelectorAll('.df-modal-dot').forEach((d, i) => {
            d.classList.toggle('active', i === currentTrack);
        });
    }

    // ── Switch track from inside modal (with fade) ────────────────────
    function switchModalTrack(idx) {
        if (idx === currentTrack) return;
        const arrow = idx > currentTrack ? '▶' : '◀'; // capture BEFORE loadTrack changes currentTrack
        // Fade out lyrics
        lyricBody.classList.add('fading');
        setTimeout(() => {
            const wasPlaying = isPlaying;
            loadTrack(idx, 0);
            if (!wasPlaying) updateUI(false);
            // currentTrack is now updated by loadTrack
            showToast(arrow + '  ' + PLAYLIST[currentTrack].title);
            // Update modal UI then fade back in
            refreshModalContent();
            lyricBody.classList.remove('fading');
        }, 350);
    }

    // ── Refresh all modal UI fields ───────────────────────────────────
    function refreshModalContent() {
        const track = PLAYLIST[currentTrack];
        lyricTitle.textContent   = track.title;
        lyricCounter.textContent = `Track ${currentTrack + 1} of ${PLAYLIST.length}`;
        renderLyrics(track.lyrics);
        const content = modal.querySelector('#df-lyrics-content');
        content.scrollTop = 0;
        updateModalDots();
    }

    // ── 4. State ───────────────────────────────────────────────────────
    const iconOn  = btn.querySelector('#df-icon-on');
    const iconOff = btn.querySelector('#df-icon-off');
    let isPlaying    = false;
    let currentTrack = 0;

    // ── 5. Load track ──────────────────────────────────────────────────
    function loadTrack(idx, startTime) {
        currentTrack = ((idx % PLAYLIST.length) + PLAYLIST.length) % PLAYLIST.length;
        const track  = PLAYLIST[currentTrack];

        audio.src = track.src;
        audio.load();
        titleEl.textContent = track.title;

        audio.addEventListener('canplay', () => {
            if (startTime > 0) audio.currentTime = startTime;
            if (isPlaying) {
                audio.play().catch(() => {
                    isPlaying = false;
                    updateUI(false);
                });
            }
        }, { once: true });
    }

    // ── 6. Show toast ──────────────────────────────────────────────────
    function showToast(text) {
        toast.textContent = text;
        toast.classList.remove('show');
        // Force reflow to restart animation
        void toast.offsetWidth;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3100);
    }

    // ── 7. Update UI ───────────────────────────────────────────────────
    function updateUI(playing) {
        if (playing) {
            btn.classList.add('playing');
            iconOn.style.display  = '';
            iconOff.style.display = 'none';
        } else {
            btn.classList.remove('playing');
            iconOn.style.display  = 'none';
            iconOff.style.display = '';
        }
    }

    // ── 8. Play / Pause ────────────────────────────────────────────────
    function setPlaying(play) {
        isPlaying = play;
        updateUI(play);
        if (play) {
            audio.play().catch(() => {
                isPlaying = false;
                updateUI(false);
            });
        } else {
            audio.pause();
        }
    }

    // ── 9. Skip to next / prev track ──────────────────────────────────
    function skipTrack(dir = 1) {
        const wasPlaying = isPlaying;
        const nextIdx    = ((currentTrack + dir) % PLAYLIST.length + PLAYLIST.length) % PLAYLIST.length;
        isPlaying = wasPlaying;
        loadTrack(nextIdx, 0);
        const arrow = dir > 0 ? '▶' : '◀';
        showToast(arrow + '  ' + PLAYLIST[nextIdx].title);
        if (!wasPlaying) updateUI(false);
    }

    // ── 10. Auto-advance when track ends ──────────────────────────────
    audio.addEventListener('ended', () => {
        const nextIdx = (currentTrack + 1) % PLAYLIST.length;
        isPlaying = true; // next track should play
        loadTrack(nextIdx, 0);
        showToast('▶  ' + PLAYLIST[nextIdx].title);
    });

    // ── 11. Restore state dari localStorage ───────────────────────────
    const savedPlaying = localStorage.getItem(LS_PLAYING) === 'true';
    const savedTime    = parseFloat(localStorage.getItem(LS_TIME) || '0');
    const savedTrack   = parseInt(localStorage.getItem(LS_TRACK)  || '0', 10);

    isPlaying = savedPlaying;
    updateUI(savedPlaying);
    // Pastikan judul lagu selalu tersinkron dari awal
    titleEl.textContent = PLAYLIST[Math.max(0, Math.min(savedTrack, PLAYLIST.length - 1))].title;
    loadTrack(savedTrack, savedTime);

    // ── 12. Simpan state sebelum pindah halaman ────────────────────────
    function saveState() {
        localStorage.setItem(LS_PLAYING, isPlaying ? 'true' : 'false');
        localStorage.setItem(LS_TIME,    audio.currentTime);
        localStorage.setItem(LS_TRACK,   currentTrack);
    }
    window.addEventListener('pagehide',     saveState);
    window.addEventListener('beforeunload', saveState);

    // ── 13. Button handlers ────────────────────────────────────────────
    btn.addEventListener('click',       () => setPlaying(!isPlaying));
    skipBtn.addEventListener('click',   () => skipTrack(+1));
    prevBtn.addEventListener('click',   () => skipTrack(-1));
    buildModalDots();

    function openLyricsModal() {
        refreshModalContent();
        modal.classList.add('active');
    }
    function closeLyricsModal() {
        modal.classList.remove('active');
    }
    lyricsBtn.addEventListener('click', openLyricsModal);
    lyricClose.addEventListener('click', closeLyricsModal);
    lyricBack.addEventListener('click',  closeLyricsModal);

    // In-modal prev/next
    modalPrev.addEventListener('click', e => {
        e.stopPropagation();
        const prevIdx = ((currentTrack - 1) + PLAYLIST.length) % PLAYLIST.length;
        switchModalTrack(prevIdx);
    });
    modalNext.addEventListener('click', e => {
        e.stopPropagation();
        const nextIdx = (currentTrack + 1) % PLAYLIST.length;
        switchModalTrack(nextIdx);
    });

    // Sync modal state when track changes via external buttons (while modal is open)
    audio.addEventListener('ended', () => {
        if (modal.classList.contains('active')) {
            setTimeout(() => refreshModalContent(), 50);
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && modal.classList.contains('active')) closeLyricsModal();
    });

})();
