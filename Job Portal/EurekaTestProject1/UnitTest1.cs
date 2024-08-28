
//using EasyJobs.Controllers;
//using EasyJobs.Models;
//using EasyJobs.Repository;
//using Microsoft.AspNetCore.Mvc;
//using Microsoft.EntityFrameworkCore;
//using Moq;
//namespace EurekaTestProject1
//{

//    public class UnitTest1
//    {
//        //Get ComapnyDetails By Id
//        [Fact]
//        public async void Test1()
//        {
//            int cid = 1;
//            var mockRepo = new Mock<IJobRepository>();
//            mockRepo.Setup(x => x.GetCompanyDetails(cid)).ReturnsAsync(AddNewItem(cid));
//            var contoller = new JobController(mockRepo.Object);
//            IActionResult p = await contoller.ShowCompanyProfile(cid);
//            Assert.IsType<OkObjectResult>(p);
//        }
//        public List<Company> AddNewItem(int cid)
//        {
//            List<Company> details1 = new List<Company>();
//            details1.Add(new Company
//            {
//                NAME = "Test",
//                PASSWORD = "Test",
//                EMAIL = "Test",
//                PhoneNumber = "Test",
//                Id = 1,
//                ADDRESS = "Test",

//            });
//            return details1;
//        }

//        //Get JobSeeker Details By Id
//        [Fact]
//        public async void Test2()
//        {
//            int id = 1;
//            var mockRepo = new Mock<IJobRepository>();
//            mockRepo.Setup(x => x.GetJobseekerDetails(id)).ReturnsAsync(AddNewItem1(id));
//            var contoller = new JobController(mockRepo.Object);
//            IActionResult p = await contoller.GetJsDetails(id);
//            Assert.IsType<OkObjectResult>(p);
//        }
//        public List<JobSeeker> AddNewItem1(int id)
//        {
//            List<JobSeeker> details1 = new List<JobSeeker>();
//            details1.Add(new JobSeeker
//            {
//                id = 1,
//                Password = "Test123",
//                Name = "Test",
//                CGPA = 9,
//                Degree = "btech",
//                Gender = "Male",
//                Skills = ".net",
//                yearsOfExperience = 1,


//            });
//            return details1;
//        }

//        //Update JobSeeker Details
//        [Fact]
//        public async Task UpdateSeekerDetails_ReturnsUpdatedDetails()
//        {
//            // Arrange
//            var jobSeeker = new JobSeeker()
//            {
//                id = 1,
//                Password = "testPassword",
//                Skills = "testSkills",
//                yearsOfExperience = 2,
//                CGPA = 9.2
//            };

//            var mockRepo = new Mock<IJobRepository>();
//            mockRepo.Setup(repo => repo.UpdateJobSeekerDetails(jobSeeker.id, jobSeeker.Password, jobSeeker.Skills, jobSeeker.yearsOfExperience, jobSeeker.CGPA))
//               .ReturnsAsync(jobSeeker);

//            var contoller = new JobController(mockRepo.Object);
//            // Act
//            var result = await contoller.UpdateSeekerDetails(jobSeeker.id, jobSeeker.Password, jobSeeker.Skills, jobSeeker.yearsOfExperience, jobSeeker.CGPA);

//            // Assert
//            Assert.NotNull(result);
//            Assert.IsType<JobSeeker>(result);
//            Assert.Equal(jobSeeker.id, ((JobSeeker)result).id);
//            Assert.Equal(jobSeeker.Password, ((JobSeeker)result).Password);
//            Assert.Equal(jobSeeker.Skills, ((JobSeeker)result).Skills);


//        }

//        //Update Company Details
//        [Fact]
//        public async Task UpdateCompanyDetails_ReturnsUpdatedDetails()
//        {
//            // Arrange
//            var company = new Company()
//            {
//                Id = 1,
//                PASSWORD = "testPassword",
//                ADDRESS = "testAddress",
//                EMAIL = "testEmail",
//                PhoneNumber = "testPhoneNumber"
//            };
//            var mockJobRepository = new Mock<IJobRepository>();
//            mockJobRepository.Setup(repo => repo.UpdateCompanyDetails(company.Id, company.PASSWORD, company.ADDRESS, company.EMAIL, company.PhoneNumber))
//                .ReturnsAsync(company);

//            var contoller = new JobController(mockJobRepository.Object);

//            // Act
//            var result = await contoller.UpdateCompanyDetail(company.Id, company.PASSWORD, company.ADDRESS, company.EMAIL, company.PhoneNumber);

