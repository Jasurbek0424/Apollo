const sun = document.querySelector('.fa-sun'),
    moon = document.querySelector('.fa-moon'),
    night = document.querySelector('.night')

let root = document.querySelector(':root')
sun.style.background = 'rgb(163,163,64)';

moon.addEventListener('click', () => {
    moon.style.background = 'rgb(29, 2, 187)';
    sun.style.background = 'none';
    root.style.setProperty('--black', 'rgb(29, 2, 187)')
    root.style.setProperty('--white', 'black')
    root.style.setProperty('--gray', '#0E0E33')
})
sun.addEventListener('click', () => {
    sun.style.background = 'rgb(163, 163, 64)';
    moon.style.background = 'none';
    root.style.setProperty('--black', 'black')
    root.style.setProperty('--white', 'white')
    root.style.setProperty('--gray', '#E5E5E5')
})


const item = document.querySelector('.proud-info'),
    timer = document.querySelectorAll('.proud-num')

window.addEventListener('scroll', function scroll() {
    if (scrollY > item.offsetTop - item.clientHeight * 2) {
        timer.forEach((timers) => {
            let count = +timers.getAttribute('count')
            function rec(k = 0) {
                timers.innerHTML = k
                if (timers.innerHTML < count) {
                    setTimeout(() => {
                        k++
                        rec(k)
                    }, 60);
                }

            }
            rec()

        })
        window.removeEventListener('scroll', scroll)
    }

})


const btns = document.querySelectorAll('.btn')
btns.forEach(btn => {
    window.addEventListener('mousemove', (e) => {
        let x = e.pageX - btn.offsetLeft
        let y = e.pageY - btn.offsetTop
        btn.style.setProperty('--x', `${x}px`)
        btn.style.setProperty('--y', `${y}px`)
    })
})

