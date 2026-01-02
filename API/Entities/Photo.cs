using System.ComponentModel.DataAnnotations;

namespace API.Entities
{
    public class Photo
    {
        public int Id { get; set; }

        [Required]
        public string Url { get; set; }

        public string? PublicId { get; set; } = null!;


        // Navigation property
        public Member Member { get; set; } = null!;
    }
}
