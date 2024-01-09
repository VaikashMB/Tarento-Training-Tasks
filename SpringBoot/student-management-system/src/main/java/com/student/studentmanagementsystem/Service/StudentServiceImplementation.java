package com.student.studentmanagementsystem.Service;

import com.student.studentmanagementsystem.Entity.Student;
import com.student.studentmanagementsystem.Repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
public class StudentServiceImplementation implements StudentService {
    @Autowired
    StudentRepository studentRepository;

    @Override
    public ArrayList<Student> findAllStudent() {
        return (ArrayList<Student>) studentRepository.findAll();
    }

//    @Override
//    public Student findAllStudentByID(long id) {
//        Student opt = studentRepository.findById(id);
//        if (opt.isPresent())
//            return opt.get();
//        else
//            return null;
//    }

    @Override
    public void addStudent() {
        List<Student> students = new ArrayList<>();

        Student vaikash = new Student();
        vaikash.setName("Vaikash");
        vaikash.setAge(23);
        vaikash.setDept("ECE");
        vaikash.setCollege("NSSCE");

        Student rohan = new Student();
        rohan.setName("Rohan");
        rohan.setAge(22);
        rohan.setDept("CS");
        rohan.setCollege("CET");

        Student shreyas = new Student();
        shreyas.setName("Shreyas");
        shreyas.setAge(21);
        shreyas.setDept("MECH");
        shreyas.setCollege("RIT");

        Student sreelakshmi = new Student();
        sreelakshmi.setName("Sreelakshmi");
        sreelakshmi.setAge(23);
        sreelakshmi.setDept("ECE");
        sreelakshmi.setCollege("NSSCE");

        students.addAll(Arrays.asList(vaikash, rohan, shreyas, sreelakshmi));

        studentRepository.saveAll(students);
    }

    @Override
    public  void deleteAllData() {
        studentRepository.deleteAll();
    }



}
