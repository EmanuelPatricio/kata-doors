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

  Open() {
    if (this.isOpen) throw new Error('The door is already open.');

    this.isOpen = true;
    this.isClosed = false;

    return {
      "isOpen": this.isOpen,
      "isClosed": this.isClosed,
      "isUnlocked": this.isUnlocked,
      "isLocked": this.isLocked,
      "key": this.key
    }
  }

  Close() {
    console.log(this.isClosed);
    if (this.isClosed) throw new Error('The door is already closed.');

    this.isOpen = false;
    this.isClosed = true;

    return {
      "isOpen": this.isOpen,
      "isClosed": this.isClosed,
      "isUnlocked": this.isUnlocked,
      "isLocked": this.isLocked,
      "key": this.key
    }
  }

  Lock() {
    if (this.isLocked) throw new Error('The door is already locked.');

    this.isLocked = true;
    this.isUnlocked = false;

    return {
      "isOpen": this.isOpen,
      "isClosed": this.isClosed,
      "isUnlocked": this.isUnlocked,
      "isLocked": this.isLocked,
      "key": this.key
    }
  }

  Unlock(key) {
    if (key !== this.key) throw new Error('The keys do not match.');
    if (this.isUnlocked) throw new Error('The door is already unlocked.');

    this.isLocked = false;
    this.isUnlocked = true;

    return {
      "isOpen": this.isOpen,
      "isClosed": this.isClosed,
      "isUnlocked": this.isUnlocked,
      "isLocked": this.isLocked,
      "key": this.key
    }
  }
}
