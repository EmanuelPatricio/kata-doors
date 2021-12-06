'use strict';

module.exports = class Door {
  constructor(
    key = '123',
    isOpen = false,
    isClosed = true,
    isUnlocked = false,
    isLocked = true
  ) {
    this.key = key;
    this.isOpen = isOpen;
    this.isClosed = isClosed;
    this.isUnlocked = isUnlocked;
    this.isLocked = isLocked;
  }

  IsOpen() { return this.isOpen; }
  IsClosed() { return this.isClosed; }
  IsUnlocked() { return this.isUnlocked; }
  IsLocked() { return this.isLocked; }

  static OpenAndUnlocked(key) {
    return new Door(key, true, false, true, false);
  }

  static OpenAndLocked(key) {
    return new Door(key, true, false, false, true);
  }

  static CloseAndUnlocked(key) {
    return new Door(key, false, true, true, false);
  }

  static CloseAndLocked(key) {
    return new Door(key, false, true, false, true);
  }
}
