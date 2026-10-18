/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let map = {};
    let res = [];
    for(let i = 0; i< nums.length; i++){
        if(map[nums[i]]){
            map[nums[i]] += 1;
        }
        else{
            map[nums[i]] = 1;
        }
    }
    Object.entries(map).forEach(([key, value])=> {
        console.info(key, value);
        if(value === 2){
            res.push(parseInt(key));
        }
    });
    console.info(res);
    return res;
    
};