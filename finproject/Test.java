import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;

public class Test {
    public static void main(String[] args) {
        // Create an instance of ClientApp
        ClientApp app = new ClientApp();

        // Call the demo() method of ClientApp to execute the code and retrieve the output
        String output = app.demo();

        // Write the output to a file
        try {
            FileWriter fileWriter = new FileWriter("demo.txt");
            PrintWriter printWriter = new PrintWriter(fileWriter);
            printWriter.print(output);
            printWriter.close();
        } catch (IOException e) {
            System.err.println("Failed to write output to file: " + e.getMessage());
        }

        // Print the output to console
        System.out.print(output); // Update this line to use print() instead of println()
    }
}
