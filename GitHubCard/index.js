import axios from 'axios'

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

// axios.get("https://api.github.com/users/mikelikescode")
// .then( response => console.log(response.data))
// .catch( error => console.error(error))

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

axios.get("https://api.github.com/users/mikelikescode")
 .then( response => document.querySelector('.cards').appendChild(createCard(response.data)))
 .catch( error => console.error(error))




/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ["jpalomar","Kogeki","Hyphena","shanepaton","TechCodeBlocks"];

followersArray.forEach( follower => {
  axios.get(`https://api.github.com/users/${follower}`)
 .then( response => document.querySelector('.cards').appendChild(createCard(response.data)))
 .catch( error => console.error(error))
})

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function createCard ({avatar_url,name,login,location,html_url,followers,following,bio }){

  const card = document.createElement('div')
  card.classList.add('card')

  const userImage = document.createElement('img')
  userImage.src = avatar_url

  const cardInfo = document.createElement('div')
  cardInfo.classList.add('card-info')
  
  const realName = document.createElement('h3')
  realName.classList.add('name')
  realName.textContent = name

  const userName = document.createElement('p')
  userName.classList.add('username')
  userName.textContent = login

  const locationElement = document.createElement('p')
  locationElement.textContent = location

  const profile = document.createElement('p')
  profile.textContent = "Profile: "

  const pageLink = document.createElement('a')
  pageLink.href = html_url
  pageLink.textContent = `${html_url}`

  const followersElement = document.createElement('p')
  followersElement.textContent = "Followers: " + followers

  const followingElement = document.createElement('p')
  followingElement.textContent = "Following: " + following

  const userBio = document.createElement('p')
  userBio.textContent = "Bio: " +  bio

  profile.appendChild(pageLink)

  cardInfo.appendChild(realName);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(locationElement);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(followersElement);
  cardInfo.appendChild(followingElement);
  cardInfo.appendChild(userBio);

  card.appendChild(userImage);
  card.appendChild(cardInfo);

  return card
}


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
