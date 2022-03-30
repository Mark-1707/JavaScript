console.log('More about javascript events')
let btn = document.getElementById('btn')
btn.addEventListener('click', fun1)
btn.addEventListener('dblclick', fun2)

function fun1(e) {
    console.log('button clicked')
    e.preventDefault()
}

function fun2(e) {
    console.log('Double Clicked')
    e.preventDefault()
}

document.querySelector('.no').addEventListener('mouseenter', function (e) {

        console.log('Mouse Entered')
    }
)

document.querySelector('.container').addEventListener('mousemove', function (e) {
        console.log('Mouse Moved')
})