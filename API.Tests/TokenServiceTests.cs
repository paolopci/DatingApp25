using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using API.Entities;
using API.Services;
using FluentAssertions;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Moq;

namespace API.Tests;

public class TokenServiceTests
{
    private readonly TokenService _tokenService;
    private readonly JwtSettings _jwtSettings;

    public TokenServiceTests()
    {
        _jwtSettings = new JwtSettings
        {
            Key = "super_secret_key_for_testing_purposes_only_1234567890_extra_length_for_hmac_sha512",
            Issuer = "DatingAppTest",
            Audience = "DatingAppTestUsers",
            TokenLifetimeMinutes = 60
        };

        var mockOptions = new Mock<IOptions<JwtSettings>>();
        mockOptions.Setup(x => x.Value).Returns(_jwtSettings);

        _tokenService = new TokenService(mockOptions.Object);
    }

    [Fact]
    public void CreateToken_ShouldReturnValidJwt()
    {
        // Arrange
        var user = new AppUser
        {
            Id = "1",
            Email = "test@example.com",
            DisplayName = "Test User",
            PasswordHash = new byte[0],
            PasswordSalt = new byte[0]
        };

        // Act
        var token = _tokenService.CreateToken(user);

        // Assert
        token.Should().NotBeNullOrEmpty();
        
        var tokenHandler = new JwtSecurityTokenHandler();
        var jwtToken = tokenHandler.ReadJwtToken(token);

        jwtToken.Issuer.Should().Be(_jwtSettings.Issuer);
        jwtToken.Audiences.Should().Contain(_jwtSettings.Audience);
        
        var claims = jwtToken.Claims.ToList();
        claims.Should().Contain(c => c.Type == JwtRegisteredClaimNames.Sub && c.Value == user.Id);
        claims.Should().Contain(c => c.Type == JwtRegisteredClaimNames.Email && c.Value == user.Email);
        claims.Should().Contain(c => c.Type == JwtRegisteredClaimNames.UniqueName && c.Value == user.DisplayName);
    }
}
