import { test, expect, request } from '@playwright/test';
import { ENDPOINTS } from '../../EndPoints/data';
import { CreateUser, Header } from "../../PageObjctModel/API_Payload/CreateUser.page";
import fs from 'fs';
import path from 'path';

test('Update User', async () => {
    const filePath = path.join(process.cwd(), 'utils', 'User.json');
    const User = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    const userId = User.userId || 2;

    const apiContext = await request.newContext();
    const headerobj = new Header();

    const updatedName = {
        first_name: "Prapthi",
        last_name: "Alva"
    };

    const url = ENDPOINTS.GET_USER(userId);
    const response = await apiContext.put(url, {

        headers: headerobj.header,
        data: updatedName
    });

    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    console.log('Updated user response:', responseBody);
    expect(responseBody.first_name).toBe(updatedName.first_name);
    expect(responseBody.last_name).toBe(updatedName.last_name);

});