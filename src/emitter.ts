class Emitter {
  events = {};

  emit = (event, eventData): void => {
    if (this.events[event]) {
      this.events[event].forEach((listener) => {
        listener({ event, eventData });
      });
    }
  };

  addEventListener = (event, listener) => {
    this.events[event] = this.events[event] || [];
    this.events[event].push(listener);
  };

  removeEventListener = (event, listener) => {
    this.events[event] = this.events[event].filter(
      (eventListener) => eventListener !== listener
    );
  };
}

export { Emitter };
