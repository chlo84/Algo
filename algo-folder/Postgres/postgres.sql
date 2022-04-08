CREATE TABLE Vehicles (
    vehicle_id SERIAL PRIMARY KEY,
    make SERIAL FOREIGN KEY REFERENCES Makes(make_id),
    model TEXT NOT NULL,
    engine TEXT NOT NULL,
    color TEXT NOT NULL,
    license_plate_number TEXT,
    drive INT NOT NULL,
);

CREATE TABLE IF NOT EXISTS Makes(
    make_id SERIAL PRIMARY KEY,
    name TEXT,
    origin TEXT
    
);

INSERT INTO Vehicles VALUES (DEFAULT, '12345678933', 'Mitsubishi', 'V6', 'Silver', 'GZR-2012','ALL_WHEEL');
INSERT INTO Makes VALUES(DEFAULT,'Mitsubishi','Japan');