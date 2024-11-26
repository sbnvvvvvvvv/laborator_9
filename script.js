var y = 2;
var x = 0.2;
var w = 5;
document.write('x = '+x+'; y = '+y+'; w = '+w+';'+'\n');
var oper1 = 6*Math.pow(y,2);
var oper2 = Math.sqrt(x);
var oper3 = Math.pow(w,3);
var chislitel = oper1 - oper2 + oper3;
document.write('Числитель: '+chislitel+'\n');
var znamenatel = y+x-w;
document.write('Знаменатель: '+znamenatel+'\n');
var drob = chislitel/znamenatel;
var result = Math.pow(drob,(5*x));
document.write('Результат: '+result.toFixed(3));

