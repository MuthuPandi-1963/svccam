public class plusone {
    public static void main(String[] args) {
        int arr[] = {9,0,9};
        int n = arr.length - 1;
        System.out.print("Input ");
        for (int i : arr) {
            System.out.print(" "+i);
        }
        System.out.println("");
        while(n>=0){
            if(arr[n]>=0 && arr[n] <=8){
                arr[n]++;
                break;
            }else{
                arr[n] = 0;
                n--;
            }
        }
        System.out.print("Ouput ");
        if(n<0){
            int newArr[] = new int[arr.length+1];
            newArr[0] = 1;
            for (int i : newArr) {
                System.out.print(" " + i);
            }
        }else{
            for (int i : arr) {
                System.out.print(" "+i);
            }
        }
        
    }
}
