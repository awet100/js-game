
/*
// array of the image src to be display
const srcImg = ["img1.jpg", "img2.jpg"];

let i = 1;
let checkArray = [];
// this function executed when clicked
const displayImage = ()=> {
    let checker, src1;
    if (i < 2) {
        src1 = Math.floor(Math.random()*srcImg.length) -1;
        checker = src1;
        i++;
    } else {
        if (checker == src1) {
            // display both
            images[src1].setAttribute("src", `../share/images/${srcImg[src1]}`)
            checkArray.push(checker);
            i--;
            // remove it from the srcImg
        } else {
            displayImage();
        }
    }

};
 */
// selected html elements
let images = document.querySelectorAll("img");

// listen to the click event of the card
Array.from(document.querySelectorAll(".flip-card")).forEach(card => {
    card.addEventListener("click", ()=> {
        flipCard(card.id);
    });
})

let checkArray = [];
let cardArray = [];

let clickCounter = 1; // create counter to count how much is clicked

const flipCard = (imageId)=> {
    // array of the srcImg
    let srcImg = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg", "img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg"];
    // get the card that is clicked at the moment
    let card = document.getElementById(`${imageId}`);
    // generate random index to be used for assign a random srcImg
    let randomIndex = Math.floor(Math.random()*srcImg.length);
    let randomSrcImg = srcImg[randomIndex]; // get the randomSrcImg

    // check if it is the first click or the second click
    if (clickCounter < 2) {
        cardArray.push(card);
        checkArray.push(randomSrcImg);
        document.querySelector(`#${card.id} .flip-card-back img`).setAttribute("src", `../share/images/${randomSrcImg}`);
        card.classList.toggle("check");
        clickCounter++;
    } else {
        checkArray.push(randomSrcImg);
        console.log(checkArray);
        if (checkArray[0] == checkArray[1]) {
            document.querySelector(`#${card.id} .flip-card-back img`).setAttribute("src", `../share/images/${randomSrcImg}`);
            card.classList.toggle("check");
        } else {
            // flip the first cards back
            cardArray[0].classList.toggle("check");
        }
        cardArray = [];
        clickCounter--;
        checkArray = [];

    }
}

// OR
// assign the cards to random image source
// when clicked get the image source of the first card and display it
// in the next click get the image source of the second card
// then check if they are the same
// if they do display the second card
// if they don't close both


// on click call the displayImage function
// displayImage function =>
// 1. get random number
// 2. take the src at the index of // 1. of the srcImg array
// 3. save it variable a and display the image
// then comes the second round
// 4. get random another number
// 5. take the src at the index of // 4. of the srcImg array
// 6. save it variable b
// 7. check if a and b are the same =>
// 8. if they do display the second images
// 9. if not restore the first image to background image





