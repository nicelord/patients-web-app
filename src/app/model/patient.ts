export class Address {
  street: string;
  suburb: string;
  state: string;
  postCode: string;
}

export class Patient {
  pid: number;
  firstName: string;
  lastName: string;
  gender: string;
  dob: string;
  phone: string;
  address: Address;
}
