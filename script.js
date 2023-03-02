const priceHeadphone=15.678;
const priseСharger=123.965;
const prisePhone=90.2345;

const max=Math.max(prisePhone,priceHeadphone, priseСharger);
const min=Math.min(prisePhone,priceHeadphone, priseСharger);

const sum=prisePhone+priseСharger+priceHeadphone;
const sumWholeNumbers=Math.floor(prisePhone)+Math.floor(priseСharger)+Math.floor(prisePhone);

const sumaRounding=Math.ceil(sum);

const customerPaid=500;
const difference=sum-500;

const boolean = Boolean(sumWholeNumbers%2);

const averageValue=(sum/3).toFixed(1);
const discount=(Math.random() * (23 - 1) + 1);
const sumaDiscont=(sum-discount).toFixed(2);
const profit= ((sum/2)-discount).toFixed(0);



console.log(`Максимальне число ${max}`)
console.log( `Мініммальне число ${min},`);
console.log( `Сума ${sum},`);
console.log(`Ціла частина вартості між собою ${sumWholeNumbers}`);
console.log(`сума товару округленва до сотень${sumaRounding}`);
console.log(`булеве значення${boolean}`);
console.log(`сумa решти, при оплаті всіх товарів${difference}`);
console.log(`середнє значення цін,${averageValue}`);
console.log(`випадковa знижкa${sumaDiscont}`);
console.log(`Чистий прибуток ${profit}`);



document.writeln(`Максимальне число ${max}, Мініммальне число ${min}, Сума ${sum}, Ціла частина вартості між собою ${sumWholeNumbers},
Cума товару округленва до сотень${sumaRounding}, булеве значення ${boolean} ,Cумa решти, при оплаті всіх товарів${difference},Cереднє значення цін, ${averageValue}, 
Bипадковa знижкa${sumaDiscont},Чистий прибуток ${profit}`)











