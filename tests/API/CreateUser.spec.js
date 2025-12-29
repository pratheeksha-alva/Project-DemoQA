import { test, expect, request } from '@playwright/test';
import { ENDPOINTS } from '../../EndPoints/data';
import { CreateUser, Header } from "../../PageObjctModel/API_Payload/CreateUser.page";

test('Create user', async () => {
    const createUser = new CreateUser();
    const headerobj= new Header();
    const apiContext = await request.newContext();
    const response = await apiContext.post(ENDPOINTS.CREATE_USER, {
    data: createUser.payload,
    headers:headerobj.header
    });
      expect(response.status()).toBe(201);

});