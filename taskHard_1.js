const income = +prompt('Введите сумму вашего дохода:');

if(income <= 15000) {
	console.log('Сумма налога: ' + (income * 0.13))
} else if (income > 15000 && income <= 50000) {
	console.log('Сумма налога: ' + (income * 0.20))
} else if (income > 50000) {
	console.log('Сумма налога: ' + (income * 0.30))
}

if(income <= 15000) {
	console.log('Сумма налога: ' + (income * 0.13));
} else if (income > 15000 && income <= 50000) {
	console.log('Сумма налога: ' + ((15000 * 0.13) + ((income - 15000) * 0.20)));
} else if (income > 50000) {
	console.log('Сумма налога: ' + ((15000 * 0.13) + ((income - 15000) * 0.20) + ((income - 50000) * 0.30)));
}