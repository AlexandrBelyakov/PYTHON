let celsius = Number.parseFloat(prompt("Введите температуру в Цельсиях: "));
let  fahrenheit = ((9/5)* celsius + 32).toFixed(1);
alert(`Температура по Цельсию: ${celsius}. Температура по Фаренгейту: ${fahrenheit}`);