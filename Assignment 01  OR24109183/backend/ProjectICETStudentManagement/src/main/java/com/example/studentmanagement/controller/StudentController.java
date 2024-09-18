package com.example.studentmanagement.controller;

import com.example.studentmanagement.model.Student;
import com.example.studentmanagement.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class StudentController {

    @Autowired
    private StudentService studentService;

    
    @PostMapping("/add-student")
    public Student addStudent(@RequestBody Student student) {
        return studentService.saveStudent(student);
    }


    @GetMapping("/view-all-students")
    public List<Student> getAllStudents() {
        return studentService.getAllStudents();
    }
}
