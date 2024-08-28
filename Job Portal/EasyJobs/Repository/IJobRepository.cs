using EasyJobs.Models;

namespace EasyJobs.Repository
{
    public interface IJobRepository
    {
        //VIEW JOBSEEKER PROFILE
        public Task<List<JobSeeker>> GetJobseekerDetails(string name);

        //view company profile
        public Task<List<Company>> GetCompanyDetails(string email);

        //view applications
        public Task <object>GetApplicationDetails(string Email);




        //Serach Jobs BY Title
        public Task<List<object>> GetDetailsByTitle(string Title);

        //Search jobs By Skills and years of exeperience
        public Task<List<object>> GetdetailsBySkills(string Skills);





        //update jobseeker details
        public Task<JobSeeker> UpdateJobSeekerDetails(string Name,string password,string skills,int experience,double cgpa);

        //update company details
        public Task<Company> UpdateCompanyDetails(string email,string password,string adress,string phone_no);




        //register new jobseeker
        public Task<JobSeeker> RegisterNewJobSekker(JobSeeker newJobseeker);

        //register new company
        public Task <Company> RegisterNewCompany(Company newCompany);


        //validation
        public Task<bool>SignUpValidation(string email , string password);

        public Task<bool> JSignUpValidation(string name, string password);















    }
}
