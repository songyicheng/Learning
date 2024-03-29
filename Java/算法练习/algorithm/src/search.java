public class search {
    public static int Search(int[] nums, int target) {
        // 避免当 target 小于nums[0] nums[nums.length - 1]时多次循环运算
        if (target < nums[0] || target > nums[nums.length - 1]) {
            return -1;
        }
        int left = 0, right = nums.length - 1;
        while (left <= right) {
            int mid = left + ((right - left) >> 1);
            if (nums[mid] == target)
                return mid;
            else if (nums[mid] < target)
                left = mid + 1;
            else if (nums[mid] > target)
                right = mid - 1;
        }
        return -1;
    }
    
    public static int Search2(int[] nums,int target){
        int left = 0;
        int right = nums.length - 1;
        int mid = left + (right - left) / 2;
        while (right >= left){
            if (target < nums[mid]){
                right = mid - 1;
                mid = left + (right - left) / 2;
            }
            else if (target > nums[mid]){
                left = mid + 1;
                mid = left + (right - left) / 2;
            }
            else{
                return mid;
            }
        }
        return -1;
    }
    public static void main(String[] args) throws Exception {
        int[] nums = {-1,0,3,5,9,12};
        int target = 9;
        System.out.println(Search(nums,target));
    }
    
}