//            // Assert
//            Assert.NotNull(result);
//            Assert.IsType<Company>(result);
//            Assert.Equal(company.Id, ((Company)result).Id);
//            Assert.Equal(company.PASSWORD, ((Company)result).PASSWORD);
//            Assert.Equal(company.ADDRESS, ((Company)result).ADDRESS);
//            Assert.Equal(company.EMAIL, ((Company)result).EMAIL);
//            Assert.Equal(company.PhoneNumber, ((Company)result).PhoneNumber);
//        }

//        //Register New Company
//        [Fact]
//        public async Task RegisterAsNewCompany_ShouldReturnOkResult_WhenCompanyIsRegistered()
//        {
//            // Arrange
//            var company = new Company { NAME = "Test Company" };
//            var mockJobRepository = new Mock<IJobRepository>();
//            mockJobRepository.Setup(x => x.RegisterNewCompany(company)).ReturnsAsync(company);
//            var controller = new JobController(mockJobRepository.Object);

//            // Act
//            var result = await controller.RegisterAsNewCompany(company);

//            // Assert

//            var okResult = result as OkObjectResult;
//            Assert.Equal(company, okResult.Value);
//        }

//        [Fact]
//        public async Task RegisterNewJobSekker_ReturnsCreatedAtActionResult()
//        {
//            // Arrange
//            var jobseeker = new JobSeeker { Name = "Testing Name" };
//            var mockJobRepository = new Mock<IJobRepository>();
//            mockJobRepository.Setup(x => x.RegisterNewJobSekker(jobseeker)).ReturnsAsync(jobseeker);
//            var controller = new JobController(mockJobRepository.Object);

//            // Act
//            var result = await controller.RegisterNewJobSekker(jobseeker);

//            // Assert

//            var okResult = result as OkObjectResult;
//            Assert.Equal(jobseeker, okResult.Value);


//        }
//        [Fact]
//        public async Task GetApplicationsDetails_ReturnsOkResult_WhenApplicationExists()
//        {
//            // Arrange
//            int company_id = 1;
//            var mockRepository = new Mock<IJobRepository>();
//            mockRepository.Setup(repo => repo.GetApplicationDetails(company_id)).ReturnsAsync(new List<object>());
//            var controller = new JobController(mockRepository.Object);

//            // Act
//            var result = await controller.GetApplicationsDetails(company_id);

//            // Assert
//            Assert.IsType<OkObjectResult>(result);
//        }
//        [Fact]

//        public async Task GetBySkill_ReturnsOkResult_WhenApplicationExists()
//        {
//            // Arrange
//            string skill = "Test Skill";
//            var mockJobRepository = new Mock<IJobRepository>();
//            mockJobRepository.Setup(repo => repo.GetdetailsBySkills(skill)).ReturnsAsync(GetTestJobs());
//            var controller = new JobController(mockJobRepository.Object);

//            // Act
//            var result = await controller.GetdetailsBySkills(skill);

//            // Assert
//            Assert.IsType<OkObjectResult>(result);
//        }

//        [Fact]
//        public async Task GetBySkill_ReturnsNotFoundResult_WhenApplicationDoesNotExist()
//        {
//            // Arrange
//            string skill = "Non-Existent Skill";
//            var mockJobRepository = new Mock<IJobRepository>();
//            mockJobRepository.Setup(repo => repo.GetdetailsBySkills(skill)).ReturnsAsync(new List<object>());
//            var controller = new JobController(mockJobRepository.Object);

//            // Act
//            var result = await controller.GetdetailsBySkills(skill);

//            // Assert
//            Assert.IsType<NotFoundResult>(result);
//        }

//        private List<object> GetTestJobs()
//        {
//            return new List<object>
//            {
//                new { Skill = "Test Skill"}
//            };
//        }
//        [Fact]
//        public async Task GetByTitle_ReturnsOkResult_WhenApplicationExists()
//        {
//            // Arrange
//            string title = "Test Title";
//            var mockJobRepository = new Mock<IJobRepository>();
//            mockJobRepository.Setup(repo => repo.GetDetailsByTitle(title)).ReturnsAsync(GetTestJobs());
//            var controller = new JobController(mockJobRepository.Object);

//            // Act
//            var result = await controller.GetByTitle(title);

//            // Assert
//            Assert.IsType<OkObjectResult>(result);
//        }

//        [Fact]
//        public async Task GetByTitle_ReturnsNotFoundResult_WhenApplicationDoesNotExist()
//        {
//            // Arrange
//            string title = "Non-Existent Title";
//            var mockJobRepository = new Mock<IJobRepository>();
//            mockJobRepository.Setup(repo => repo.GetDetailsByTitle(title)).ReturnsAsync(new List<object>());
//            var controller = new JobController(mockJobRepository.Object);

//            // Act
//            var result = await controller.GetByTitle(title);

//            // Assert
//            Assert.IsType<NotFoundResult>(result);
//        }


//    }

//}
