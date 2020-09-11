/* listen to the click event of specifically clicked card by selecting it with its ID
And call the flipCard function */
let cardArray = Array.from(document.querySelectorAll(".flip"));
cardArray.forEach(card => {
    card.addEventListener("click", ()=> {
        flipCard(card.id);
    });
})

let checkArray = []; // checkArray is to hold the randomly clicked pair srcImg
let firstCard; // firstCard will save the first clicked card
let clickCounter = 1; // create counter to count how many times is clicked
let srcImg = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg"]; // array of the srcImg

// flipCard function to flip both cards if they are the same else turn the first card back
const flipCard = (imageId)=> {
    // get the card that is clicked at the moment
    let card = document.getElementById(`${imageId}`);

    // generate random index to be used for assign a random srcImg
    let randomIndex = Math.floor(Math.random()*srcImg.length);
    let randomSrcImg = srcImg[randomIndex]; // get the randomSrcImg
    checkArray.push(randomSrcImg); // update the checkArray with the randomSrcImg

    // check if it is the first click or the second click
    if (clickCounter < 2) {
        firstCard = card; // save the first clicked card

        // assign the randomSrcImg to the hidden image
        document.querySelector(`#${card.id} .flip-card-back img`).setAttribute("src", `../share/images/${randomSrcImg}`);
        card.classList.toggle("check"); // flip the card to display the hidden image
        clickCounter++; // increment the clickCounter to specify that first click is done
    } else {
        // in second click check if both the randomSrcImg are same
        if (checkArray[0] == checkArray[1]) {

            // loop over the cardArray to make that card not clickable any more
            cardArray.forEach(cardCheck => {
                if (firstCard.id == cardCheck.id){
                    cardCheck.classList.add("disable");
                }
                if (card.id == cardCheck.id){
                    cardCheck.classList.add("disable");
                }
            })
            // if they do display both of them
            document.querySelector(`#${card.id} .flip-card-back img`).setAttribute("src", `../share/images/${randomSrcImg}`);
            card.classList.toggle("check");
            // remove the pair of image that are the same from the array
            for( let i = 0; i < srcImg.length; i++) {
                if ( srcImg[i] == randomSrcImg) {
                    srcImg.splice(i, 1);
                }
            }
            // check if game is dane or yet
            if (srcImg.length == 0) {
                alert("CONGRATULATION YOU DID IT!");
            }
            // make card no more clickable if they much and are displayed
            let cardIndex = cardArray.indexOf(card);
            cardArray.splice(cardIndex, 1);
        } else {
            // if they dont flip the first cards back
            firstCard.classList.toggle("check");
        }
        firstCard = ""; // remove the first card that was clicked
        clickCounter--; // decrement the clickCounter to it initial value
        checkArray = []; // remove the randomSrcImg which are already checked

    }
}


// in the second test get the id of the firstCard and second only if they match
// remove the class attribute from the element so no more clickable
// but if they don't match remove it from their array

// and also to make it not flipping from other cards influence ->
// check if the if firstCard has a class attribute






