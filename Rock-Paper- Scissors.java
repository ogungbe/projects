import java.util.Scanner;
import java.awt.print.Paper;
import java.util.Arrays;
import java.util.Random;



public class rockpaper {
    



    String[] options = {"rock", "paper", "scissors"};

    public int getRandom(){
        Random random = new Random();

        // Generate a random number between 0 and 3 (inclusive)
        int randomNumber = random.nextInt(4);
        return randomNumber;
    }

    public void getuserwin(){
        String msg = "You win";
        System.out.println(msg);  
    }

    public void getcompwin(){
        String msg = "Computer win";
        System.out.println(msg);  
    }

    public void checker(int randomNumber, String userinput){
        /*if (options[randomNumber].equals("rock")){
            System.out.println("yay you got rock brudder");
        }
        */

        System.out.println("The games' choice is " + options[randomNumber]);
        //System.out.println(userinput);
        //System.out.println(Arrays.toString(options));
        //options[0] > options[2] == true;

        if (options[randomNumber].equals("rock") && userinput.equals("scissors")){
            this.getcompwin();

        }else if (options[randomNumber].equals("scissors") && userinput.equals("rock")){
            this.getuserwin();

        }

        if (options[randomNumber].equals("rock") && userinput.equals("paper")){
            this.getcompwin();

        }else if (options[randomNumber].equals("paper") && userinput.equals("rock")){
            this.getuserwin();
        }

        if (options[randomNumber].equals("paper") && userinput.equals("scissors")){
            this.getuserwin();

        }else if (options[randomNumber].equals("scissors") && userinput.equals("paper")){
            this.getcompwin();

        }

        


    }

    
    public void whethertoContinue(String answer){
        answer = answer.toLowerCase();
        if (answer.equals("n")){
            System.exit(0);
        }else if (answer.equals("y")){
        System.out.println("Coolio");
        }else{
            System.exit(0);
        }
    }


    public static void main(String[] args) {
        rockpaper game = new rockpaper();
        System.out.println("hey there welcome to rock, paper, scissors... best of three good luck ;)");
        //System.out.println("Do you wish to continue Y/N?");
        Scanner scanner = new Scanner(System.in);
        //String answer = scanner.nextLine(); // Read a line of text
        //game.whethertoContinue(answer);
        
        //Scanner scanner = new Scanner(System.in);
        for (int i = 0; i < 3; i++){
            System.out.println("put in your choice!");
        String choice = scanner.nextLine();
        int number = game.getRandom();
        game.checker(number, choice);
        if (i % 2 == 0){
        System.out.println("Do you wish to continue Y/N?");
        String answer = scanner.nextLine(); // Read a line of text
        game.whethertoContinue(answer);
        }
        



        }
        scanner.close();


        




    }
    
}
