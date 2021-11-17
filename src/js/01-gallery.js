// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
import '../css/01-gallery.css'
import '../css/common.css'
import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from "simplelightbox";
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';


const galleryOfImages = document.querySelector('.gallery');
const cardOfImage = onCreateGalleryItem(galleryItems);


galleryOfImages.insertAdjacentHTML('beforeend', cardOfImage);

function onCreateGalleryItem(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `<a class="gallery__item" href="${original}">
                    <img class="gallery__image lazyload" data-src="${preview}" alt="${description}" />
                </a> `
    }).join('')
}
// Interface
new SimpleLightbox('.gallery a', {
   disableRightClick: true,
    scrollZoom: false,
    captionDelay: 250,
    captionsData: 'alt', 
});
