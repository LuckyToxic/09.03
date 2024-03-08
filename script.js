// // MODUL_2_WEEK_1

// const auto = {
//     manufacturer:'Kia',
//     model:'Rio',
//     year: 2022 ,
//     speed: 90
// }

// function showInfo(auto){
//     document.getElementById('manufacturer').innerText = (`Производитель: ${auto.manufacturer}`)
//     document.getElementById('model').innerText = (`Модель : ${auto.model}`)
//     document.getElementById('year').innerText = (`Год выпуска: ${auto.year} год`)
//     document.getElementById('speed').innerText = (`Средняя скорость : ${auto.speed} км/ч`)
// }

// showInfo(auto)

// function timeRoad(distance){
//     let hours = 0
//     let time = distance /`${auto.speed}`
//     for( let i = 0;i < time;i++){
//         if( i % 4 == 0){
//             hours++
//         }
//     }
//     let result = Math.round(hours + time)
//     document.getElementById('distance').innerText = (`Для преодаления ${distance} киллометров потребутеся ${result} часов`)
//     return result
// }

// timeRoad(1000)


// // ТРЕТЬЕ ЗАДАНИЕ 

// const time = {
//     hours: 5,
//     minutes: 10,
//     seconds: 20
// }

// function showTime(a){
//     document.getElementById('time').innerText = (`Время ${a.hours}:${a.minutes}:${a.seconds}`)
// }

// // showTime(time)

// function changeSeconds(b){
//     let result = time.seconds + b
//     let min = 0
//     for(let i = 0;i < result;i++){
//         if( i % 60 == 0 && i != 0){
//             min++
//         }
//     }
//     if(time.seconds = 60){
//         min++
//         time.seconds = 0
//     }
//     time.minutes += min
//     time.seconds = result - (60 * min)
//     showTime(time)
// }

// changeSeconds(200)




// // MODUL_1_WEEK_5

// function degree(x,y){
//     if(y == 1){
//         return x
//     }else{
//         return x * degree(x, y-1)
//     }
// }

// console.log(degree(2,2))


// function maxDivider(a,b){
//     if( a = 1 || b = 1){
//         return Math.min(a,b)
//     }else{
//         let c = a % b
//         return c = 0 ? b :maxDivider(b,c)
//     }
// }

// console.log(maxDivider(56,98))



// Написать функцию, которая принимает строку и выводит
// статистику о ней: количество букв, количество цифр и
// количество других знаков.

function infoString(string){
    
    numLetter = string.split(/[а-яa-z]/).length + 1    
    
    num = string.split(/[0-9]/).length - 1
    
    symbols = string.split(/[!@#$%^&*()-,.;:]/).length - 1


    console.log(numLetter)
    console.log(num)
    console.log(symbols)
}

infoString('JavaScript')




// Написать функцию, которая принимает двузначное число
// и возвращает его в текстовом виде.

function numbersIntoLetters(num){

    numbeR = ['Один','Два','Три','Четыре','Пять','Шесть','Семь','Восемь','Девять']
    
    numberS = ['Десять','Одинадцать','Двенадцать','Тринадцать','Четырнадцать','Пятнадцать','Шестнадцать','Семнадцать','Восемнадцать','Девятнадцать']
    
    let result = num > 0 && num < 10 ? numbeR.at(num-1)
                : num >= 10 && num < 20 ? numberS.at(num-10)
                : num == 20 ? 'Двадцать'
                : num > 20 && num < 30 ? 'Двадцать' + ' ' + numbeR.at(num-21) 
                : num == 30 ? 'Тридцать'
                : num > 30 && num < 40 ? 'Тридцать' + ' ' + numbeR.at(num-31)
                : num == 40 ? 'Сорок' 
                : num > 40 && num < 50 ? 'Сорок' + ' ' + numbeR.at(num-41)
                : num == 50 ? 'Пятьдесят' 
                : num > 50 && num < 60 ? 'Пятьдесят' + ' ' + numbeR.at(num-51)
                : num == 60 ? 'Шестьдесят' 
                : num > 60 && num < 70 ? 'Шестьдесят' + ' ' + numbeR.at(num-61)
                : num == 70 ? 'Семьдесят' 
                : num > 70 && num < 80 ? 'Семьдесят' + ' ' + numbeR.at(num-71)
                : num == 80 ? 'Восемьдесят' 
                : num > 80 && num < 90 ? 'Семьдесят' + ' ' + numbeR.at(num-81)
                : num == 90 ? 'Девяносто' 
                : num > 90 && num < 100 ? 'Семьдесят' + ' ' + numbeR.at(num-81)
                : 'Большое не смогли?'

    console.log(result)
}

numbersIntoLetters(78)


// Написать функцию, которая заменяет в полученной строке
// большие буквы на маленькие, маленькие – на большие, а
// цифры – на знак нижнего подчеркивания.



function raplacingRegister(string){
    let arr = string.split('')

    let result = []

    for(let i = 0; i < arr.length;i++){
        if(arr[i] === arr[i].toUpperCase()){
            result.push(arr[i].toLowerCase())
        }else if(arr[i] === arr[i].toLowerCase()){
            result.push(arr[i].toUpperCase())
        }else if(isNaN(arr[i]) = false){
            
            console.log(arr[i])
        }    
    }
    console.log(result)
}


raplacingRegister('Ja123vaScript')