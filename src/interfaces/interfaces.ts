export interface IBooking {
  name: string;
  email: string;
  checkIn: Date;
  checkOut: Date;
  discount: number;
  room: IRoom;
}

export interface IRoom {
    name: string;
    bookings: IBooking[];
    rate: number;
    discount: number;
}