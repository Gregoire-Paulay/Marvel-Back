# MARVEL - BACKEND

My Marvel Backend use <a href="https://lereacteur-marvel-api.netlify.app/">the Reacteur's API</a>.

<br/>

## Comics

### Route : /comics

Method : GET
Description : Get a list of comic

| query | info                      | required |
| ----- | ------------------------- | -------- |
| title | search a comic by title   | no       |
| skip  | number of comics to skip  | no       |
| limit | number of comics per page | no       |

### Route : /comics/:comicId

Method: Get
Description: Give details of a Comic

| params  | info             | required |
| ------- | ---------------- | -------- |
| comicId | comic MongoDB id | yes      |

### Route : /comics/:characterId

Method: Get
Description: Give a list of comics where 1 characters appear

| params      | info                 | required |
| ----------- | -------------------- | -------- |
| characterId | character MongoDB id | yes      |

<br/>

## Characters

### Route : /characters

Method : GET
Description : Get a list of characters

| query | info                       | required |
| ----- | -------------------------- | -------- |
| name  | search a character by name | no       |
| skip  | number of comics to skip   | no       |
| limit | number of comics per page  | no       |

### Route : /character/:characterId

Method: Get
Description: Give details of a character

| params      | info                 | required |
| ----------- | -------------------- | -------- |
| characterId | character MongoDB id | yes      |

<br/>

## Users

### Route : /user/signup

Method : POST

Description : add an user in database and log him

| body     | info                 | required |
| -------- | -------------------- | -------- |
| username | username of the user | yes      |
| email    | email of the user    | yes      |
| password | password of the user | yes      |

### Route : /user/login

Method : POST

Description : login an user

| body     | info                 | required |
| -------- | -------------------- | -------- |
| email    | email of the user    | yes      |
| password | password of the user | yes      |

<br/>

## Running the project

Clone this repository :

```
git clone https://github.com/Gregoire-Paulay/Marvel-Back.git
cd Marvel-Back
```

Install packages :

```
npm install

```

When installation is complete, you have to launch :

```
npx nodemon index.js

```

Once server is running on localhost you can use your browser or <a href="https://www.postman.com/">postman</a> to test it

## Star, Fork, Clone & Contribute

Feel free to contribute on this repository. If my work helps you, please give me back with a star. This means a lot to me and keeps me going!
