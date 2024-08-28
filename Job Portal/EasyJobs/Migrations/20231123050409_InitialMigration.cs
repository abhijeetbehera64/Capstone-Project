using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EasyJobs.Migrations
{
    /// <inheritdoc />
    public partial class InitialMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Companies",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Company_Name = table.Column<string>(type: "nvarchar(40)", maxLength: 40, nullable: false),
                    PASSWORD = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false),
                    ADDRESS = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    EMAIL = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    PhoneNumber = table.Column<string>(type: "nvarchar(13)", maxLength: 13, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Companies", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "JobSeekers",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Password = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false),
                    Name = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Gender = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    Degree = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    CGPA = table.Column<double>(type: "float", nullable: false),
                    Skills = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    yearsOfExperience = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_JobSeekers", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "JobS",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Description = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: false),
                    Package = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false),
                    Vaccancy = table.Column<int>(type: "int", nullable: false),
                    Required_Skills = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Years_of_Experience_Required = table.Column<int>(type: "int", nullable: false),
                    companyId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_JobS", x => x.ID);
                    table.ForeignKey(
                        name: "FK_JobS_Companies_companyId",
                        column: x => x.companyId,
                        principalTable: "Companies",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Applications",
                columns: table => new
                {
                    iD = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    JobSeekerid = table.Column<int>(type: "int", nullable: false),
                    jobsID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Applications", x => x.iD);
                    table.ForeignKey(
                        name: "FK_Applications_JobS_jobsID",
                        column: x => x.jobsID,
                        principalTable: "JobS",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Applications_JobSeekers_JobSeekerid",
                        column: x => x.JobSeekerid,
                        principalTable: "JobSeekers",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Applications_JobSeekerid",
                table: "Applications",
                column: "JobSeekerid");

            migrationBuilder.CreateIndex(
                name: "IX_Applications_jobsID",
                table: "Applications",
                column: "jobsID");

            migrationBuilder.CreateIndex(
                name: "IX_JobS_companyId",
                table: "JobS",
                column: "companyId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Applications");

            migrationBuilder.DropTable(
                name: "JobS");

            migrationBuilder.DropTable(
                name: "JobSeekers");

            migrationBuilder.DropTable(
                name: "Companies");
        }
    }
}
