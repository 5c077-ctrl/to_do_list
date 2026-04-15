Ajout d'une nouvelle tâche factice
   Message Git : "feat: ajout de tâche et sauvegarde dans LocalStorage"

const addBtn = document.getElementById('add-btn');

addBtn.addEventListener('click', () => {
    // Pour l'instant, on crée une tâche avec des données fixes pour tester
    const newTask = {
        title: "Nouvelle tâche générée",
        time: "12:00 PM",
        tagText: "Focus",
        tagClass: "focus",
        completed: false
    };

    // On l'ajoute à notre tableau
    tasks.push(newTask);
    
    // On sauvegarde dans le localStorage
    saveTasks();
    
    // On met à jour l'affichage
    renderTasks();
});

// Initialisation de l'application
//
// On appelle l'affichage une première fois au chargement de la page
renderTasks();
