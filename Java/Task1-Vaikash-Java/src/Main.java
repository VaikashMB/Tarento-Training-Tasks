
import java.util.ArrayList;
import java.util.HashSet;

class Employee {
    String employeeName;
    int sickLeaves;

    Employee(String employeeName , int sickLeaves){
        this.employeeName = employeeName;
        this.sickLeaves = sickLeaves;
    }
}


public class Main {
    public static void main(String[] args) {
        ArrayList<Employee> emp = new ArrayList<>();
        emp.add(new Employee("Vaikash M B",0));
        emp.add(new Employee("Shreyas",6));
        emp.add(new Employee("Rohan",2));
        emp.add(new Employee("Syam",0));
        emp.add(new Employee("Arun",10));
        emp.add(new Employee("Shreyas",10));


        HashSet<Employee> employee = new HashSet<>();
        employee.add(new Employee("Subin",5));
        employee.add(new Employee("Sankar",7));
        employee.add(new Employee("Neeraj",0));
        employee.add(new Employee("Parthiv",3));
        employee.add(new Employee("Ravi",0));
        employee.add(new Employee("Neeraj",0));



        for (Employee e:emp){
            if (e.sickLeaves ==0){
                System.out.println(e.employeeName+" is eligible for a Bonus.");
            }
            else {
                System.out.println(e.employeeName+" is not eligible for a Bonus as they took "+e.sickLeaves+" sickleaves.");
            }
        }


        for (Employee e:employee){
            if (e.sickLeaves ==0){
                System.out.println(e.employeeName+ " is eligible for a Bonus.");
            }
            else {
                System.out.println(e.employeeName+ " is not eligible for a Bonus as they took "+e.sickLeaves+" sickleaves.");
            }
        }
    }
}
