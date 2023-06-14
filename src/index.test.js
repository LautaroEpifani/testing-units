import  {describe, expect, test} from  '@jest/globals';
import { roomsList } from './data/rooms'
import { Room } from './index.js'

describe('check room availability and percentage occupancy', () => {
    const { name, bookings, rate, discount } = roomsList[0];
    const room = new Room(name, bookings, rate, discount);
  test('rooms available for a specific date', () => {
    expect(room.isOccupied(new Date("2023-07-19"))).toBe(true);
  });
  test('percentage of occupied room reservations to two decimal places', () => {
    expect(room.occupancyPercentage(new Date("2023-06-20"),new Date("2023-08-20") )).toEqual("46.77%");
     expect(room.occupancyPercentage(new Date("2023-07-20"),new Date("2023-07-21") )).toEqual("50.00%");
  });
  test('percentage of all occupied rooms reservations to two decimal places', () => {
    expect(Room.totalOccupancyPercentage(roomsList, new Date("2023-07-08"),new Date("2023-07-25") )).toEqual("55.56%");
  });
  test('rooms that are not occupied for the entire duration', () => {
    expect(Room.availableRooms(roomsList, new Date("2023-06-25"),new Date("2023-06-30") )).toBe(true);
  });
});
