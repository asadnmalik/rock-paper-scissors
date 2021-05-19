# Rock Paper Scissors Game
# Overview
Here we will be looking how you can make a simple game using javascript by implementing random choices for the computer.

# Demo
![demo](./img/rockpaperscissors.gif)

You can play it from [here](https://rockpaperscissorsanm.netlify.app/).

# Method

## Generating random choices

Firstly we've put all the choices in an array, then as soon as the player chooses their choices we generate a random number between 0-2 using Math.random, then we declare the computer choice by putthing that random number as its index of the computer's choices or options array.
Then we just use the setTimeout method to execute our compareHands function and update the images on the DOM with a delay of 2s, during this delay the hands will be animating up and down which will be shown how below.

 ```Javascript
    //Computer Choices
const computerOptions = ['rock', 'paper', 'scissors'];

options.forEach(option =>{
    option.addEventListener('click', function(){
        
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber]

        setTimeout(() => {
            //Compare the Hands
            compareHands(this.textContent, computerChoice)

            //Update Images
            playerHand.src = `/img/${this.textContent}.png`
            computerHand.src = `/img/${computerChoice}.png`
        }, 2000)

        //Animation
        playerHand.style.animation ="shakePlayer 2s ease"
        computerHand.style.animation ="shakeComputer 2s ease"
        
    })
})
 ```


## Animating the hands
To animate the hands up and down during the 2s delay we're using keyframes in our CSS and just adding the animation style of the player-hand and computer-hand div as shown in javascript above.
The percentages represent a percentage of the animation duration, 0% represents the starting point of the animation, 100% represents the end point. The rotation at Y axis just for the hand looks like a mirror image as we're using only one image for the hands. The actual animation is the translateY, we're simply translating it up and down 50px at different intervals or percentages.

```CSS
@keyframes shakePlayer {
    0%{
        transform: rotateY(180deg) translateY(0px)
    }
    15%{
        transform: rotateY(180deg) translateY(-50px)
    }
    25%{
        transform: rotateY(180deg) translateY(0px)
    }
    35%{
        transform: rotateY(180deg) translateY(-50px)
    }
    50%{
        transform: rotateY(180deg) translateY(0px)
    }
    65%{
        transform: rotateY(180deg) translateY(-50px)
    }
    75%{
        transform: rotateY(180deg) translateY(0px)
    }
    85%{
        transform: rotateY(180deg) translateY(-50px)
    }
    100%{
        transform: rotateY(180deg) translateY(0px)
    }

}


@keyframes shakeComputer {
    0%{
        transform: translateY(0px)
    }
    15%{
        transform: translateY(-50px)
    }
    25%{
        transform: translateY(0px)
    }
    35%{
        transform: translateY(-50px)
    }
    50%{
        transform: translateY(0px)
    }
    65%{
        transform: translateY(-50px)
    }
    75%{
        transform: translateY(0px)
    }
    85%{
        transform: translateY(-50px)
    }
    100%{
        transform: translateY(0px)
    }

}
```
---

These are the main core concepts used in this game, the rest of source code is available to download from [here](https://codeload.github.com/asadnmalik/rock-paper-scissors/zip/refs/heads/main).

---

## Copyright, Author
*Copyright 2021*, Asad Naveed Malik, *All rights reserved.*
