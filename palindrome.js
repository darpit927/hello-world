function isPalindrome(word){
    let reverse = word.split("")
    reverse = reverse.reverse()
    console.log(reverse)
    reverse=reverse.join("")
    console.log(reverse)

    return word === reverse
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("chess"));