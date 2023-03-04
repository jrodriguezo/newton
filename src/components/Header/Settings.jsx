import React from 'react'
import { PANEL_SETTINGS } from '../../constants/settings'
import Dropdown from '../Structure/Dropdown'

function Settings({ isOpen }) {
    return (
        <aside className={`absolute p-4 text-[#a5673f] flex justify-center md:items-center flex-col md:flex-row gap-2 transition-all duration-500 ${isOpen ? 'translate-y-[0%] opacity-1' : 'translate-y-[-5%] opacity-0 pointer-events-none'} top-20 left-0 w-full bg-orange-300`}>
            <label>Language:</label>
            <Dropdown id="language" options={Object.values(PANEL_SETTINGS.LANGUAGE)} />
            <label>Units:</label>
            <Dropdown id="units" options={Object.values(PANEL_SETTINGS.UNITS)} />
        </aside>
    )
}

export default Settings