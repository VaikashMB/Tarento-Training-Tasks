import java.sql.*;

public class Main {
    public static void main(String[] args) {
        
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");

            java.sql.Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/EmployeeManagement", "root", "Welcome@123");
            Statement statement = connection.createStatement();



            java.sql.ResultSet resultSet = statement.executeQuery("select * from employeetable");

            while (resultSet.next()) {
                System.out.println(resultSet.getInt(1) + " " + resultSet.getString(2) + " " + resultSet.getString(3) + " " + resultSet.getString(4) + " " + resultSet.getString(5));
            }


            String new_emp_name = "Ashwin";
            int new_emp_age = 19;
            String new_emp_salary = "28000";
            String new_emp_dept = "Consulting";

            int rowsInserted = statement.executeUpdate("INSERT INTO employeetable (emp_name, emp_age, emp_salary, emp_dept) VALUES ('" + new_emp_name + "', " + new_emp_age + ", " + new_emp_salary + ", '" + new_emp_dept + "')");

            if (rowsInserted > 0) {
                System.out.println("New record inserted successfully!");
            } else {
                System.out.println("Failed to insert new record.");
            }



            int idToUpdate = 3;
            String updated_emp_name = "Sreelakshmi";
            int updated_emp_age = 22;
            String updated_emp_salary = "35000";
            String updated_emp_dept = "BA";

            int rowsUpdated = statement.executeUpdate("UPDATE employeetable SET emp_name='" + updated_emp_name + "', emp_age=" + updated_emp_age + ", emp_salary=" + updated_emp_salary + ", emp_dept='" + updated_emp_dept + "' WHERE emp_id=" + idToUpdate);

            if (rowsUpdated > 0) {
                System.out.println("Record with ID " + idToUpdate + " updated successfully!");
            } else {
                System.out.println("Record with ID " + idToUpdate + " not found or failed to update.");
            }




            int idToDelete = 0;
            int rowsDeleted = statement.executeUpdate("DELETE FROM employeetable WHERE emp_id=" + idToDelete);

            if (rowsDeleted > 0) {
                System.out.println("Record with ID " + idToDelete + " deleted successfully!");
            } else {
                System.out.println("Record with ID " + idToDelete + " not found or failed to delete.");
            }

            connection.close();
            } catch (ClassNotFoundException e) {
            System.out.println("Driver class not found: " + e.getMessage());
            } catch (SQLException sqlException) {
            System.out.println(sqlException.getMessage());
            }
    }
}