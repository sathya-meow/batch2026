create database train_db;
use train_db;

create table course (
course_id int primary key auto_increment,
course_name varchar(100) not null,
category varchar(50),
duration varchar (50),
fees decimal(10,2)
);

INSERT INTO course (course_name, category, duration, fees) VALUES ('Python Full Stack', 'Programming', '6 Months', 25000), ('Java Full Stack', 'Programming', '6 Months', 30000), ('Web Development', 'IT', '4 Months', 20000), ('Data Science', 'Analytics', '8 Months', 40000), ('SQL & MySQL', 'Database', '2 Months', 10000);

create table trainer (
trainer_id int primary key auto_increment,
trainer_name varchar(100) not null,
email varchar(100) unique,
mobile varchar(10),
experience int

);

INSERT INTO trainer (trainer_name, email, mobile, experience) VALUES ('Arun', 'arun@gmail.com', '9876543210', 5), ('Bala', 'bala@gmail.com', '9876543211', 3), ('Dinesh', 'dinesh@gmail.com', '9876543212', 4), ('Kumar', 'kumar@gmail.com', '9876543213', 6), ('Ravi', 'ravi@gmail.com', '9876543214', 2);



create table students (
student_id int primary key auto_increment,
student_name varchar(100) not null,
email varchar(100) unique,
mobile varchar(15),
city varchar(50)

);

INSERT INTO students (student_name, email, mobile, city) VALUES ('Prakash', 'prakash@gmail.com', '9000000001', 'Chennai'), ('Ajay', 'ajay@gmail.com', '9000000002', 'Coimbatore'), ('Suresh', 'suresh@gmail.com', '9000000003', 'Madurai'), ('Vijay', 'vijay@gmail.com', '9000000004', 'Thanjavur'), ('Karthik', 'karthik@gmail.com', '9000000005', 'Salem');





CREATE TABLE enrollment (
    enrollment_id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT,
    course_id INT,
    trainer_id INT,
    enrollment_date DATE,
    status VARCHAR(30),
    FOREIGN KEY (student_id) REFERENCES students(student_id),
    FOREIGN KEY (course_id) REFERENCES course(course_id),
    FOREIGN KEY (trainer_id) REFERENCES trainer(trainer_id)
);


INSERT INTO enrollment (student_id, course_id, trainer_id, enrollment_date, status) VALUES (1, 1, 1, '2026-11-01', 'Active'), (2, 2, 2, '2026-11-02', 'Active'), (3, 3, 3, '2026-11-03', 'Completed'), (4, 4, 4, '2026-11-04', 'Active'), (5, 5, 5, '2026-11-05', 'Pending');




SELECT * FROM course;
SELECT * FROM trainer;
SELECT * FROM students;
SELECT * FROM enrollment;


SELECT 
    s.student_id,
    s.student_name,
    s.email,
    s.mobile,
    s.city,
    c.course_id,
    c.course_name,
    c.category,
    c.duration,
    c.fees,
    t.trainer_id,
    t.trainer_name,
    t.email AS trainer_email,
    t.mobile AS trainer_mobile,
    t.experience,
    e.enrollment_id,
    e.enrollment_date,
    e.status
FROM enrollment e
INNER JOIN students s ON e.student_id = s.student_id
INNER JOIN course c ON e.course_id = c.course_id
INNER JOIN trainer t ON e.trainer_id = t.trainer_id;


SELECT s.student_name, c.course_name, t.trainer_name FROM enrollment e INNER JOIN students s ON e.student_id = s.student_id INNER JOIN course c ON e.course_id = c.course_id INNER JOIN trainer t ON e.trainer_id = t.trainer_id WHERE e.status = 'Active';