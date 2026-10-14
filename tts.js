const stability = document.getElementById('stability');
const clarity = document.getElementById('clarity');
const stabVal = document.getElementById('stab-val');
const clarVal = document.getElementById('clar-val');

stability.addEventListener('input', () => stabVal.textContent = stability.value + '%');
clarity.addEventListener('input', () => clarVal.textContent = clarity.value + '%');

document.getElementById('tts-gen').addEventListener('click', () => {
    const text = document.getElementById('tts-text').value.trim();
    if (!text) { alert('⚠️ Mag-type muna ng teksto!'); return; }
    document.getElementById('tts-result').classList.remove('hidden');
    document.getElementById('tts-result').scrollIntoView({ behavior: 'smooth' });
});
