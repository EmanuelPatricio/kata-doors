'use strict'

module.exports = class Door {
  constructor(
    key = '123',
    isOpen = true,
    isClosed = false,
    isUnlocked = true,
    isLocked = false
  ) {
    this.key = key;
    this.isOpen = isOpen;
    this.isClosed = isClosed;
    this.isUnlocked = isUnlocked;
    this.isLocked = isLocked;
  }
}
