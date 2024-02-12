function showVideo(videoId) {
    // Oculta todos los videos
    const videos = document.querySelectorAll('.video');
    videos.forEach(video => video.classList.remove('active'));

    // Muestra el video seleccionado
    const selectedVideo = document.getElementById(videoId);
    selectedVideo.classList.add('active');
}

// Seleccionar el elemento del menú desplegable
const dropdown = document.querySelector('.dropdown');

// Agregar un evento para desplegar el menú cuando se hace hover sobre el elemento
dropdown.addEventListener('mouseenter', function() {
    const dropdownMenu = this.querySelector('.dropdown-menu');
    dropdownMenu.style.display = 'block';
});

// Agregar un evento para ocultar el menú cuando se quita el hover sobre el elemento
dropdown.addEventListener('mouseleave', function() {
    const dropdownMenu = this.querySelector('.dropdown-menu');
    dropdownMenu.style.display = 'none';
});
