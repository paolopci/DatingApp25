using API.Controllers;
using API.Entities;
using API.Interfaces;
using API.Mappers;
using FluentAssertions;
using Microsoft.AspNetCore.Mvc;
using Moq;

namespace API.Tests;

public class MembersControllerTests
{
    private readonly Mock<IMemberRepository> _mockRepo;
    private readonly MembersController _controller;
    private readonly UserMapper _mapper = new();

    public MembersControllerTests()
    {
        _mockRepo = new Mock<IMemberRepository>();
        _controller = new MembersController(_mockRepo.Object, _mapper);
    }

    [Fact]
    public async Task GetMembers_ShouldReturnOkWithMembers()
    {
        // Arrange
        var members = new List<Member> { new Member { Id = "1", DisplayName = "Paolo" } };
        _mockRepo.Setup(repo => repo.GetMembersAsync()).ReturnsAsync(members);

        // Act
        var result = await _controller.GetMembers();

        // Assert
        var okResult = result.Result.Should().BeOfType<OkObjectResult>().Subject;
        var returnedMembers = okResult.Value.Should().BeAssignableTo<IEnumerable<MemberDto>>().Subject;
        returnedMembers.Should().HaveCount(1);
    }

    [Fact]
    public async Task GetMember_WithValidId_ShouldReturnOkWithMember()
    {
        // Arrange
        var member = new Member { Id = "1", DisplayName = "Paolo" };
        _mockRepo.Setup(repo => repo.GetMemberByIdAsync("1")).ReturnsAsync(member);

        // Act
        var result = await _controller.GetMember("1");

        // Assert
        var okResult = result.Result.Should().BeOfType<OkObjectResult>().Subject;
        var returnedMember = okResult.Value.Should().BeOfType<MemberDto>().Subject;
        returnedMember.Id.Should().Be("1");
    }

    [Fact]
    public async Task GetMember_WithInvalidId_ShouldReturnNotFound()
    {
        // Arrange
        _mockRepo.Setup(repo => repo.GetMemberByIdAsync("99")).ReturnsAsync((Member?)null);

        // Act
        var result = await _controller.GetMember("99");

        // Assert
        result.Result.Should().BeOfType<NotFoundResult>();
    }
}
