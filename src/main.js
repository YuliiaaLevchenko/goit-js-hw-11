import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const url = new URL("https://pixabay.com/api/");

url.searchParams.append("key", "41611765-95d63315582311c92a96eb89d")
url.searchParams.append("q", "cat")
url.searchParams.append("image_type", "photo")
url.searchParams.append("orientation", "horizontal")
url.searchParams.append("safesearch", "true")

fetch(url)
    .then(res => {
        if (!res.ok) {
            throw new Error(
                'Sorry, there are no images matching your search query. Please try again!'
            );
        }
       return res.json();
    })
    .then(image => {
        console.log(image);
    })