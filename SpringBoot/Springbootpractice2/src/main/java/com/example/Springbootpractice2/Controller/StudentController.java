package com.example.Springbootpractice2.Controller;

import com.example.Springbootpractice2.Entity.Student;
import com.example.Springbootpractice2.Service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/student")
public class StudentController {

    @Autowired
    private StudentService studentService;


    @PostMapping("/add")
    public String add(@RequestBody Student student){
        studentService.saveStudent(student);
        return "New Student Added";
    }

    @GetMapping("/get")
    public List<Student> getAllStudents(){
        return studentService.getAllStudents();
    }

}
