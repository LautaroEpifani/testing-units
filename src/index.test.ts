import  {describe, expect, test} from  '@jest/globals';
import { roomsList } from './data/rooms'
import { Booking, Room } from './index'
import { bookingsList } from './data/bookings';

describe('check room availability and percentage occupancy', () => {
    
  test('rooms available for a specific date', () => {
    const { name, bookings, rate, discount } = roomsList[0]
    const room = new Room(name, bookings, rate, discount);
    expect(room.isOccupied(new Date("2023-07-19"))).toBe(true);
  });
  test('rooms occupied for a specific date', () => {
    const { name, bookings, rate, discount } = roomsList[0]
    const room = new Room(name, bookings, rate, discount);
    expect(room.isOccupied(new Date("2023-06-29"))).toBe(false);
  });
  test('percentage of occupied room reservations to two decimal places', () => {
    const { name, bookings, rate, discount } = roomsList[0]
    const room = new Room(name, bookings, rate, discount);
    expect(room.occupancyPercentage(new Date("2023-06-20"),new Date("2023-08-20") )).toEqual("46.77%");
  });
  test('percentage of occupied room reservations to two decimal places 2nd', () => {
    const { name, bookings, rate, discount } = roomsList[0]
    const room = new Room(name, bookings, rate, discount);
    expect(room.occupancyPercentage(new Date("2023-07-20"),new Date("2023-07-21") )).toEqual("50.00%");
  });
  test('percentage of all occupied rooms reservations to two decimal places', () => {
    expect(Room.totalOccupancyPercentage(roomsList, new Date("2023-07-08"),new Date("2023-07-25") )).toEqual("55.56%");
  });
  test('rooms that are not occupied for the entire duration', () => {
    expect(Room.availableRooms(roomsList, new Date("2023-06-25"),new Date("2023-06-30") )).toEqual([roomsList[1]]);
  });
  test('returns the fee, including discounts on room and booking', () => {
     const { name, email, checkIn, checkOut, discount, room } = bookingsList[0]
    const booking = new Booking(name, email, checkIn, checkOut, discount, room)
    expect(booking.fee).toEqual([ 315, 360, 270 ])
  });
});
