import { createClient } from 'pexels-api-wrapper';

const client = createClient('G2nb7xwxWA4pSJtYzjpfDR3HTuGjHOVhsGfI0eKhXo2mb3FjFw0D9zGY'); // Reemplaza 'YOUR_API_KEY' con tu clave API de Pexels
const query = 'Property';
const perPage = 10;

const gallery = document.getElementById('gallery');

client.photos.search({ query, per_page: perPage })
    .then(photos => {
        photos.forEach(photo => {
            const img = document.createElement('img');
            img.src = photo.src.large; // Ajusta el tamaño de la imagen según tus necesidades
            img.alt = photo.photographer;
            img.classList.add('gallery-item');
            gallery.appendChild(img);
        });

        // Añadir evento de clic para desplazarse a la siguiente imagen
        const galleryItems = document.querySelectorAll('.gallery-item');
        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                const scrollOffset = item.offsetLeft - gallery.scrollLeft;
                gallery.scrollBy({
                    left: scrollOffset,
                    behavior: 'smooth'
                });
            });
        });
    })
    .catch(error => {
        console.error('Error al buscar imágenes:', error);
    });