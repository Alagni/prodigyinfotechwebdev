
import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, TimerReset } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 10);
      }, 10);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning]);

  const formatTime = (totalMilliseconds: number) => {
    const minutes = Math.floor(totalMilliseconds / 60000);
    const seconds = Math.floor((totalMilliseconds % 60000) / 1000);
    const milliseconds = Math.floor((totalMilliseconds % 1000) / 10);

    return {
      minutes: minutes.toString().padStart(2, '0'),
      seconds: seconds.toString().padStart(2, '0'),
      milliseconds: milliseconds.toString().padStart(2, '0')
    };
  };

  const handleStartPause = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  const { minutes, seconds, milliseconds } = formatTime(time);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 max-w-md w-full">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight">
            Stopwatch
          </h1>
          
          {/* Time Display */}
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-2 text-6xl md:text-7xl font-mono font-bold text-white mb-2">
              <span className="bg-black/20 rounded-lg px-3 py-2 min-w-[120px]">
                {minutes}
              </span>
              <span className="text-blue-300">:</span>
              <span className="bg-black/20 rounded-lg px-3 py-2 min-w-[120px]">
                {seconds}
              </span>
            </div>
            <div className="text-2xl md:text-3xl font-mono font-semibold text-blue-300">
              .{milliseconds}
            </div>
            <div className="flex justify-center space-x-8 text-sm text-white/60 mt-2">
              <span>MIN</span>
              <span>SEC</span>
              <span className="ml-4">MS</span>
            </div>
          </div>

          {/* Control Buttons */}
          <div className="flex justify-center space-x-4">
            <Button
              onClick={handleStartPause}
              className={`w-16 h-16 rounded-full transition-all duration-300 hover:scale-110 ${
                isRunning 
                  ? 'bg-red-500 hover:bg-red-600 text-white shadow-lg shadow-red-500/30' 
                  : 'bg-green-500 hover:bg-green-600 text-white shadow-lg shadow-green-500/30'
              }`}
              size="lg"
            >
              {isRunning ? <Pause size={24} /> : <Play size={24} />}
            </Button>
            
            <Button
              onClick={handleReset}
              className="w-16 h-16 rounded-full bg-gray-600 hover:bg-gray-700 text-white transition-all duration-300 hover:scale-110 shadow-lg shadow-gray-600/30"
              size="lg"
            >
              <TimerReset size={24} />
            </Button>
          </div>

          {/* Status Text */}
          <div className="mt-6">
            <p className="text-white/70 text-lg font-medium">
              {isRunning ? 'Running...' : time > 0 ? 'Paused' : 'Ready to start'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
