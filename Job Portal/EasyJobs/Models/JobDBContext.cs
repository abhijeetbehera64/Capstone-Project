using Microsoft.EntityFrameworkCore;

namespace EasyJobs.Models
{
    public class JobDBContext:DbContext
    {
        public JobDBContext(DbContextOptions<JobDBContext> options) : base(options)
        {

        }
        public DbSet<Company> Companies { get; set; }

        public DbSet<Jobs> JobS{ get; set; }

        public DbSet<JobSeeker> JobSeekers  { get; set; }

        public DbSet<Application> Applications { get; set; }

    }
}
