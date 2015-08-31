# o-n-m-hangman-demo

## Approach

This hangman demo is a quick prototype - and is built to balance thoughtful front-end architecture with development speed.
The JS build is via Gulp -- and I'm leveraging the Babel library to integrate some ES6 syntax. 
CSS is not being preprocessed, but manually included -- because of the limited scope of overwrites and time concerns.
I'm using jQuery primarily for DOM manipulation, and Bootstrap for quick and well tested grids, components, styles. 

## JS

Gulp accesses the app via app/client.js.
This file exposes jQuery, Bootstrap and my 'MASTER' global variables. 
Here's a bit about the separation of concerns.

### Models
HANGMAN => only one model here -- the hangman business logic is laid out in app/models/Hangman

### MASTER
This is the master controller -- minimal direct dom interactions -- but the anchor between the other components and the hangman game model.

### Controllers
- WordInput => manages welcome, and collecting initial word from user
- GuessInput => manages user guesses
- HangmanImage => manages drawing of the 'hangman'. In a team with a designer -- a canvas element could be used to overlay specific images, and line connections.
- Modal => bootstrap modal - used for reporting win or lose results to the user
- Error => error reporting 
- GuessMapFlipCards => visualize unguessed letters, and the flip reveal for correct guesses
- Scoreboard => human readable game state reporting

### Utils
- Validation -- I thought there might be more validation, but there is only one Regular Expression that seems to handle both word and single character inputs- testing for validity.

### Styles
Bootstrap provides the grid, many components, the modal, jumbotron to name a few.
Overwrites are in overwrites.css

Thanks for reading!
