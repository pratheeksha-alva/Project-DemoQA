// CreateUser.page.js
export class CreateUser {
  constructor() {
    this.payload = {
      name: 'Pratheeksha',
      job: 'QA'
    };
  }
}

export class Header {
  constructor() {
    this.header = {
      'Content-Type': 'application/json',
    };
  }
}
