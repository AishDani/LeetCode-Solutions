/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    for(let i = 0; i< nums.length; i++){
        map.set(nums[i],i)
    };
    for(let i = 0; i< nums.length; i++){
        let x = target-nums[i];
        if(map.has(x) && map.get(x) !== i){
            return [i, map.get(x)];
        }
    }
    return []
    
};