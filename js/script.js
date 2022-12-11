"use strict"
// Масиви
// let someArray = ["😀", "😉", "😮‍💨"];
/*
// console.log(someArray);
// console.log(someArray.length);
// console.log(typeof someArray);
// console.log(someArray[2]);
*/
/*
for (let i = 0; i < someArray.length; ++i) {
	console.log(someArray[i]);
} //працює подібно до forEach, але не можна отримати індекс
*/
/*
// someArray.forEach(someArray => {
// 	console.log(someArray);
// });
someArray.forEach((someArray, index) => {
	console.log(someArray);
	console.log(index);
});
*/
/*
someArray.push("🥳", "🤥");//Метод додавання даних в масив (додаються в кінець)
console.log(someArray);
someArray.pop();//Метод видалення даних з масиву (видаляє останній елемент)
console.log(someArray);
someArray.unshift("😯", "😵");//метод додавання даних в початок масиву
console.log(someArray);
someArray.shift();//метод видалення даних з початок масиву
console.log(someArray);
//shift та unshift виконуються довше тому що кожному із елементів потрібно переназначити індекс
*/
/*
let a = Math.random();
let b = Math.random();
if (a > b) {
	someArray.push("🥳", "🤥");
} else {
	someArray.pop();
}
console.log(someArray);
*/
/*
delete someArray[1]; //метод видаляє елемент і залишає по собі порожнє місце
console.log(someArray);
*/
/*
someArray.splice(1, 1); // метод видаляє елемент і "здвигає" дані масиву
console.log(someArray);
*/
/*
someArray.splice(0, 1, "🤥");// видалення елемента і заміна його іншим
console.log(someArray);
*/
/*
someArray.splice(1, 0, "🤥"); // додавання елемента на конкретну позицію в масиві
console.log(someArray);
*/
/*
let someOtherArray = someArray.slice(1, 2);// метод створює новий масив і копіює в нього дані з іншого масиву
console.log(someOtherArray);
*/
/*
let arrOne = ["😀", "😉", "😮‍💨"];
let arrTwo = arrOne.concat("👊");
console.log(arrTwo);
*/
/*
let arrOne = ["😀", "😉", "😮‍💨"];
let arrTwo = arrOne.concat('🤥', '👊', '🥳');
console.log(arrTwo);
*/
/*
let someArray = ["😀", "😉", "😮‍💨", "🤥", "👊", "🥳"];
console.log(someArray.indexOf("😮‍💨")); // повертає індекс об'єкта
console.log(someArray.lastIndexOf("😮‍💨"));
console.log(someArray.includes("👊")); // Повертає true or false
if (someArray.includes("👊")) {
	someArray.push("👳‍♀️");
}
console.log(someArray);
if (!someArray.includes("💪")) {
	someArray.push("🧠");
}
console.log(someArray);
*/
/*
let cars = [
	{ brand: "Opel", model: "Astra", year: 2008, price: 5000 },
	{ brand: "Toyota", model: "Camry", year: 2010, price: 5000 },
	{ brand: "BMW", model: "X3", year: 2010, price: 15000 },
];
let carOne = cars.find(function (item, index, array) {
	return item.year === 2010;
});
let carTwo = cars.findIndex(function (item, index, array) {
	return index.year === 2010;
});
console.log(carOne);
console.log(carTwo);
*/
/*
let cars = [
	{ brand: "Opel", model: "Astra", year: 2008, price: 5000 },
	{ brand: "Toyota", model: "Camry", year: 2010, price: 5000 },
	{ brand: "BMW", model: "X3", year: 2010, price: 15000 },
];
let result = cars.filter(function (item, index, array) {
	return item.year <= 2009;
});
console.log(result);
*/
/*
let someArray = [-92, -51, -10, 3, 94, -30, -18, 16];
console.log(someArray.sort());
function compareNumeric(a, b) {
	// console.log(`Порівнюємо ${a} і ${b}`);
	// if (a > b) return 1;
	// if (a == b) return 0;
	// if (a < b) return -1;
	return a - b;
}
console.log(someArray.sort(compareNumeric));//в метод sort передаєтсяь функція порівнянн чисел
*/
/*
let someArray = ["Галя", "Еліна", "Тетяна", "Ь", "Марія", "Антон", "Назар"];
let result = someArray.map(function (item, index, array) {
	return item[0];//Повертає масив із перших символів рядка
});
console.log(someArray);
console.log(result);
*/
/*
let someString = "Сивочолоий, гетьман перемоги, Петро";
let someArr = someString.split(',');//Перетворення рядка в масив
console.log(someArr);
*/
/*
let someArray = ["батько", "наш", "Бандера"];
let someString = someArray.join(' ');
console.log(someString);
*/
//Задача № 2
/*
let users = ["Ваня", "Іштван",];//Створення нового масиву
users.forEach(function (item, index, array) {
	if (!users.includes("Оля")) {
		users.push("Оля"); //Додавання в кінець масиву новго елемента
	}
	if (users.includes("Іштван")) {
		users.splice(1, 1, "Петя"); // Заміна Іштвана на Петю
	}
});
let removedUser = users.splice(0, 1); //Видалення першого елемента масива
console.log(removedUser);//виведення в консоль видаленого елемента
users.unshift("Маша", "Паша");//додвавння двох елементів в початок масиву
console.log(users);
*/
/*
let users = ["Ваня", "Іштван",];//Створення нового масиву
users.forEach(function (item, index, array) {
	if (!users.includes("Оля")) {
		users.push("Оля"); //Додавання в кінець масиву новго елемента
	} else if (users.includes("Іштван")) {
		users.splice(1, 1, "Петя"); // Заміна Іштвана на Петю
	}
	if (!users.includes("Іштван")) {
		let removedUser = users.splice(0, 1);//Видалення першого елемента масива
		console.log(removedUser);//виведення в консоль видаленого елемента
		users.unshift("Маша", "Паша");//додвавння двох елементів в початок масиву
	}
});
console.log(users);
*/
//Функції
/*
function showMessage() {
	console.log("В небесех Черкащини!");
}
showMessage();
*/
/*
let randomNumOne = Math.random() * 10;
let randomNumTwo = Math.random() * 20;
function calacSum(a, b) {
	showSum(a + b);
}
function showSum(sum) {
	console.log(sum);
}
calacSum(randomNumOne, randomNumTwo);
*/
/**
function showName(name = "Петро Порубаний") {
	console.log(name);
}
showName("Гетьман перемоги");
showName(); // виклик фунеції із значенням за замвченням
*/
/**
let randomOne = Math.random() * 10;
let randomTwo = Math.random() * 20;
function divideNums(a, b) {
	return b / a;
}
function showResult(share) {
	console.log(share);
}
let divideShareResult = divideNums(randomTwo, randomOne);
showResult(divideShareResult);
*/
/*
let randomNumOne, randomNumTwo;

function getNumbers() {
	function getRandomNumOne() {
		randomNumOne = Math.random();
	}
	function getRandomNumTwo() {
		randomNumTwo = Math.random();
	}
	getRandomNumOne();
	getRandomNumTwo();
}
getNumbers()

let smileOne, smileTwo;

function getSmiles() {
	function getSmileOne() {
		smileOne = "😀";
	}
	function getSmileTwo() {
		smileTwo = "😮‍💨";
	}
	getSmileOne();
	getSmileTwo();
}
getSmiles();

function showSmile() {
	function showSmileOne() {
		console.log(smileOne);
	}
	function showSmileTwo() {
		console.log(smileTwo);
	}
	showSmileOne();
	showSmileTwo();
}

if (randomNumOne > randomNumTwo) {
	console.log(smileOne);
} else {
	console.log(smileTwo);
}
*/
/*
let showTextArrow = (text) => console.log(text);
showTextArrow("text");
*/
/**
function showMood(text, smile) {
	console.log(`${text}, ${smile}`);
	setTimeout(showMood, 1000, text, smile);
}
setTimeout(showMood, 1000, 'Сьогодні настрій:', '😀');
*/
/**
//Задача № 3
let showMessage;
function getMessage() {
	showMessage = function () {
		console.log('Сообщение');
	}
}
getMessage();
showMessage();
*/
//DOM & BOM
/*
function showWindowSize() {
	function showWindowWidth() {
		let windowWidth = window.innerWidth;
		console.log(`Ширина вікна: ${windowWidth}px`);
	}
	showWindowWidth();
	function showWindowHeight() {
		let windowHeight = window.innerHeight;
		console.log(`Висота вікна: ${windowHeight}px`);
	}
	showWindowHeight();
}
showWindowSize();

function showSystemData() {
	function showBrowserData() {
		console.log(navigator.userAgent);
	}
	showBrowserData();
	function showPlatdormData() {
		console.log(navigator.platform);
	}
	showPlatdormData();
}
showSystemData();
*/
// console.log(location.href);
// location.href = "https://google.com";
// Задача № 1 Дізнатись ширину полоси прокрутки
/*
function scrollWidth() { // Створюємо функцію 
	const mainElement = document.documentElement; //Отримуємо в константу документ 
	const mainElementWidth = mainElement.clientWidth; // Отримуємо ширину вікна браузера без урахування ширини полоси прокрутки
	const windowWidth = window.innerWidth; // Отримуємо ширину вікна з урахуванням ширин полоси прокрутки
	function getDiff() { // Функція для отриммання різниці ширини вікна браузера та ширини вікна
		const difference = windowWidth - mainElementWidth; // Операція отримання різниці ширини вікна та ширини браузера.
		console.log(difference);
	}
	getDiff();
}
scrollWidth();
*/
/*
Задача № 2 Прокрутка сторінк через 1 секунду після завантаження
function scrollWindow() {
	window.scrollBy(0, 100);
	// const windowScrolTop = window.pageYOffset;
	// console.log(windowScrolTop);
}
setTimeout(scrollWindow, 1000);
*/
//Задача № 3
/*
function showDocItemsCoord() { // Створюмо функцію для виводу в консоль координат трьох об'єктів на сторінці
	function getItemsCoord() { // Створюємо функцію для отримання координат трьох об'єктів
		const pageItemArray = document.querySelector('.array__text'); // Отримуємо в змінну об'єкт № 1
		const pageItemFunction = document.querySelector('.function__text'); // Отримуємо в змінну об'єкт № 2
		const pageItemDom = document.querySelector('.dom__text');// Отримуємо в змінну об'єкт № 3
		const getArrayText = pageItemArray.getBoundingClientRect().top; // Отримуємо координати об'єкта № 1
		const getFunctionText = pageItemFunction.getBoundingClientRect().top; // Отримуємо координати об'єкта № 2
		const getDomText = pageItemDom.getBoundingClientRect().top; // Отримуємо координати об'єкта № 3
		const itemsCoordArray = [getArrayText, getFunctionText, getDomText]; // Створюємо масив і передаємо в нього координати об'єктів 
		if (Array.isArray(itemsCoordArray)) { // Робимо перевірку чи передані дані є масивом, якщо так то виводимо їх в консоль
			console.log(itemsCoordArray);
		}
	}
	getItemsCoord();
}
showDocItemsCoord();
*/
/*
function showWindowItemsCoord() { 
	function getItemsCoord() {
		const headerTitle = document.querySelector('.header__title');
		const arrayTitle = document.querySelector('.array__title');
		const fuctionTitle = document.querySelector('.function__title');
		const getHeaderTitleCoord = headerTitle.getBoundingClientRect();
		const getArrayTitleCoord = arrayTitle.getBoundingClientRect();
		const getfuctionTitleCoord = fuctionTitle.getBoundingClientRect();
		const itemsCoordArray = [getHeaderTitleCoord, getArrayTitleCoord, getfuctionTitleCoord];
		if (Array.isArray(itemsCoordArray)) {
			console.log(itemsCoordArray);
		}
	}
	getItemsCoord();
}
showWindowItemsCoord();
*/
/*
const htmlElement = document.documentElement; // До тегу html
const headElement = document.head;// До тегу head
const bodyElement = document.body; //До тегу body
console.log(bodyElement);
*/
/*
const bodyElement = document.body;
const firstChild = bodyElement.firstElementChild; // перший елемент обгортка wrapper
const lastChild = bodyElement.lastElementChild; // останній елемент тег script
console.log(firstChild);
console.log(lastChild);
*/
/*
const bodyElement = document.body;
const childNodes = bodyElement.children;
console.log(childNodes);
for (let i = 0; i < childNodes.length; ++i) {
	console.log(childNodes[i]);
}
for (let childNode of childNodes) {
	console.log(childNode);
}
*/
/*
const bodyElement = document.body;
const childNodes = bodyElement.childNodes;// збирає колекцію разом з тексовими вузлами
console.log(childNodes);
for (let childNode of childNodes) {
	console.log(childNode);
}
*/
/*
const bodyElement = document.body;
const previousSiblingNode = bodyElement.previousSibling; //попередній елемент текстовий вузол
const nextSiblingNode = bodyElement.nextSibling; // наступний елемент відсутній (null)
const parentNode = bodyElement.parentNode; // батьківський елемен html
console.log(previousSiblingNode);
console.log(nextSiblingNode);
console.log(parentNode);
*/
/*
const someObject = document.querySelector('.header__title');
console.log(someObject);
*/
/*
const menuItem = document.querySelector('.menu__item');//querySelector отримує перший знайдений елемент
*/
/*
const menuItem = document.querySelectorAll('.menu__item');//querySelectorAll отримує колекцію знайдених елементів
console.log(menuItem);
menuItem.forEach(menuItem => {
	menuItem.style.color = '#000'; // зміна CSS властивостей за допомогою додавання стилів інлайново в HTML
	menuItem.style.fontSize = '30px';
});
*/
/*
const menuList = document.querySelector('.menu__list');
const isNavParent = menuList.closest('nav');
if (isNavParent) {
	console.log('Так, список знаходиться у тегові NAV.');
} else {
	console.log('Ні, список знаходиться у іншому тегові.');
}
*/
/*
const menuItem = document.querySelectorAll('.menu__item');
menuItem.forEach((menuItem, index) => {
	menuItem.innerHTML = `<ol>Індекс: ${index}</ol>`;//Заміна усіх елемнтів в отриманому об'єкті
});
*/
/*
let newObject = document.createElement('ol'); // створення нового об'єкту
newObject.innerHTML = `<li>Пункт 1</li>
											<li>Пункт 2</li>
											<li>Пункт 3</li>`
	;
console.log(newObject);
const subList = document.querySelector('.menu__item');
// subList.before(newObject);// вставка новго об'єкта в середу ul перед першим li (не правильно по сементиці)
// subList.after(newObject);// вставка новго об'єкта в середу ul після першого li (не правильно по сементиці)
// subList.prepend(newObject);//вставка новго об'єкта в середу першого li перед контентом ()
//subList.append(newObject); //вставка новго об'єкта в середу першого li після контенту ()
*/
const subList = document.querySelector('.menu__item');
/*
subList.insertAdjacentHTML("beforebegin", `
			<ul class="menu__sublist sublis-menu">
				<li class="sublis-menu__item">Item1</li>
				<li class="sublis-menu__item">Item2</li>
				<li class="sublis-menu__item">Item3</li>
			</ul>
`);//вставка коду в середу ul перед першим li (як в before)
*/
/*
subList.insertAdjacentHTML("afterbegin", `
			<ul class="menu__sublist sublis-menu">
				<li class="sublis-menu__item">Item1</li>
				<li class="sublis-menu__item">Item2</li>
				<li class="sublis-menu__item">Item3</li>
			</ul>
`);//вставка коду в середу першого li перед контеном (як в prepend)
*/
/*
subList.insertAdjacentHTML("beforeend", `
			<ul class="menu__sublist sublis-menu">
				<li class="sublis-menu__item">Item1</li>
				<li class="sublis-menu__item">Item2</li>
				<li class="sublis-menu__item">Item3</li>
			</ul>
`);//вставка коду в середу першого li після контенту (як в append)
const sublisMenu = document.querySelector('.sublis-menu');
console.log(sublisMenu);
*/
/*
subList.insertAdjacentHTML("afterend", `
			<ul class="menu__sublist sublis-menu">
				<li class="sublis-menu__item">Item1</li>
				<li class="sublis-menu__item">Item2</li>
				<li class="sublis-menu__item">Item3</li>
			</ul>
`);//вставка коду в середу ul після першого li (як в after)
*/
/*
const menuList = document.querySelector('.menu__list');
const listItem = document.querySelector('.menu__item')
menuList.insertAdjacentElement("beforeend", listItem);//переставило перший елемент в кінець
console.log(listItem);
*/
/*
const sayHi = document.querySelector('[data-say-hi]');
sayHi.remove();//видалення елемента
*/
//Задача № 1
/*
const sayHi = document.getElementById('#greeting');
console.log(greeting.getAttribute('data-say-hi'));
*/
/*
const sayHi = document.querySelector('div');
console.log(sayHi.getAttribute('data-say-hi'));
*/
//Задача № 2
/*
const listItem = document.querySelector('li');
const nextElementSibling = listItem.nextElementSibling;
*/
// Задача № 3
//const likeElements = document.querySelectorAll('.like');
//Задача № 4 - текст додасться в кінець списку 





