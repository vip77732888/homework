function promiseFunction() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`Функция отработала!`)
            resolve(`верно`)
        }, 3000);
    }).then(() =>
        console.log('Промис работает верно!')
    )
}