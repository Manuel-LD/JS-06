const IMAGE_URL = "https://placehold.co/200"
const CARD_CONTAINER = document.getElementById("container");

const users = [
    {
        id: 1,
        user_name: 'User1',
        description: 'lorem ipsum',
        age: '46',
        fav_music: {
            bands: [
                'Band 1', 'Band 2', 'Band 3', 'Band 4'
            ]
        }
    },
    {
        id: 2,
        user_name: 'User LastName',
        description: 'Lorem lorem lorem',
        age: '23',
        fav_music: {
            bands: [
               'Band 1', 'Band 2', 'Band 3', 'Band 4'
            ]
        }
    }
]

const createImg =()=>{
    const image = document.createElement("img");
    image.src = IMAGE_URL;
    image.alt = "Placeholder user photo";
    return image;
};

const createInfo =(user)=>{
    const descContainer = document.createElement("div");
    const userName = document.createElement("h3");
    const description = document.createElement("p");
    const  age = document.createElement("p");
    userName.textContent = user.user_name;
    description.textContent = user.description;
    age.textContent = user.age;
    descContainer.append(userName,description,age);
    return descContainer;
};

const createListMusic =(bands)=>{
    const bandsList = document.createElement("ul")
    bands.forEach(e => {
        const item = document.createElement("li");
        item.textContent = e;
        bandsList.appendChild(item);
    });
    return bandsList;
};

const createCardData = (user)=>{
    const cardContainer = document.createElement("div");
    const img = createImg();
    const inf = createInfo(user);
    const list = createListMusic(user.fav_music.bands);
    cardContainer.append(img, inf, list);
    return cardContainer;
};

const viewCards = (users)=>{
    users.forEach(user => {
        const cardUser=createCardData(user);
        CARD_CONTAINER.appendChild(cardUser);
    });
};

viewCards(users);