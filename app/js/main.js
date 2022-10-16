var route = document.querySelector("#route")
var timeAB = document.querySelector('#timeAB')
var timeBA = document.querySelector('#timeBA')
var input = document.querySelector('#num')
var btn = document.querySelector('#btn')
var timeTravel = 50
let from
let price = ''

route.onclick = () => { 
    if(route.value !== ''){
        if(route.value == 'AB'){
            timeAB.classList.add('shown')
            timeBA.classList.remove('shown')
        } else if (route.value == 'BA'){
            timeBA.classList.add('shown')
            timeAB.classList.remove('shown')
        } else if (route.value == 'ABA'){
            timeAB.classList.add('shown')
            timeBA.classList.add('shown')
            var showSelect = document.querySelectorAll('.shown')
            showSelect.forEach(item => item.addEventListener('click',checkTime))
        }
    } 
}

function checkTime(){
    let timeABStr = timeAB.value
    timeABStr = timeABStr.replace(':', '')
    let timeABNmb = parseInt(timeABStr)
    timeABNmb += timeTravel

    for(let i = 0; i < timeBA.length; i++){
        let timeBAStr = timeBA[i].value
        timeBAStr = timeBAStr.replace(':', '')
        let timeBANmb = parseInt(timeBAStr)
        if (timeABNmb >= timeBANmb){
            /* let removed = timeBA[i].value
            console.log(removed) */
            timeBA.remove([i])
        }
    }
}

btn.onclick = (e) => {
    e.preventDefault()
    if(input.value && route.value !== ''){
        total()
    } else {
        alert('Заполните все поля!')
    }
}

function total(){
    if(route.value !== ''){
        if(route.value == 'AB'){
            price = 700
        } else if (route.value == 'BA'){
            price = 700
        } else if (route.value == 'ABA'){
            price = 1200
        }
        let fromAB = fromAB.classList.contains('shown')
        function from(){
            if(timeAB){
                console.log('sas')
            } else {
                fromAB = false
            }
        }
        var totalPrice = price * input.value
        alert(`Вы выбрали ${input.value} билета по маршруту из A в B стоимостью ${totalPrice}.\n
               Это путешествие займет у вас ${timeTravel} минут. 
               Теплоход отправляется в ${fromAB === true ? timeAB.value : timeBA.value}, а прибудет в .`
            )
    } 
}