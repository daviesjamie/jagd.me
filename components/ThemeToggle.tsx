import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <label>
      <input
        type="checkbox"
        className="appearance-none peer"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        checked={theme === "dark"}
      />
      <span
        className={"w-10 h-6 flex items-center p-1 border-2 border-gray-800 dark:border-gray-200 rounded-full after:w-4 after:h-4 after:bg-gray-800 after:dark:bg-gray-200 after:rounded-full peer-checked:after:translate-x-3"}
      />
    </label>
  )
}

export default ThemeToggle;
