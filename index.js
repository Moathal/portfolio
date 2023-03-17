const mobileMenu = document.getElementById("mobileMenu");
const popUp = document.getElementById("modalBackground");
const title = document.getElementById("title");
const img = document.getElementById("popup-img");
const description = document.getElementById("descriptions");
const liveLink = document.getElementById("modalSeeLiveButton");
const sourceLink = document.getElementById("modalSeeSourceButton");
const form = document.forms["contact-form"];
const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const errorMessage = document.querySelector(".validate-email");
const submitButton = document.querySelector(".button.normal.email");
const blocks = document.querySelector(".workBlocks");
const projTypes = document.querySelector(".specialty.flex");
let projects = "";
const backProjects = [

];
const fullProjects = [
	{
		title: "Blog App",
		image: "icons&imgs/1678895682781.ico",
		imageMin: "icons&imgs/1678895682781.ico",
		description:
			"Blog app is a classic example of a blog website. I created a fully functional website that shows the list of posts and empower readers to interact with them by adding comments and liking posts.",
		descriptionMin:
			"is a classic example of a blog website. I creates a fully functional website that shows the list of posts and empower readers to interact with them by adding comments and liking posts.",
		toolslist: ["css", "html", "bootstrap", "Ruby", "rails"],
		liveLink: "https://blogapp-ggjm.onrender.com/",
		sourceLink: "https://github.com/Moathal/blog",
	},
	{
		title: "Budget App",
		image: "icons&imgs/1677927830202.ico",
		imageMin: "icons&imgs/mobile1677927830202.ico",
		description:
			"A mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.",
		descriptionMin:
			"A mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.",
		toolslist: ["css", "html", "bootstrap", "Ruby", "rails"],
		liveLink: "https://budgetappmoathal.onrender.com",
		sourceLink: "https://github.com/Moathal/Budget-app",
	},
];
const frontProjects = [
	{
		title: "Middle East Weather",
		image: "icons&imgs/Screenshot2023-02-24215705.ico",
		imageMin: "icons&imgs/mobileScreenshot2023-02-24215705.ico",
		description:
			"It is a mobile webapp that shows the weather in time in some countries in middle east. Made using React redux.",
		descriptionMin:
			"This project lists some Middle eastern countries with their time weather.",
		toolslist: ["css", "bootstrap", "React", "Redux"],
		liveLink:
			"https://634e92fdfb2d5a612a53cefe--adorable-gumption-bc705f.netlify.app",
		sourceLink: "https://github.com/Moathal/MiddleEastWeather",
	},
	{
		title: "Dynasty Entertainment",
		image: "icons&imgs/1677246225145.ico",
		imageMin: "icons&imgs/mobile1677246225145.ico",
		description:
			"It is project for rating TV shows and add comments on them. It is responsive and saves data in a Host API the TV series added a 30 anime.",
		descriptionMin:
			"It is project for rating TV shows and add comments on them. It is responsive and saves data in a Host API the TV series added a 30 anime.",
		toolslist: ["css", "html", "bootstrap", "JS", "Webpack"],
		liveLink: "https://moathal.github.io/Capstone2-kanban/dist",
		sourceLink: "https://github.com/Moathal/Capstone2-kanban",
	},
	{
		title: "Todo List",
		image: "icons&imgs/Screenshot2023-02-24150747.ico",
		imageMin: "icons&imgs/mobileScreenshot2023-02-24150747.ico",
		description:
			"Simple to do list that adds removes and moves multiple tasks. It is made using webpack and vanilla JS and connected to storage API to store delete or update tasks.",
		descriptionMin:
			"This website is one of Microverse projects. It is an all free website made to help people in adding deleting or editing their daily tasks.",
		toolslist: ["css", "html", "bootstrap", "JS", "Webpack"],
		liveLink: "https://moathal.github.io/Todo-List",
		sourceLink: "https://github.com/Moathal/Todo-List",
	},
	{
		title: "Awesome Books",
		image: "icons&imgs/Screenshot2023-02-24161736.ico",
		imageMin: "icons&imgs/mobileScreenshot2023-02-24161736.ico",
		description:
			"This project lists some Awesome books and you can add you favorite to it. It is a single page application. Its also consist of a clock implemented without a library.",
		descriptionMin:
			"This project lists some Awesome books and you can add you favorite to it. It is a single page application.",
		toolslist: ["css", "html", "bootstrap", "JS"],
		liveLink: "https://moathal.github.io/Awesome-books/",
		sourceLink: "https://github.com/Moathal/Awesome-books",
	},
	{
		title: "Fast Learn",
		image: "icons&imgs/1660916560236.ico",
		imageMin: "icons&imgs/mobilefastlearn.ico",
		description:
			"This website is one of Microverse projects personalized by myself to make it a guidance for learning web development even if users have no experience. It is an all free website made to help students in finding the right skills required in jobs market of fullstack web development. The courses are available free on the web and our job is to SUBJECTIVELY choose the best. The courses chosen are The Odin Project and CS50 feel free to google them and get to build an opinion about them.",
		descriptionMin:
			"This website is one of Microverse projects personalized by myself to make it a guidance for learning web development even if users have no experience at all. All they need is dedication and time.",
		toolslist: ["css", "html", "bootstrap", "JS"],
		liveLink: "https://Moathal.github.io/Cap-Stone-1",
		sourceLink: "https://github.com/Moathal/Cap-Stone-1",
	},
	{
		title: "JS Scientific Calculator",
		image: "icons&imgs/Screenshot2023-02-23105640.ico",
		imageMin: "icons&imgs/mobileScreenshot2023-02-23105640.ico",
		description:
			"This website is one of Odin Project Assignment mainly focuses on JS, but CSS and HTML is also essential in it. This calculator dose not use any library yet it is semi fully functional scientific calculator except for big numbers",
		descriptionMin:
			"Odin Project Assignment mainly focuses on JS, but CSS and HTML is also essential in it.",
		toolslist: ["css", "html", "JS"],
		liveLink: "https://moathal.github.io/Calculater",
		sourceLink: "https://github.com/Moathal/Calculater",
	},
	{
		title: "Drawing Board",
		image: "icons&imgs/Screenshot2023-02-23133150.ico",
		imageMin: "icons&imgs/Screenshot2023-02-23133150.ico",
		description:
			"Odin Project Assignment based on Etch A Sketch mainly focuses on JS, CSS and HTML. Yet some other features were added to enhance the experience, like coloring erasing ad other colors choose the number of pixels on the board. It works only on PCs",
		descriptionMin:
			"Odin Project Assignment based on Etch A Sketch mainly focuses on JS, CSS and HTML. Yet some other features were added to enhance the experience. It works only on PCs",
		toolslist: ["css", "html", "JS"],
		liveLink: "https://moathal.github.io/itch-a-scetch",
		sourceLink: "https://github.com/Moathal/itch-a-scetch",
	},
];

