using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EasyJobs.Models
{
    public class Jobs
    {
        
        
        public int ID { get; set; }

        [Required]
        [MaxLength(50)]
        
        public string Title { get; set; }

        [Required]
        [MaxLength(200)]
       
        public string Description { get; set; }

        [Required]
        [MaxLength(10)]
        
        public string Package { get; set; }

        [Required]
        public int Vaccancy { get; set; }

        [Required]
        public string Required_Skills { get; set; }

        [Required]
        public int Years_of_Experience_Required{ get; set; }

       public Company company { get; set; }
       



    }
}
