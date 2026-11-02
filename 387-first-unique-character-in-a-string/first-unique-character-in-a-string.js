/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const map = {};
    for(let i=0; i< s.length; i++){
        if(map[s[i]]){
            map[s[i]] += 1;
        }
        else{
            map[s[i]] = 1;
        }
    }
     for(let i=0; i< s.length; i++){
        if(map[s[i]] === 1){
            return i
        }
     }
     return -1;
    
    console.info(map, letter, s[letter.key])
    
};