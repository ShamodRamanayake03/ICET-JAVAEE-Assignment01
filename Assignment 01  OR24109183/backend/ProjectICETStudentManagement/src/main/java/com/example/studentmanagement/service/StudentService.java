package com.example.studentmanagement.service;

import com.example.studentmanagement.model.Student;
import com.example.studentmanagement.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;

    // Add a new student
    public Student saveStudent(Student student) {
        return studentRepository.save(student);
    }

    // Get list of all students
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }
}
