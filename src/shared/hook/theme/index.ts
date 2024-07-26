import {useTheme} from "next-themes";
import {useEffect, useState} from "react";

const useResolvedTheme = () => {
  const theme = useTheme()
  const [mounted, setMounted] = useState(false)

  const {resolvedTheme, setTheme} = theme
  const handleSwitch = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light")
  }

  useEffect(() =>  setMounted(true), [])

  return {
    mounted,
    ...theme,
    handleSwitch,
  }
}

export {
  useResolvedTheme,
}

