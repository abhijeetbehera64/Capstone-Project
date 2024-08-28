using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EasyJobs.Models
{
    public class Company
    {
       
        public int Id { get; set; }

        [Required]
        [MaxLength(40)]
        [Column("Company_Name")]
        public string NAME { get; set; }

        [Required]
        [MaxLength(10)]
        public string PASSWORD { get; set; }

        [Required]
        [MaxLength (100)]
        
        public string ADDRESS { get; set;}

        [Required]
        [MaxLength(30)]
        
        public string EMAIL { get; set;}

        [Required]
        [MaxLength(13)]
        public string PhoneNumber { get; set;}

      

       

     


    }
}
