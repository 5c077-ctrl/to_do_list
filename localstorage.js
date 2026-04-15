Configuration du LocalStorage
let tasks = JSON.parse(localStorage.getItem('myTasks')) || [];

// 2. Fonction pour sauvegarder notre tableau dans le localStorage
function saveTasks() {
    // Le localStorage ne stocke que du texte, donc on convertit notre tableau en chaîne de caractères (JSON)
    localStorage.setItem('myTasks', JSON.stringify(tasks));
}
