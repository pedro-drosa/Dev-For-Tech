-- Criar base de dados
CREATE DATABASE devfortech;

-- Selecionar base de dados
USE devfortech;

-- Criar tabela students  
CREATE TABLE students (
 id INTEGER AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(50) NOT NULL,
 email varchar(50) UNIQUE
);

-- Inserir dados na tabela students
INSERT INTO students values 
(null, 'Jonas Smieton', 'jsmieton0@yandex.ru'),
(null, 'Christoper Thiem', 'cthiem1@mtv.com'),
(null, 'Burton Bleeze', 'bbleeze2@tmall.com'),
(null, 'Christalle Angier', 'cangier3@smh.com.au'),
(null, 'Putnam Jaimez', 'pjaimez4@cnbc.com'),
(null, 'Felix Sea', 'fsea5@phoca.cz'),
(null, 'Chalmers Bea', 'cbea6@wunderground.com'),
(null, 'Neale Holdin', 'nholdin7@washingtonpost.com'),
(null, 'Andi Mineghelli', 'amineghelli8@vk.com'),
(null, 'Susanna de Quesne', 'sde9@infoseek.co.jp');

-- Consultas simples
SELECT * FROM students;
SELECT * FROM students ORDER BY id DESC;
SELECT * FROM students ORDER BY id ASC;
SELECT * FROM students WHERE id = 1;
SELECT COUNT(id) AS total_students FROM students;

-- Atualizar tabela students
UPDATE students SET name = 'Pedro Mascarenhas' WHERE id = 1;

-- Criar tabela cursos
CREATE TABLE courses (
	id INTEGER AUTO_INCREMENT PRIMARY KEY,
  	name VARCHAR(50) NOT NULL UNIQUE,
    description VARCHAR(50),
    workload INTEGER NOT NULL
);

-- Inserir dados na tabela courses
INSERT INTO courses VALUES 
(null, 'Statistician III', 'Business Systems Development Analyst',80),
(null, 'VP Marketing', 'Contusion of left wrist',80);

-- Adicionar nova coluna na tabela students
ALTER TABLE students 
ADD COLUMN course INTEGER NOT NULL;

-- Adicionar um curso válido para cada aluno
UPDATE students SET course = 1 WHERE id = 1;
UPDATE students SET course = 2 WHERE id = 2;
UPDATE students SET course = 1 WHERE id = 3;
UPDATE students SET course = 2 WHERE id = 4;
UPDATE students SET course = 1 WHERE id = 5;
UPDATE students SET course = 2 WHERE id = 6;
UPDATE students SET course = 1 WHERE id = 7;
UPDATE students SET course = 2 WHERE id = 8;
UPDATE students SET course = 1 WHERE id = 9;
UPDATE students SET course = 2 WHERE id = 10;

-- Adiconar uma chave estrangeira na tabela students
ALTER TABLE students 
ADD CONSTRAINT fk_student_course FOREIGN KEY (course) 
REFERENCES courses (id);

-- Resumo de alunos por curso
SELECT 
students.id AS student_id, 
students.name AS student_name, 
courses.name AS course_name, 
courses.description AS course_description,
courses.workload AS course_workload
FROM students
INNER JOIN courses
ON students.course = courses.id;