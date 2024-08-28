using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EasyJobs.Models
{
    public class Application
    {
        
        public int iD { get; set; }

        public JobSeeker JobSeeker { get; set; }


       public Jobs jobs { get; set; }
  

    }
}
