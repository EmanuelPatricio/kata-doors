const { it, expect } = require('@jest/globals');
const Door = require('./Door');

describe('Door', () => {
  const door = new Door();

  it('New door object is created', () => {
    expect(door).toEqual({ "isOpen": true, "isClosed": false, "isUnlocked": true, "isLocked": false, "key": '123' });
  });
});
