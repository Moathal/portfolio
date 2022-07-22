const mobileMenu = document.getElementById('mobileMenu');
const popUp = document.getElementById('modalBackground');
const previews = document.querySelectorAll(
  '.button.normal.preview.previewButton',
);
const title = document.getElementById('title');
const img = document.getElementById('popup-img');
const description = document.getElementById('descriptions');
const liveLink = document.getElementById('modalSeeLiveButton');
const sourceLink = document.getElementById('modalSeeSourceButton');
const form = document.forms['contact-form'];
const firstName = document.getElementById('fname');
const lastName = document.getElementById('lname');
const fullName = document.getElementById('name');
const email = document.getElementById('email');
const errorMessage = document.querySelector('.validate-email');
const submitButton = document.querySelector('.button.normal.email');
const projects = [
  {
    title: 'Multi-Post Stories 1',
    image: 'icons&imgs/SnapshootPortfolio.png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.",
    toolslist: ['css', 'html', 'bootstrap', 'Ruby'],
    liveLink: '',
    sourceLink: '',
  },
  {
    title: 'Multi-Post Stories 2',
    image: 'icons&imgs/SnapshootPortfolio.png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.",
    toolslist: ['css', 'html', 'bootstrap', 'Ruby'],
    liveLink: '',
    sourceLink: '',
  },
  {
    title: 'Multi-Post Stories 3',
    image: 'icons&imgs/SnapshootPortfolio.png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.",
    toolslist: ['css', 'html', 'bootstrap', 'Ruby'],
    liveLink: '',
    sourceLink: '',
  },
  {
    title: 'Multi-Post Stories 4',
    image: 'icons&imgs/SnapshootPortfolio.png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.",
    toolslist: ['css', 'html', 'bootstrap', 'Ruby'],
    liveLink: '',
    sourceLink: '',
  },
];

function addLanguagesList(newList) {
  const list = document.querySelector('.tags.flex.tags-popUp');
  list.innerHTML = '';
  let li = '';
  for (let i = 0; i < newList.length; i += 1) {
    li = document.createElement('li');
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
  popUp.style.display = 'block';
}
previews.forEach((preview) => preview.addEventListener('click', () => {
  openModal(preview.id);
}));

function showMobileMenu() {
  mobileMenu.style.display = 'block';
}

function closeWindow() {
  mobileMenu.style.display = 'none';
  popUp.style.display = 'none';
}

function jumpTo(id) {
  window.location.hash = id;
  closeWindow();
}

function ErrorSpecifier(field, message) {
  if (field === 'Full name') fullName.style.borderColor = 'red';
  if (field === 'E-mail') email.style.borderColor = 'red';
  errorMessage.style.color = 'red';
  errorMessage.innerText += `Your ${field} ${message} `;
  errorMessage.style.display = 'block';
}

function checkEmail() {
  if (email.value !== email.value.toLowerCase()) {
    ErrorSpecifier('E-mail', 'should be in lowercase!');
    return false;
  }
  return true;
}

submitButton.addEventListener('click', () => {
  errorMessage.innerText = '';
  errorMessage.style.display = 'none';
  const nameIsValid = nameFiller();
  const emailIsValid = checkEmail();
  if (nameIsValid && emailIsValid) {
    email.style.borderColor = 'green';
    fullName.style.borderColor = 'green';
    errorMessage.innerText = '';
    errorMessage.style.display = 'none';
    form.submit();
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
});

document.getElementById('hamburgerButton').addEventListener('click', () => {
  showMobileMenu();
});
document.getElementById('DeskLinkPortfolio').addEventListener('click', () => {
  jumpTo('portfolio');
});

document.getElementById('DeskLinkAbout').addEventListener('click', () => {
  jumpTo('about');
});

document.getElementById('DeskLinkContact').addEventListener('click', () => {
  jumpTo('contact');
});

document.getElementById('close').addEventListener('click', () => {
  closeWindow();
});

document.getElementById('linkPortfolio').addEventListener('click', () => {
  jumpTo('portfolio');
});

document.getElementById('linkAbout').addEventListener('click', () => {
  jumpTo('about');
});

document.getElementById('linkContact').addEventListener('click', () => {
  jumpTo('contact');
});

document.getElementById('linkReach').addEventListener('click', () => {
  jumpTo('reach');
});

document.getElementById('popUpClose').addEventListener('click', () => {
  closeWindow();
});
