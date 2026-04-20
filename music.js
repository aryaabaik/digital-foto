/**
 * music.js — Global persistent music player
 * Inject sekali ke semua halaman, musik tidak putus saat pindah halaman.
 * State (playing + posisi) disimpan di localStorage.
 */
(function () {
    const AUDIO_SRC  = "sound/I%27d%20like%20to%20watch%20you%20sleeping%20_%20lirik%20dan%20musik%20oleh%20Sal%20Priadi.mp3";
    const LS_PLAYING = 'df_musikPlaying';
    const LS_TIME    = 'df_musikTime';

    // ── 1. Inject CSS ──────────────────────────────────────────────
    const style = document.createElement('style');
    style.textContent = `
        #df-music-btn {
            position: fixed;
            top: 20px;
            right: 24px;
            z-index: 9999;
            width: 40px;
            height: 40px;
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
        }
        #df-music-btn:hover {
            background: linear-gradient(145deg, #4a3f38, #352d27);
        }
        #df-music-btn.playing {
            box-shadow:
                inset 1px 1px 3px rgba(255,255,255,0.07),
                inset -1px -1px 3px rgba(0,0,0,0.5),
                0 0 16px rgba(196, 180, 158, 0.45),
                0 4px 10px rgba(0,0,0,0.6);
        }
        #df-music-btn svg { width: 18px; height: 18px; }

        @keyframes df-pulse-ring {
            0%   { transform: scale(1);   opacity: 0.5; }
            100% { transform: scale(1.75); opacity: 0; }
        }
        #df-music-btn.playing::after {
            content: '';
            position: absolute;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: 1px solid rgba(196,180,158,0.45);
            animation: df-pulse-ring 1.8s ease-out infinite;
            pointer-events: none;
        }
    `;
    document.head.appendChild(style);

    // ── 2. Inject Audio element ─────────────────────────────────────
    const audio = document.createElement('audio');
    audio.id   = 'df-bg-music';
    audio.loop = true;
    audio.preload = 'auto';
    const source = document.createElement('source');
    source.src  = AUDIO_SRC;
    source.type = 'audio/mpeg';
    audio.appendChild(source);
    document.body.appendChild(audio);

    // ── 3. Inject Button ───────────────────────────────────────────
    const btn = document.createElement('button');
    btn.id = 'df-music-btn';
    btn.setAttribute('aria-label', 'Toggle musik');
    btn.title = 'On/Off Musik';
    btn.innerHTML = `
        <!-- Speaker ON -->
        <svg id="df-icon-on" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 5L6 9H3v6h3l5 4V5z" fill="#c4b49e"/>
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" stroke="#c4b49e" stroke-width="1.8" stroke-linecap="round"/>
            <path d="M18.07 5.93a9 9 0 0 1 0 12.73" stroke="#928373" stroke-width="1.8" stroke-linecap="round"/>
        </svg>
        <!-- Speaker OFF -->
        <svg id="df-icon-off" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="display:none">
            <path d="M11 5L6 9H3v6h3l5 4V5z" fill="#4e4540"/>
            <line x1="23" y1="9" x2="17" y2="15" stroke="#63574c" stroke-width="1.8" stroke-linecap="round"/>
            <line x1="17" y1="9" x2="23" y2="15" stroke="#63574c" stroke-width="1.8" stroke-linecap="round"/>
        </svg>
    `;
    document.body.appendChild(btn);

    const iconOn  = btn.querySelector('#df-icon-on');
    const iconOff = btn.querySelector('#df-icon-off');
    let isPlaying = false;

    // ── 4. Update tampilan tombol ──────────────────────────────────
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

    // ── 5. Set state play/pause ─────────────────────────────────────
    function setPlaying(play) {
        isPlaying = play;
        updateUI(play);
        if (play) {
            audio.play().catch(() => {
                // Browser policy block — tunggu interaksi
                isPlaying = false;
                updateUI(false);
            });
        } else {
            audio.pause();
        }
    }

    // ── 6. Restore state dari localStorage ─────────────────────────
    const savedPlaying = localStorage.getItem(LS_PLAYING) === 'true';
    const savedTime    = parseFloat(localStorage.getItem(LS_TIME) || '0');

    audio.addEventListener('canplay', () => {
        // Set posisi dulu setelah audio siap
        if (savedTime > 0) audio.currentTime = savedTime;
        if (savedPlaying) setPlaying(true);
    }, { once: true });

    // Default UI sesuai state tersimpan
    updateUI(savedPlaying);
    isPlaying = savedPlaying;

    // ── 7. Simpan state sebelum pindah halaman ─────────────────────
    window.addEventListener('pagehide', () => {
        localStorage.setItem(LS_PLAYING, isPlaying ? 'true' : 'false');
        localStorage.setItem(LS_TIME, audio.currentTime);
    });
    // Fallback untuk browser yang tidak support pagehide
    window.addEventListener('beforeunload', () => {
        localStorage.setItem(LS_PLAYING, isPlaying ? 'true' : 'false');
        localStorage.setItem(LS_TIME, audio.currentTime);
    });

    // ── 8. Tombol toggle ──────────────────────────────────────────
    btn.addEventListener('click', () => setPlaying(!isPlaying));
})();
