--todo ------ IOC database ------#ff9900

-- Create the Submitters table
CREATE TABLE Submitter (
  submitter_id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  email VARCHAR(100),
  telephone VARCHAR(20),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
-- Create the IOCReports table
CREATE TABLE IOCReports (
  report_id INT AUTO_INCREMENT PRIMARY KEY,
  submitter_id INT,
  website_type VARCHAR(50),
  website_url VARCHAR(200),
  ioc_detected VARCHAR(100),
  ioc_description TEXT,
  FOREIGN KEY (submitter_id) REFERENCES Submitter(submitter_id)
);


--todo ------ personal report database ------#ff9900

-- Create the Complainants table
CREATE TABLE Complainants (
  complainant_id INT AUTO_INCREMENT PRIMARY KEY,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  email VARCHAR(100),
  telephone VARCHAR(20),
  age INT,
  gender VARCHAR(10),
  role VARCHAR(50),
  address VARCHAR(200)
);

-- Create the Complaints table
CREATE TABLE Complaints (
  complaint_id INT AUTO_INCREMENT PRIMARY KEY,
  complainant_id INT,
  incident_date DATE,
  incident_type VARCHAR(100),
  description TEXT,
  file_path VARCHAR(200),
  FOREIGN KEY (complainant_id) REFERENCES Complainants (complainant_id)
);

-- Create the Complained_Against table
CREATE TABLE Complained_Against (
  Complained_Against INT AUTO_INCREMENT PRIMARY KEY,
  complainant_id INT,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  company_name VARCHAR(100),
  country VARCHAR(100),
  email_address VARCHAR(100),
  website VARCHAR(200),
  FOREIGN KEY (complainant_id) REFERENCES Complainants (complainant_id)
);


--todo ------ Buisinesses report database ------#ff9900

-- Create the Complainants table
CREATE TABLE Complainants (
  complainant_id INT AUTO_INCREMENT PRIMARY KEY,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  email VARCHAR(100),
  telephone VARCHAR(20),
  age INT,
  gender VARCHAR(10)
);
-- Create the companies table
CREATE TABLE Companies (
  company_id INT AUTO_INCREMENT PRIMARY KEY,
  complainant_id INT,
  company_name VARCHAR(100),
  company_website VARCHAR(200),
  company_address VARCHAR(200),
  company_email VARCHAR(100),
  company_type VARCHAR(100),
  role VARCHAR(50),
  FOREIGN KEY (complainant_id) REFERENCES Complainants (complainant_id)
);
-- Create the Complaints table
CREATE TABLE Complaints (
  complaint_id INT AUTO_INCREMENT PRIMARY KEY,
  complainant_id INT,
  incident_date DATE,
  incident_type VARCHAR(100),
  description TEXT,
  file_path VARCHAR(200),
  FOREIGN KEY (complainant_id) REFERENCES Complainants (complainant_id)
);

-- Create the Complained_Against table
CREATE TABLE Complained_Against (
  Complained_Against INT AUTO_INCREMENT PRIMARY KEY,
  complainant_id INT,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  company_name VARCHAR(100),
  country VARCHAR(100),
  email_address VARCHAR(100),
  website VARCHAR(200),
  FOREIGN KEY (complainant_id) REFERENCES Complainants (complainant_id)
);


--todo ------ government report database ------#ff9900

-- Create the Complainants table
CREATE TABLE Complainants (
  complainant_id INT AUTO_INCREMENT PRIMARY KEY,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  email VARCHAR(100),
  telephone VARCHAR(20),
  age INT,
  gender VARCHAR(10)
);
-- Create the companies table
CREATE TABLE governments (
  organization_id INT AUTO_INCREMENT PRIMARY KEY,
  complainant_id INT,
  organization_name VARCHAR(100),
  organization_website VARCHAR(200),
  organization_address VARCHAR(200),
  organization_email VARCHAR(100),
  role VARCHAR(50),
  FOREIGN KEY (complainant_id) REFERENCES Complainants (complainant_id)
);
-- Create the Complaints table
CREATE TABLE Complaints (
  complaint_id INT AUTO_INCREMENT PRIMARY KEY,
  complainant_id INT,
  incident_date DATE,
  incident_type VARCHAR(100),
  description TEXT,
  file_path VARCHAR(200),
  FOREIGN KEY (complainant_id) REFERENCES Complainants (complainant_id)
);

-- Create the Complained_Against table
CREATE TABLE Complained_Against (
  Complained_Against INT AUTO_INCREMENT PRIMARY KEY,
  complainant_id INT,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  company_name VARCHAR(100),
  country VARCHAR(100),
  email_address VARCHAR(100),
  website VARCHAR(200),
  FOREIGN KEY (complainant_id) REFERENCES Complainants (complainant_id)
);
