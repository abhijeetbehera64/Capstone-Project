using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EasyJobs.Models
{
    public class JobSeeker
    {
        
       
        public int id { get; set; }

        
        [MaxLength(10)]
        public string Password { get; set; }

        [Required]
        [MaxLength(50)]
        
        public string Name { get; set; }

        [Required]
        [MaxLength(30)]
        public string Gender { get; set; }

        [Required]
        [MaxLength(20)]
        public string Degree { get; set; }                     

        [Required]
        public double CGPA { get; set; }

        [Required]
        public string Skills { get; set; }

        public int yearsOfExperience { get; set; }




    }
}
