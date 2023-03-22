import { getMovies } from './tmdb.js'

const movies = await getMovies()
console.log('carousel.js > movies >', movies)

/** @type {HTMLElement} */ const carousel = document.querySelector('.carousel')
const nextBtn = document.querySelector('.next')
const previousBtn = document.querySelector('.previous')

/**
 * Description
 * @param {{title: string, poster_path: string}} movie
 * @returns {string}
 */
const getSlide = (movie) => `
<article>
<img
src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
alt="Affiche du film ${movie.title}"
/>
<h2>${movie.title}</h2>
</article>
`
movies.forEach((movie) => {
  carousel.innerHTML += getSlide(movie)
})
const carouselItems = document.querySelectorAll('.carousel > article')

// Code qui fonctionne quelque soit le nombre d’items
const carouselLength = carouselItems.length
let index = 0

// 1re version : aller de 0 à 2 (Celle que nous sommes en train de faire)
// 2e version : carousel infini

// Déclarations
const moveCarousel = () => {
  carousel.style.transform = `translateX(-${index * 100}vw)`
}
const setControls = () => {
  document.querySelector('.debug').innerHTML = index
  if (index === 0) {
  }
  if (index === carouselLength - 1) {
  }
}

// Gérer le clic sur le bouton next
nextBtn.addEventListener('click', () => {
  // Si index est inférieur carouselLength - 1, on ajoute 1 à index
  if (index < carouselLength - 1) index++

  // Afficher index dans la console
  console.log(index)

  // Appels
  moveCarousel()
  setControls()
})

// Gérer le clic sur le bouton previous
previousBtn.addEventListener('click', () => {
  // Si index est supérieur à zéro, on retire 1 à index
  if (index > 0) index--

  // Afficher index dans la console
  console.log(index)

  // Appels
  moveCarousel()
  setControls()
})
