

let big_Btn = document.getElementById('coinishla')
let count_html = document.getElementById('count')


let coin = 0;

big_Btn.addEventListener('click', ()=>{
    coin++
    console.log('click = ' + coin);
    count_html.innerHTML = coin
})
