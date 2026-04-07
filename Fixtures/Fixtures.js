import {test as base,expect} from "@playwright/test"
import { LoginPage } from "../Pages/LoginPage";
import { Dashboard } from "../Pages/DashboardPage";
import { AddCourse } from "../Pages/coursePage";


/**
 * @typedef  {object} CustomFixtures
 * @property {LoginPage} loginPage
 * @property {RegistrationPage} registrationPage
 * @property {DashboardPage} dashboardPage
 * @property {coursePage} coursePage
 * @property {CategoryPage} categoryPage
 */

/** @type {import('@playwright/test').TestType<CustomFixtures & import('@playwright/test').PlaywrightTestArgs & import('@playwright/test').PlaywrightTestOptions, import('@playwright/test').PlaywrightWorkerArgs & import('@playwright/test').PlaywrightWorkerOptions>} */





 const test=base.extend({

    login: async ({page}, use) => {

        console.log("Running Fixture For Test");
        
        const loginPage = new LoginPage(page);

        // whatever you write before use will be executed before each test
        await use(loginPage)



        // whatever you write after use will be executed after each test

    },

dashboardPage: async ({page}, use) => {

        console.log("Running Dashboard Fixture For Test");

        const dashboardPage = new Dashboard(page)

        await use(dashboardPage)

        // Close browser after test

    },

coursepage: async ({page}, use) => {

        console.log("Running add course Fixture For Test");

        const coursepage = new AddCourse(page)

    
        await use(coursepage)

        // Close browser after test
       // await page.close()

    }




})



export {test,expect}
