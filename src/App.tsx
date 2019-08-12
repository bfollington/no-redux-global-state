import React from "react";
import "./App.css";
import Counter from "./counter/Counter";
import CounterDisplay from "./counter/CounterDisplay";
import { CounterProvider } from "./counter/counterState";
import EventLogger from "./events/EventLogger";
import { EventProvider } from "./events/useEvents";

const App: React.FC = () => {
  return (
    <EventProvider>
      <div className="App">
        <header className="App-header">
          <CounterProvider>
            <Counter />

            <CounterDisplay />

            <EventLogger />
          </CounterProvider>
        </header>
      </div>
    </EventProvider>
  );
};

export default App;
