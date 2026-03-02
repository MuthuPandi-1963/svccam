public class fre{
    public static void main(String[] args) {
        
        int[] arr={2,3,2,2,4,5,3,3,3};

        int n = arr.length;
        int num[] = new int[n];

        for (int i = 0; i < n; i++) {
            num[arr[i]]++;
        }

        int max = num[0];
        int index = 0;
        for (int i = 0; i < n; i++) {
            if(max < num[i]){
                max = num[i];
                index = i;
            }
        }
        System.out.println("Most repaated Element in the Array : "+index);

        String s = "madam";

        int left = 0;
        int right = s.length()-1;

        while (left < right){
            if(s.charAt(left) != s.charAt(right)){
                System.out.println("It not a palindrome");
                break;
            }else{
                left++;
                right--;
            }
        } 

        if(left >= right){
            System.out.println("its a Palindrome");
        }
    }
}