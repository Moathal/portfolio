const mobileMenu = document.getElementById("mobileMenu");
const popUp = document.getElementById("modalBackground");
const previews = document.querySelectorAll(
  ".button.normal.preview.previewButton"
);
const title = document.getElementById("title");
const img = document.getElementById("popup-img");
const description = document.getElementById("descriptions");
const liveLink = document.getElementById("modalSeeLiveButton");
const sourceLink = document.getElementById("modalSeeSourceButton");
const projects = [
  {
    title: "Multi-Post Stories 1",
    image: "icons&imgs/SnapshootPortfolio.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.",
    toolslist: ["css", "html", "bootstrap", "Ruby"],
    liveLink: "",
    sourceLink: "",
  },
  {
    title: "Multi-Post Stories 2",
    image: "icons&imgs/SnapshootPortfolio.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.",
    toolslist: ["css", "html", "bootstrap", "Ruby"],
    liveLink: "",
    sourceLink: "",
  },
  {
    title: "Multi-Post Stories 3",
    image: "icons&imgs/SnapshootPortfolio.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.",
    toolslist: ["css", "html", "bootstrap", "Ruby"],
    liveLink: "",
    sourceLink: "",
  },
  {
    title: "Multi-Post Stories 4",
    image: "icons&imgs/SnapshootPortfolio.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.",
    toolslist: ["css", "html", "bootstrap", "Ruby"],
    liveLink: "",
    sourceLink: "",
  },
];

function addLanguagesList(newList) {
  const list = document.querySelector(".tags.flex.tags-popUp");
  list.innerHTML = "";
  let li = "";
  for (let i = 0; i < newList.length; i + 1) {
    li = document.createElement("li");
    list.appendChild(li);
    li.innerText = newList[i];
  }
}

function openModal(id) {
  const index = id.substring(7, id.length);
  title.innerText = projects[index].title;
  img.src = projects[index].image;
  description.innerText = projects[index].description;
  addLanguagesList(projects[index].toolslist);
  liveLink.onclick = `location.href=${projects[index].liveLink};`;
  sourceLink.onclick = `location.href=${projects[index].sourceLink};`;
  popUp.style.display = "block";
}
previews.forEach((preview) =>
  preview.addEventListener("click", () => {
    openModal(preview.id);
  })
);

function showMobileMenu() {
  mobileMenu.style.display = "block";
}

function closeWindow() {
  mobileMenu.style.display = "none";
  popUp.style.display = "none";
}

function jumpTo(id) {
  window.location.hash = id;
  closeWindow();
}

document.getElementById("hamburgerButton").onclick = showMobileMenu();
document.getElementById("DeskLinkPortfolio").onclick = jumpTo("portfolio");
document.getElementById("DeskLinkAbout").onclick = jumpTo("about");
document.getElementById("DeskLinkContact").onclick = jumpTo("contact");
document.getElementById("DeskLinkReach").onclick = jumpTo("reach");

document.getElementById("close").onclick = closeWindow();
document.getElementById("LinkPortfolio").onclick = jumpTo("portfolio");
document.getElementById("LinkAbout").onclick = jumpTo("about");
document.getElementById("LinkContact").onclick = jumpTo("contact");
document.getElementById("LinkReach").onclick = jumpTo("reach");
document.getElementById("popUpClose").onclick = closeWindow();
