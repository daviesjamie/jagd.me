import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <label className="absolute top-0.5 right-8 cursor-pointer">
      <input
        type="checkbox"
        className="appearance-none peer"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        defaultChecked={theme === 'light'}
      />
      <span
        className={
          'w-10 h-6 flex items-center p-1 border-[1px] border-zinc-800 dark:border-zinc-200 rounded-full duration-300 ease-in-out after:w-4 after:h-4 after:bg-zinc-800 after:dark:bg-zinc-200 after:duration-300 after:ease-in-out after:rounded-full peer-checked:after:translate-x-3.5'
        }
      />
    </label>
  );
};

export default ThemeToggle;
