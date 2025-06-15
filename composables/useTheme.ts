export const useTheme = () => {
    return useState<{
        primary: string;
        secondary: string;
        mode: 'light' | 'dark';
    }>('theme', () => ({
        primary: 'red',
        secondary: 'black',
        mode: 'dark',
    }));
};
