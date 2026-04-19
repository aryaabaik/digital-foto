document.addEventListener("DOMContentLoaded", () => {
    const knob = document.getElementById("knob");
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
    // We want 3 sets: prepended, original, appended
    const trackContent = photoTrack.innerHTML;
    photoTrack.innerHTML = trackContent + trackContent + trackContent;
    
    const maxPhotoWidth = 220; // 210px width + 10px gap
    
    // The center group starts at numPhotos * maxPhotoWidth
    const centerOffset = numPhotos * maxPhotoWidth;
    
    // Knob rotation state
    let totalAngle = 0; // Unbounded total angle in degrees
    let isDragging = false;
    let previousMouseAngle = 0;
    
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
        // This ensures what you see is the center clone group scrolling seamlessly.
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
    
    let previousX = 0;
    let rafId = null;
    
    // Drag handling using horizontal swipe mapping (much better for mobile than tiny circles)
    knob.addEventListener("pointerdown", (e) => {
        isDragging = true;
        
        previousX = e.clientX;
        knob.style.cursor = "grabbing";
        
        // Keep focus locked to cursor/touch even if moving off knob
        knob.setPointerCapture(e.pointerId);
        e.preventDefault(); 
    });
    
    window.addEventListener("pointermove", (e) => {
        if (!isDragging) return;
        
        // Map horizontal drag distance to rotation angle directly
        let dx = e.clientX - previousX;
        
        // Sensitivity: 1px swipe = 1.5 degrees rotation. 
        // This is incredibly smooth and easy on mobile without "dikit dikit" feel
        let delta = dx * 1.5;
        
        totalAngle += delta; // Accumulate angle
        previousX = e.clientX; // Update previousX
        
        // requestAnimationFrame yields butter smooth UI updates on mobile phones
        if (rafId) cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(updateUI);
    });
    
    window.addEventListener("pointerup", () => {
        if (isDragging) {
            isDragging = false;
            knob.style.cursor = "grab";
        }
    });

    // Handle touch end globally in case pointer goes outside window
    window.addEventListener("pointercancel", () => {
        isDragging = false;
        knob.style.cursor = "grab";
    });
});
