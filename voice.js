const voiceOptions = document.querySelectorAll('.voice-option');
let isRecording = false;

voiceOptions.forEach(opt => {
    opt.addEventListener('click', () => {
        voiceOptions.forEach(o => o.classList.remove('selected'));
        opt.classList.add('selected');
    });
});

const recBtn = document.getElementById('rec-btn');
const recStatus = document.getElementById('rec-status');

recBtn.addEventListener('click', () => {
    if (!isRecording) {
        isRecording = true;
        recBtn.classList.add('recording');
        recBtn.textContent = '⏹ ITIGIL ANG PAG-RECORD';
        recStatus.textContent = '🔴 Nagrerecord...';
    } else {
        isRecording = false;
        recBtn.classList.remove('recording');
        recBtn.textContent = '🔴 SIMULAN ANG PAG-RECORD';
        recStatus.textContent = '✅ Nakatala na!';
    }
});

document.getElementById('voice-conv').addEventListener('click', () => {
    document.getElementById('voice-result').classList.remove('hidden');
    document.getElementById('voice-result').scrollIntoView({ behavior: 'smooth' });
});
