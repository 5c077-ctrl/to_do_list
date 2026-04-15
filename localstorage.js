Configuration du LocalStorage
   Message Git : "feat: initialisation du tableau de tâches et LocalStorage"

// 1. On charge les tâches existantes depuis le localStorage.
// S'il n'y en a pas, on crée un tableau vide [].
let tasks = JSON.parse(localStorage.getItem('myTasks')) || [];

// 2. Fonction pour sauvegarder notre tableau dans le localStorage
function saveTasks() {
    // Le localStorage ne stocke que du texte, donc on convertit notre tableau en chaîne de caractères (JSON)
    localStorage.setItem('myTasks', JSON.stringify(tasks));
}
