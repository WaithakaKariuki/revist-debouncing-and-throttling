let counter = 0

function getData(){
    console.log("Fetching Data...", counter++)
}

function debounce(fn,d){
let timer
return function(...args){
    clearTimeout(timer)
    timer = setTimeout(()=>{
        fn(...args)
    },d)
}
}

const betterFn = debounce(getData, 400)