function throttle(fn, time) {
    let canRun = true
    return function () {
        if(!canRun) {
            return
        }
        let _that = this
        let _arguments=arguments
        canRun = false
        setTimeout(() => {
            fn.apply(_that, _arguments)
            canRun = true
        }, time)
    }
}

function debounce(fn, time) {
    let timeOut = null
    return function () {
        clearTimeout(timeOut)
        let that = this
        let _arguments = arguments
        timeOut = setTimeout(function () {
            fn.apply(that, _arguments)
        }, time)
    }
}

setInterval(debounce(() => {
    console.log('doing')
}, 2000), 200)