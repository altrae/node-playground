class EventEmitter {
  events = {};

  emit = (event, eventData): void => {
    if (this.events[event]) {
      this.events[event].forEach((listener) => {
        listener({ event, eventData });
      });
    }
  };

  addListener = (event, listener) => {
    this.events[event] = this.events[event] || [];
    this.events[event].push(listener);
  };

  removeListener = (event, listener) => {
    this.events[event] = this.events[event].filter(
      (eventListener) => eventListener !== listener
    );
  };
}

export { EventEmitter };
