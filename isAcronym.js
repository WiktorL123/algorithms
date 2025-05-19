function isAcronym(s, words) {
    let lengthOfShort =words.length
    if (s.length !== lengthOfShort) {
        return false;
    }
    for (let i = 0; i < lengthOfShort; i++) {
        if (s[i].toLowerCase()!==words[i][0].toLowerCase()) {
            return false;
        }
    }
    return true;
}
console.log(isAcronym('amk', ["ala", "ma", "kota"]))
console.log(isAcronym('HWDP', ["huj", "w", "dupe", "policji"]))
console.log(isAcronym('CHWDP', ["chuj", "w", "dupe", "policji"]))
console.log(isAcronym("CWKż", ["Centralne", "wojskowe", "kurwisko", "sportowe"]))
console.log('---------------leet code--------------')
console.log(isAcronym('abc', ["alice","bob","charlie"]))
console.log(isAcronym('a', ["an","apple"]))
console.log(isAcronym('ngguoy', ["never","gonna","give","up","on","you"]))