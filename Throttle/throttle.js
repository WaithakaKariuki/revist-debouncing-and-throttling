let counter = 0

function getData(){
    console.log("resizing",counter++)
}

const throttle = (func, delay) => {
    let lastCall = 0;
    return (...args) => {
        const now = new Date().getTime();
        if (now - lastCall < delay) {
            return;
        }
        lastCall = now;
        func(...args);
    };
};

const betterFn = throttle(getData, 400)
window.addEventListener("resize", betterFn)