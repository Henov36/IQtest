
"use strict"

//=== Open burger
const burgerButtonOpenMenu = document.querySelector('.header__menu-burger').addEventListener('click', () => {
	headerNav.classList.toggle('header__nav-block');
	document.body.classList.add('body-overflow')
	buttonMore.style.visibility = "hidden"
});


//== Close burger
const buttonCrossCloseMenu = document.querySelector('.menu__close-cross').addEventListener('click', () => {
	headerNav.classList.remove('header__nav-block')
	document.body.classList.toggle('body-overflow')
	buttonMore.style.visibility = "visible"
})

const headerNav = document.querySelector('.header__nav');
const buttonMore = document.getElementById('button-more');
const infoSection = document.getElementById('info-section')

//==== Button more, what's open section and close.

buttonMore.addEventListener('click', () => {

	infoSection.classList.toggle('test__info-section-block')
	infoSection.classList.toggle('test__info-section')
	buttonMore.classList.toggle('button__more-reverse');
})

// Button about test in burger

const infoButtonInBurger = document.querySelectorAll('.burger__info-link').forEach(item => item.addEventListener('click', (e) => {
	e.preventDefault();
	document.body.classList.remove('body-overflow');
	headerNav.classList.remove('header__nav-block');
	buttonMore.style.visibility = 'visible';
	buttonMore.classList.toggle('button__more-reverse');
	if (infoSection.classList.contains('test__info-section')) {
		infoSection.classList.remove('test__info-section')
		infoSection.classList.add('test__info-section-block')
	}
	if (quiz.classList.contains('quiz__display')) {
		quiz.classList.remove('quiz__display');
		quiz.classList.add('hidden');
		mainWindow.classList.remove('none-display');


	}

	//Old browser
	const infoSectionsCords = infoSection.getBoundingClientRect();
	window.scrollTo({
		top: (infoSectionsCords.top) + window.pageYOffset,
		behavior: 'smooth'
	})


	//New browser
	// infoSection.scrollIntoView({ behavior: 'smooth' });
}))







///====== QUIZ DATA
const questions = [
	{
		question: "Ваш пол:",
		options: [
			"Мужчина",
			"Женщина",
		]
	},
	{
		question: "Укажите ваш возраст: ",
		options: [
			"До 18",
			"От 18 до 28",
			"От 29 до 35",
			"От 36"
		]
	},
	{
		question: "Выберете лишнее:",
		trueanswer: 'Скамейка',
		options: [
			"Дом",
			"Шалаш",
			"Бунгало",
			"Скамейка",
			"Хижина"
		],
	},
	{
		question: "Продолжите числовой ряд: 18 20 24 32",
		trueanswer: '48',
		options: [
			"62",
			"48",
			"74",
			"57",
			"60",
			"77",
		],
	},
	{
		question: "Выберите цвет, который сейчас наиболее Вам приятен:",
		options: [
			"#A8A8A8",
			"#0000A9",
			"#00A701",
			"#F60100",
			"#FDFF19",
			"#A95403",
			"#000000",
			"#850068",
			"#46B2AC"
		],

	},
	{
		question: "Отдохните пару секунд, еще раз Выберите цвет, который сейчас наиболее Вам приятен:",
		options: [
			"#A8A8A8",
			"#46B2AC",
			"#A95403",
			"#00A701",
			"#000000",
			"#F60100",
			"#850068",
			"#FDFF19",
			"#0000A9"
		]
	},
	{
		question: "Какой из городов лишний?",
		trueanswer: 'Нью-Йорк',
		options: [
			"Вашингтон",
			"Лондон",
			"Париж",
			"Нью-Йорк",
			"москва",
			"Оттава",
		]
	},
	{
		question: "Выберите правильную фигуру из четырёх пронумерованных.",
		trueanswer: '1',
		options: [
			"1",
			"2",
			"3",
			"4",
		],
		image: "test0.png"

	},
	{
		question: "Вам привычнее и важнее:",
		options: [
			"Наслаждаться каждой минутой проведенного времени",
			"Быть устремленными мыслями в будущее",
			"Учитывать в ежедневной практике прошлый опыт",

		]
	},
	{
		question: "Какое определение, по-Вашему, больше подходит к этому геометрическому изображению: ",
		trueanswer: 'оно остроконечное',
		options: [
			"оно остроконечное",
			"оно устойчиво",
			"оно - находится в состоянии равновесия",
		],
		image: "test1.png"

	},
	{
		question: "Вставьте подходящее число",
		trueanswer: '44',
		options: [
			"34",
			"36",
			"53",
			"44",
			"66",
			"42",
		],
		image: "test2.png"
	},

];


