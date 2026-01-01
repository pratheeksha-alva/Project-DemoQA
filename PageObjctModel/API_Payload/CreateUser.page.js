
export class CreateUser {
  constructor() {
    this.payload = {
      first_name: 'Pratheeksha',
      last_name: 'Alva',
      job: 'QA'
    };
  }
}

export class Header {
  constructor() {
    this.header = {
      'Authorization': 'pub_95f24de33f734d75f5f436317587e62e'
    };
  }
}
