const pets = [
    {
      id: 1,
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
    },
    {
        id: 2,
      name: "Trouble",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "dino",
      imageUrl: "https://i.pngimg.me/thumb/f/720/6519249363271680.jpg",
    },
    {
      id: 3,
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
    },
    {
      id: 4,
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "dog",
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
    },
    {
      id: 5,
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat",
      imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
    },
    {
      id: 6,
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "dog",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
    },
    {
      id: 7,
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
    },
    {
      id: 8,
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "dino",
      imageUrl: "https://www.thestreet.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTg5MzQxNDMwNzMxMjUzNjUz/anklyosaurus-universal.webp"
    },
    {
      id: 9,
      name: "Sassy",
      color: "Brown",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
    },
    {
      id: 10,
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
    },
    {
      id: 11,
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "dino",
      imageUrl: "http://images.dinosaurpictures.org/1038-Velociraptor_303a.jpg"
    },
    {
      id: 12,
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "dog",
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
    },
    {
      id: 13,
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "dog",
      imageUrl: "https://www.purina.co.nz/sites/default/files/styles/ttt_image_690/public/2021-01/Irish%20Wolfhound1.webp?itok=kZEDwKXI"
    },
    {
      id: 14,
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "cat",
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
    },
    {
      id: 15,
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "cat",
      imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
    },
    {
      id: 16,
      name: "Smokey",
      color: "Brown",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "dino",
      imageUrl: "https://p7.hiclipart.com/preview/408/316/913/digimon-world-next-order-terriermon-agumon-guilmon-digimon.jpg"
    },
    {
     id: 17,
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      type: "cat",
      imageUrl: "https://media.istockphoto.com/id/1361394182/photo/funny-british-shorthair-cat-portrait-looking-shocked-or-surprised.jpg?s=612x612&w=0&k=20&c=6yvVxdufrNvkmc50nCLCd8OFGhoJd6vPTNotl90L-vo="
    },
    {
      id: 18,
      name: "Salem",
      color: "Brown",
      specialSkill: "Proficient in air guitar",
      type: "dino",
      imageUrl: "https://media.istockphoto.com/id/1443562748/photo/cute-ginger-cat.jpg?s=1024x1024&w=is&k=20&c=QaEkKC7lFEBrzzPftMRBVuOZq4FNOnUjOV1VqTmpMfY="
    },
    {
      id: 19,
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "dog",
      imageUrl: "https://hips.hearstapps.com/ghk.h-cdn.co/assets/16/08/gettyimages-530330473.jpg?crop=0.659xw:0.990xh;0.123xw,0.00779xh&resize=980:*"
    },
    {
      id: 20,
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "cat",
      imageUrl: "https://cdn.pixabay.com/photo/2024/03/07/10/38/simba-8618301_1280.jpg"
    },
    {
      id: 21,
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "dino",
      imageUrl: "https://www.snexplores.org/wp-content/uploads/2022/07/070622_cg_dino-arms_feat.jpg"
    },
    {
        id: 22,
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat",
      imageUrl: "https://cdn.pixabay.com/photo/2024/02/28/07/42/european-shorthair-8601492_1280.jpg"
    },
    {
        id: 23,
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "dog",
      imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
    },
    {
        id: 24,
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "dog",
      imageUrl: "https://www.purina.co.nz/sites/default/files/styles/ttt_image_690/public/2021-01/Great%20Dane2.webp?itok=UG8NURsT"
    },
    {
      id: 25,
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "cat",
      imageUrl: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id: 26,
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "dog",
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
    },
    {
        id: 27,
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "dino",
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
    },
    {
        id: 28,
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
    },
    {
        id: 29,
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "cat",
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
    },
    {
        id: 30,
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn’t get weirded out by the word “moist.”",
      type: "dino",
      imageUrl: "https://www.thestreet.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTg5MzQxNDMwNzMxMzE5MjY0/apatosaurus-2022-universal-pictures.webp"
    }
  ];

