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
	{
		title: "SleepOver API",
		image: "icons&imgs/WhatsAppImage2023-02-02at7.17.00PM.webp",
		imageMin: "icons&imgs/WhatsAppImage2023-02-02at7.17.00PM.webp",
		description:
			"Sleepover is an App developed using React for Front-End and Ruby on Rails for Back-End as two separated repositories by making API backend.",
		descriptionMin:
			"Sleepover is an App developed using React for Front-End and Ruby on Rails for Back-End as two separated repositories.",
		toolslist: ["Ruby", "pgsql", "rails"],
		liveLink: "None",
		sourceLink: "https://github.com/Moathal/hotel-room-reservation",
	},
	{
		title: "Catalog of my things",
		image: "icons&imgs/Screenshot2023-03-24144009.webp",
		imageMin: "icons&imgs/Screenshot2023-03-24144009.webp",
		description:
			"Catalog of my things is a project that uses console app to keep a record of different types of things you own: books, music albums, movies, and games. built using only Object oriented programming.",
		descriptionMin:
			"Catalog of my things is a project that uses console app to keep a record of different types of things you own: books, music albums, movies, and games. built using only Object oriented programming.",
		toolslist: ["Ruby", "pgsql"],
		liveLink: "None",
		sourceLink: "https://github.com/Moathal/Catalog-of-my-things",
	},
	{
		title: "School Library",
		image: "icons&imgs/Screenshot2023-03-24141702.webp",
		imageMin: "icons&imgs/Screenshot2023-03-24141702.webp",
		description:
			"Imagine that you are the librarian of OOP University, and you need a tool to record what books are in the library and who borrows them. In terminal, this app will allow you to Add new students or teachers. Add new books. Save records of who borrowed a given book and when.",
		descriptionMin:
			"Imagine that you are the librarian of OOP University, and you need a tool to record what books are in the library and who borrows them in terminal.",
		toolslist: ["Ruby", "pgsql"],
		liveLink: "None",
		sourceLink: "https://github.com/Moathal/School-library",
	},
];
const fullProjects = [
	{
		title: "Blog App",
		image: "icons&imgs/1678895682781.webp",
		imageMin: "icons&imgs/1678895682781.webp",
		description:
			"Blog app is a classic example of a blog website. I created a fully functional website that shows the list of posts and empower readers to interact with them by adding comments and liking posts.",
		descriptionMin:
			"is a classic example of a blog website. I creates a fully functional website that shows the list of posts and empower readers to interact with them by adding comments and liking posts.",
		toolslist: ["css", "html", "bootstrap", "Ruby", "rails"],
		liveLink: "https://blogapp-ggjm.onrender.com/",
		sourceLink: "https://github.com/Moathal/blog",
	},
	{
		title: "Private Event",
		image: "icons&imgs/2023-12-04201257.webp",
		imageMin: "icons&imgs/2023-12-04200639.webp",
		description:
			"A site lets user create events private or public, and attend events. An event can be attended by many users, and take place at specific location, date and time. All pages are real time updated and all uses are notified thanks to noticed and hotrails gems. Tried to use as much association case in the database as possible to push active record to its peak. Used sass, Bootstrap and stimulus for styling and responsiveness all embedded in webpack.",
		descriptionMin:
			"a site similar to a private Eventbrite which allows users to create events and then manage user signups.",
		toolslist: ["css", "html", "bootstrap", "Ruby", "rails", "redis"],
		liveLink: "None",
		sourceLink: "https://github.com/Moathal/private-event",
	},
	{
		title: "Recipe App",
		image: "icons&imgs/2023-12-04165957.webp",
		imageMin: "icons&imgs/2023-12-04170057.webp",
		description:
			"Recipe app keeps track of all your recipes, ingredients, and inventory. It will allow you to save ingredients, keep track of what you have, create recipes, and generate a shopping list based on what you have and what you are missing from a recipe.",
		descriptionMin:
			"Recipe app keeps track of all your recipes, ingredients, and inventory. It will allow you to save ingredients, keep track of what you have, create recipes, and generate a shopping list based on what you have and what you are missing from a recipe.",
		toolslist: ["css", "html", "tailwind", "Ruby", "rails"],
		liveLink: "None",
		sourceLink: "https://github.com/edi-sipka/Recipe_app",
	},
	{
		title: "Budget App",
		image: "icons&imgs/1677927830202.webp",
		imageMin: "icons&imgs/mobile1677927830202.webp",
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
		image: "icons&imgs/Screenshot2023-02-24215705.webp",
		imageMin: "icons&imgs/mobileScreenshot2023-02-24215705.webp",
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
		image: "icons&imgs/1677246225145.webp",
		imageMin: "icons&imgs/mobile1677246225145.webp",
		description:
			"It is project for rating TV shows and add comments on them. It is responsive and saves data in a Host API the TV series added a 30 anime.",
		descriptionMin:
			"It is project for rating TV shows and add comments on them. It is responsive and saves data in a Host API the TV series added a 30 anime.",
		toolslist: ["css", "html", "bootstrap", "JS", "Webpack"],
		liveLink: "https://moathal.github.io/Dynasty-Entertainment/dist",
		sourceLink: "https://github.com/Moathal/Dynasty-Entertainment",
	},
	{
		title: "Todo List",
		image: "icons&imgs/Screenshot2023-02-24150747.webp",
		imageMin: "icons&imgs/mobileScreenshot2023-02-24150747.webp",
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
		image: "icons&imgs/Screenshot2023-02-24161736.webp",
		imageMin: "icons&imgs/mobileScreenshot2023-02-24161736.webp",
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
		image: "icons&imgs/1660916560236.webp",
		imageMin: "icons&imgs/mobilefastlearn.webp",
		description:
			"This website is one of Microverse projects personalized by myself to make it a guidance for learning web development even if users have no experience. It is an all free website made to help students in finding the right skills required in jobs market of fullstack web development. The courses are available free on the web and our job is to SUBJECTIVELY choose the best. The courses chosen are The Odin Project and CS50 feel free to google them and get to build an opinion about them.",
		descriptionMin:
			"This website is one of Microverse projects personalized by myself to make it a guidance for learning web development even if users have no experience at all. All they need is dedication and time.",
		toolslist: ["css", "html", "bootstrap", "JS"],
		liveLink: "https://Moathal.github.io/Fast-Learn",
		sourceLink: "https://github.com/Moathal/Fast-Learn",
	},
	{
		title: "JS Scientific Calculator",
		image: "icons&imgs/Screenshot2023-02-23105640.webp",
		imageMin: "icons&imgs/mobileScreenshot2023-02-23105640.webp",
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
		image: "icons&imgs/Screenshot2023-02-23133150.webp",
		imageMin: "icons&imgs/Screenshot2023-02-23133150.webp",
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
		li.innerHTML = `<img style="width:40px" src="icons&imgs/${newList[i]}.webp" alt="${newList[i]}">`;
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
		div.innerHTML = `<img style="border-radius: 12px 12px 12px 12px" src="${img}" alt="" class="imgPlaceHolder ${order[0]}" />
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
	if (type == "All")  projects = [...frontProjects, ...backProjects, ...fullProjects]
	resetProjectsList(projects);
}

projectsTypeChanger("All");

function openModal(id) {
	const index = id.substring(7, id.length);
	const list = document.querySelector(".tags.flex.tags-popUp");
	title.innerText = projects[index].title;
	img.src = projects[index].image;
	description.innerText = projects[index].description;
	addLanguagesList(projects[index].toolslist, list);
	if (projects[index].liveLink !== "None") {
		liveLink.removeAttribute("disabled");
		liveLink.setAttribute(
			"onclick",
			`window.open('${projects[index].liveLink}', '_blank')`
		);
	} else {
		liveLink.setAttribute("disabled", "disabled");
	}

	sourceLink.setAttribute(
		"onclick",
		`window.open('${projects[index].sourceLink}', '_blank')`
	);
	popUp.style.opacity = 0;
	popUp.style.display = "block";
	popUp.style.transform = "translateY(100%)";
	setTimeout(function () {
		popUp.style.opacity = 1;
		popUp.style.transform = "translateY(0)";
	}, 50); // add a small delay before the opacity and transform changes
	popUp.style.transition = "opacity 0.3s ease, transform 0.15s ease";
}

blocks.addEventListener("click", (e) => {
	if (e.target.tagName == "BUTTON" && e.target.innerText == "See project") {
		openModal(e.target.id);
	}
});

function showMobileMenu() {
		mobileMenu.style.opacity = 0;
		mobileMenu.style.display = "block";
		mobileMenu.style.transform = "translateX(200%)";
		setTimeout(function () {
			mobileMenu.style.opacity = 1;
			mobileMenu.style.transform = "translateY(0)";
		}, 50); // add a small delay before the opacity and transform changes
		mobileMenu.style.transition = "opacity 0.3s ease, transform 0.15s ease";
}



function closeWindow(id) {
	let showed = "";
	if (id == "popUpClose") showed = popUp;
	else if (id == "close") showed = mobileMenu; 
	showed.style.opacity = 1;
	showed.style.transition = "transform 0.3s ease, opacity 0.15s ease";
	id == "popUpClose"
		? (showed.style.transform = "translateY(-100%)")
		: (mobileMenu.style.transform = "translateX(200%)");
	setTimeout(function () {
		showed.style.opacity = 0;
	}, 50); // add a small delay before the opacity change
	setTimeout(function () {
		showed.style.display = "none";
		showed.style.transform = "none";
	}, 350); // add a delay to hide the modal after the transition is complete
}

function jumpTo(id) {
	window.location.hash = id;
	closeWindow("close");
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
		e.target.innerText == "Fullstack" ||
		e.target.innerText == "All"
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
	closeWindow("close");
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
	closeWindow("popUpClose");
});

window.addEventListener("resize", () => {
	if (projects == frontProjects) projectsTypeChanger("Frontend");
	else if (projects == backProjects) projectsTypeChanger("Backend");
	else if (projects == fullProjects) projectsTypeChanger("Fullstack");
	else if (projects == [...frontProjects, ...backProjects, ...fullProjects])
		projectsTypeChanger("All");
});
