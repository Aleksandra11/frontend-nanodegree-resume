var name = "Aleksa Kiri";
var role = "Front-End Web Developer";
var formettedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#main").prepend(formattedRole);
$("#main").prepend(formettedName);
//var skills = ["HTML,SCC","JavaScript","teaching"];

var bio = {
	"name" : "Aleksa Kiri",
	"role" : "Web Developer",
	"contacts" : {
		"email" : "aleksakir1@gmail.com",
		"github" : "Aleksandra11",
		"location" : "Richmond"
	},
	"bioPic" : "images/me.jpg",
	"message" : "Welcome to my interactive Resume",
	"skills" : ["HTML","CSS","JavaScript","Teaching"]
};

var bioPic = bio.bioPic;
var formattedPic = HTMLbioPic.replace("%data%", bioPic);
$("#header").append(formattedPic);

var mobile = bio.contacts.mobile;
var formattedMobile = HTMLmobile.replace("%data%", mobile);
$("#topContacts").append(formattedMobile);

var email = bio.contacts.email;
var formattedEmail = HTMLemail.replace("%data%", email);
$("#topContacts").append(formattedEmail);

var github = bio.contacts.github;
var formattedGitHub = HTMLgithub.replace("%data%", github);
$("#topContacts").append(formattedGitHub);

var _location = bio.contacts.location;
var formattedLocation = HTMLlocation.replace("%data%", _location);
$("#topContacts").append(formattedLocation);

var message = bio.message;
var formattedMessage = HTMLWelcomeMsg.replace("%data%", message);
$("#header").append(formattedMessage);

var skills = bio.skills;
if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	
	var formattedSkill = HTMLskills.replace("%data%", skills[0]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%",skills[1]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%",skills[2]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%",skills[3]);
	$("#skills").append(formattedSkill);
}

var education = {
	"schools" : [
		{
			"name" : "Perm Institute of Technology",
			"location" : "Perm, Russia",
			"degree" : "BA",
			"majors" : ["Science in Pshycology"],
			"dates" : 2011,
			"url" : "http://example.com"
		},
		{
			"name" : "Perm State University",
			"location" : "Perm, Russia",
			"degree" : " ",
			"majors" : "mathematics",
			"year" : 2010,
			"url" : "http://example.ru"
		}
		],
	"onlineCourses" : [
		{
			"title" : ["JavaScript Syntax","HTML and CSS"],
			"school" : "Udacity",
			"date" : 2015,
			"url" : "http://www.udacity.com/course/ud804"
		}
	]
}
//$("#main").append(education.lastSchool);

var work = {
	"jobs" : [
		{
			"employer" : "Planet Express",
			"title" : "Fron-End Web Developer",
			"location" : "Virginia, USA",
			"years" : "2015",
			"description" : "___________"
		},
		{
			"employer" : "Special School for handicapped children #4",
			"title" : "Psychologist",
			"location" : "Perm, Russia",
			"years" : "2004 - 2007",
			"description" : "_______________"
		},
		{
			"employer" : "Center Harmony",
			"title" : "Psychologist",
			"location" : "Perm, Russia",
			"years" : "2000 - 2004",
			"description" : "______"
		}
	]
}
function displayWork() {
for (job in work.jobs) {$("#workExperience").append(HTMLworkStart);
var employer = work.jobs[job].employer;
var formattedworkEmployer = HTMLworkEmployer.replace("%data%", employer);
var title = work.jobs[job].title;
var formattedworkTitle = HTMLworkTitle.replace("%data%", title);
var formattedEmployerTitle = formattedworkEmployer + formattedworkTitle;
$(".work-entry:last").append(formattedEmployerTitle);
var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].years);
$(".work-entry:last").append(formattedDates);
var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
$(".work-entry:last").append(formattedDescription);
}	
}
displayWork();

//collect x and y click values and pass them to the logClicks(x,y);
//see clicks show up in the console!
//$(document).click(function(loc) {
  // your code goes here!
//  var x = loc.pageX;
//  var y = loc.pageY;

//  logClicks(x,y);
//});

//.append() internationalizeButton to the main div to change your name to an international version

function inName(name) {
	name = name.split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] +" "+name[1];
}

$("#main").append(internationalizeButton);

var projects = {
	"projects" : [
	{
		"title" : "Portfolio",
		"dates" : 2015,
		"description" : "bla-bla-bla",
		"images" : [
		"http://image.com",
		"http://image2.com"
		]
	},
	{
		"title" : "Arcade Game",
		"dates" : 2015,
		"description" : "bla-bla-bla",
		"images" : [
		"http://image3.com",
		"http://image4.com"
		]
	}
	]
}

projects.display = function() {
	for(project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
	var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
	$(".project-entry:last").append(formattedTitle);
	var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
	$(".project-entry:last").append(formattedDates);
	var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
	$(".project-entry:last").append(formattedDescription);

/*	if (projects.projects[project].images.length > 0) {
		for (image in projects.projects[project].images) {
			var formattedImage = HTMLprojectImage("%data%", projects.projects[project].images[image]);
			$(".project-entry:last").append(formattedImage);
		}
	}
	*/
	}
}
projects.display();

$("#mapDiv").append(googleMap);