const btnNext = document.querySelector('.disabled__button');
let count = 0;



if (typeof questions !== 'undefined' && questions.length > 0) {
	showQuetions(count);
} else {
	console.log('Что то пошло не так');
}


//====================== OPEN QUIZ ====================//

const headerHidden = document.querySelector('.header__hidden-container')
const quiz = document.querySelector('.quiz');
const mainWindow = document.querySelector('.main__window');
const list = document.getElementById('answer__list');
const openTestButttons = document.querySelectorAll('.test-button');
const questionTitle = document.querySelector('.quiz__title');

const label = document.querySelectorAll('.label')

openTestButttons.forEach(item => item.addEventListener('click', (e) => {
	e.preventDefault();
	if (count > 0) {
		count = 0
		showQuetions(count)
		list.style.padding = '';
		questionTitle.style.padding = '';
		list.classList.add('answer__list');
		list.classList.remove('answer__list-cube');


		if (list.classList.contains('answer__list-image2')) {
			list.classList.remove('answer__list-image2')
			list.classList.add('answer__list')
		}


		const testImg = document.querySelector('.test-img')
		if (testImg.classList.contains('test-img-padding')) {
			testImg.classList.remove('test-img-padding')
		}

	}

	if (item.classList.contains('burger__test-button')) {
		headerNav.classList.remove('header__nav-block');
	}


	quiz.classList.remove('hidden')
	quiz.classList.add('quiz__display');

	if (quiz.classList.contains('quiz__display')) {
		headerHidden.classList.add('flex');
		headerHidden.classList.remove('hidden');
	} else {
		headerHidden.classList.remove('flex');
		headerHidden.classList.add('hidden');
	}

	infoSection.classList.contains('test__info-section-block')
		? (infoSection.classList.remove('test__info-section-block'),
			infoSection.classList.add('test__info-section'))
		: infoSection.classList.add('test__info-section');


	mainWindow.classList.add('none-display');
	document.querySelector('.footer-content').classList.add('hidden')
}))




// ================= SHOW QUETIONS function ===========//

function showQuetions(index) {
	const questionTitle = document.querySelector('.quiz__title');
	let progres = document.querySelector('.quiz__progress-inner');
	const list = document.getElementById('answer__list');
	const imageDiv = document.querySelector('.test-img')


	let arr = [];

	questionTitle.innerHTML = `${questions[index].question}`;
	questionTitle.style.fontSize = '21px';

	list.innerHTML = '';
	imageDiv.innerHTML = '';

	questions[index].options.forEach(function (item, i) {

		arr.push(item)

		const text = `<li class="answer">
							<input type="radio" value="${i}" name="answer" id="${i}">
							<label for="${i}" class="label" id="a_text">${item}</label>
						</li>`;
		list.insertAdjacentHTML("beforeend", text);

		const options = document.querySelectorAll('.answer');

		options.forEach(item => item.classList.add('before-1string'))

		if (arr.length == 9) {
			list.classList.remove('answer__list');
			list.classList.add('answer__list-cube');

			options.forEach(item => {

				if (item.classList.contains('before-1string')) {
					item.classList.remove('before-1string')
				}
				item.style.height = '75px';
				item.classList.add('cube')
			});
			questionTitle.style.fontSize = '21px';

		} else if (arr.length == 6) {
			options.forEach(item => item.style.height = '40px')
			list.classList.add('answer__list');
			list.classList.remove('answer__list-cube');
		}

		if (questions[index].options.length == 3) {
			options.forEach(item => {
				item.style.height = '78px'
				item.style.textAlign = 'start'
				item.style.marginBottom = '19px'
			})
		}


	});


	//// ========= Img question ========= ///

	if (questions[index].image) {
		const imageTest = `<div class="test-img">
			<img src="./img/${questions[index].image}" alt="#">
			</div>`
		imageDiv.insertAdjacentHTML('beforeend', imageTest);

		const label = document.querySelectorAll('.label')
		const testImg = document.querySelector('.test-img')
		const options = document.querySelectorAll('.answer')

		testImg.style.display = 'block'
		testImg.style.borderBottom = 'none';

		if (questions[index].image === 'test0.png') {

			questionTitle.style.fontSize = '17px'

			list.classList.remove('answer__list')
			list.classList.add('answer__list-image');
			imageDiv.style.paddingTop = '20px'


			label.forEach(item => item.style.textAlign = 'left')

		} else if (questions[index].image === 'test1.png') {

			questionTitle.style.fontSize = '16px'
			list.style.padding = '15px 0px 0px 0px'

			options.forEach(item => {
				item.style.height = '50px';
				item.style.marginBottom = '10px'
			})
			if (list.classList.contains('answer__list-image')) {
				list.classList.remove('answer__list-image')
				list.classList.add('answer__list')

				label.forEach(item => {
					item.style.lineHeight = '17px';
					item.style.textAlign = 'left';
				});

			}

		} else if (questions[index].image === 'test2.png') {
			list.classList.remove('answer__list')
			list.classList.add('answer__list-image2');
			list.style.padding = '';


			questionTitle.style.fontSize = '20px';
			questionTitle.style.padding = '0px 20px';

			options.forEach(item => {
				item.style.height = '40px';
				item.style.width = '40px';
				item.style.backgroundColor = '#FFF'
				testImg.classList.add('test-img-padding')
				testImg.style.borderBottom = '2px solid rgb(160 169 169)';

			})
		}


	} else {
		list.classList.remove('answer__list-image');
		list.classList.add('answer__list');
		const testImg = document.querySelector('.test-img')
		testImg.style.display = 'none'
	}

	//================================================================




	const label = document.querySelectorAll('.label')


	if (label.length == 9) {
		label.forEach(item => {
			item.textContent = '';
		})
	} else {

	}

	progres.style.width = `${Math.round(((index + 1) / questions.length) * 100)}%`;

	const options = document.querySelectorAll('.answer');
	options.forEach(function (item, i) {
		item.setAttribute('onclick', 'optionSelected(this)');
		item.style.background = `${arr[i]}`
	});

}


