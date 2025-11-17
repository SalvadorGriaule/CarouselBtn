import "./style.css";
import { initNav } from "./timedCarousel";

import imgHolder from "../public/imgHolder.jpg";
import imgHolder2 from "../public/imgHolder2.jpg";
import imgHolder3 from "../public/imgHolder3.jpg";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<main class="h-screen">
 <div class="h-full w-full flex justify-center items-center">
  <div
    id="contentCarousel"
    class="w-4/5 lg:w-3/5 bg-[rgba(0,0,0,0.35)] backdrop-blur-md rounded-md p-2"
  >
    <div
      class="flex overflow-hidden scroll-smooth snap-mandatory snap-always snap-x"
      id="carousel"
    >
      <img src=${imgHolder} alt="" class="mr-3 snap-center" />
      <img src=${imgHolder2} alt="" class="mr-3 snap-center" />
      <img src=${imgHolder3} alt="" class="mr-3 snap-center" />
    </div>
  </div>
  </div>
</main>
`;

const carousel = document.getElementById("carousel");
const contentCar = document.getElementById("contentCarousel");

initNav(contentCar, carousel);
