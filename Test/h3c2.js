const nums=[-1,0,1,2,-1,-4]
nums.sort((a,b)=>{return a-b})
const res=[]
for(let i=0;i<nums.length;i++){
    let l=i+1,r=nums.length-1
    if(nums[i]==nums[i-1]) continue
    while(l<r){
        if(nums[i]+nums[l]+nums[r]<0)l++
        else if(nums[i]+nums[l]+nums[r]>0)r--
        else{
            res.push([nums[i],nums[l],nums[r]])
            while(l<r && nums[l]==nums[l+1]){l++}
            while(l<r && nums[r]==nums[r-1]){r--}
            l++
            r--
        }
    }
}
console.log(res)