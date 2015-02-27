## StarTrek: Journey to Starbase Andromeda
[![Build Status](https://travis-ci.org/zoeames/capstone.svg?branch=master)](https://travis-ci.org/zoeames/capstone)
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

### Live Version
Click [HERE](http://startrek.zoeames.com/) to try the live version!

### Description
A choose-your-own-adventure game based on characters from the StarTrek franchise backed with real physics calculations.  Players choose their captain and ship and then encounter ten stages in an attempt to safely get their ship to starbase Andromeda.

### Screenshots
![Image1](https://raw.githubusercontent.com/zoeames/capstone/master/docs/screenshots/home.png)
![Image2](https://raw.githubusercontent.com/zoeames/capstone/master/docs/screenshots/view.png)


### Technologies
```
Node
```


```
Express
```

```
MongoDB
```

```
AngularJS
```

```
Bootstrap
```
### Models
```
User
```
* .register
* .login
* .fingById
```
Game
```
* .findByGameId
* .findAllByUserId
* .all 
* .create
* .assignShip
* .assignCaptain
* .addStat
```
Captain
```
* .findById
* .all
```
Ship
```
* .findById
* .all

### Features
- [x] register
- [x] login
- [x] logout
- [ ] update profile
- [x] start new games
- [x] view results from previous games
- [x] calculate time elappsed for each stage

### Contributors
- [Zoe Ames](https://github.com/zoeames)

### License
[MIT](LICENSE)

