using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities
{
    public class Member
    {
        public string Id { get; set; } = null!;
        public DateOnly DateOfBirth { get; set; }
        public string? ImageUrl { get; set; }

        [Required]
        public string DisplayName { get; set; }

        public DateTime Created { get; set; } = DateTime.UtcNow;

        public DateTime LastActive { get; set; } = DateTime.UtcNow;

        [Required]
        public string Gender { get; set; }

        public string Description { get; set; }

        [Required]
        public string City { get; set; }

        [Required]
        public string Country { get; set; }

        // Navigation property

        [ForeignKey(nameof(Id))]
        public AppUser User { get; set; } = null!;

        public ICollection<Photo> Photos { get; set; } = [];
    }
}
