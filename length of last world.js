function lengthOfLastWorld(s){
    const result =   s.trim().split(/\s+/)
    return result[result.length-1].length
}
console.log(lengthOfLastWorld('Hello world'));
console.log(lengthOfLastWorld('   fly me   to   the moon  '));
console.log(lengthOfLastWorld('luffy is still joyboy'));