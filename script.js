// 1. Initial Gate Trigger: Activate System Core & Music Flow
const enterBtn = document.getElementById('enter-btn');
const introSection = document.getElementById('intro');
const mainContent = document.getElementById('main-content');
const bgMusic = document.getElementById('bg-music');
const audioPanel = document.getElementById('audio-panel');
const muteBtn = document.getElementById('mute-btn');

enterBtn.addEventListener('click', () => {
    introSection.classList.add('hidden');
    mainContent.classList.remove('hidden');
    audioPanel.classList.remove('hidden');
    
    // Attempting Audio Stream Playback
    bgMusic.play().catch(error => {
        console.log("Audio pipeline blocked until further validation.");
    });
});

// 2. Audio Pipeline Toggle (Mute / Unmute)
muteBtn.addEventListener('click', () => {
    if (bgMusic.muted) {
        bgMusic.muted = false;
        muteBtn.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
        document.querySelector('.audio-status-text').innerText = "AUDIO_ON";
    } else {
        bgMusic.muted = true;
        muteBtn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
        document.querySelector('.audio-status-text').innerText = "AUDIO_MUTED";
    }
});

// 3. Cybernetic Cursor Tracking System
const dot = document.getElementById('cursor-dot');
const ring = document.getElementById('cursor-ring');

document.addEventListener('mousemove', (e) => {
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
    
    // Delayed interpolation for fluid kinetic tracking
    ring.style.left = (e.clientX - 13) + 'px';
    ring.style.top = (e.clientY - 13) + 'px';
});

// Cursor Over-Expansion Effect on Interactive Nodes
const dynamicTargets = document.querySelectorAll('button, a, .file-card, .nav-item, .audio-btn');
dynamicTargets.forEach(node => {
    node.addEventListener('mouseenter', () => {
        ring.style.transform = 'scale(1.5)';
        ring.style.background = 'rgba(255, 0, 0, 0.12)';
        ring.style.borderColor = '#ffffff';
    });
    node.addEventListener('mouseleave', () => {
        ring.style.transform = 'scale(1)';
        ring.style.background = 'transparent';
        ring.style.borderColor = 'var(--red)';
    });
});

// 4. Translation Matrix Mockup Button Alert
const translateBtn = document.getElementById('translate-btn');
translateBtn.addEventListener('click', () => {
    alert("Translation Matrix Alert: Arabic Language pack can be integrated here via localized JSON mapping!");
});
