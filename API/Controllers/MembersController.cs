using API.Entities;
using API.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;


namespace API.Controllers;


public class MembersController(IMemberRepository memberRepository) : BaseApiController
{
    [Authorize]
    [HttpGet]
    public async Task<ActionResult<IReadOnlyList<Member>>> GetMembers()
    {
        var members = await memberRepository.GetMembersAsync();
        return Ok(members);
    }

    [Authorize]
    [HttpGet("{id}")]
    public async Task<ActionResult<Member>> GetMember(string id)
    {
        var member = await memberRepository.GetMemberByIdAsync(id);
        if (member == null)
        {
            return NotFound();
        }
        return Ok(member);
    }
}
