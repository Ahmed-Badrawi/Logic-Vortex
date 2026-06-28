// 1. Initial Gate Trigger
const enterBtn = document.getElementById('enter-btn');
const introSection = document.getElementById('intro');
const mainContent = document.getElementById('main-content');
const bgMusic = document.getElementById('bg-music');
const clickSound = document.getElementById('click-sound'); 
const audioPanel = document.getElementById('audio-panel');
const muteBtn = document.getElementById('mute-btn');

function playClick() {
    clickSound.currentTime = 0; 
    clickSound.play().catch(e => console.log("Sound muted by browser"));
}

enterBtn.addEventListener('click', () => {
    playClick(); 
    introSection.classList.add('hidden');
    mainContent.classList.remove('hidden');
    audioPanel.classList.remove('hidden');
    
    bgMusic.play().catch(error => {
        console.log("Audio pipeline blocked.");
    });
});

// 2. Audio Pipeline Toggle
muteBtn.addEventListener('click', () => {
    playClick();
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

const interactiveElements = document.querySelectorAll('button, a, .file-card, .nav-item');
interactiveElements.forEach(el => {
    el.addEventListener('click', playClick);
});

// 4. Cybernetic Cursor Tracking
const dot = document.getElementById('cursor-dot');
const ring = document.getElementById('cursor-ring');

document.addEventListener('mousemove', (e) => {
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
    ring.style.left = (e.clientX - 13) + 'px';
    ring.style.top = (e.clientY - 13) + 'px';
});

// Cursor Over-Expansion Effect
interactiveElements.forEach(node => {
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

// 5. Translation Matrix
const translateBtn = document.getElementById('translate-btn');
translateBtn.addEventListener('click', () => {
    alert("Translation Matrix Alert: Arabic Language pack integrated!");
});
