var url_trim,url_slashed,content=document.getElementsByClassName("content")[0],parallax_container=document.getElementsByClassName("parallax_container")[0],home_hero=document.getElementsByClassName("home_hero")[0],page_location_text=document.getElementsByClassName("page-location-text")[0],cur_tab="nav-home-icon",references={"":{id:"nav-home-icon",page_location_text:"Home",injectJSLoc:"/media/home.js"},recent:{id:"nav-recent-icon",page_location_text:"Recent",injectJSLoc:""},browse:{id:"nav-browse-icon",page_location_text:"Browse",injectJSLoc:""},search:{id:"nav-search-icon",page_location_text:"Search",injectJSLoc:""},"res-iitr":{id:"nav-res-iitr",page_location_text:"IITR",injectJSLoc:"/res-iitr/script.js"},demo:{id:"nav-live-demo",page_location_text:"Live Demos",injectJSLoc:"/demo/script.js"},changelog:{id:"nav-about-whatnew",page_location_text:"What's New",injectJSLoc:"/changelog/script.js"},"about-me":{id:"nav-resource-aboutme",page_location_text:"About Me",injectJSLoc:""},"sign-in":{id:"nav-sign-in",page_location_text:"Sign In",injectJSLoc:"/sign-in/script.js"}};function loadDoc(e,t,n){var i;cur_tab!=t&&((i=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP")).onreadystatechange=function(){if(4==this.readyState&&200==this.status){hideNav(),window.history.pushState(null,null,e.replace("index.html","")),update_nav_highlight(t);var n=document.createElement("div");n.innerHTML=this.responseText,content.innerHTML=n.getElementsByClassName("content")[0].innerHTML,"nav-home-icon"==t?(home_hero.style.display="block",parallax_container.innerHTML='<div class="parallax-img"><img src="/media/walls/16.jpg" class="hero_image" id="hero_image-1"></div>'):(parallax_container.innerHTML="",home_hero.style.display="none"),update_url_trim(),injectJS(references[url_trim].injectJSLoc),page_location_text.innerHTML=references[url_trim].page_location_text,backToTop()}else 4==this.readyState&&displayError(this.status,this.statusText)},i.open("GET",e,!0),i.send())}function update_nav_highlight(e){try{document.getElementById(cur_tab).parentElement.classList.remove("active-list-tile")}catch(e){console.log(e)}try{document.getElementById(e).parentElement.classList.add("active-list-tile"),cur_tab=e}catch(e){console.log(e)}}function update_url_trim(){url_slashed=window.location.href.split("/"),url_trim=url_slashed[3]}function displayError(e,t){parallax_container.style.display="none",home_hero.style.display="none",content.innerHTML='\t<div class="error-container flex justify-center align-center">\t<div>\t<div class="error-message">\t<h1>Something\'s not right :(</h1>\t\t</div>\t\t<h2 id="error-code">Error Code: NULL</h2>\t\t</div>\t\t</div>',document.getElementById("error-code").innerHTML="Error Code: "+e+" "+t,hideNav()}function injectJS(e){var t=document.getElementById("injectedJS");if(t&&t.parentElement.removeChild(t),e&&""!=e){var n=document.createElement("script");n.id="injectedJS",n.type="application/javascript",n.src=e,document.body.appendChild(n)}}window.addEventListener("popstate",function(e){update_url_trim(),"demo"==url_trim&&Projects[url_slashed[4]]?loadDoc("/demo/"+url_slashed[4]+"/index.html",references[url_trim].id,"no_toggle_nav"):loadDoc((""==url_trim?"":"/")+url_trim+"/index.html",references[url_trim].id,"no_toggle_nav")});