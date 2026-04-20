/**
 * transitions.js
 * Global: cinematic page transitions + micro-interactions.
 * Include this on ALL pages (before music.js).
 */
(function () {
    'use strict';

    // ── Inject global consistency styles ──────────────────────────────────
    const s = document.createElement('style');
    s.textContent = `
        /* Smooth fade on the root element */
        html {
            transition: opacity 0.46s ease;
        }

        /* Back button: always fixed, always on top, consistent across pages */
        .back-link {
            position: fixed !important;
            top: 20px !important;
            left: 20px !important;
            z-index: 9995 !important;
            font-size: 13px !important;
            opacity: 0.65;
            color: #c4b49e;
            text-shadow: 0 2px 6px rgba(0,0,0,0.95);
            letter-spacing: 0.5px;
            transition: opacity 0.3s ease, letter-spacing 0.3s ease, color 0.3s ease !important;
        }
        .back-link:hover {
            opacity: 1 !important;
            letter-spacing: 2.5px !important;
            color: #ffffff !important;
        }

        /* Card press feedback (index.html cards) */
        .choice-link:active .device {
            transform: scale(0.965) translateY(-3px) !important;
            transition: transform 0.09s ease !important;
        }

        /* Subtle warm tint on all pages (consistency) */
        .df-vignette {
            position: fixed;
            inset: 0;
            pointer-events: none;
            z-index: 9982;
            background: radial-gradient(
                circle at 50% 42%,
                transparent 30%,
                rgba(8, 6, 5, 0.68) 100%
            );
        }
    `;
    document.head.appendChild(s);

    // ── Inject vignette overlay if page doesn't have body::before ────────
    // Runs after DOM is ready so it doesn't fight with inline styles
    window.addEventListener('DOMContentLoaded', () => {
        // Only inject if page hasn't already defined its own vignette
        // (we check by looking for a body::before from inline style blocks)
        const hasOwnVignette = [...document.styleSheets].some(sheet => {
            try {
                return [...sheet.cssRules].some(r =>
                    r.selectorText === 'body::before'
                );
            } catch { return false; }
        });

        if (!hasOwnVignette) {
            const v = document.createElement('div');
            v.className = 'df-vignette';
            document.body.appendChild(v);
        }
    });

    // ── Page FADE-IN on load ──────────────────────────────────────────────
    document.documentElement.style.opacity = '0';

    window.addEventListener('DOMContentLoaded', () => {
        // Double rAF ensures paint has happened before we fade in
        requestAnimationFrame(() => requestAnimationFrame(() => {
            document.documentElement.style.opacity = '1';
        }));
    });

    // ── Page FADE-OUT then navigate ───────────────────────────────────────
    document.addEventListener('click', (e) => {
        const link = e.target.closest('a[href]');
        if (!link) return;

        const href = link.getAttribute('href');
        // Only handle same-origin internal links
        if (
            !href ||
            href.startsWith('#') ||
            href.startsWith('http') ||
            href.startsWith('//') ||
            href.startsWith('mailto:') ||
            href.startsWith('tel:')
        ) return;

        e.preventDefault();

        // music.js pagehide will fire when location changes → state preserved
        document.documentElement.style.opacity = '0';
        setTimeout(() => { window.location.href = href; }, 460);
    });

})();
