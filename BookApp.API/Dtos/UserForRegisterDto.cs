using System.ComponentModel.DataAnnotations;

namespace BookApp.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; } 

        [Required]
        [StringLength(8, MinimumLength= 4, ErrorMessage="Password too short")]
        public string Password { get; set; }
    }
}