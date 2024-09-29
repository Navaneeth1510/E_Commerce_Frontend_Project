console.log("a");
let c = false;
console.log(c);
const a = [
  {
    id: 1,
    title: "OnePlus 11R 5G ",
    price: 39999,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, in nobis dolorum quibusdam, voluptatibus omnis unde repudiandae odit dolores quia odio magni voluptas.",
    img: "./Images/OnePlus11R.jpeg",
  },
  {
    id: 2,
    title: "Realme Narzo60 5G ",
    price: 23999,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, in nobis dolorum quibusdam, voluptatibus omnis unde repudiandae odit dolores quia odio magni voluptas.",
    img: "./Images/RealmeNar.jpeg",
  },
  {
    id: 3,
    title: "Boat Airdopes Max ",
    price: 1299,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, in nobis dolorum quibusdam, voluptatibus omnis unde repudiandae odit dolores quia odio magni voluptas.",
    img: "./Images/BoatEar.jpeg",
  },
  {
    id: 4,
    title: "JBL tune 230Nc",
    price: 2300,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, in nobis dolorum quibusdam, voluptatibus omnis unde repudiandae odit dolores quia odio magni voluptas.",
    img: "./Images/JBLTune.jpeg",
  },
  {
    id: 5,
    title: "URBAN 5000mAH Power Bank ",
    price: 4000,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, in nobis dolorum quibusdam, voluptatibus omnis unde repudiandae odit dolores quia odio magni voluptas.",
    img: "./Images/PwerBank.jpeg",
  },
  {
    id: 6,
    title: "n TyppTroe-C to Type-C Adapter",
    price: 999,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, in nobis dolorum quibusdam, voluptatibus omnis unde repudiandae odit dolores quia odio magni voluptas.",
    img: "./Images/Adapter.jpeg",
  },
  {
    id: 7,
    title: "iPhone 14",
    price: 163990,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, in nobis dolorum quibusdam, voluptatibus omnis unde repudiandae odit dolores quia odio magni voluptas.",
    img: "./Images/iphone.jpeg",
  },
  {
    id: 8,
    title: "IQOO Neo 7 Pro 5G",
    price: 33999,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, in nobis dolorum quibusdam, voluptatibus omnis unde repudiandae odit dolores quia odio magni voluptas.",
    img: "./Images/iQOO.jpeg",
  },
];
const mains = document.querySelector(".mainss");

const boxes = (element) => {
  const heading = document.createElement("div");
  heading.className = "heading";
  heading.textContent = element.title;

  const price = document.createElement("div");
  price.className = "price";
  price.textContent = element.price;

  const desc = document.createElement("div");
  desc.className = "desc";
  desc.textContent = element.desc;

  const right = document.createElement("div");
  right.className = "right";

  const left = document.createElement("div");
  left.className = "left";
  left.style.backgroundImage = `url(${element.img})`;
  const box = document.createElement("div");
  box.className = "box";

  right.appendChild(heading);
  right.appendChild(price);
  right.appendChild(desc);

  box.appendChild(left);
  box.appendChild(right);
  mains.appendChild(box);
};
a.forEach(boxes);
function compareByName(a, b) {
  const nameA = a.title.split("")[0].toUpperCase(); // Convert name to uppercase for case-insensitive sorting
  const nameB = b.title.split("")[0].toUpperCase();

  if (nameA < nameB) {
    return -1;
  } else if (nameA > nameB) {
    return 1;
  } else {
    return 0;
  }
}
function compareByNameRev(a, b) {
  const nameA = a.title.split("")[0].toUpperCase(); // Convert name to uppercase for case-insensitive sorting
  const nameB = b.title.split("")[0].toUpperCase();

  if (nameA > nameB) {
    return -1;
  } else if (nameA < nameB) {
    return 1;
  } else {
    return 0;
  }
}

function priceRev(a, b) {
  const A = a.price; // Convert  to uppercase for case-insensitive sorting
  const B = b.price;

  if (A > B) {
    return -1;
  } else if (A < B) {
    return 1;
  } else {
    return 0;
  }
}

function price(a, b) {
  const A = a.price; // Convert  to uppercase for case-insensitive sorting
  const B = b.price;

  if (A < B) {
    return -1;
  } else if (A > B) {
    return 1;
  } else {
    return 0;
  }
}

document.querySelector(".asc").addEventListener("click", () => {
  a.sort(compareByName);
  console.log(a);
  c = "fea";
  console.log(c);
  while (mains.firstChild) {
    mains.removeChild(mains.firstChild);
  }
  a.forEach(boxes);
});

document.querySelector(".pricesRev").addEventListener("click", () => {
  a.sort(priceRev);
  console.log(a);
  c = "fea";
  console.log(c);
  while (mains.firstChild) {
    mains.removeChild(mains.firstChild);
  }
  a.forEach(boxes);
});

document.querySelector(".prices").addEventListener("click", () => {
  a.sort(price);
  console.log(a);
  c = "fea";
  console.log(c);
  while (mains.firstChild) {
    mains.removeChild(mains.firstChild);
  }
  a.forEach(boxes);
});

document.querySelector(".des").addEventListener("click", () => {
  a.sort(compareByNameRev);
  console.log(a);
  c = "fea";
  console.log(c);
  while (mains.firstChild) {
    mains.removeChild(mains.firstChild);
  }
  a.forEach(boxes);
});