"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const rooms_1 = require("./data/rooms");
const index_1 = require("./index");
const bookings_1 = require("./data/bookings");
(0, globals_1.describe)('check room availability and percentage occupancy', () => {
    (0, globals_1.test)('rooms available for a specific date', () => {
        const { name, bookings, rate, discount } = rooms_1.roomsList[0];
        const room = new index_1.Room(name, bookings, rate, discount);
        (0, globals_1.expect)(room.isOccupied(new Date("2023-07-19"))).toBe(true);
    });
    (0, globals_1.test)('rooms occupied for a specific date', () => {
        const { name, bookings, rate, discount } = rooms_1.roomsList[0];
        const room = new index_1.Room(name, bookings, rate, discount);
        (0, globals_1.expect)(room.isOccupied(new Date("2023-06-29"))).toBe(false);
    });
    (0, globals_1.test)('percentage of occupied room reservations to two decimal places', () => {
        const { name, bookings, rate, discount } = rooms_1.roomsList[0];
        const room = new index_1.Room(name, bookings, rate, discount);
        (0, globals_1.expect)(room.occupancyPercentage(new Date("2023-06-20"), new Date("2023-08-20"))).toEqual("46.77%");
    });
    (0, globals_1.test)('percentage of occupied room reservations to two decimal places 2nd', () => {
        const { name, bookings, rate, discount } = rooms_1.roomsList[0];
        const room = new index_1.Room(name, bookings, rate, discount);
        (0, globals_1.expect)(room.occupancyPercentage(new Date("2023-07-20"), new Date("2023-07-21"))).toEqual("50.00%");
    });
    (0, globals_1.test)('percentage of all occupied rooms reservations to two decimal places', () => {
        (0, globals_1.expect)(index_1.Room.totalOccupancyPercentage(rooms_1.roomsList, new Date("2023-07-08"), new Date("2023-07-25"))).toEqual("55.56%");
    });
    (0, globals_1.test)('rooms that are not occupied for the entire duration', () => {
        (0, globals_1.expect)(index_1.Room.availableRooms(rooms_1.roomsList, new Date("2023-06-25"), new Date("2023-06-30"))).toEqual([rooms_1.roomsList[1]]);
    });
    (0, globals_1.test)('returns the fee, including discounts on room and booking', () => {
        const { name, email, checkIn, checkOut, discount, room } = bookings_1.bookingsList[0];
        const booking = new index_1.Booking(name, email, checkIn, checkOut, discount, room);
        (0, globals_1.expect)(booking.fee).toEqual([315, 360, 270]);
    });
});
