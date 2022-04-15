function compareArrays(arr1, arr2) {
    let result;
    result = JSON.stringify(arr1) == JSON.stringify(arr2)

    if (result) {
        return result
    } else {
        return false
    }

}

function advancedFilter(arr) {
    let resultArr;
    resultArr = arr.filter((el) => {
        return el >= 0 && el % 3 === 0
    }).map((el) => {
        return el * 10
    })
    return resultArr;
}