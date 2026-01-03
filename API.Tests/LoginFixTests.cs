using System.Security.Cryptography;
using System.Text;
using Xunit;
using FluentAssertions;

namespace API.Tests;

public class LoginFixTests
{
    [Fact]
    public void VerifyHashFromSqlScript()
    {
        // Valori presi esattamente dal file seed.sql
        string password = "Micene@65";
        byte[] expectedHash = StringToByteArray("1A26289D0F884288775400E905F79A30F987D46BC906A1C6EBF1972F930DBE8E1F6760FAACA9C87227024F71A13278584E5F6FEC0A975D8DF6E00A49D5147696");
        byte[] salt = StringToByteArray("6484A559FD422BC9CF05983C1AC4FC6B875BB058DEAA9AD876B024784AF85AC94277EB051B059A3347FC048DD1D075CD1DDA34AD0D16938E88C202FF84FF101A65C2F02DBE8468B0D10029A30F218727762AB618A416160277F33D60545DBAAE484720345F570EF94FAB386E5F9BB2F9A0657C1E5E85573A509A0AE5A2669698");

        using var hmac = new HMACSHA512(salt);
        var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(password));

        computedHash.Should().Equal(expectedHash, "L'hash calcolato deve corrispondere a quello nello script SQL");
    }

    private byte[] StringToByteArray(string hex)
    {
        int NumberChars = hex.Length;
        byte[] bytes = new byte[NumberChars / 2];
        for (int i = 0; i < NumberChars; i += 2)
            bytes[i / 2] = Convert.ToByte(hex.Substring(i, 2), 16);
        return bytes;
    }
}
