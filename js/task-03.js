const images = [
    {
      url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "White and Black Long Fur Cat",
    },
    {
      url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "Orange and White Koi Fish Near Yellow Koi Fish",
    },
    {
      url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "Group of Horses Running",
    },
  ];
  
  const ulEl = document.querySelector(".gallery");
  const picturesEl = document.querySelectorAll(".photo");
  const listEl = document.querySelectorAll(".list");
  
  const makeMarkup = images
    .map(
      (image) =>
        `<li class = "list"><img class="photo" src=${image.url} width = '600' alt='${image.alt}'></img></li>`
    )
    .join("");
  
  ulEl.insertAdjacentHTML("beforeend", makeMarkup);
  
  ulEl.style.display = "flex";
  ulEl.style.flexDirection = "column";
  ulEl.style.listStyle = "none";
  ulEl.style.gap = "20px";