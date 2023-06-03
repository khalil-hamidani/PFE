CREATE TABLE personal_informations (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    email VARCHAR(255),
    phone_number VARCHAR(255),
    age INT,
    gender VARCHAR(255),
    address VARCHAR(255)
);

CREATE TABLE complained_against (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    company_name VARCHAR(255),
    email VARCHAR(255),
    country VARCHAR(255),
    website VARCHAR(255)
);

CREATE TABLE details (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    incident_date DATE,
    incident_type VARCHAR(255),
    description VARCHAR(255),
    file_path VARCHAR(255)
);

CREATE TABLE ioc (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    email VARCHAR(255),
    website VARCHAR(255),
    ioc_name VARCHAR(255),
    details VARCHAR(255)
);

CREATE TABLE incident (
    incident_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    type VARCHAR(255),
    report_p INT,
    report_b INT,
    report_g INT,
    FOREIGN KEY (report_p) REFERENCES personal(id),
    FOREIGN KEY (report_b) REFERENCES business(id),
    FOREIGN KEY (report_g) REFERENCES governement(id)
);

CREATE TABLE reports (
    reports_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    incident_type INT,
    ioc_type INT,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (incident_type) REFERENCES incident(incident_id),
    FOREIGN KEY (ioc_type) REFERENCES ioc(id)
);

CREATE TABLE governement (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    personal_informations INT,
    complained_against INT,
    details INT,
    FOREIGN KEY (personal_informations) REFERENCES personal_informations(id),
    FOREIGN KEY (complained_against) REFERENCES complained_against(id),
    FOREIGN KEY (details) REFERENCES details(id)
);

CREATE TABLE business (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    personal_informations INT,
    business_info INT,
    complained_against INT,
    details INT,
    FOREIGN KEY (personal_informations) REFERENCES personal_informations(id),
    FOREIGN KEY (complained_against) REFERENCES complained_against(id),
    FOREIGN KEY (details) REFERENCES details(id)
);
