console.log('Events and event object in Javascript')

document.getElementById('heading').addEventListener('click', function(e){
    console.log('Heading clicked');
    //location.href = '//www.google.com';
    let variable
    variable = e.target
    variable = e.target.id
    variable = Array.from(e.target.classList)
    variable = e.offsetX
    // variable = e.clientX
    console.log(variable)
})