const result = promiseFunction()
console.log(`Промис ${typeof result != 'string' ? '' : 'НЕ'} работает ${typeof result === 'string' ? result : ''}`)