CREATE TABLE IF NOT EXISTS Makes(
    make_id SERIAL PRIMARY KEY,
    name TEXT,
    origin TEXT
    
);
CREATE TABLE Vehicles (
    vehicle_id SERIAL PRIMARY KEY,
    make INT REFERENCES Makes(make_id),
    model TEXT NOT NULL,
    engine TEXT NOT NULL,
    color TEXT NOT NULL,
    license_plate_number TEXT,
    drive TEXT NOT NULL
);


INSERT INTO Makes VALUES(DEFAULT,'Mitsubishi','Japan');
INSERT INTO Vehicles VALUES (DEFAULT, '1','Outlander Sport','V6', 'Silver', 'GZR-2012','All-Wheel');
