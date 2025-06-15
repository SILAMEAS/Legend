import {useTheme} from "~/composables/useTheme";

export const useStyle = () => {
    const theme = useTheme();
    console.log("theme",theme)
    return {
        linkNavigation:{
            layout:'flex gap-x-10 py-2 sticky bg-black',
            item:theme.value.primary === 'dark'
            ? 'text-white'
            : 'text-black'
        },
        activeLink: 'underline text-yellow-400',
        button: 'bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded',
    };
};