debugger;
nums = [1, 0, -1, 0, -2, 2];
target = 0;
var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b);
  if (nums.length < 4) return [];
  let res = [];
  let twoS = [];

  let dfs = (k, start, target, quad) => {
    if (k !== 2) {
      for (let i = 0; i <= nums.length - k; i++) {
        if (i > start && nums[i] === nums[i - 1]) continue;
        quad.push(nums[i]);
        dfs(k - 1, i + 1, target - nums[i], quad);
        quad.pop();
      }
      return;
    }

    let l = start,
      r = nums.length - 1;
    while (l < r) {
      let sum = nums[l] + nums[r];
      if (sum > target) r--;
      else if (sum < target) l++;
      else {
        res.push(
          JSON.parse("[" + quad.join(",") + "]").concat([nums[l], nums[r]])
        );

        while (l < r && nums[l] === nums[l - 1]) l++;

        l++;
      }
    }
  };
  dfs(4, 0, target, []);
  return res;
};
