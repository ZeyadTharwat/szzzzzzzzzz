const filterbtn = document.querySelector(".filterbtn");
const filter = document.querySelector(".filter");
const exitfilter = document.querySelector(".exitfilter");
const filters = document.querySelector(".filters");

const buildings = Array.from(document.querySelectorAll(".building"));
const buildingscount = buildings.length;
const apartmentData = [
  {
    name: "first-building",
    id: "1",
    camere: "3",
    price: "68.400",
    etaj: " 4 / 8",
    stadiu: " Semi-finisat",
    utila: " 62 m",
    oferta: " De vanzare",
    bai: " 2",
    balcoane: " 1",
    compartimentare: " Decomandat",
    detalii:
      "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. It Has Survived Not Only Five Centuries, But Also The Leap Into Electronic Typesetting, Remaining Essentially Unchanged. It Was Popularised In The 1960s With The Release Of Letraset Sheets Containing Lorem",
  },
  {
    name: "second-building",
    id: "2",
    camere: "2",
    price: "98.400",
    etaj: " 3 / 8",
    stadiu: " Semi-finisat",
    utila: " 62 m",
    oferta: " De vanzare",
    bai: " 2",
    balcoane: " 1",
    compartimentare: " Decomandat",
    detalii:
      "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. It Has Survived Not Only Five Centuries, But Also The Leap Into Electronic Typesetting, Remaining Essentially Unchanged. It Was Popularised In The 1960s With The Release Of Letraset Sheets Containing Lorem",
  },
  {
    name: "third-building",
    id: "3",
    camere: "5",
    price: "49.400",
    etaj: " 5 / 8",
    stadiu: " Semi-finisat",
    utila: " 62 m",
    oferta: " De vanzare",
    bai: " 2",
    balcoane: " 1",
    compartimentare: " Decomandat",
    detalii:
      "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. It Has Survived Not Only Five Centuries, But Also The Leap Into Electronic Typesetting, Remaining Essentially Unchanged. It Was Popularised In The 1960s With The Release Of Letraset Sheets Containing Lorem",
  },
  {
    name: "fourth-building",
    id: "4",
    camere: "7",
    price: "50.000",
    etaj: " 6 / 8",
    stadiu: " Semi-finisat",
    utila: " 62 m",
    oferta: " De vanzare",
    bai: " 2",
    balcoane: " 1",
    compartimentare: " Decomandat",
    detalii:
      "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. It Has Survived Not Only Five Centuries, But Also The Leap Into Electronic Typesetting, Remaining Essentially Unchanged. It Was Popularised In The 1960s With The Release Of Letraset Sheets Containing Lorem",
  },
];

