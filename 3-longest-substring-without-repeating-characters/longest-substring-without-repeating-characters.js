/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = {};
    let left = 0;
    let maxL = 0;
    for(let i = 0; i< s.length; i++){
        let c = s[i];
        map[c] = (map[c] || 0) + 1;
   
        while(map[c] > 1){
            map[s[left]] -= 1;
            left ++;
        } 
        maxL= Math.max(maxL, i - left + 1);
        
        
    }
    return maxL
};