export function debounce(fn, delay) {
    // console.log(this)
    let flag = true;
    let timer = null;
    return function () {
        console.log(this, "定时")
        // console.log(flag, timer, delay)
        clearTimeout(timer)
        if (flag) {
            fn.apply(this,arguments)
            flag = false;
        }
        timer = setTimeout(() => {
            flag = true;
        }, delay)

    }
}