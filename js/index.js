random = () => {
    Math.round((Math.random()) * 21 - 10);
    let arr = [];
    while (arr.length < 10) {
        arr.push(Math.round((Math.random()) * 21 - 10));
    }
    document.querySelector('#result').innerHTML = `Сгенерировали: ${arr};<br>`;
    let max = Math.max.apply(null, arr);
    document.querySelector('#result1').innerHTML = `Максимальное: ${max};`;
    let min = Math.min.apply(null, arr);
    document.querySelector('#result2').innerHTML = `Минимальное: ${min};`;
    let sum = 0;
    let multiple = 1;
    for (let item of arr) {
        sum += item;
        document.querySelector('#result3').innerHTML = `Сумма: ${sum};`;
        let middle = sum / arr.length;
        document.querySelector('#result4').innerHTML = `Среднее арифметическое: ${middle};`;
        multiple *= item;
        document.querySelector('#result5').innerHTML = `Произведение: ${multiple};`
    }
}