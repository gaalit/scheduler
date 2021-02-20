import { useState } from 'react'

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(updatedMode, replace) {
    setMode(updatedMode);

    if(replace) {
      setHistory(prev => [...prev.slice(0,-1), updatedMode])
    } else {
      setHistory(prev => [...prev, updatedMode])
    }
  }

  function back() {

    if(history.length > 1 ) {
      setMode(history[history.length -2])
      setHistory(prev => [prev.slice(0, prev.length -1)])
    }

  };
  
  return { mode, transition, back };
}