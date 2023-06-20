"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roomsList = void 0;
exports.roomsList = [
    {
        name: "Queen Double Bed Room",
        bookings: [
            {
                name: "Juan",
                email: "juan@gmail.com ",
                checkIn: new Date("2023-06-20"),
                checkOut: new Date("2023-06-28"),
                discount: 20,
                room: { name: "Queen Double Bed Room", bookings: [], rate: 4.5, discount: 10 },
            },
            {
                name: "Gabriela",
                email: "gabriela@gmail.com ",
                checkIn: new Date("2023-06-30"),
                checkOut: new Date("2023-07-07"),
                discount: 20,
                room: { name: "Queen Double Bed Room", bookings: [], rate: 4.5, discount: 10 },
            },
            {
                name: "Laura",
                email: "laura@gmail.com ",
                checkIn: new Date("2023-07-09"),
                checkOut: new Date("2023-07-20"),
                discount: 20,
                room: { name: "Queen Double Bed Room", bookings: [], rate: 4.5, discount: 10 },
            },
        ],
        rate: 4.5,
        discount: 10,
    },
    {
        name: "Luxury Double Bed Room",
        bookings: [
            {
                name: "Lucian",
                email: "lucian@gmail.com ",
                checkIn: new Date("2023-06-20"),
                checkOut: new Date("2023-06-24"),
                discount: 10,
                room: { name: "Luxury Double Bed Room", bookings: [], rate: 4.5, discount: 15 },
            },
            {
                name: "Ana",
                email: "ana@gmail.com ",
                checkIn: new Date("2023-07-18"),
                checkOut: new Date("2023-07-25"),
                discount: 10,
                room: { name: "Luxury Double Bed Room", bookings: [], rate: 4.5, discount: 15 },
            },
            {
                name: "Coco",
                email: "coco@gmail.com ",
                checkIn: new Date("2023-08-01"),
                checkOut: new Date("2023-08-08"),
                discount: 10,
                room: { name: "Luxury Double Bed Room", bookings: [], rate: 4.5, discount: 15 },
            },
        ],
        rate: 4.5,
        discount: 15,
    },
];
