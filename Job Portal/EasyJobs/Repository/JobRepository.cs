using EasyJobs.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualBasic;
using System.Collections.Immutable;

namespace EasyJobs.Repository
{
    public class JobRepository : IJobRepository
    {
        private readonly JobDBContext _context;
        public JobRepository(JobDBContext db)
        {
            _context = db;
        }




        //get company deatils
        public async Task<List<Company>> GetCompanyDetails(string email)
        {
            List<Company> CompanyProfile = new List<Company>();
            try
            {
                CompanyProfile = await _context.Companies.Where(x => x.EMAIL == email).ToListAsync();
                return CompanyProfile;
            }
            catch (Exception ex)
            {
                return CompanyProfile;
            }
        }
        //VIEW JOBSEEKER PROFILE
        public async Task<List<JobSeeker>> GetJobseekerDetails(string name)
        {
            List<JobSeeker> details1 = new List<JobSeeker>();
            try
            {
                details1 = await _context.JobSeekers.Where(X => X.Name == name).ToListAsync();
                return details1;
            }
            catch (Exception ex)
            {
                return details1;
            }
        }

        //search by title
        public async Task<List<object>> GetDetailsByTitle(string TTitle)
        {
            List<object> details = new List<object>();
            try
            {
                var query = from j in _context.JobS
                            join c in _context.Companies
                            on j.company.Id equals c.Id
                            where j.Title == TTitle
                            select new
                            {
                                j.ID,
                                c.NAME,
                                c.EMAIL,
                                j.Title,
                                j.Description,
                                j.Package,
                                j.Vaccancy,
                                j.Required_Skills,
                                j.Years_of_Experience_Required

                            };


                details.Add(query);
                return details;
            }
            catch
            {
                return details;
            }
        }


        //search by skills
        public async Task<List<object>> GetdetailsBySkills(string Skills)
        {
            List<object> detailsBySkills = new List<object>();
            try
            {
                var qu = from j in _context.JobS
                         join c in _context.Companies
                         on j.company.Id equals c.Id
                         where j.Required_Skills.Contains(Skills)
                         select new
                         {
                             j.ID,
                             c.NAME,
                             c.EMAIL,
                             j.Title,
                             j.Description,
                             j.Package,
                             j.Vaccancy,
                             j.Required_Skills,
                             j.Years_of_Experience_Required

                         };


                detailsBySkills.Add(qu);
                return detailsBySkills;
            }
            catch
            {
                return detailsBySkills;
            }
        }
        //view applications
        public async Task<object> GetApplicationDetails(string Email)
        {
            List<object> ApplicationDetails = new List<object>();
            try
            {
                object query1 = from a in _context.Applications
                                join s in _context.JobSeekers
                                on a.JobSeeker.id equals s.id
                                join j in _context.JobS
                                on a.jobs.ID equals j.ID
                                join c in _context.Companies
                                on j.company.Id equals c.Id
                                where c.EMAIL == Email
                                select new
                                {

                                    a.iD,
                                    s.Name,
                                    s.Gender,
                                    s.Skills,
                                    s.yearsOfExperience,
                                    s.Degree,
                                    s.CGPA,
                                    j.Title


                                };
                ApplicationDetails.Add(query1);
                return ApplicationDetails;


            }
            catch
            {
                return ApplicationDetails;
            }
        }



        //update jobseeker details
        public async Task<JobSeeker> UpdateJobSeekerDetails(string Name, string jspassword, string jsskills, int jsexperience, double Cgpa)
        {
            JobSeeker jobSeeker = new JobSeeker();
            try
            {
                jobSeeker = await _context.JobSeekers.Where(x => x.Name == Name).SingleOrDefaultAsync();
                if (jobSeeker != null)
                {
                    jobSeeker.Name = Name;
                    jobSeeker.Password = jspassword;
                    jobSeeker.Skills = jsskills;
                    jobSeeker.yearsOfExperience = jsexperience;
                    jobSeeker.CGPA = Cgpa;

                }
                await _context.SaveChangesAsync();
                return jobSeeker;

            }
            catch
            {
                return jobSeeker;
            }
        }

        //update company details
        public async Task<Company> UpdateCompanyDetails(string Cemail, string Cpassword, string Cadress, string Cphone_no)
        {
            Company companies = new Company();
            try
            {
                companies = await _context.Companies.Where(Y => Y.EMAIL == Cemail).SingleOrDefaultAsync();
                if (companies != null)
                {
                    companies.PASSWORD = Cpassword;
                    companies.ADDRESS = Cadress;
                    companies.EMAIL = Cemail;
                    companies.PhoneNumber = Cphone_no;
                }
                await _context.SaveChangesAsync();
                return companies;

            }
            catch
            {
                return companies;

            }
        }

        //register new jobseeker
        public async Task<JobSeeker> RegisterNewJobSekker(JobSeeker newJobseeker)
        {
            try
            {
                await _context.JobSeekers.AddAsync(newJobseeker);
                _context.SaveChanges();
                return newJobseeker;
            }
            catch
            {
                return newJobseeker;
            }
        }

        //register new company
        public async Task<Company> RegisterNewCompany(Company newCompany)
        {
            try
            {
                await _context.Companies.AddAsync(newCompany);
                _context.SaveChanges();
                return newCompany;
            }
            catch
            {
                return newCompany;
            }
        }
        public async Task<bool> SignUpValidation(string email, string password)
        {
            bool res = false;

            try
            {
                Company user = _context.Companies.Where(u => u.EMAIL == email).FirstOrDefault();

                if (user == null)
                {
                    res = false;
                }
                else if (email == user.EMAIL && password == user.PASSWORD)
                {
                    res = true;
                }

                return res;

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return res;
            }
        }
        public async Task<bool> JSignUpValidation(string name, string password)
        {
            bool res = false;

            try
            {
                JobSeeker user = _context.JobSeekers.Where(u => u.Name == name).FirstOrDefault();

                if (user == null)
                {
                    res = false;
                }
                else if (name == user.Name && password == user.Password)
                {
                    res = true;
                }

                return res;

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return res;
            }



        }

    }
}
