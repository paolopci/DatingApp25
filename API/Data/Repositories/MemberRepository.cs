using API.Entities;
using API.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace API.Data.Repositories
{
    public class MemberRepository(AppDataContext context) : IMemberRepository
    {
        public async Task<IReadOnlyList<Member>> GetMembersAsync()
        {
            return await context.Members
                .Include(m => m.Photos)
                .ToListAsync();
        }

        public async Task<Member?> GetMemberByIdAsync(string id)
        {
            return await context.Members
                .Include(m => m.Photos)
                .FirstOrDefaultAsync(m => m.Id == id);
        }

        public async Task<IReadOnlyList<Photo>> GetPhotosForMemberAsync(string memberId)
        {
            return await context.Photos
                .Where(p => p.Member.Id == memberId)
                .ToListAsync();
        }

        public async Task<bool> SaveAllAsync()
        {
            return await context.SaveChangesAsync() > 0;
        }

        public void Update(Member member)
        {
            context.Entry(member).State = EntityState.Modified;
        }
    }
}
