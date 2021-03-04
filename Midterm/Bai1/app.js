var target = prompt("Enter M: ")
var nums = [prompt("Enter your numbers: ").split(",")]
const twoSum = function(nums, target) {
    const comp = {};
    for(let i=0; i<nums.length; i++){
        if(comp[nums[i]]>=0){
            return [comp[nums[i]], i]
        }
        comp[target-nums[i]] = i
    }
};

