import { expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

export class searchbook{

    constructor (page){
        this.page=page
        this.book= page.locator("//h5[text()='Book Store Application']");
        this.Login=page.locator("//span[text()='Login']");
        this.Username= page.locator("//input[@id='userName']");
        this.Password= page.locator("//input[@id='password']");
        this.LoginButton= page.locator("//button[text()='Login']");
        this.User = page.locator("//label[@id='userName-value']");
        this.Logout=page.locator("//button[text()='Log out']");
        this.BookStore=page.locator("//button[text()='Go To Book Store']");
        this.searchfield=page.locator("//input[@id='searchBox']");
        this.Title=page.locator("//a[text()='Learning JavaScript Design Patterns']");
        this.Author=page.locator("//div[text()='Addy Osmani']");
        this.Publisher=page.locator(`//div[text()="O'Reilly Media"]`);
        this.header=page.locator("//h1[text()='Login']");

    }

    async url(){
await this.page.goto("https://demoqa.com", {waitUntil: 'domcontentloaded',  timeout: 60000 });
    await this.book.waitFor({ state: 'visible', timeout: 30000});
    }
    async login(){
        await this.book.scrollIntoViewIfNeeded();
        await expect(this.book).toBeVisible({ timeout: 30000 });
        await this.book.click();
        await expect(this.Login).toBeVisible();
        await this.Login.click();
        await this.Username.scrollIntoViewIfNeeded();
        await this.Username.fill("Pratheeksha");
        await this.Password.waitFor({ state: 'visible', timeout: 30000 });
        await this.Password.fill("Prathi123@");
        await this.LoginButton.waitFor({ state: 'visible', timeout: 30000 });
        await this.LoginButton.scrollIntoViewIfNeeded();
        await this.LoginButton.click();
        await this.User.waitFor({ state: 'visible', timeout: 60000 });
        await expect(this.User).toHaveText("Pratheeksha");
        await expect(this.Logout).toBeVisible();
        await this.BookStore.waitFor({ state: 'visible', timeout: 60000 });

    }

    async ValidateBookDetail(){
        await this.BookStore.scrollIntoViewIfNeeded();
        await this.BookStore.click();
        await this.searchfield.scrollIntoViewIfNeeded();
        await expect(this.searchfield).toBeVisible({ timeout: 20000 });
        await this.searchfield.fill("Learning JavaScript Design Patterns");
        await this.page.waitForTimeout(2000); 
        await expect(this.Title).toBeVisible();
        await expect(this.Author).toBeVisible();
        await expect(this.Publisher).toBeVisible();

        const BookDetails={
         Title_Name: await this.Title.innerText(),
         Author_Name : await this.Author.innerText(),
         Publisher_Name : await this.Publisher.innerText()
        }

        const filePath = path.join(process.cwd(), 'utils', 'BookDetails.json');
         fs.writeFileSync( filePath, JSON.stringify(BookDetails, null, 2),'utf-8');
    }
    async LogOut(){
        await expect(this.Logout).toBeVisible({ timeout: 30000 });
        await this.Logout.click();
        await expect(this.page).toHaveURL("https://demoqa.com/login")
        await expect(this.header).toBeVisible();
    }
}