console.log('Asynchronous Programming')



//Making it Asynchronous using setTimeout
setTimeout(()=>{
    
    for(let index = 0; index < 4000; index++) {
        const element = index
        console.log('This is index number ' + index)
    }
},100)



console.log('Done Printing')