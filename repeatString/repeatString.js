const repeatString = function(s, n) {
    let output = ""
    if (n < 0) {
        return "ERROR"
    } else {
        for (i = 0; i < n; i++) {
            output += s
        }
    }
    return output
}

module.exports = repeatString
