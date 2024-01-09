package com.student.studentmanagementsystem.Service;

import com.student.studentmanagementsystem.Entity.Student;

import java.util.ArrayList;

public interface StudentService {
    ArrayList<Student> findAllStudent();
//    Student findAllStudentByID(long id);
    void addStudent();
    void  deleteAllData();
}