function addLanguagesList(newList, list) {
	list.innerHTML = "";
	let li = "";
	for (let i = 0; i < newList.length; i += 1) {
		li = document.createElement("li");
		list.appendChild(li);
		li.innerHTML = `<img style="width:27px" src="icons&imgs/${newList[i]}.ico" alt="${newList[i]}">`;
	}
}

function resetProjectsList(projects) {
	blocks.innerHTML = "";
	projects.forEach((project, index) => {
		const div = document.createElement("div");
		const order = ["one", "two"];
		let img = "";
		div.classList.add("featuredImg");
		div.classList.add("flex");
		div.classList.add("column");
		if (index % 2 === 0) {
			order[0] = "one";
			order[1] = "two";
		} else {
			order[0] = "two";
			order[1] = "one";
		}
		if (window.screen.width < 500) {
			img = projects[index].imageMin;
		} else {
			img = projects[index].image;
		}
		div.innerHTML = `<img src="${img}" alt="" class="imgPlaceHolder ${order[0]}" />
    <div class="rightBlock ${order[1]}">
      <h3 class="titlePost">${projects[index].title}</h3>
      <p class="supportingTxt">
        ${project.descriptionMin}
      </p>
      <ul id="list${index}" class="tags flex">
      </ul>
      <button type="button" id="project${index}" class="button normal preview previewButton">
        See project
      </button>
    </div>`;
		blocks.appendChild(div);
		addLanguagesList(
			projects[index].toolslist,
			document.getElementById(`list${index}`)
		);
	});
}

function projectsTypeChanger(type) {
	blocks.innerHTML = "Loading...";
	if (type == "Fullstack") projects = fullProjects;
	if (type == "Backend") projects = backProjects;
	if (type == "Frontend") projects = frontProjects;
	resetProjectsList(projects);
}

projectsTypeChanger("Frontend");

