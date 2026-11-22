/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let res = [];
    for(let i = 0; i < nums.length; i++){
        let diff = target - nums[i];
        let number = nums.findIndex((item,j) => item === diff && j !== i);
       
        
        if(number !== -1){
            res.push(number);
            res.push(i);
            break;
        }
    }
    console.log(res);
    return res;
    
};