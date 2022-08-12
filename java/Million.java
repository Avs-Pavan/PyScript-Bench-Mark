import java.util.Random;

public class Million{

    public static void main(String args[] ){
        System.out.println("[");
        for(int x = 0;x<1000000;x++){
            System.out.print(genrateRandomNumber());
            if(x<(1000000-1))
            System.out.println(",");
            else
            System.out.println("");
        }
        System.out.println("]");

    }

    private static int genrateRandomNumber() {
        Random random = new Random();
        return Math.abs(random.nextInt());
    }
}