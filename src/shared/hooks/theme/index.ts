'use client'

import {useTheme} from "next-themes";

const useResolvedTheme = () => {
    const resolvedTheme = localStorage.getItem("theme")
    const {setTheme} = useTheme()

    const handleTheme = () => {
        setTheme(resolvedTheme === "light" ? "dark" : "light")
    }

    return {
        resolvedTheme,
        handleTheme
    }
}

export {
    useResolvedTheme
}