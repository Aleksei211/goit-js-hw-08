// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
import  '../css/01-gallery.css'
import  '../css/common.css'
import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from "simplelightbox";
import 'lazysizes/plugins/parent-fit/ls.parent-fit';


const gallery = document.querySelector('.gallery');
const itemOfGallery = createItemOfGallery(galleryItems);


gallery.insertAdjacentHTML('beforeend', itemOfGallery);

function createItemOfGallery(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `<a class="gallery__item" href="${original}">
                    <img class="gallery__image lazyload" data-src="${preview}" alt="${description}" />
                </a> `
    }).join('')
}

var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});