console.log('Ajax')

let fetchBtn = document.getElementById('fetchBtn')
fetchBtn.addEventListener('click', fetchData)

function fetchData(){
    
    console.log('Requesting data...')

    //Instantiate an xhr object
    const xhr = new XMLHttpRequest()

    //Open the object
    //xhr.open('GET', 'https://api.github.com/users/Mark-1707', true)
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true)

    xhr.getResponseHeader('Content-type','application/json')

    //What to do on proress
    xhr.onprogress = function(){
        console.log('Request is in progress...')
    }


    // xhr.onreadystatechange = function(){
    //     console.log('Ready state is ', xhr.readyState)
    // }

    //What to do when response is ready
    let data
    xhr.onload = function(){
        if(this.status === 200){
            data = JSON.parse(this.responseText)
            //console.log(this.responseText)
            console.log(data.login)
        }else{
            console.error('Request failed')
        }
    }

    //send the request
    let params = `{"name":"test2167521","salary":"123","age":"23"}`
    xhr.send(params)

    console.log('Request sent')
}

let popBtn = document.getElementById('popBtn')
popBtn.addEventListener('click', popData)
function popData(){
    console.log('Requesting data...')

    //Instantiate an xhr object
    const xhr = new XMLHttpRequest()

    //Open the object
    xhr.open('GET', 'https://api.github.com/users/Mark-1707/subscriptions', true)

    //What to do on proress
    xhr.onprogress = function(){
        console.log('Request is in progress...')
    }

    //What to do when response is ready
    
    xhr.onload = function(){
        if(this.status === 200){
            let data = JSON.parse(this.responseText)
            console.log(this.responseText)
            //console.log(data.full_name)

            let repos = document.getElementById('repos')
            str = ''
            for(key in data){
                console.log(key)
                str += `<li>${data[key].name}</li>`
            }
            repos.innerHTML = str

        }else{
            console.error('Request failed')
        }
    }

    //send the request
    let params = `{"name":"test2167521","salary":"123","age":"23"}`
    xhr.send(params)

    console.log('Request sent')
}
