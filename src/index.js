"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Room = exports.Booking = void 0;
const bookings_1 = require("./data/bookings");
const rooms_1 = require("./data/rooms");
class Booking {
    constructor(name, email, checkIn, checkOut, discount, room) {
        this.name = name;
        this.email = email;
        this.checkIn = new Date(checkIn);
        this.checkOut = new Date(checkOut);
        this.discount = discount;
        this.room = room;
    }
    get fee() {
        const value = 450;
        const feeArray = [];
        for (let i = 0; i < bookings_1.bookingsList.length; i++) {
            const bookingDiscountPercentaje = bookings_1.bookingsList[i].discount;
            const roomDiscountPercentaje = bookings_1.bookingsList[i].room.discount;
            const totalDiscountPercentaje = bookingDiscountPercentaje + roomDiscountPercentaje;
            const discount = (value * totalDiscountPercentaje) / 100;
            const fee = value - discount;
            feeArray.push(fee);
        }
        return feeArray;
    }
}
exports.Booking = Booking;
class Room {
    constructor(name, bookings, rate, discount) {
        this.name = name;
        this.bookings = bookings;
        this.rate = rate;
        this.discount = discount;
    }
    isOccupied(date) {
        let i;
        const checkIn = [];
        const checkOut = [];
        const check = [];
        for (i = 0; i < rooms_1.roomsList[0].bookings.length; i++) {
            checkIn[i] = rooms_1.roomsList[0].bookings[i].checkIn;
            checkOut[i] = rooms_1.roomsList[0].bookings[i].checkOut;
            if (date >= checkIn[i] && date <= checkOut[i]) {
                check.push(true);
            }
            else {
                check.push(false);
            }
        }
        if (check.includes(true)) {
            return true;
        }
        else {
            return false;
        }
    }
    occupancyPercentage(startDate, endDate) {
        let i;
        let j;
        const checkIn = [];
        const checkOut = [];
        let datesArray = [];
        let daysOccupied = 0;
        for (var d = startDate; d <= endDate; d.setDate(d.getDate() + 1)) {
            datesArray.push(new Date(d));
        }
        let totalDays = datesArray.length;
        for (i = 0; i < datesArray.length; i++) {
            for (j = 0; j < rooms_1.roomsList[0].bookings.length; j++) {
                checkOut[j] = rooms_1.roomsList[0].bookings[j].checkOut;
                checkIn[j] = rooms_1.roomsList[0].bookings[j].checkIn;
                if (datesArray[i] >= checkIn[j] && datesArray[i] <= checkOut[j]) {
                    daysOccupied = daysOccupied + 1;
                }
            }
        }
        const percentage = (daysOccupied * 100 / totalDays);
        return percentage.toFixed(2) + "%";
    }
    static totalOccupancyPercentage(rooms, startDate, endDate) {
        let i; //Iterate Start & End Date Input
        let j; //Iterate Bookings Check In & Check Out
        let roomCount; //Iterate All rooms 
        const checkIn = [];
        const checkOut = [];
        let datesArray = [];
        let daysOccupied;
        for (var d = startDate; d <= endDate; d.setDate(d.getDate() + 1)) {
            datesArray.push(new Date(d));
        }
        let daysOccupiedByRoom = new Array(rooms.length).fill(0);
        let totalDays = datesArray.length;
        for (roomCount = 0; roomCount < rooms.length; roomCount++) {
            daysOccupied = 0;
            for (i = 0; i < datesArray.length; i++) {
                for (j = 0; j < rooms_1.roomsList[roomCount].bookings.length; j++) {
                    checkOut[j] = rooms_1.roomsList[roomCount].bookings[j].checkOut;
                    checkIn[j] = rooms_1.roomsList[roomCount].bookings[j].checkIn;
                    if (datesArray[i] >= checkIn[j] && datesArray[i] <= checkOut[j]) {
                        daysOccupied = daysOccupied + 1;
                    }
                }
            }
            daysOccupiedByRoom[roomCount] = daysOccupied;
        }
        const totalDaysOccupied = (daysOccupiedByRoom.reduce((a, b) => a + b, 0) / daysOccupiedByRoom.length);
        const percentage = (totalDaysOccupied * 100 / totalDays);
        return percentage.toFixed(2) + "%";
    }
    static availableRooms(rooms, startDate, endDate) {
        let i; //Iterate Start & End Date Input
        let j; //Iterate Bookings Check In & Check Out
        let roomCount; //Iterate All rooms 
        const checkIn = [];
        const checkOut = [];
        let datesArray = [];
        let checkRoomAvaliable = [];
        for (var d = startDate; d <= endDate; d.setDate(d.getDate() + 1)) {
            datesArray.push(new Date(d));
        }
        let roomsArray = Array.from(new Array(rooms.length), function () { return []; });
        for (roomCount = 0; roomCount < rooms.length; roomCount++) {
            for (i = 0; i < datesArray.length; i++) {
                for (j = 0; j < rooms_1.roomsList[roomCount].bookings.length; j++) {
                    checkOut[j] = rooms_1.roomsList[roomCount].bookings[j].checkOut;
                    checkIn[j] = rooms_1.roomsList[roomCount].bookings[j].checkIn;
                    if (datesArray[i] >= checkIn[j] && datesArray[i] <= checkOut[j]) {
                        roomsArray[roomCount].push(false);
                    }
                    else {
                        roomsArray[roomCount].push(true);
                    }
                }
            }
        }
        for (roomCount = 0; roomCount < rooms.length; roomCount++) {
            if (!(roomsArray[roomCount].includes(false))) {
                checkRoomAvaliable.push(rooms[roomCount]);
            }
        }
        return checkRoomAvaliable;
    }
}
exports.Room = Room;
