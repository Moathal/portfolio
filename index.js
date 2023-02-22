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
const projects = [
	{
		title: "Fast Learn",
		image: "icons&imgs/1660916560236.png",
		imageMin: "icons&imgs/mobilefastlearn.png",
		description:
			"This website is one of Microverse projects personalized by myself to make it a guidance for learning web development even if users have no experience. It is an all free website made to help students in finding the right skills required in jobs market of fullstack web development. The courses are available free on the web and our job is to SUBJECTIVELY choose the best. The courses chosen are The Odin Project and CS50 feel free to google them and get to build an opinion about them.",
		descriptionMin:
			"This website is one of Microverse projects personalized by myself to make it a guidance for learning web development even if users have no experience at all. All they need is dedication and time.",
		toolslist: ["css", "html", "bootstrap", "JavaScript"],
		liveLink: "https://Moathal.github.io/Cap-Stone-1",
		sourceLink: "https://github.com/Moathal/Cap-Stone-1",
	},
];

function addLanguagesList(newList, list) {
	list.innerHTML = "";
	let li = "";
	for (let i = 0; i < newList.length; i += 1) {
		li = document.createElement("li");
		list.appendChild(li);
		li.innerText = newList[i];
	}
}

function resetProjectsList() {
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
      <ul class="tags flex">
      </ul>
      <button type="button" id="project${index}" class="button normal preview previewButton">
        See project
      </button>
    </div>`;
		blocks.appendChild(div);
		addLanguagesList(
			projects[index].toolslist,
			document.querySelector(".tags.flex")
		);
	});
}

resetProjectsList();

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

blocks.addEventListener('click', (e) => {
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
	resetProjectsList();
});
