using Microsoft.AspNetCore.Mvc;
using API.Data;
using API.Entities;


namespace API.Controllers;

[ApiController]
[Route("api/[controller]")] // localhost:5001/api/members
public class MembersController(AppDataContext context) : ControllerBase
{
    [HttpGet]
    public ActionResult<IReadOnlyList<AppUser>> GetMembers()
    {
        var members = context.Users.ToList();
        return Ok(members);
    }

    [HttpGet("{id}")]
    public ActionResult<AppUser> GetMember(string id)
    {
        var member = context.Users.Find(id);
        if (member == null)
        {
            return NotFound();
        }
        return Ok(member);
    }
}