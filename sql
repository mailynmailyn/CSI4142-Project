/*_______________CREATING INSTANCES OF THE DIMENSIONS/FACT TABLE______________________*/
CREATE TABLE Incident(
incident_number VARCHAR(50) NOT NULL, 
incident_date DATE,
incident_type VARCHAR(50),
PRIMARY KEY (incident_number) 
);

CREATE TABLE Animal (
animal_key VARCHAR(20) NOT NULL,
common_name VARCHAR(20),
number_animals INTEGER,
animal_health_stat VARCHAR (20),
PRIMARY KEY (animal_key)
);

CREATE TABLE Staff (
staff_key VARCHAR(20) NOT NULL,
field_unit VARCHAR(50),
tot_staff_hrs FLOAT(8),
tot_staff_involved FLOAT(8),
PRIMARY KEY (staff_key)
);

CREATE TABLE AnimalInvolvement (
animal_involvement_key VARCHAR(20) NOT NULL,
cause_animal_health_stat VARCHAR(50),
animal_behave VARCHAR(50),
reason_behave VARCHAR(50),
animal_attractant VARCHAR(50),
deterrents_used VARCHAR(50),
PRIMARY KEY (animal_involvement_key)
);

CREATE TABLE Location (
location_key VARCHAR(20) NOT NULL,
long_lat VARCHAR(50), 
heritage_area VARCHAR(80),
PRIMARY KEY (location_key)
);

CREATE TABLE FactTable (
 location_key VARCHAR(20) NOT NULL, /*gna be the long/lat point primary key*/
 animal_key VARCHAR(20) NOT NULL, /*random num primary*/
 animal_involvement_key VARCHAR(20) NOT NULL, /*random num primary*/
 incident_number VARCHAR(50) NOT NULL, /*incident number primary*/
 staff_key VARCHAR(20) NOT NULL, /* primary*/
 CONSTRAINT fk_location_key FOREIGN KEY (location_key) REFERENCES Location(location_key),
 CONSTRAINT fk_animal_key FOREIGN KEY (animal_key) REFERENCES Animal(animal_key),
 CONSTRAINT fk_animal_involvement_key FOREIGN KEY (animal_involvement_key) REFERENCES AnimalInvolvement(animal_involvement_key),
 CONSTRAINT fk_staff_key FOREIGN KEY (staff_key) REFERENCES Staff(staff_key),
 CONSTRAINT fk_incident_number FOREIGN KEY (incident_number) REFERENCES Incident(incident_number)
);

/*_______________STAGING DIMENSIONS/FACT TABLE______________________*/
/*---------exact file locations were redacted for privacy-----------*/
COPY Incident(incident_number,incident_date,incident_type)
FROM 'C:\Users\...' 
DELIMITER ','
CSV HEADER;

COPY Animal(animal_key,common_name,animal_health_stat, number_animals)
FROM 'C:\Users\...' 
DELIMITER ','
CSV HEADER;

COPY Staff(staff_key,field_unit, tot_staff_involved, tot_staff_hrs)
FROM 'C:\Users\...' 
DELIMITER ','
CSV HEADER;

COPY AnimalInvolvement(animal_involvement_key,cause_animal_health_stat,animal_behave, reason_behave,animal_attractant,deterrents_used)
FROM 'C:\Users\...' 
DELIMITER ','
CSV HEADER;

COPY Location(location_key,long_lat, heritage_area)
FROM 'C:\Users\...' 
DELIMITER ','
CSV HEADER;

COPY FactTable(incident_number,animal_involvement_key,animal_key,staff_key,location_key)
FROM 'C:\Users\...' 
DELIMITER ','
CSV HEADER;