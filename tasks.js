const rain = Math.round(Math.random());

if(rain === 1) {
	console.log('Пошел дождь.Возьмите зонт!');
} else {
	console.log('Дождя нет!');
}


const resultExamMath = +prompt('Ввведите количество баллов по математике:');
const resultExamRusLang = +prompt('Ввведите количество баллов по русскому языку:');
const resultExamInformatic = +prompt('Ввведите количество баллов по информатике:');

const sum = resultExamMath + resultExamRusLang + resultExamInformatic;

if (sum >= 265) {
	console.log('Поздравляю вы поступили на бюджет!');
} else {
	console.log('Вам не достаточно баллов для поступления');
}

const requiredAmount = +prompt('Сколько денег вы хотите снять?');

if(requiredAmount % 100) {
	console.log('Банкомат выдает купюры только по 100 рублей, введите корректное значение');
} else {
	console.log('Произвожу выдачу наличных')
}