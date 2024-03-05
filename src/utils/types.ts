export interface User {
  email: string;
  id: number;
  name: string;
  phone: string;
  photo: string;
  position: string;
  position_id: number;
  registration_timestamp: number;
}

export interface NewUser {
  name: string;
  email: string;
  phone: string;
  position: string;
  photo: any;
}
