'use strict';

const nameProduct = prompt('Введите наименование товара:', '');
const amountProduct = +prompt('Введите количество товара:', '');
const categoryProduct = prompt('Введите категорию товара:', '');
const priceProduct = +prompt('Введите цену товара товара:', '');


if(!Number.isNaN(amountProduct) && !Number.isNaN(priceProduct)) {
	console.log('Тип даных amountProduct:', typeof amountProduct);
	console.log('Тип даных priceProduct:', typeof priceProduct);

	console.log('Наименование товара: ' + nameProduct);
	console.log('Общая сумма товара: ' + (amountProduct * priceProduct));
	console.log(`На складе ${amountProduct} еденицы товара "${nameProduct}" на сумму ${priceProduct * amountProduct} рублей.`);
} else {
	console.log('Вы ввели некорректные данные')
}

