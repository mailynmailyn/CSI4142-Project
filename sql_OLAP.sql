/* ========== PART A.1 ========== */

/* Before Drill Down */
SELECT l.heritage_area as park_name, SUM(s.tot_staff_hrs) as total_staff_hours FROM Staff s
JOIN FactTable ft ON s.staff_key = ft.staff_key
JOIN Location l ON ft.location_key = l.location_key
GROUP BY l.heritage_area

/* After Drill Down */
SELECT field_unit SUM(s.tot_staff_hrs) as total_staff_hours FROM Staff s
GROUP BY field_unit

/* Before roll up */
SELECT SUM(a.number_animals), l.long_lat 
FROM FactTable ft
JOIN Location l ON l.location_key = ft.location_key
JOIN Animal a ON a.animal_key = ft.animal_key
GROUP BY l.long_lat

/* After roll up */
SELECT SUM(a.number_animals), l.heritage_area 
FROM FactTable ft
JOIN Location l ON l.location_key = ft.location_key
JOIN Animal a ON a.animal_key = ft.animal_key
GROUP BY l.heritage_area

/* Slice */
SELECT * FROM FactTable ft
JOIN Incident i ft ON i.incident_number = ft.incident_number
JOIN Animal a ON ft.animal_key = a.animal_key
JOIN AnimalInvolvement ai ON ai.animal_involvement_key = ft.animal_involvement_key WHERE a.common_name = ‘Wolf’

/* Dice */
SELECT * FROM FactTable ft
JOIN Animal a ON a.animal_key = ft.animal_key
JOIN Location l ON l.location_key = ft.location_key
WHERE a.common_name = ‘Coyote’ AND l.heritage_area = ‘Jasper National Park of Canada’

/* Before roll-up+slice */
SELECT SUM(a.number_animals), l.long_lat 
FROM FactTable ft
WHERE a.common_name = ‘Coyote’
JOIN Location l ON l.location_key = ft.location_key
JOIN Animal a ON a.animal_key = ft.animal_key
GROUP BY l.long_lat

/* After roll-up+slice */
SELECT SUM(a.number_animals), l.heritage_area 
FROM FactTable ft
WHERE a.common_name = ‘Coyote’
JOIN Location l ON l.location_key = ft.location_key
JOIN Animal a ON a.animal_key = ft.animal_key
GROUP BY l.heritage_area

/* ========== PART A.2 ========== */

/* Iceberg */
SELECT i.incident_number, SUM(a.number_animals) AS total_animals
FROM Incident i
JOIN FactTable ft ON i.incident_number = ft.incident_number
JOIN Animal a ON ft.animal_key = a.animal_key
GROUP BY i.incident_number
ORDER BY total_animals DESC
LIMIT 5;

/* Windowing */
SELECT a.common_name, ai.cause_animal_health_stat, 
SUM(a.number_animals) OVER(PARTITION BY a.common_name,  ai.cause_animal_health_stat) AS total_death,
SUM(a.number_animals) OVER(PARTITION BY ai.cause_animal_health_stat, a.animal_health_stat) AS total_death_by_cause

FROM FactTable ft
JOIN Incident i ON i.incident_number = ft.incident_number
JOIN AnimalInvolvement ai ON ai.animal_involvement_key = ft.animal_involvement_key
JOIN Animal a ON a.animal_key = ft.animal_key
WHERE a.animal_health_stat = 'Dead'

/* Using the Window clause */
SELECT staff_key, field_unit, tot_staff_hrs, 
  SUM(tot_staff_hrs) OVER (PARTITION BY field_unit ORDER BY staff_key) AS total_hrs_by_unit 
FROM Staff;