function openModal(id) {
	const index = id.substring(7, id.length);
	const list = document.querySelector(".tags.flex.tags-popUp");
	title.innerText = projects[index].title;
	img.src = projects[index].image;
	description.innerText = projects[index].description;
	addLanguagesList(projects[index].toolslist, list);
	liveLink.setAttribute(
		"onclick",
		`window.location.href="${projects[index].liveLink}"`
	);
	sourceLink.setAttribute(
		"onclick",
		`window.location.href="${projects[index].sourceLink}"`
	);
	popUp.style.display = "block";
}

blocks.addEventListener("click", (e) => {
	if (e.target.tagName == "BUTTON" && e.target.innerText == "See project") {
		openModal(e.target.id);
	}
});

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

function ErrorSpecifier(field, message) {
	if (field === "Full name") fullName.style.borderColor = "red";
	if (field === "E-mail") email.style.borderColor = "red";
	errorMessage.style.color = "red";
	errorMessage.innerText += `Your ${field} ${message} `;
	errorMessage.style.display = "block";
}

function nameFiller() {
	if (firstName.value === "" || lastName.value === "") {
		firstName.value = "";
		lastName.value = "";
		let spacePosition = 0;
		for (let i = 0; i < fullName.value.length; i += 1) {
			if (fullName.value.charAt(spacePosition) !== " ") {
				firstName.value += fullName.value.charAt(i);
				spacePosition += 1;
			} else {
				lastName.value = fullName.value.charAt(i);
			}
		}
		lastName.value = lastName.value.replace(/\s/g, "");
	}
	if (firstName.value === "" || lastName.value === "") {
		ErrorSpecifier("Full name", "should be separated with a space.");
		return false;
	}
	if (fullName.value === "") {
		fullName.value = `${firstName.value} ${lastName.value}`;
	}
	return true;
}

function checkEmail() {
	if (email.value !== email.value.toLowerCase()) {
		ErrorSpecifier("E-mail", "should be in lowercase!");
		return false;
	}
	return true;
}

submitButton.addEventListener("click", () => {
	errorMessage.innerText = "";
	errorMessage.style.display = "none";
	const nameIsValid = nameFiller();
	const emailIsValid = checkEmail();
	if (nameIsValid && emailIsValid) {
		email.style.borderColor = "green";
		fullName.style.borderColor = "green";
		errorMessage.innerText = "";
		errorMessage.style.display = "none";
		form.submit();
	}
});

form.addEventListener("submit", (e) => {
	e.preventDefault();
});

projTypes.addEventListener("click", (e) => {
	if (
		e.target.innerText == "Frontend" ||
		e.target.innerText == "Backend" ||
		e.target.innerText == "Fullstack"
	) {
		projTypes.childNodes.forEach((child) => {
			if (child.tagName == "LI") {
				child.firstElementChild.style.fontWeight = "400";
				child.firstElementChild.style.color = "#FFF";
				child.firstElementChild.style.textDecoration = "none";
				child.firstElementChild.style.cursor = "pointer";
			}
		});
		projectsTypeChanger(e.target.innerText);
		e.target.style.fontWeight = "bold";
		e.target.style.color = "#9390ff";
		e.target.style.textDecoration = "underline overline";
		e.target.style.cursor = "default";
	}
});

document.getElementById("hamburgerButton").addEventListener("click", () => {
	showMobileMenu();
});
document.getElementById("DeskLinkPortfolio").addEventListener("click", () => {
	jumpTo("portfolio");
});

document.getElementById("DeskLinkAbout").addEventListener("click", () => {
	jumpTo("about");
});

document.getElementById("DeskLinkContact").addEventListener("click", () => {
	jumpTo("contact");
});

document.getElementById("close").addEventListener("click", () => {
	closeWindow();
});

document.getElementById("linkPortfolio").addEventListener("click", () => {
	jumpTo("portfolio");
});

document.getElementById("linkAbout").addEventListener("click", () => {
	jumpTo("about");
});

document.getElementById("linkContact").addEventListener("click", () => {
	jumpTo("contact");
});

document.getElementById("linkReach").addEventListener("click", () => {
	jumpTo("reach");
});

document.getElementById("popUpClose").addEventListener("click", () => {
	closeWindow();
});

window.addEventListener("resize", () => {
	if (projects == frontProjects) projectsTypeChanger("Frontend");
	else if (projects == backProjects) projectsTypeChanger("Backend");
	else if (projects == fullProjects) projectsTypeChanger("Fullstack");
});
