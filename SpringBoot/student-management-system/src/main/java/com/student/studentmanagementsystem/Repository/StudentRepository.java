package com.student.studentmanagementsystem.Repository;

import com.student.studentmanagementsystem.Entity.Student;
import jakarta.persistence.Id;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
@Repository
public interface StudentRepository extends JpaRepository<Student, Long>{
    <Optional>Student findById(long Id);
}