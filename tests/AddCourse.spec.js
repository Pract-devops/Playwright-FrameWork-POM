import{test} from "../Fixtures/Fixtures.js";
import CourseData from "../TestData/CourseData.json"
import Credentials from "../TestData/Credentials.json"

test.describe("Course Management Tests", () =>{
 /**
  * @param {import('playwright').page} page
  */

    test("CreateCourse By Login to the applica", async function({login,dashboardPage,coursepage}){


        const courseName = `${CourseData.courseName}_${Date.now()}`
        const thumbnailInput = CourseData.thumbnail

        await login.navigateTo("https://freelance-learn-automation.vercel.app/login");
    
    await login.enterUsername(Credentials.username);
    await login.enterPassword(Credentials.password);
    await login.clickLogin();   
    //await expect(page).not.toHaveURL("/Login/");
   await login.notcontainsURL("/Login/");
   await  dashboardPage.navigateToManageCourses()
    
   await coursepage.AddCourse()
   await coursepage.Thumbnail(thumbnailInput)
   await coursepage.CourseName(courseName)
    await coursepage.Description(CourseData.description)
    await coursepage.Instructor(CourseData.instructorName)
    await coursepage.Price(CourseData.price)
    await coursepage.startsOn(CourseData.startDate)
    await coursepage.EndsOn(CourseData.endDate)
    await coursepage.Permanent()
    await coursepage.selectCategory(CourseData.category)
    
        await coursepage.StartdateInput()
        await coursepage.EnddateInput()
        await coursepage.SelectPermanent()
        await coursepage.ClickSave()
         // Step 9 - Verify course is created on the next page
        await coursepage.verifyCourseCreated(courseName)

        // Step 10 - Delete the created course
        await coursepage.deleteCourse(courseName)

        // Step 11 - Verify course is deleted
        await coursepage.verifyCourseDeleted(courseName)


})

})
