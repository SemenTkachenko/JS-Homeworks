function pow(a, b) {
var result = 1;
for (i=1; i<=b; i++) {
result *= a;
}
return (result);
}
var x = +prompt('введите число', '');
var y = +prompt('введите степень числа', '');

if ((x < 0) || (y < 0)) {
alert('введено отрицательное число');
} else if ((x ^ 0) === x && ((y ^ 0) === y)) {
alert( pow(x, y) );
} else {
alert('введено не натуральное число');
}