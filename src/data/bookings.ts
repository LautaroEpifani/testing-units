import { IBooking } from "../interfaces/interfaces";

export const bookingsList: IBooking[] = [
  {
    name: "Juan",
    email: "juan@gmail.com ",
    checkIn: new Date("2023-06-20"),
    checkOut: new Date("2023-06-28"),
    discount: 20,
    room: {
      name: "Queen Double Bed Room",
      bookings: [],
      rate: 4.5,
      discount: 10,
    },
  },
  {
    name: "Gabriela",
    email: "gabriela@gmail.com ",
    checkIn: new Date("2023-06-30"),
    checkOut: new Date("2023-07-07"),
    discount: 10,
    room: {
      name: "Queen Double Bed Room",
      bookings: [],
      rate: 4.5,
      discount: 10,
    },
  },
  {
    name: "Laura",
    email: "laura@gmail.com ",
    checkIn: new Date("2023-07-09"),
    checkOut: new Date("2023-07-20"),
    discount: 30,
    room: {
      name: "Queen Double Bed Room",
      bookings: [],
      rate: 4.5,
      discount: 10,
    },
  },
];
