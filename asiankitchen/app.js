const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Kebabı",
    category: "China",
    price: 9999.99,
    img:
      "https://www.nizampide.com/wp-content/uploads/2018/07/karışık-kebap-ızgara-porsiyon-nizam-pide-sütlaç-istanbul-beyoğlu-istiklal-caddesi.jpg",
    desc: `Dan dan kebab, serving with everything `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

/* <div class="menu-items col-lg-6 col-sm-12">
           <img  src="https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg" alt="Tteokbokki" class="photo">
            <div class="menu-info">
              <div class="menu-title">
                <h4>Tteokbokki</h4>
                <h4 class="price">10.99</h4>
              </div>
              <div class="menu-text">
                Spicy rice cakes, serving with fish cake.
              </div>
            </div>
          </div> */

// {
//   id: 9,
//   title: "Doroyaki",
//   category: "Japan",
//   price: 3.99,
//   img:
//     "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
//   desc: `Red bean paste dessert, serving with honey.`,
// },

function menuSite(item) {
  let items = document.querySelector(".section-center")
  items.replaceChildren()

  menu.forEach(element => {

    if (item == element.category || item == "All") {

      let menuDiv = document.createElement("div")
      menuDiv.classList.add("menu-items", "col-lg-6", "col-sm-12")

      let menuImg = document.createElement("img")
      menuImg.classList.add("photo")
      menuImg.alt = element.title
      menuImg.src = element.img
      menuDiv.appendChild(menuImg)

      let menuInfo = document.createElement("div")
      menuInfo.classList.add("menu-info")

      let menuTitle = document.createElement("div")
      menuTitle.classList.add("menu-title")
      let menuH41 = document.createElement("h4")
      menuH41.innerHTML = element.title
      let menuH42 = document.createElement("h4")
      menuH42.classList.add("price")
      menuH42.innerHTML = element.price
      menuTitle.append(menuH41, menuH42)

      let menuText = document.createElement("div")
      menuText.classList.add("menu-text")
      menuText.innerHTML = element.desc
      menuInfo.append(menuTitle, menuText)
      menuDiv.appendChild(menuInfo)

      items.appendChild(menuDiv)
    }
  })
}

const buttons = ["All", "Korea", "Japan", "China"];
let menuButton = document.querySelector(".btn-container")

buttons.forEach(element => {
  let menuButtons = document.createElement("button")
  menuButtons.classList.add("btn", "btn-outline-dark", "btn-item")
  menuButtons.setAttribute("data-id", element)
  menuButtons.innerHTML = element
  menuButtons.addEventListener("click", () => {
    menuSite(element)

  })

  menuButton.appendChild(menuButtons)
})

menuSite("All")