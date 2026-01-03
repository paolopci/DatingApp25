-- DatingApp25 Seed Script
-- Resets Users, Members, and Photos and repopulates with 20 profiles (10M, 10F)
-- All users password: Micene@65

BEGIN TRANSACTION;

-- 1. Clear existing data
DELETE FROM Photos;
DELETE FROM Members;
DELETE FROM Users;

-- Common Password Hash and Salt for "Micene@65"
DECLARE @PasswordHash VARBINARY(MAX) = 0x1A26289D0F884288775400E905F79A30F987D46BC906A1C6EBF1972F930DBE8E1F6760FAACA9C87227024F71A13278584E5F6FEC0A975D8DF6E00A49D5147696;
DECLARE @PasswordSalt VARBINARY(MAX) = 0x6484A559FD422BC9CF05983C1AC4FC6B875BB058DEAA9AD876B024784AF85AC94277EB051B059A3347FC048DD1D075CD1DDA34AD0D16938E88C202FF84FF101A65C2F02DBE8468B0D10029A30F218727762AB618A416160277F33D60545DBAAE484720345F570EF94FAB386E5F9BB2F9A0657C1E5E85573A509A0AE5A2669698;

-- Profiles Data
DECLARE @Profiles TABLE (
    Id UNIQUEIDENTIFIER DEFAULT NEWID(),
    DisplayName NVARCHAR(MAX),
    Email NVARCHAR(MAX),
    Gender NVARCHAR(MAX),
    DateOfBirth DATE,
    City NVARCHAR(MAX),
    Country NVARCHAR(MAX),
    ImageUrl NVARCHAR(MAX)
);

-- Ensure table is empty
DELETE FROM @Profiles;

INSERT INTO @Profiles (DisplayName, Email, Gender, DateOfBirth, City, Country, ImageUrl)
VALUES 
('Paolo Paci', 'paolo.paci@example.com', 'male', '1965-01-10', 'Pesaro', 'Italy', 'https://randomuser.me/api/portraits/men/50.jpg'),
('Mario Rossi', 'mario.rossi@Example.com', 'male', '1985-05-12', 'Roma', 'Italy', 'https://randomuser.me/api/portraits/men/1.jpg'),
('Luca Bianchi', 'luca.bianchi@Example.com', 'male', '1990-08-22', 'Milano', 'Italy', 'https://randomuser.me/api/portraits/men/2.jpg'),
('Andrea Verdi', 'andrea.verdi@Example.com', 'male', '1988-11-05', 'Napoli', 'Italy', 'https://randomuser.me/api/portraits/men/3.jpg'),
('Paolo Neri', 'paolo.neri@Example.com', 'male', '1992-03-15', 'Torino', 'Italy', 'https://randomuser.me/api/portraits/men/4.jpg'),
('Roberto Ferrari', 'roberto.ferrari@Example.com', 'male', '1982-07-30', 'Bologna', 'Italy', 'https://randomuser.me/api/portraits/men/5.jpg'),
('Giorgio Russo', 'giorgio.russo@Example.com', 'male', '1995-12-10', 'Firenze', 'Italy', 'https://randomuser.me/api/portraits/men/6.jpg'),
('Stefano Romano', 'stefano.romano@Example.com', 'male', '1987-01-25', 'Genova', 'Italy', 'https://randomuser.me/api/portraits/men/7.jpg'),
('Francesco Gallo', 'francesco.gallo@Example.com', 'male', '1993-09-18', 'Palermo', 'Italy', 'https://randomuser.me/api/portraits/men/8.jpg'),
('Davide Costa', 'davide.costa@Example.com', 'male', '1989-04-02', 'Venezia', 'Italy', 'https://randomuser.me/api/portraits/men/9.jpg'),
('Alessandro Fontana', 'alessandro.fontana@Example.com', 'male', '1991-06-21', 'Verona', 'Italy', 'https://randomuser.me/api/portraits/men/10.jpg'),
('Giulia Esposito', 'giulia.esposito@Example.com', 'female', '1994-02-14', 'Roma', 'Italy', 'https://randomuser.me/api/portraits/women/1.jpg'),
('Chiara Ricci', 'chiara.ricci@Example.com', 'female', '1991-10-08', 'Milano', 'Italy', 'https://randomuser.me/api/portraits/women/2.jpg'),
('Francesca Marino', 'francesca.marino@Example.com', 'female', '1989-05-20', 'Napoli', 'Italy', 'https://randomuser.me/api/portraits/women/3.jpg'),
('Elena Bruno', 'elena.bruno@Example.com', 'female', '1993-12-05', 'Torino', 'Italy', 'https://randomuser.me/api/portraits/women/4.jpg'),
('Sofia Moretti', 'sofia.moretti@Example.com', 'female', '1986-08-12', 'Bologna', 'Italy', 'https://randomuser.me/api/portraits/women/5.jpg'),
('Martina Barbieri', 'martina.barbieri@Example.com', 'female', '1995-03-22', 'Firenze', 'Italy', 'https://randomuser.me/api/portraits/women/6.jpg'),
('Valentina Serra', 'valentina.serra@Example.com', 'female', '1990-11-15', 'Genova', 'Italy', 'https://randomuser.me/api/portraits/women/7.jpg'),
('Alessia Carbone', 'alessia.carbone@Example.com', 'female', '1992-07-04', 'Palermo', 'Italy', 'https://randomuser.me/api/portraits/women/8.jpg'),
('Beatrice De Luca', 'beatrice.deluca@Example.com', 'female', '1988-09-28', 'Venezia', 'Italy', 'https://randomuser.me/api/portraits/women/9.jpg'),
('Alice Gatti', 'alice.gatti@Example.com', 'female', '1994-01-10', 'Verona', 'Italy', 'https://randomuser.me/api/portraits/women/10.jpg');

-- 2. Insert into Users
INSERT INTO Users (Id, DisplayName, Email, ImageUrl, PasswordHash, PasswordSalt)
SELECT LOWER(CAST(Id AS NVARCHAR(450))), DisplayName, LOWER(LTRIM(RTRIM(Email))), ImageUrl, @PasswordHash, @PasswordSalt
FROM @Profiles;

-- 3. Insert into Members
INSERT INTO Members (Id, DisplayName, Gender, DateOfBirth, Created, LastActive, City, Country, ImageUrl, Description)
SELECT LOWER(CAST(Id AS NVARCHAR(450))), DisplayName, Gender, DateOfBirth, GETUTCDATE(), GETUTCDATE(), City, Country, ImageUrl, 'Ciao! Mi chiamo ' + DisplayName + ' e sono felice di essere qui.'
FROM @Profiles;

-- 4. Insert into Photos (Profile photos)
INSERT INTO Photos (Url, MemberId)
SELECT ImageUrl, LOWER(CAST(Id AS NVARCHAR(450)))
FROM @Profiles;

COMMIT TRANSACTION;