window.onload = () => {
  const buildingData = apartmentData[0];
  buildings[0].classList.add("active");
  const div = document.createElement("div");
  div.setAttribute("id", "removeDiv");
  div.innerHTML = `                
    <div class="lg:max-w-full max-w-[550px] mx-auto sm:pl-0 pl-2.5 hidden sm:block apartmentinfo mt-14 sm:mt-0">
    <div class="mt-5">
      <div class="flex mb-5 pb-0.5 justify-between">
        <div>
          <h1 class="font-semibold xl:text-xl text-xxs mb-1 ">Apartment</h1>
          <h1 class="font-bold text-base xl:text-2xl">${buildingData.camere} Camere</h1>
        </div>
        <div
          class="flex self-start items-center xl:gap-2 gap-0.5 rounded-10px bg-gray-10 pr-2 pl-[5px] py-[3px] xl:py-2 xl:pr-4 xl:pl-4"
        >
          <div><img src="Assets/copy.svg" class="xl:w-5 w-auto" alt="" /></div>
          <h1 class="text-gray-20 xl:text-xl text-xxs font-semibold">
            Copiaza Link-Ul
          </h1>
        </div>
      </div>
      <div class="flex justify-between mb-6">
        <div>
          <h1 class="text-xxs xl:text-base font-medium mb-2">
            Etaj: <span class="font-semibold">${buildingData.etaj}</span>
          </h1>
          <h1 class="text-xxs xl:text-base font-medium mb-2">
            Stadiu: <span class="font-semibold">${buildingData.stadiu}</span>
          </h1>
          <h1 class="text-xxs xl:text-base font-medium mb-2">
            Suprafata Utila: <span class="font-semibold">${buildingData.utila}</span>
          </h1>
          <h1 class="text-xxs xl:text-base font-medium mb-2">
            Tip Oferta: <span class="font-semibold">${buildingData.oferta}</span>
          </h1>
          <h1 class="text-xxs xl:text-base font-medium">
            Nr. Bai: <span class="font-semibold">${buildingData.bai}</span>
          </h1>
        </div>
        <div>
          <h1 class="text-xxs xl:text-base font-medium mb-2">
            Etaj: <span class="font-semibold">${buildingData.etaj}</span>
          </h1>
          <h1 class="text-xxs xl:text-base font-medium mb-2">
            Stadiu: <span class="font-semibold">${buildingData.stadiu}</span>
          </h1>
          <h1 class="text-xxs xl:text-base font-medium mb-2">
            Suprafata Utila: <span class="font-semibold">${buildingData.utila}</span>
          </h1>
          <h1 class="text-xxs xl:text-base font-medium mb-2">
            Compartimentare: <span class="font-semibold">${buildingData.compartimentare}</span>
          </h1>
          <h1 class="text-xxs xl:text-base font-medium">
            Nr. Balcoane: <span class="font-semibold">${buildingData.balcoane}</span>
          </h1>
        </div>
        <div
          class="flex rounded-tl-20px gap-2 rounded-bl-20px mt-auto bg-main text-white self-start pl-[14px] pt-2.5 pb-1.5 pr-4 items-center"
        >
          <img src="Assets/Phone.svg" alt="" />
          <h1 class="font-semibold xl:text-base xs:text-sm text-xxs">+40 752 925 928</h1>
        </div>
      </div>
    </div>
    <div class="mb-3 sm:mb-0">
      <h1 class="mb-2 font-extrabold text-xxs xl:text-lg">Alte Detalii</h1>
      <p
        class="font-normal text-xxs17px xl:text-lg xl:pr-0 xs:pr-[30px] pr-0 capitalize max-w-fit"
      >
      ${buildingData.detalii}      
      </p>
    </div>
  </div>
`;
  document.querySelector(".pricetag").innerHTML += `
<div class="absolute z-50 bg-main pt-5 pb-4 px-[9px] border-[3px] border-white rounded-full bottom-[11px]
right-[15px]">
  <h1 class="text-base text-white font-semibold xl:text-xl">${buildingData.price}</h1>
  <div class="flex">
    <img class="mx-auto" src="Assets/moneySign.svg" alt="" />
  </div>
</div>
`;

  document.querySelector("#swiper-wrapper").innerHTML += `
  <div class="swiper-slide !w-full ">
    <img class="object-cover w-full h-full" src="Assets/Interior.png" alt="" />
  </div>
  <div class="swiper-slide !w-full ">
    <img class="object-cover w-full h-full" src="Assets/Interior.png" alt="" />
  </div>
  <div class="swiper-slide !w-full ">
    <img class="object-cover w-full h-full" src="Assets/Interior.png" alt="" />
  </div>
  <div class="swiper-slide !w-full ">
    <img class="object-cover w-full h-full" src="Assets/Interior.png" alt="" />
  </div>
  <div class="swiper-slide !w-full ">
    <img class="object-cover w-full h-full" src="Assets/Interior.png" alt="" />
  </div>
`;
  document.getElementById("right-side").appendChild(div);
};

