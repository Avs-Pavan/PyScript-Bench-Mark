import java.util.Random;

public class Million{

    public static void main(String args[] ){
        System.out.println("[");
        for(int x = 0;x<10;x++){
            System.out.print("\""+genrateRandomNumber()+"\"");
            if(x<9)
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