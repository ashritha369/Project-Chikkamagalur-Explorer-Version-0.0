import { dataOfTemples } from "./templeData.js";

console.log(dataOfTemples[0].templePic1);

let element = document.getElementById("specific-detail-div");
console.log(element);
// let markup = `<div id="carousel-of-specific-query-imgs-div">
// <div id="carousel-div">
//   <!-- Intro Carousel of Images from bootstrap -->
//   <div
//     id="carouselExampleIndicators"
//     class="carousel slide"
//     data-bs-ride="carousel"
//   >
//     <div class="carousel-indicators">
//       <button
//         type="button"
//         data-bs-target="#carouselExampleIndicators"
//         data-bs-slide-to="0"
//         class="active"
//         aria-current="true"
//         aria-label="Slide 1"
//       ></button>
//       <button
//         type="button"
//         data-bs-target="#carouselExampleIndicators"
//         data-bs-slide-to="1"
//         aria-label="Slide 2"
//       ></button>
//       <button
//         type="button"
//         data-bs-target="#carouselExampleIndicators"
//         data-bs-slide-to="2"
//         aria-label="Slide 3"
//       ></button>
//     </div>
//     <div class="carousel-inner">
//       <div class="carousel-item active">
//         <img
//           src="${dataOfTemples[0].templePic1}"
//           class="d-block w-100"
//           alt="..."
//         />
//       </div>

//     <button
//       class="carousel-control-prev"
//       type="button"
//       data-bs-target="#carouselExampleIndicators"
//       data-bs-slide="prev"
//     >
//       <span
//         class="carousel-control-prev-icon"
//         aria-hidden="true"
//       ></span>
//       <span class="visually-hidden">Previous</span>
//     </button>
//     <button
//       class="carousel-control-next"
//       type="button"
//       data-bs-target="#carouselExampleIndicators"
//       data-bs-slide="next"
//     >
//       <span
//         class="carousel-control-next-icon"
//         aria-hidden="true"
//       ></span>
//       <span class="visually-hidden">Next</span>
//     </button>
//   </div>
// </div>
// </div>`;

// console.log(markup);

// element.insertAdjacentHTML("beforeend", markup);