//  original domstring/ make sure to double check all parts of domstring

  // const targetingApp= document.querySelector("#app")
  // let domString = "";
  // for (const pet of pets) {
  //   domString +=  `<div class="card" style="width: 18rem;">       
  //   <h5 class="card title">${pet.name}</h5>
  //   <img src=${pet.imageUrl} class="card-img-top" alt=${pet.name}>
  //   <div class="card-body"
  //    <h5 class="color">${pet.color}</h5>
  //       <p class="specialSkill">${pet.specialSkill} </p>
  //       <p class="type">${pet.type}</p>
  //  </div>
  //  <button class="btn btn-danger" id="delete--${pet.id}">Delete</button>
  // </div>`;

  // }

  // targetingApp.innerHTML = domString

// Rendering to the dom / utility function

  const renderToDom = (divId, htmlToRender) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = htmlToRender;
  };

// New domstring make sure to double check curly backets and other such symbols

  const cardsOnDom = (array) => {
    let domString = "";
    for (const pet of array) {
      const cardFooter= 
      pet.type === "cat" ? "cat-Footer":
      pet.type === "dog" ? "dog-Footer":
      pet.type === "dino" ? "dino-Footer":
      "";


      domString += `<div class="card" style="width: 18rem;">
      <div class="card-body">
      <p class="card-text">${pet.name}</p>
      <img src="${pet.imageUrl}" class="img-thumbnail" alt="...">
      <p class="specialSkill">${pet.specialSkill} </p>
      <p class="color">${pet.color}</p>
      </div>
      <button class="btn btn-danger mx-auto" id="delete--${pet.id}">Delete</button>
      <div class="cardFooter ${cardFooter}"> ${pet.type}</div>
      </div>`;
    }
   
    // Rendering of the new dom

    renderToDom("#app", domString);
  };
  
// Filter Function

  const filter = (array, pettype) => {
    const petArray = [];

    for (const pet of array) {
      if (pet.type === pettype) {
        petArray.push(pet);
      }
    }
  // Filter function needs this
    return petArray;
  };

  // Targeting buttons on the dom
  cardsOnDom(pets);
  
  const showCatsButton = document.querySelector("#cats"); 
const showDogsButton = document.querySelector("#dogs");
const showDinosButton = document.querySelector("#dinos");
const showAllPetsButton = document.querySelector("#allPets");

showAllPetsButton.addEventListener("click", () => {
  cardsOnDom(pets);
});

showCatsButton.addEventListener("click", () => {
  const catsPets = filter(pets, "cat");
  cardsOnDom(catsPets);
});

showDogsButton.addEventListener("click", () => {
  const dogsPets = filter(pets, "dog");
  cardsOnDom(dogsPets);
});

showDinosButton.addEventListener("click", () => {
  const dinoPets = filter(pets, "dino");
  cardsOnDom(dinoPets);
});

// Form Function 

const form =document.querySelector('form');

const createPet= (e) => {
//  Allforms need this
  e.preventDefault();
   
  const createPetObj= {
    id:pets.length + 1,
    name:document.querySelector("#name").value,
    color:document.querySelector("#color").value,
    specialSkill:document.querySelector("#specialSkill").value,
    type:document.querySelector("#type").value,
    imageUrl:document.querySelector("#imageUrl").value,

  };

  // Add pet function /double check variables when pasting

  pets.push(createPetObj);
  cardsOnDom(pets);
  form.reset();
};
form.addEventListener('submit', createPet);



// delete pet function/make sure to verify variables when pasting.

const app=document.querySelector("#app");

app.addEventListener('click', (e) => {
  if (e.target.id.includes("delete")) {
    const [, id] = e.target.id.split("--");
    const index= pets.findIndex((e) => e.id===Number(id));
    pets.splice(index, 1);
    cardsOnDom(pets);
  }
});
