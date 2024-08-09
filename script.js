document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('toggleButton');
    const campoDiv = document.querySelector('.campo');
    const cidadeDiv = document.querySelector('.cidade');

    button.addEventListener('click', () => {
        if (campoDiv.classList.contains('hidden')) {
            campoDiv.classList.remove('hidden');
            cidadeDiv.classList.add('hidden');
            button.textContent = 'Mostrar Cidade';
        } else {
            campoDiv.classList.add('hidden');
            cidadeDiv.classList.remove('hidden');
            button.textContent = 'Mostrar Campo';
        }
    });
});

