document.addEventListener("DOMContentLoaded", () => {
    const knob = document.getElementById("knob");
    const knobContainer = document.querySelector(".knob-container");
    const photoTrack = document.getElementById("photoTrack");
    const dotsContainer = document.getElementById("dotsContainer");
    const currentTimeEl = document.getElementById("currentTime");
    
    // We have 5 original photos
    const originalPhotos = document.querySelectorAll(".photo");
    const numPhotos = originalPhotos.length;
    
    if (numPhotos === 0) return; // safety
    
    // Create dots
    for (let i = 0; i < numPhotos; i++) {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        if (i === 0) dot.classList.add("active");
        dotsContainer.appendChild(dot);
    }
    const dots = document.querySelectorAll(".dot");
    
    // Infinite loop trick: clone the items a few times to allow seamless track moving
    const trackContent = photoTrack.innerHTML;
    photoTrack.innerHTML = trackContent + trackContent + trackContent;
    
    const maxPhotoWidth = 220; // 210px width + 10px gap
    const centerOffset = numPhotos * maxPhotoWidth; // Start at the middle set
    
    // Rotation State
    let totalAngle = 0; // Unbounded total angle in degrees
    let isDragging = false;
    let previousMouseAngle = 0;
    
    // Center point for rotation math (Unchangeable by knob rotation)
    let cx = 0;
    let cy = 0;
    let rafId = null;
    
    // Turning sensitivity: 60 degrees of rotation shifts 1 photo
    const anglePerPhoto = 60; 
    
    function formatTime(index) {
        // total time 1:13 = 73 seconds.
        const totalSeconds = 73;
        const progress = index / (numPhotos - 1 || 1);
        const currentSecs = Math.max(0, Math.min(totalSeconds, progress * totalSeconds));
        const m = Math.floor(currentSecs / 60);
        const s = Math.floor(currentSecs % 60);
        return `${m}:${s < 10 ? '0' : ''}${s}`;
    }
    
    function updateUI() {
        // Unbounded rotation
        knob.style.transform = `rotate(${totalAngle}deg)`;
        
        // Map angle to translation
        let photoOffset = totalAngle / anglePerPhoto;
        
        // Normalize it to the 0..numPhotos range using true modulo
        let normalizedOffset = photoOffset % numPhotos;
        if (normalizedOffset < 0) normalizedOffset += numPhotos;
        
        // Translate track: Start at centerOffset, then add the normalized offset
        const currentTranslate = centerOffset + (normalizedOffset * maxPhotoWidth);
        photoTrack.style.transform = `translateX(-${currentTranslate}px)`;
        
        // Update dots
        const activeIndex = Math.round(normalizedOffset) % numPhotos;
        dots.forEach((dot, index) => {
            if (index === activeIndex) {
                dot.classList.add("active");
            } else {
                dot.classList.remove("active");
            }
        });
        
        // Update timer
        currentTimeEl.textContent = formatTime(activeIndex);
    }
    
    // Initialize
    updateUI();
    
    // Function to calculate exact angle given clientX and clientY
    function getAngle(x, y) {
        return Math.atan2(y - cy, x - cx) * (180 / Math.PI);
    }

    // Handles the start of a drag
    function startDrag(clientX, clientY) {
        isDragging = true;
        
        // Calculate stable center using the container (which doesn't rotate!)
        const rect = knobContainer.getBoundingClientRect();
        cx = rect.left + rect.width / 2;
        cy = rect.top + rect.height / 2;
        
        previousMouseAngle = getAngle(clientX, clientY);
        knob.style.cursor = "grabbing";
    }

    // Handles the moving action
    function moveDrag(clientX, clientY) {
        if (!isDragging) return;
        
        const currentMouseAngle = getAngle(clientX, clientY);
        let delta = currentMouseAngle - previousMouseAngle;
        
        // Handle angle wrap-around (-180 to 180 boundary)
        if (delta > 180) delta -= 360;
        if (delta < -180) delta += 360;
        
        totalAngle += delta;
        previousMouseAngle = currentMouseAngle;
        
        if (rafId) cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(updateUI);
    }

    // Handles stopping the drag
    function endDrag() {
        isDragging = false;
        knob.style.cursor = "grab";
    }

    // ============================================
    // EXPERT MOBILE BROWSER & DESKTOP EVENT WIRING
    // ============================================

    // 1. Mouse Events (Desktop)
    knob.addEventListener("mousedown", (e) => {
        e.preventDefault(); // Stop text selection
        startDrag(e.clientX, e.clientY);
    });
    window.addEventListener("mousemove", (e) => moveDrag(e.clientX, e.clientY) );
    window.addEventListener("mouseup", endDrag);

    // 2. Touch Events (Mobile)
    knob.addEventListener("touchstart", (e) => {
        // e.preventDefault() here stops iOS bouncing
        if (e.cancelable) e.preventDefault(); 
        const touch = e.touches[0];
        startDrag(touch.clientX, touch.clientY);
    }, { passive: false });
    
    window.addEventListener("touchmove", (e) => {
        if (!isDragging) return;
        // e.preventDefault() stops the whole page from scrolling while turning the knob
        if (e.cancelable) e.preventDefault(); 
        const touch = e.touches[0];
        moveDrag(touch.clientX, touch.clientY);
    }, { passive: false });
    
    window.addEventListener("touchend", endDrag);
    window.addEventListener("touchcancel", endDrag);
});
