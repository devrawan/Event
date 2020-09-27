
 const tab1 =  document.querySelector("body > div > ul > li.tab.active");
 const con1 = document.querySelector("#content-1");

 const tab2 = document.querySelector("body > div > ul > li:nth-child(2)");
 const con2 = document.querySelector("#content-2");

const tab3 = document.querySelector("body > div > ul > li:nth-child(3)");
const con3= document.querySelector("#content-3");

const tab4 = document.querySelector("body > div > ul > li:nth-child(4)");
const con4 = document.querySelector("#content-4");

var currentIndex = 0;
var count=0;
 var tabs = document.querySelectorAll( " body > div > ul > li")
 var tabsObj = [...tabs];

 var contents = document.querySelectorAll( " .content")
 var contentsObj = [...contents];

 tabsObj.forEach( function(tab , i) {
    tab.addEventListener("click" , function(view) {
        if (currentIndex == -1){
            currentIndex = i;
            tabsObj[i].classList.add("active");
            contentsObj[i].classList.add("active");
        }else{
            tabsObj[currentIndex].classList.remove("active");
            tabsObj[i].classList.add("active");

            contentsObj[currentIndex].classList.remove("active");
            contentsObj[i].classList.add("active");

            currentIndex = i;
        }
    });
 });


