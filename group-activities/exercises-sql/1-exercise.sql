CREATE DATABASE human_resources;

USE human_resources;

CREATE TABLE employees(
	id INTEGER AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL UNIQUE,
  occupation VARCHAR(50),
  salary DECIMAL(15,2) NOT NULL,
  created_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO employees VALUES 
(null, 'Paxton Troy', 'ptroy0@hostgator.com', 'Software Consultant', 1718.72, DEFAULT),
(null, 'Kattie Di Franceschi', 'kdi1@elegantthemes.com', 'Engineer III', 2113.25, DEFAULT),
(null, 'Westbrook Gloucester', 'wgloucester2@youku.com', 'Desktop Support Technician', 7378.8, DEFAULT),
(null, 'Urson De Stoop', 'ude3@odnoklassniki.ru', 'Office Assistant II', 3537.16, DEFAULT),
(null, 'Palm Innocent', 'pinnocent4@abc.net.au', 'Data Coordiator', 7459.65, DEFAULT),
(null, 'Augustina Addionisio', 'aaddionisio5@cisco.com', 'Internal Auditor', 2427.56, DEFAULT),
(null, 'Amelia Brahms', 'abrahms6@seattletimes.com', 'Programmer Analyst IV', 7854.72, DEFAULT),
(null, 'Silvano Spring', 'sspring7@simplemachines.org', 'VP Sales', 1346.16, DEFAULT),
(null, 'Daune Parramore', 'dparramore8@hhs.gov', 'Data Coordiator', 1105.26, DEFAULT),
(null, 'Ellyn Wiffield', 'ewiffield9@admin.ch', 'Recruiting Manager', 1867.74, DEFAULT);

SELECT * FROM employees WHERE salary > 2000;
SELECT * FROM employees WHERE salary < 2000;

UPDATE employees SET name = 'Pedro Mascarenhas', email = 'pedro.mascarenhas@asd.com' WHERE id = 5;
UPDATE employees SET salary = 1800.0 WHERE id = 5;