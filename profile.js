function colorAlert(evt) {
    evt.preventDefault();
    alert('My favorite color is blue!')
}
let color = document.querySelector('#color')
color.addEventListener('click', colorAlert)
function favoritePlaceAlert(evt) {
    evt.preventDefault();
    alert('My favorite place is anywhere in nature (mountains,beaches,forests)!')
}
let myFavoritePlace = document.querySelector('#place')
myFavoritePlace.addEventListener('click', favoritePlaceAlert)

function favoriteRitual(evt){
    evt.preventDefault();
    alert('My favorite ritual is going for a jog!')
}
let myFavoriteRitual = document.querySelector('#ritual')
myFavoriteRitual.addEventListener('click',favoriteRitual)

