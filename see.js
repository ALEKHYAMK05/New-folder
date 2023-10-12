console.dir(document);
console.log(document.URL);
console.log(document.title);
document.title = 123 ;
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
var header = document.getElementById('main-header');
header.style['border-bottom'] = "3px solid black";
var title= document.getElementById('header-title');
title.style.fontWeight = 'bold';

//var li = document.querySelectorAll('li');
//console.log(li);
//console.log(li[1]);
//li[1].textcontent = 'hello2';
//li[1].style.fontWeight='bold';
//li[1].style.backgroundColor = 'yellow';


// Loop through the list items and apply styles
//for (var i = 0; i < li.length; i++) {
  //items[i].style.backgroundColor = '#f4f4f4';
//}
var titles =document.querySelectorAll('.title');

console.log(titles);
titles[0].textContent = 'Hello';

var secondItem = document.querySelectorAll('#items li')[1];
secondItem.style.color = 'green';

var oddItems = document.querySelectorAll('#items li:nth-child(odd)');
for (var i = 0; i < oddItems.length; i++) {
  oddItems[i].style.backgroundColor = 'green';
}


