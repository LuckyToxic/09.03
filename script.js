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
//     document.getElementById('time').innerHTML = `Время 
// ${String(a.hours).padStart(2,'0')}:${a.minutes.toString().padStart(2,'0')}:${a.seconds.toString().padStart(2,'0')}`
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

// // changeSeconds(200)

// function addSeconds(s) {
//     const seconds = time.seconds + s
//     const minutes = time.minutes + Math.floor(seconds/60) 
//     const hours = time.hours + Math.floor(minutes/60)
//     time.seconds = seconds%60
//     time.minutes = minutes%60
//     time.hours = hours%24
//     showTime(time)
// }
// function addMinutes(m) {
//     addSeconds(m*60)
// }
// function addHours(h) {
//     addMinutes(h*60)
// }
// showTime(time)



// // MODUL_1_WEEK_5

// function degree(x,y){
//     if(y == 1){
//         return x
//     }else{
//         return x * degree(x, y-1)
//     }
// }

// console.log(degree(2,2))


// function maxDivider(a,b, div=Math.min(a,b)){
//     if( a%div==0 && b%div==0 ){
//         return div
//     }else{
//         return maxDivider(a,b, div-1)
//     }
// }

// console.log(maxDivider(56,98))



// function maxNumber(num){
//     if(num < 10){
//         return num
//     }else{
//         return Math.max(num % 10,maxNumber(parseInt(num/10))) 
//         Math.max(6,3,4,2,3) 
//     }
// }



// console.log(maxNumber(32436))
// console.log(Math.max(...String(32436).split('')))


// function simpleNumber(n, a=n-1){
//     if(a == 1){
//         return true
//     }else{
//         return  n % a == 0 ? false : simpleNumber(n, a - 1)
//     }
// }
// console.log(simpleNumber(2))

// function allFactor(f,l = 2){
//     if(l == 1){
//         return f
//     }else{
//         const fac = 
//     }
// }



class MyButton {
    constructor(text,btnClass){
        this.text = text
        this.btnClass = btnClass
    }
    show(){
        const btn = document.createElement('button')
        btn.classList = (this.btnClass)
        document.body.appendChild(btn)
        btn.innerText = this.text
    }
    
    get value(){
        return this.text
    }

    set value(text){
        this.text = text
    }
}

let btn = new MyButton('Save Progress','btnClass')

let btn1 = new MyButton('Click Me','btnClass1')

let btn2 = new MyButton('Download','btnClass2')

let btn3 = new MyButton('See more','btn btn2 v1')

btn.show()

btn1.show()

btn2.show()

btn3.show()

class ColorButton extends MyButton{
    constructor(text,btnClass,color){
        super(text,btnClass)
        this.color = color
    }
    show(){
        const btn = document.createElement('button')
        document.body.appendChild(btn)
        btn.innerText = this.text
        btn.classList.add(this.btnClass)
        btn.classList.add(this.color)
    }
}

let btn5 = new ColorButton('Save Progress','btn','danger')

btn5.show()


function addList(){
    let addString

    do{
        addString = prompt('Добавить пункт в список:')
        
    }while(addString != '')
   
    let firstString = document.createElement('li')
    
    firstString.innerText += addString
    
    lister.prepend(firstString)
    
}




function raplacingRegister(string){
    let arr = string.split('')
    
    let result = []

    for(let i = 0; i < arr.length;i++){
        if(arr[i] === arr[i].toUpperCase()){
            if(isNaN(arr[i]) == false && arr[i]!=' '){
                result.push('_')
            } else {
                result.push(arr[i].toLowerCase())
                
            }  
        }else if(arr[i] === arr[i].toLowerCase()){
            result.push(arr[i].toUpperCase())
        } 
    }
    console.log(result.join(''))
}


raplacingRegister('Ja123vaScript')



function infoString(string){
    
    numLetter = string.split(/[а-яА-Яa-zA-Z]/).length + 1    
    
    console.log(string.split(/[а-яА-Яa-zA-Z]/))

    num = string.split(/[0-9]/).length - 1
    
    symbols = string.split(/[!@#$%^&*()-,.;:]/).length - 1


    console.log(numLetter)
    console.log(num)
    console.log(symbols)
}

infoString('J!a!vaS!!cript3423!4G!2П34')