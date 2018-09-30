function checkingType(str1, num, str2) {
    if (typeof str1 == "string" && typeof num == "number" && typeof str2 == "string") {
        var index = num-1;
        var array = str1.split(/[ ,]+/);
        for (let i = 0; i < array.length; i++) {
            if (array[i].length >= index) {
                array[i] = replaceAt(array[i], index, str2)

            }
        }
        console.log(array.join(' '))
    } else {
        console.log("Error")
    }

}

function replaceAt(string, index, replacement) {
    return string.substr(0, index) + replacement + string.substr(index + 1);
}


checkingType('Some sentance to replace, verify', 2, 'rep');