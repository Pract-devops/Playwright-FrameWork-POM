import { BasePage } from "./BasePage";


export class LoginPage extends BasePage{

    constructor(page){
        super(page);
        this.page=page;
        this.usernameInput = this.page.locator("#email1");
        this.passwordInput = this.page.locator("#password1");
        this.loginButton = this.page.locator(".submit-btn");
    }

    async enterUsername(email){
        await this.usernameInput.fill(email);
    }
    async enterPassword(password){
        await this.passwordInput.fill(password);
    }
    async clickLogin(){
        await this.loginButton.click();
    }
}