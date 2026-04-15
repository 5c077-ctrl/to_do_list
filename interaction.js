function attachCheckboxEvents() {
    const checkboxes = document.querySelectorAll('.checkbox');
    
    checkboxes.forEach(box => {
        box.addEventListener('click', function() {
            // On récupère l'index de la tâche cliquée grâce à data-index
            const index = this.getAttribute('data-index');
            
            // On inverse le statut de complétion (vrai devient faux, faux devient vrai)
            tasks[index].completed = !tasks[index].completed;
            
            // On sauvegarde le nouveau statut
            saveTasks();
            
            // On réaffiche la liste pour mettre à jour l'interface
            renderTasks();
        });
    });
}
