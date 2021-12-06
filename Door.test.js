const { it, expect } = require('@jest/globals');
const Door = require('./Door');

describe('Door', () => {
  const door = new Door();

  it('New door object is created', () => {
    expect(door).toEqual({ "isOpen": false, "isClosed": true, "isUnlocked": false, "isLocked": true, "key": '123' });
  });

  it('Getting IsOpen value', () => {
    expect(door.IsOpen()).toBe(false);
  });

  it('Getting IsClosed value', () => {
    expect(door.IsClosed()).toBe(true);
  });

  it('Getting IsUnlocked value', () => {
    expect(door.IsUnlocked()).toBe(false);
  });

  it('Getting IsLocked value', () => {
    expect(door.IsLocked()).toBe(true);
  });

  it('OpenAndUnlocked calls return Door', () => {
    expect(Door.OpenAndUnlocked('123')).toEqual({ "isOpen": true, "isClosed": false, "isUnlocked": true, "isLocked": false, "key": '123' });
  });

  it('OpenAndLocked calls return Door', () => {
    expect(Door.OpenAndLocked('123')).toEqual({ "isOpen": true, "isClosed": false, "isUnlocked": false, "isLocked": true, "key": '123' });
  });

  it('CloseAndUnlocked calls return Door', () => {
    expect(Door.CloseAndUnlocked('123')).toEqual({ "isOpen": false, "isClosed": true, "isUnlocked": true, "isLocked": false, "key": '123' });
  });

  it('CloseAndLocked calls return Door', () => {
    expect(Door.CloseAndLocked('123')).toEqual({ "isOpen": false, "isClosed": true, "isUnlocked": false, "isLocked": true, "key": '123' });
  });
});
