'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon, Spinner } from '@/components/Icon';


export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, resolvedTheme, setTheme } = useTheme();
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const currentTheme = resolvedTheme === 'system' ? systemTheme : resolvedTheme;

  useEffect(() => {
    setAudio(new Audio('/sounds/sfx-light-switch-trim.mp3'))
    setMounted(true);
  }, []);

  function handleThemeChange(): void {
    audio?.play();
    const theme =
      resolvedTheme === 'system'
        ? (systemTheme === 'dark'
          ? 'light'
          : 'dark')
        : (resolvedTheme === 'light'
          ? 'dark'
          : 'light');
    setTheme(theme);
  }

  if (!mounted) {
    return (
      <button className='rounded-full border border-border-2 hover:bg-base-2 p-2' disabled>
        <div className='animate-spin'>
          <Spinner />
        </div>
      </button>
    )
  } else {
    return (
      <button className='rounded-full border border-border-2 hover:bg-base-2 p-2' onClick={handleThemeChange}>
        {currentTheme === 'dark' ? <Sun /> : <Moon />}
      </button>
    );
  }
};

export default ThemeSwitcher;