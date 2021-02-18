import { useState } from 'react'

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(updatedMode, replace = false) {
    setMode(updatedMode);

    if(replace) {
      setHistory([...history.slice(0,-1), updatedMode])
    } else {
      setHistory([...history, updatedMode])
    }
  }

  function back() {

    if(history.length > 1 ) {
      setMode(history[history.length -2])
      setHistory(history.slice(0, history.length -1))
    }

  };
  
  return { mode, transition, back };
}