//=============== Answer selected function =============== //



function optionSelected(answer) {
	const inputs = document.querySelectorAll('input[type="radio"]');
	const options = document.querySelectorAll('.answer');
	const list = document.getElementById('answer__list');

	inputs.forEach(answerUser => {

		if (answerUser.checked) {
			if (list.classList.contains('answer__list-image')) {
				answerUser.parentElement.classList.add('selectImg')
			} else {
				answerUser.parentElement.classList.add('select');
			}

			options.forEach(item => {
				item.classList.add('.check')
			});

			btnNext.classList.add('active__button');
		} else {
			answerUser.parentElement.classList.remove('select');
			answerUser.parentElement.classList.remove('selectImg')
		}
		// console.log(document.querySelector('.select'));

	})


}

// let userScore = 0;
//=============== Button NEXT ===============////
let trueAnswers = [];
let iqLevel = 50;

btnNext.addEventListener('click', nextQuetion)

function nextQuetion() {
	const option = document.querySelector('.answer');
	const quizResult = document.querySelector('.quiz__result');
	const quizLoader = document.querySelector('.quiz__loader')
	const quizContent = document.querySelector('.quiz__content')
	const quizBtnNext = document.querySelector('.quiz__next-btn')
	const quizProgress = document.querySelector('.quiz__progress')
	const timer = document.querySelector('.timer')
	const headerTitle = document.querySelector('.header__title')
	const footerResults = document.querySelector('.footer__result')
	const resultMain = document.querySelector('.result-main')

	if (questions[count].trueanswer) {
		trueAnswers.push(questions[count].trueanswer)
		const answers = document.querySelectorAll('.answer')
		answers.forEach(item => {

			if (item.classList.contains('select') || item.classList.contains('selectImg')) {
				if (item.lastElementChild.textContent == questions[count].trueanswer) {
					// userScore++;
					iqLevel += 13;
				}
			}

		})
	}

	if ((count + 1) == questions.length && option.classList.contains('.check')) {
		quizLoader.classList.remove('hidden')
		// quiz.classList.remove('quiz__display')
		quizContent.classList.add('hidden')
		quizBtnNext.classList.add('hidden')

		const totalScore = `${iqLevel} балов`
		resultMain.insertAdjacentHTML('beforeend', totalScore)
		function results() {
			quizLoader.classList.add('hidden');
			quizProgress.classList.add('hidden')
			quizResult.classList.remove('hidden')
			headerTitle.textContent = 'ГОТОВО!'
			headerTitle.classList.add('header__ready')
			footerResults.classList.remove('hidden')
			quiz.style.height = 'fit-content'
		}
		setTimeout(results, 3000);
		return
	}




	if (option.classList.contains('.check')) {
		count++;
		showQuetions(count);
		btnNext.classList.remove('active__button')
	} else {
		console.log('Выберете вариант ответа');
	}
}
