"use client"

import { React, useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"




const ThemeSwitch = ({ className }) => {
  const { theme, setTheme } = useTheme("dark")
  const [mounted, setMounted] = useState(false)


  const handleButtonClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) { // To avoid displaying nothing waiting for mounting
    return null;
  }

  return (
    <button className={className} onClick={handleButtonClick} >
      <Sun className="h-[1.4rem] w-[1.4rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.4rem] w-[1.4rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </button>
  )
}

export default ThemeSwitch
