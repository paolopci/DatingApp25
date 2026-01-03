using API.Entities;
using API.Helpers;
using Riok.Mapperly.Abstractions;

namespace API.Mappers
{
    [Mapper]
    public partial class UserMapper
    {
        [MapProperty(nameof(Member.DateOfBirth), nameof(MemberDto.Age))]
        public partial MemberDto MapToDto(Member member);

        public partial PhotoDto MapToPhotoDto(Photo photo);

        private int MapAge(DateOnly dob) => dob.CalculateAge();
    }
}
