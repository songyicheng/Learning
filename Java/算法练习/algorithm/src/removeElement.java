public class removeElement {
    public static int Search(int[] nums,int target){
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
    public static void main(String[] args){
        int[] nums = {-1,0,3,5,9,12};
        int target = 100;
        System.out.println(Search(nums,target));
    }
}
