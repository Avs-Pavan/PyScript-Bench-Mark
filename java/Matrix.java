import java.util.Random;

public class Matrix {

    public static void main(String args[]) {
        int matrix[][] = new int[1000][1000];

        for (int x = 0; x < matrix.length; x++)
            for (int y = 0; y < matrix[x].length; y++)
                matrix[x][y] = random();

        System.out.println("[");
        for (int x = 0; x < matrix.length; x++) {
            System.out.print("[");
            for (int y = 0; y < matrix[x].length; y++) {
                if (y < matrix[x].length - 1)
                    System.out.print(matrix[x][y] + ",");
                else
                    System.out.print(matrix[x][y]);
            }
            if (x < matrix.length - 1)
                System.out.println("],");
            else
                System.out.println("]");
        }
        System.out.println("]");
    }

    public static int random() {
        return new Random().nextInt(100);
    }
}