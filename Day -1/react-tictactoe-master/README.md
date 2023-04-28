# react-tictactoe

![alt-text](https://imgur.com/pnFGz02.jpg)

A simple browser-based tic-tac-toe game that depends on a locally-run nodejs server.Tic-tac-toe is a two-player game played on a 3x3 grid. The game is typically played with X's and O's, with each player taking turns marking one of the empty squares in the grid. The goal is to get three of your marks in a row, either horizontally, vertically, or diagonally, before your opponent does. If all of the squares are filled without either player achieving three in a row, the game ends in a tie. Tic-tac-toe is a simple and classic game that is easy to learn, but can still be challenging and entertaining for players of all ages.

## Steps to run

`cd react-tictactoe` - cd to project folder.

`npm run first` - npm script install packages for both server and client

This will install all packages needed on both server and client side. After this process is finished, we can
run both the server and client instances with one single command:

`npm run start` - npm script that runs both server and client instances

Now, the server will listen to the specified port (4001) and webpack will compile and host the client code,
listening on a specified port (3000). A browser window should open with the URL ‘http://localhost:3000’.
To run two clients at once, open a new tab with the same URL. The two tabs will now be playing against each
other.

`In case above steps Fail`

However, in the event that the above commands fail, these are the steps to take:  


cd react-socket-app                                    // cd to project root directory
npm install                                            // install server packages
cd socket-client                                       // cd into client folder
npm install                                            // install client packages
cd ..                                                  // cd back into project root directory
node server.js                                         // run server


Open a new terminal here:


cd socket-client                         // cd to client folder
npm start                                // run client instance
