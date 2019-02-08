# React Front-end Challenge - HeavenHR
This single page application that presents a list of friends that you can add,delete it 
## Task done
* Add pagination to the component with number of pager and first,next,previous,last
* Add select option for male female
* Add icone to view friend either male or female
* Add validation for fields name and gender
* Add unit test for action addfriend,starred,deletefriend,


## Screenshot and demonstration of this app 

![](https://i.imgur.com/K2BlGF7l.png)

![](https://i.imgur.com/8pxQ7PGl.png)

![](https://i.imgur.com/Wz1SrYzl.png)


## Folder Structure


>     |   .gitignore
>     |   package.json
>     |   README.md
>     |   yarn.lock
>     +---public
>     |       favicon.ico
>     |       index.html
>     +---src
>     |   App.css
>     |   App.js
>     |   App.test.js
>     |   index.css
>     |   index.js
>     |   logo.svg
>     |   store.js
>     |   
>     +---actions
>     |       FriendsActions.js
>     |       FriendsActions.test.js
>     |       
>     +---components
>     |       AddFriendInput.css
>     |       AddFriendInput.js
>     |       AddFriendInput.test.js
>     |       FriendList.css
>     |       FriendList.js
>     |       FriendList.test.js
>     |       FriendListItem.css
>     |       FriendListItem.js
>     |       index.js
>     |       Pagination.css
>     |       Pagination.js
>     |       Pagination.test.js
>     |       
>     +---config
>     |       setupTests.js
>     |       
>     +---constants
>     |       ActionTypes.js
>     |       
>     +---containers
>     |       App.js
>     |       FriendListApp.css
>     |       FriendListApp.js
>     |       
>     +---reducers
>     |       friendlist.js
>     |       index.js
>     |       
>     \---__snapshots__
>            App.test.js.snap


## How to install on your computer

`# Clone this git repo:`

`git clone https://github.com/sguiderk/frontend-challenge-v1.git`

`cd frontend-challenge-v1/`

`# install the depencies `

`npm install`

`# run the application `

`npm start `

Then it will open http://localhost:3000 and the application will be running.

## Test

The script of test app.test.js contains 1 cases of test and 11 of them are used with
Snapshot, it tests to automate the process and create unit tests that can easily be overwritten and managed through time, and for the 6 We check if the API work perfectly and check the render of title and section with toEqual() function.

## To Run Tests

`npm test`

![](https://i.imgur.com/hweH2L4l.png)

## How to install on docker

I’ve provided the possibility to run this app under docker 

`# Now let's build it:`

`docker build -t heavenhrimage .`

`# Now to run it:`

`docker run --name heavenhrimage -it -p 3000:3000 heavenhrimage`

Then it will open http://yourhost:3000 and the application will be running.

## How run test on docker

`# connect to the container:`

`docker exec -it heavenhrimage bash`

`npm test`

## Component used for this app

_**Enzyme :**_ Enzyme is a JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components' output.

Link package :  [link](https://www.npmjs.com/package/enzyme).


_**sinon :**_ Standalone and test framework agnostic JavaScript test spies, stubs and mocks
Link package :  [link](https://www.npmjs.com/package/sinon).
