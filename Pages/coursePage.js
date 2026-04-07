import { BasePage } from "./BasePage.js";


export class AddCourse extends BasePage{

    /**
     * 
     * @param {import('playwright').page} page 
     */

    constructor(page){

        super(page)
        this.ClickAddCourseButton = this.page.getByRole('button',{name:'Add New Course'})
        this.thumbnailInput = this.page.locator("#thumbnail")
        this.courseName = this.page.locator("#name")
        this.descriptionInput = this.page.locator("#description")
        this.instructorInput = this.page.locator("#instructorNameId")
        this.priceInput = this.page.locator("#price")
        this.startDateInput = this.page.locator('[name="startDate"]')
        this.endDateInput = this.page.locator('[name="endDate"]')
        this.permanentCheckbox = this.page.locator("#isPermanent")
        this.SelectCategory = this.page.getByText("Select Category",{ exact: true } )
        this.SaveButton = this.page.getByRole("button",{name:'Save'})
        this.datepickerDays = this.page.locator('.day')

    }

    async AddCourse()
    {
        await this.ClickAddCourseButton.click()
    }

    async Thumbnail(filePath)
    {
        await this.thumbnailInput.setInputFiles(filePath)
    }

    async CourseName(name)
    {
        await this.courseName.fill(name)
    }
    async Description(description)
    {
        await this.descriptionInput.waitFor({ state: 'visible' });
        await this.descriptionInput.fill(description)
    }

    async Instructor(instructor)
    {
        await this.instructorInput.fill(instructor)
    }

    async Price(price)
    {
        await this.priceInput.clear()
        await this.priceInput.fill(price)
    }

    
 async selectCurrentDate(dateInput) {
    await dateInput.click()

    const today = new Date().getDate().toString()
    const days = await this.datepickerDays.all()

    for (const day of days) {
        const text = await day.textContent()
        const isDisabled = await day.getAttribute("disabled")

        if (text.trim() === today && !isDisabled) {
            await day.click()
            break
        }
    }
}

    async StartdateInput()
    {
        await this.selectCurrentDate(this.startDateInput)  
    }


    async EnddateInput()
    {
        await this.selectCurrentDate(this.endDateInput)

    }


   

    async Permanent()
    {
        await this.permanentCheckbox.click()
    }

    async SelectPermanent()
    {
        await this.permanentCheckbox.click()
    }

    async startsOn(date)
    {
        await this.startDateInput.fill(date)
    }

    async EndsOn(date)
    {
        await this.endDateInput.fill(date)
    }

    async selectCategory(category)
    {
        await this.SelectCategory.click()
         await this.page.getByText(category,{exact:true}).click()
    }
 async ClickSave()
{
    await this.SaveButton.click()
}

 async verifyCourseCreated(name)
    {
        await this.assertVisible(this.page.locator(`text=${name}`))
    }

 async deleteCourse(name)
{
    await this.page.locator(`//td[text()='${name}']//following::button[1]`).click()

}

 async verifyCourseDeleted(name)
    {
        await this.assertNotVisible(this.page.locator(`text=${name}`))
    }


}


