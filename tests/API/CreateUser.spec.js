import { test, expect, request } from '@playwright/test';
import { ENDPOINTS } from '../../EndPoints/data';
import { CreateUser, Header } from "../../PageObjctModel/API_Payload/CreateUser.page";
import fs from 'fs';
import path from 'path';

test('Create user', async () => {
  const createUser = new CreateUser();
  const headerobj = new Header();
  const apiContext = await request.newContext();
  const response = await apiContext.post(ENDPOINTS.CREATE_USER, {
    data: createUser.payload,
    headers: headerobj.header
  });
  expect(response.status()).toBe(201);
  const User = await response.json();

  console.log('Created User is:', User);

  expect(User.id).toBeTruthy();
  expect(User.first_name).toBeTruthy();
  expect(User.last_name).toBeTruthy();
  expect(User.job).toBeTruthy();


  const filePath = path.join(process.cwd(), 'utils', 'User.json');
  fs.writeFileSync(filePath, JSON.stringify(User, null, 2), 'utf-8');
})

