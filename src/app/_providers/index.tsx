'use client'

import {ThemeProvider} from 'next-themes'
import {FC, PropsWithChildren} from "react";

const Providers: FC<PropsWithChildren> = ({children}) => (
    <ThemeProvider attribute="class" defaultTheme='system' enableSystem>
        {children}
    </ThemeProvider>
)
export default Providers