import { test } from "@playwright/test"
import { searchbook } from "../../PageObjctModel/UI_Pages/SearchBook.page"

test("Search Book", async ({ page }) => {
    const srch = new searchbook(page);
    await srch.url();
    await srch.login();
    await srch.ValidateBookDetail();
    await srch.LogOut();
})