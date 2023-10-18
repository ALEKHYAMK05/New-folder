//console.dir(document);
//console.log(document.URL);
//console.log(document.title);
//document.title = 123 ;
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//var header = document.getElementById('main-header');
//header.style['border-bottom'] = "3px solid black";
//var title= document.getElementById('header-title');
//title.style.fontWeight = 'bold';

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
//var titles =document.querySelectorAll('.title');

//console.log(titles);
//titles[0].textContent = 'Hello';

//var secondItem = document.querySelectorAll('#items li')[1];
//secondItem.style.color = 'green';

//var oddItems = document.querySelectorAll('#items li:nth-child(odd)');
//for (var i = 0; i < oddItems.length; i++) {
  //oddItems[i].style.backgroundColor = 'green';
//}

//var itemList = document.querySelector('#items');
//console.log(itemList.parentElement);
//itemList.parentElement.style.backgroundColor = 'blue';
//console.log(itemList.parentElement.parentElement);//

//console.log(itemList.childNodes);


//console.log(itemList.children);
//console.log(itemList.children[1]);
//itemList.children[1].style.backgroundColor = 'yellow';

//first child 
//console.log(itemList.firstChild);

//first element child
//console.log(itemList.lastElementChild);
//itemList.lastElementChild.textContent = 'Hello 1';
document.addEventListener("DOMContentLoaded", function() {
  var newDiv = document.createElement('div');
  newDiv.className = 'hello';
  newDiv.id = 'hello1';
  newDiv.setAttribute('title', 'Hello Div');
  var newDivText = document.createTextNode('Hello world');
  newDiv.appendChild(newDivText);

  var container = document.querySelector('.container'); // Select by class
  var h1 = container.querySelector('h1'); // Select within container

  if (container && h1) {
      container.insertBefore(newDiv, h1);
  } else {
      console.error("One or both of the elements (container and h1) were not found.");
  }


var item1 = document.querySelector('#items li:first-child'); // Select the first item in the list
    var helloWorldSpan = document.createElement('span');
    helloWorldSpan.textContent = 'Hello world';

    // Insert "Hello world" span before "Item 1"
    item1.parentNode.insertBefore(helloWorldSpan, item1);
});