USE [DataApp25];
GO

IF OBJECT_ID(N'dbo.Users', N'U') IS NULL
BEGIN
    PRINT 'Tabella dbo.Users non trovata.';
    RETURN;
END
GO

BEGIN TRY
    BEGIN TRAN;

    DELETE FROM dbo.Users;

    INSERT INTO dbo.Users (Id, DisplayName, Email)
    VALUES
      (CONVERT(nvarchar(50), NEWID()), N'Mario Rossi',   N'mario.rossi@example.com'),
      (CONVERT(nvarchar(50), NEWID()), N'Laura Bianchi', N'laura.bianchi@example.com'),
      (CONVERT(nvarchar(50), NEWID()), N'Luca Verdi',    N'luca.verdi@example.com'),
      (CONVERT(nvarchar(50), NEWID()), N'Giulia Neri',   N'giulia.neri@example.com'),
      (CONVERT(nvarchar(50), NEWID()), N'Paolo Gallo',   N'paolo.gallo@example.com'),
      (CONVERT(nvarchar(50), NEWID()), N'Sara Conti',    N'sara.conti@example.com'),
      (CONVERT(nvarchar(50), NEWID()), N'Andrea Riva',   N'andrea.riva@example.com'),
      (CONVERT(nvarchar(50), NEWID()), N'Chiara Greco',  N'chiara.greco@example.com'),
      (CONVERT(nvarchar(50), NEWID()), N'Matteo Costa',  N'matteo.costa@example.com'),
      (CONVERT(nvarchar(50), NEWID()), N'Elena Ferri',   N'elena.ferri@example.com');

    COMMIT;
END TRY
BEGIN CATCH
    IF @@TRANCOUNT > 0 ROLLBACK;

    DECLARE @Err nvarchar(4000) = ERROR_MESSAGE();
    RAISERROR('Errore durante lo script: %s', 16, 1, @Err);
END CATCH;
GO
