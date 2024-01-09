package com.example.Springbootpractice2.Service;

import com.example.Springbootpractice2.Entity.Student;

import java.util.List;


public interface StudentService {

    public Student saveStudent(Student student);
    public List<Student> getAllStudents();
}
