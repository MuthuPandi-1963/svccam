public class sort {
    public static void main(String[] args) {
        int arr[] = {1,0,2,1,0,1,2};
        int start =0 ;
        int end = arr.length-1;
        int mid = 0;
        while (start <= end && mid <=end) {
            if(arr[start] == 0) start++;
            if(arr[end] == 2) end--;
            if(arr[mid]==1) mid++;
            else {
                if(arr[mid] == 0){
                    int temp = arr[mid];
                    arr[mid] = arr[start];
                    arr[start] =temp;
                    start++;
                }else{
                    int temp = arr[mid];
                    arr[mid] = arr[end];
                    arr[end] = temp;
                    end--;
                }
            }
        }
        
        for (int i : arr) System.out.println(i);
    }
}