for (let i = 0; i < buildingscount; i += 1) {
  buildings[i].onclick = getbuildingID;
}
function getbuildingID() {
  document.getElementById("removeDiv").remove();
  buildings.forEach((building) => building.classList.remove("active"));
  this.classList.toggle("active");
  const buildingData = apartmentData.find(
    (building) => building.name === this.id
  );
  const div = document.createElement("div");
  div.setAttribute("id", "removeDiv");

  div.innerHTML = `                <div class="lg:max-w-full max-w-[550px] mx-auto sm:pl-0 pl-2.5 hidden sm:block apartmentinfo mt-14 sm:mt-0">
  <div class="mt-5">
    <div class="flex mb-5 pb-0.5 justify-between">
      <div>
        <h1 class="font-semibold xl:text-xl text-xxs mb-1 ">Apartment</h1>
        <h1 class="font-bold text-base xl:text-2xl">${buildingData.camere} Camere</h1>
      </div>
      <div
        class="flex self-start items-center xl:gap-2 gap-0.5 rounded-10px bg-gray-10 pr-2 pl-[5px] py-[3px] xl:py-2 xl:pr-4 xl:pl-4"
      >
        <div><img src="Assets/copy.svg" class="xl:w-5 w-auto" alt="" /></div>
        <h1 class="text-gray-20 xl:text-xl text-xxs font-semibold">
          Copiaza Link-Ul
        </h1>
      </div>
    </div>
    <div class="flex justify-between mb-6">
      <div>
        <h1 class="text-xxs xl:text-base font-medium mb-2">
          Etaj: <span class="font-semibold">${buildingData.etaj}</span>
        </h1>
        <h1 class="text-xxs xl:text-base font-medium mb-2">
          Stadiu: <span class="font-semibold">${buildingData.stadiu}</span>
        </h1>
        <h1 class="text-xxs xl:text-base font-medium mb-2">
          Suprafata Utila: <span class="font-semibold">${buildingData.utila}</span>
        </h1>
        <h1 class="text-xxs xl:text-base font-medium mb-2">
          Tip Oferta: <span class="font-semibold">${buildingData.oferta}</span>
        </h1>
        <h1 class="text-xxs xl:text-base font-medium">
          Nr. Bai: <span class="font-semibold">${buildingData.bai}</span>
        </h1>
      </div>
      <div>
        <h1 class="text-xxs xl:text-base font-medium mb-2">
          Etaj: <span class="font-semibold">${buildingData.etaj}</span>
        </h1>
        <h1 class="text-xxs xl:text-base font-medium mb-2">
          Stadiu: <span class="font-semibold">${buildingData.stadiu}</span>
        </h1>
        <h1 class="text-xxs xl:text-base font-medium mb-2">
          Suprafata Utila: <span class="font-semibold">${buildingData.utila}</span>
        </h1>
        <h1 class="text-xxs xl:text-base font-medium mb-2">
          Compartimentare: <span class="font-semibold">${buildingData.compartimentare}</span>
        </h1>
        <h1 class="text-xxs xl:text-base font-medium">
          Nr. Balcoane: <span class="font-semibold">${buildingData.balcoane}</span>
        </h1>
      </div>
      <div
        class="flex rounded-tl-20px gap-2 rounded-bl-20px mt-auto bg-main text-white self-start pl-[14px] pt-2.5 pb-1.5 pr-4 items-center"
      >
        <img src="Assets/Phone.svg" alt="" />
        <h1 class="font-semibold xl:text-base xs:text-sm text-xxs">+40 752 925 928</h1>
      </div>
    </div>
  </div>
  <div class="mb-3 sm:mb-0">
    <h1 class="mb-2 font-extrabold text-xxs xl:text-lg">Alte Detalii</h1>
    <p
      class="font-normal text-xxs17px xl:text-lg xl:pr-0 xs:pr-[30px] pr-0 capitalize max-w-fit"
    >
    ${buildingData.detalii}      
    </p>
  </div>
</div>




`;
  document.querySelector(".pricetag").innerHTML += `
    <div class="absolute z-50 bg-main pt-5 pb-4 px-[9px] border-[3px] border-white rounded-full bottom-[11px]
    right-[15px]">
      <h1 class="text-base text-white font-semibold xl:text-xl">${buildingData.price}</h1>
      <div class="flex">
        <img class="mx-auto" src="Assets/moneySign.svg" alt="" />
      </div>
    </div>
`;
  document.querySelector("#swiper-wrapper").innerHTML += `
  <div class="swiper-slide !w-full ">
    <img class="object-cover w-full h-full" src="Assets/Interior.png" alt="" />
  </div>
  <div class="swiper-slide !w-full ">
    <img class="object-cover w-full h-full" src="Assets/Interior.png" alt="" />
  </div>
  <div class="swiper-slide !w-full ">
    <img class="object-cover w-full h-full" src="Assets/Interior.png" alt="" />
  </div>
  <div class="swiper-slide !w-full ">
    <img class="object-cover w-full h-full" src="Assets/Interior.png" alt="" />
  </div>
  <div class="swiper-slide !w-full ">
    <img class="object-cover w-full h-full" src="Assets/Interior.png" alt="" />
  </div>
    `;
  document.getElementById("right-side").appendChild(div);
}

filterbtn.addEventListener("click", () => {
  filters.classList.toggle("hidden");
  filter.classList.toggle("hidden");
  exitfilter.classList.toggle("hidden");
});

const interiorbtn = document.querySelector(".interior");
const specificatiibtn = document.querySelector(".specificatii");

function showInterior() {
  const apartmentinfo = document.querySelector(".apartmentinfo");
  const apartmentimgs = document.querySelector(".apartmentimgs");

  interiorbtn.classList.add("bg-main");
  interiorbtn.classList.add("text-white");

  specificatiibtn.classList.remove("bg-main");
  specificatiibtn.classList.remove("text-white");

  apartmentimgs.classList.add("show-flex");
  apartmentinfo.classList.remove("show-block");
}

function showSpec() {
  const apartmentinfo = document.querySelector(".apartmentinfo");
  const apartmentimgs = document.querySelector(".apartmentimgs");

  interiorbtn.classList.remove("bg-main");
  interiorbtn.classList.remove("text-white");

  specificatiibtn.classList.add("bg-main");
  specificatiibtn.classList.add("text-white");

  apartmentinfo.classList.add("show-block");
  apartmentimgs.classList.add("hide");
  apartmentimgs.classList.remove("show-flex");
}
