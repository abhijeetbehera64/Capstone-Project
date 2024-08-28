using EasyJobs.Models;
using EasyJobs.Repository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Identity.Client;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Linq.Expressions;
using System.Security.Claims;

namespace EasyJobs.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JobController : ControllerBase
    {
        private readonly IJobRepository _jobRepository;
        public JobController(IJobRepository jobRepository)
        {
            _jobRepository = jobRepository;
        }

        //        [HttpGet]
        //        public IActionResult GetAuthenticationKey()
        //        {
        //            var claims = new[]
        //            {
        //    new Claim(JwtRegisteredClaimNames.Sub,"some_id"),

        //};

        //            var secretBytes = System.Text.Encoding.UTF8.GetBytes(Constants.Secret);//string to binary
        //            var key = new SymmetricSecurityKey(secretBytes);
        //            var algorthim = SecurityAlgorithms.HmacSha256;
        //            var signingCredentials = new SigningCredentials(key, algorthim);

        //            var token = new JwtSecurityToken(
        //                Constants.Issuer,
        //                Constants.Audiance,
        //                claims,
        //                notBefore: DateTime.Now,
        //                expires: DateTime.Now.AddHours(24),
        //                signingCredentials);

        //            var tokenJson = new JwtSecurityTokenHandler().WriteToken(token);

        //            return Ok(new { access_token = tokenJson });
        //            // return RedirectToAction("Index");
        //        }

        //[Authorize]

        [HttpGet("ValidateUsers")]
        public async Task<IActionResult> Get(string email, string password)
        {
            try
            {
                bool isLogInSuccess = await _jobRepository.SignUpValidation(email, password);

                // returns true for correct password & false for wrong password
                return Ok(isLogInSuccess);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("JValidateUsers")]
        public async Task<IActionResult> JGet(string name, string password)
        {
            try
            {
                bool isLogInSuccess = await _jobRepository.JSignUpValidation(name, password);

                // returns true for correct password & false for wrong password
                return Ok(isLogInSuccess);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("jobseeker_profile")]
        public async Task<ActionResult> GetJsDetails(string name)
        {
            var Jsdetails = new List<JobSeeker>();
            try
            {
                Jsdetails = await _jobRepository.GetJobseekerDetails(name);
                if (Jsdetails.Count <= 0)
                {
                    return NotFound();
                }
                return Ok(Jsdetails);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        //[Authorize]
        [HttpGet("Comapany_profile")]
        public async Task<ActionResult> ShowCompanyProfile(string email)
        {
            var comapnyDetails = new List<Company>();
            try
            {
                comapnyDetails = await _jobRepository.GetCompanyDetails(email);
                if (comapnyDetails.Count <= 0)
                {
                    return NotFound();
                }
                return Ok(comapnyDetails);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        //[Authorize]
        [HttpGet("{Title}")]
        public async Task<ActionResult> GetByTitle(string Title)
        {
            var listByTitle = new List<object>();
            try
            {
                listByTitle = await _jobRepository.GetDetailsByTitle(Title);
                if (listByTitle.Count <= 0)
                {
                    return NotFound();
                }
                return Ok(listByTitle);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);

            }
        }

        //[Authorize]
        [HttpGet("Search by skills")]

        public async Task<ActionResult> GetdetailsBySkills(string Skill)
        {
            var listBySkills = new List<object>();
            try
            {
                listBySkills = await _jobRepository.GetdetailsBySkills(Skill);
                if (listBySkills.Count <= 0)
                {
                    return NotFound();
                }

                return Ok(listBySkills);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);

            }

        }

        //[Authorize]
        [HttpGet("application_details")]
        public async Task<ActionResult> GetApplicationsDetails(string Email)
        {
            object list;
            try
            {
                list = await _jobRepository.GetApplicationDetails(Email);
                if (list == null)
                {
                    return NotFound();
                }
                return Ok(list);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }



        [HttpPatch("UPDATE JOBSEEKER")]
        public async Task<object> UpdateSeekerDetails(string Name, string password, string skills, int experience, double cgpa)
        {
            var updateDetails = new JobSeeker();
            try
            {
                updateDetails = await _jobRepository.UpdateJobSeekerDetails(Name, password, skills, experience, cgpa);
                return updateDetails;
            }
            catch
            {
                return updateDetails;
            }
        }

        [HttpPatch("{email}")]
        //update company details
        public async Task<Company> UpdateCompanyDetail(string email,string password, string adress, string phone_no)
        {
            var updateCompany = new Company();
            try
            {
                updateCompany = await _jobRepository.UpdateCompanyDetails(email,password, adress, phone_no);
                return updateCompany;
            }
            catch
            {
                return updateCompany;
            }
        }



        //[Authorize]
        [HttpPost("Register as jobseeker")]
        public async Task<ActionResult> RegisterNewJobSekker([FromBody] JobSeeker newJobseeker)
        {
            try
            {
                JobSeeker _jobseeker = await _jobRepository.RegisterNewJobSekker(newJobseeker);
                if(newJobseeker == null)
                {
                    return NotFound();
                }
                return Ok(newJobseeker);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        //[Authorize]
        [HttpPost("Register Company")]
        public async Task<ActionResult> RegisterAsNewCompany([FromBody] Company company)
        {
            try
            {
                Company _company = await _jobRepository.RegisterNewCompany(company);
                if(company == null)
                {
                    return NotFound();
                }
                return Ok(company);
            }catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
   }
}
