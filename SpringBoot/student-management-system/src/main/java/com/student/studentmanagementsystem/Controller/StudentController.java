package com.student.studentmanagementsystem.Controller;

import com.student.studentmanagementsystem.Entity.Student;
import com.student.studentmanagementsystem.Service.StudentServiceImplementation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.ArrayList;

@RestController
@RequestMapping("/student")
public class StudentController {

    @Autowired
    StudentServiceImplementation studentServiceImplementation;

    @PostMapping("/add")
public ResponseEntity<String> addStudent(){
        studentServiceImplementation.addStudent();
        return ResponseEntity.ok("Insertion done");

    }

    @GetMapping("/findall")
    public ArrayList<Student> getAllStudent() {
        return studentServiceImplementation.findAllStudent();
    }

//    @GetMapping("/findbyid/{id}")
//    public Student getStudentUsingId(@PathVariable long id) {
//        return studentServiceImplementation.findAllStudentByID(id);
//    }

    @DeleteMapping("/delete")
    public void delete(){
        studentServiceImplementation.deleteAllData();
    }
}


@RestController
@RequestMapping("/status")
 class DatabaseCheckController {

    @Autowired
    private DataSource dataSource;

    @GetMapping("/check")
    public ResponseEntity<String> checkDatabaseConnection() {
        try (Connection connection = dataSource.getConnection()) {
            return ResponseEntity.ok("Database connection is successful");
        } catch (SQLException e) {
            return ResponseEntity.status(500).body("Error connecting to the database");
        }
    }
}