import { BasePage } from "./BasePage.js";


 export class Dashboard extends BasePage{

    constructor(page){

/**
 * @param {import('playwright').Page} page
 */

        super(page)
        this.manageMenu           = this.page.getByText("Manage",{exact:true})
        this.manageCoursesLink    = this.page.getByText("Manage Courses",{exact:true})
        this.manageCategoriesLink = this.page.getByText("Manage Categories",{exact:true})

    }

    async hoverOnManage()
    {
        await this.manageMenu.hover()
    }

    async clickManageCourses()
    {
        await this.manageCoursesLink.click()
    }

    async manageCategoriesLink()
    {
        await this.manageCoursesLink.click()
    }

      async navigateToManageCourses()
    {
        await this.hoverOnManage()
        await this.clickManageCourses()

    }


     
}