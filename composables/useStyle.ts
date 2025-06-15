import {useTheme} from "~/composables/useTheme";

export const useStyle = () => {
    const theme = useTheme();
    return {
        linkNavigation:{
            parenLayout:'container mx-auto w-screen bg-red-900 flex relative',
            Left:{
                layout:"bg-yellow-300",
                item:theme.value.primary === 'dark'
                    ? 'text-white flex'
                    : 'text-black flex gap-x-2 text-sm items-center'

            },
            Right:{
                layout:"bg-green-300",
                item:theme.value.primary === 'dark'
                    ? 'text-white flex'
                    : 'text-black flex gap-x-2 text-sm items-center'

            }
        },
        activeLink: 'underline text-yellow-400',
        button: 'bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded',
    };
};