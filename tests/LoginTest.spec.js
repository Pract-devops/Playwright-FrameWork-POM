//import{test,expect} from "@playwright/test";
//import { LoginPage } from "../Pages/LoginPage";
import{test} from "../Fixtures/Fixtures.js";



test("Login To Application", async function ({login}) {
  

    //const loginPage = new LoginPage(page);
    await login.navigateTo("https://freelance-learn-automation.vercel.app/login");
    
    await login.enterUsername("admin@email.com");
    await login.enterPassword("admin@123");
    await login.clickLogin();   
    //await expect(page).not.toHaveURL("/Login/");
   await login.notcontainsURL("/Login/");
   //await  dashboardPage.navigateToManageCourses()

})

