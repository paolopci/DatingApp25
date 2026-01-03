using API.Entities;
using API.Interfaces;
using API.Mappers;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;


namespace API.Controllers;


public class MembersController(IMemberRepository memberRepository, UserMapper mapper) : BaseApiController
{
    [Authorize]
    [HttpGet]
    public async Task<ActionResult<IReadOnlyList<MemberDto>>> GetMembers()
    {
        var members = await memberRepository.GetMembersAsync();
        var membersToReturn = members.Select(mapper.MapToDto).ToList();
        
        return Ok(membersToReturn);
    }

    [Authorize]
    [HttpGet("{id}")]
    public async Task<ActionResult<MemberDto>> GetMember(string id)
    {
        var member = await memberRepository.GetMemberByIdAsync(id);
        if (member == null)
        {
            return NotFound();
        }

        return Ok(mapper.MapToDto(member));
    }
}
