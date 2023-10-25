function solution(nums) {
    if (nums.length == 0) return 0
    let firstHouse = nums[0];
    let secondHouse = nums[1] ?? 0;
    let thirdHouse = firstHouse + (nums[2] ?? 0);
    for(let i = 3; i < nums.length; i++)
    {
        [firstHouse, secondHouse, thirdHouse] = [secondHouse,thirdHouse, Math.max(firstHouse, secondHouse) + nums[i]]
    }
    
    return Math.max(secondHouse, thirdHouse)
    
    }
