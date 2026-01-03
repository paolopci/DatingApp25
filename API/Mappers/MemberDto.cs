namespace API.Mappers
{
    public class MemberDto
    {
        public string Id { get; set; } = null!;
        public string DisplayName { get; set; } = null!;
        public int Age { get; set; }
        public DateOnly DateOfBirth { get; set; }
        public string? ImageUrl { get; set; }
        public DateTime Created { get; set; }
        public DateTime LastActive { get; set; }
        public string Gender { get; set; } = null!;
        public string Description { get; set; } = null!;
        public string City { get; set; } = null!;
        public string Country { get; set; } = null!;
        public ICollection<PhotoDto> Photos { get; set; } = [];
    }
}
