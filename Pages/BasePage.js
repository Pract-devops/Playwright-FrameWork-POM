//common methods useful for all pages can be added here
import { expect } from '@playwright/test';

export class BasePage {

/**
 * @param {import('playwright').Page} page
 */

    constructor(page) 
    {

        this.page = page;

    }
        async navigateTo(url) 
        {
            await this.page.goto(url);
        }

        async getPageTitle()
        {
            return await this.page.title();
        }

        async goback()
        {
            await this.page.goBack();
        }

        async refreshPage()
        {
            await this.page.reload();
        }

        async goforward()
        {
            await this.page.goForward();
        }

        get currentURL()
        {
            return this.page.url();
        }

        /**
         * 
         * @param {String} pattern 
         */
        async notcontainsURL(pattern)
        {
            await expect(this.page).not.toHaveURL(pattern);
        }

        async assertVisible(locator)
        {
            await expect(locator).toBeVisible();
        }

        async assertNotVisible(locator)
        {
            await expect(locator).not.toBeVisible();
        }   


        /** 
         *  @param {import('playwright').Page} page
        */
        async waitforvisible(locator,timeout=10000)
        {
            await locator.waitFor({state:"visible",timeout:timeout});
        }
        // Common properties can be initialized here

        async logout()
    {
        await this.page.getByAltText("menu").click()
        await this.page.getByText("Sign out",{exact:true}).click()
    }

    /**
     * @param {string} text - text to type into the JS prompt before accepting
     */
    /**
     * @param {string} text - text to type into the JS prompt before accepting
     */
    async acceptDialog(text)
    {
        this.page.once("dialog", async dialog =>
        {
            await dialog.accept(text)
        })
    }

     async dismissDialog(text)
    {
        this.page.once("dialog", async dialog =>
        {
            await dialog.dismiss()
        })
    }

    async switchToMainPage()
    {
        const pages = this.page.context().pages()
        await this.page.close()
        await pages[0].bringToFront()
    }


    async assertVisible(locator)
    {
        await expect(locator).toBeVisible()
    }

    

}

