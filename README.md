# connect-4
A connect 4 game app written in RactJS and tested with Jest/Enzyme

# App methods
### initBoard - Create a blank 7x6 game board matrix
### togglePlayer - Switches player turns 
### play(board) - on click event resets board object with row and cell of selected spot
### whoIsNext(player) - based current player sets message for next player to display
### checkVertical(board) - Check board object only if row is 3 or greater
### checkHorizontal(board) - Check board object only if column is 3 or less
### checkDiagonalRight(board) - Check only if row is 3 or greater AND column is 3 or less
### checkDiagonalLeft(board) Check only if row is 3 or greater AND column is 3 or greater
### checkDraw(board) - Check board object for a game draw
### checkAll(board) - return board object returning all of the check board methods
### UNSAFE_componentWillMount() - prior to React app mount do initBoard

# Additional components
### Row  - when rendering is a child of App component to set up row and play function
### Cell - when rendering is a child of Row component to set up cell and play function 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


