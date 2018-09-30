
function palindrome(str) {
    const str1 = [...str].reverse().join('');
    return str === str1;
}
function logging(str) {
    console.log('String "' + str + '" is palindrom - ' + palindrome(str));

}

logging('eye eye');