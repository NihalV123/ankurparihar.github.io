var changeData = [
	{
		Date:"26/02/2019",
		changes:[
			"Added manifest.json",
			"Improved user navigation",
			"Performance improvement"
		]
	},
	{
		Date:"23/02/2019",
		changes:[
			"Added sitemap.xml",
			"Added robots.txt"
		]
	},
	{
		Date:"19/02/2019",
		changes:[
			"Date of last update on home ribbons",
			"Improved modular structure of website",
			"Scripts are now more distributed and localized"
		]
	},
	{
		Date:"11/02/2019",
		changes:[
			"Site published on github"
		]
	},
	{
		Date:"09/02/2019",
		changes:[
			"Navigation scrolling smooth and stabilized",
			"Added LinkedIn connect option"
		]
	},
	{
		Date:"04/02/2019",
		changes:[
			"Programmed course content mechanism"
		]
	},
	{
		Date:"03/02/2019",
		changes:[
			"Added site favicon",
			"Added recent upload ribbon on homepage"
		]
	},
	{
		Date:"02/02/2019",
		changes:[
			"Live demo section programmed",
			"First live demo fractal-generator is up and running",
			"Added footer"
		]
	},
	{
		Date:"28/01/2019",
		changes:[
			"Added Live Demo Section",
			"Resolved minor scrolling issue"
		]
	},
	{
		Date:"27/01/2019",
		changes:[
			"Resolved scroll to top button issue"
		]
	},
	{
		Date:"26/01/2019",
		changes:[
			"Added avatar",
			"IITR Resources gets subjects and semesters display [Content to be added]",
			"Fixed minor bug in footer causing extra margin for smartphone devices",
			"Improved layout for smartphone devices"
		]
	},
	{
		Date:"24/01/2019",
		changes:[
			"Added error handling. Website shows error when content is not found",
			"Mobile optimization (css) for homepage",
			"Added site description"
		]
	},
	{
		Date:"22/01/2019",
		changes:[
			"Minor bug fixes in toolbar",
			"Minor bug fixes in directory change mechanism"
		]
	},
	{
		Date:"21/01/2019",
		changes:[
			"Designed dynamic refresh mechanism",
			"Added directory structure"
		]
	},
	{
		Date:"18/01/2019",
		changes:[
			"Site's basic template developed. For desktop (chrome browser) only.",
			"Added Changelog section"
		]
	}
];

function printChangeLog(){
	var changelog_container = document.querySelector(".changelog_container.general.page");
	changeData.forEach(change => {
		// console.log(change.Date);
		var elem = document.createElement("div");
		elem.classList.add("change_log");
		var changeList = '';
		change.changes.forEach(desc => {
			changeList = changeList + '<li>'+desc+'</li>';
		});
		elem.innerHTML = `
			<div class="change_header">`+change.Date+`</div>
			<ol>
				`+changeList+`
			</ol>`;
		changelog_container.appendChild(elem);
	});
}

printChangeLog();