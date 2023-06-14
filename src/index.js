import { roomsList } from "./data/rooms";

export class Booking {
  constructor(name, email, checkIn, checkOut, discount, room) {
    this.name = name;
    this.email = email;
    this.checkIn = new Date(checkIn);
    this.checkOut = new Date(checkOut);
    this.discount = discount;
    this.room = room;
  }

  get fee() {
    return null;
    //returns the fee, including discounts on room and booking
  }
}

export class Room {
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
    for (i = 0; i < roomsList[0].bookings.length; i++) {
      checkIn[i] = roomsList[0].bookings[i].checkIn;
      checkOut[i] = roomsList[0].bookings[i].checkOut;
      if (date >= checkIn[i] && date <= checkOut[i]) {
        check.push(true);
      } else {
        check.push(false);
      }
    }
    if (check.includes(true)) {
      return true;
    } else {
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
      for (j = 0; j < roomsList[0].bookings.length; j++) {
        checkOut[j] = roomsList[0].bookings[j].checkOut;
        checkIn[j] = roomsList[0].bookings[j].checkIn;
        if (datesArray[i] >= checkIn[j] && datesArray[i] <= checkOut[j]) {
          daysOccupied = daysOccupied + 1;
        }
      }
    }
    const percentage = (daysOccupied * 100 / totalDays)
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
    let daysOccupiedByRoom = new Array(rooms.length).fill(0)
    let totalDays = datesArray.length;
   
    for(roomCount = 0; roomCount < rooms.length ; roomCount ++) {
      daysOccupied = 0;
        for (i = 0; i < datesArray.length; i++) {
           
          for (j = 0; j < roomsList[roomCount].bookings.length; j++) {
            checkOut[j] = roomsList[roomCount].bookings[j].checkOut;
            checkIn[j] = roomsList[roomCount].bookings[j].checkIn;
            if (datesArray[i] >= checkIn[j] && datesArray[i] <= checkOut[j]) {
              daysOccupied = daysOccupied + 1;
            }
          }
        }
        daysOccupiedByRoom[roomCount] = daysOccupied;
    }
    
    const totalDaysOccupied =  (daysOccupiedByRoom.reduce((a, b) => a + b, 0) / daysOccupiedByRoom.length);
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
    let roomsArray = [];
    let checkRoomAvaliable = [];
    for (var d = startDate; d <= endDate; d.setDate(d.getDate() + 1)) {
      datesArray.push(new Date(d));
    }
    for(roomCount = 0; roomCount < rooms.length ; roomCount ++) {
        for (i = 0; i < datesArray.length; i++) {
          for (j = 0; j < roomsList[roomCount].bookings.length; j++) {
            checkOut[j] = roomsList[roomCount].bookings[j].checkOut;
            checkIn[j] = roomsList[roomCount].bookings[j].checkIn; //&& datesArray[datesArray.length - 1] > checkOut[j]
            if (datesArray[i] >= checkIn[j] && datesArray[i] <= checkOut[j]) {
              roomsArray.push(...false);
            } else {
              roomsArray.push(...true);
            }
          }
        } 

        checkRoomAvaliable[roomCount] = roomsArray;
    }

    console.log(checkRoomAvaliable);
    //returns an array of all rooms in the array that are not occupied for the entire duration
  }
}
