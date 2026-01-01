import { test, expect, request } from '@playwright/test';
import { ENDPOINTS } from '../../EndPoints/data';
import { CreateUser, Header } from "../../PageObjctModel/API_Payload/CreateUser.page";
import fs from 'fs';
import path from 'path';

test("Get User", async () => {

    const filePath = path.join(process.cwd(), 'utils', 'User.json');
    const User = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    const userId = User.userId || 2;

    const headerobj = new Header();
    const apiContext = await request.newContext();
    const url = ENDPOINTS.GET_USER(userId)

    const response = await apiContext.get(ENDPOINTS.GET_USER(userId), {
        headers: headerobj.header

    });
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log('User details is:', responseBody);
    expect(responseBody.data).toBeDefined();
    expect(responseBody.data.id).toBe(userId);
    expect(responseBody.data.first_name).toBeTruthy();
    expect(responseBody.data.last_name).toBeTruthy();





})
