const words = ["исторяи", "биология", "география", "физика", "химия", "обществознание", "литература"];

document.getElementById('generate-word').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * words.length);
    const randomWord = words[randomIndex];
    document.getElementById('word-output').innerText = randomWord;
});