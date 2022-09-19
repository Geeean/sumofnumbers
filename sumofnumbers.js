const numbers = [1, 2, 3, 4];

function sumFor(nums){
  let answer = 0;
  for (const num of nums){
    answer += num;
  }
  return answer;
}

function sumWhile(nums){
  let answer = 0;
  let i = 0;
  while (i< nums.length){
    answer += nums[i];
    i++
  }
  return answer;
}

function sumRecursion(nums){
  if(nums.length === 0){
    return 0;
  }
  return nums[0] + sumRecursion(nums.slice(1, nums.length));
}

function sumTheSimpleWay(nums) {
  return _.reduce(nums, function (memo, num) { return memo + num; }, 0);
}

console.log(sumFor(numbers));
console.log(sumWhile(numbers));
console.log(sumRecursion(numbers));
console.log(sumTheSimpleWay(numbers));
