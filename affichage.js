Affichage dynamique des tâches
   Message Git : "feat: fonction pour afficher les tâches dynamiquement"
  
const taskListContainer = document.getElementById('task-list');

function renderTasks() {
    // On vide le conteneur pour ne pas avoir de doublons
    taskListContainer.innerHTML = '';

    // On parcourt chaque tâche de notre tableau
    tasks.forEach((task, index) => {
        // On crée la carte de tâche
        const taskCard = document.createElement('div');
        taskCard.className = 'task-card';
        
        // Structure HTML interne de la tâche
        taskCard.innerHTML = `
            <div class="task-info">
                <span class="time">${task.time}</span>
                <div class="task-details">
                    <h3>${task.title}</h3>
                    <div class="tags">
                        <span class="tag ${task.tagClass}">${task.tagText}</span>
                    </div>
                </div>
            </div>
            <div class="checkbox" data-index="${index}" style="background-color: ${task.completed ? 'var(--accent-orange)' : 'transparent'}">
                ${task.completed ? '✓' : ''}
            </div>
        `;

        taskListContainer.appendChild(taskCard);
    });

    // Une fois affichées, on réattache les événements de clic aux nouvelles cases à cocher
    attachCheckboxEvents();
}
