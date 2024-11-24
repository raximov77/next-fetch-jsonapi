module.exports = {
    mode: 'jit',
    content: ['./public/**/*.{html,htm}', './src/**/*.{ts,tsx}'],
    theme: {
        container: {
            center: true,
            screens: {
                sm: '100%',
                md: '1024px',
                lg: '1200px',
            },
        },
        fontSize: {
            xs: '12px',
            sm: '14px',
            base: '16px',
            lg: '18px',
            xl: '24px',
        },
    },
    extend: {
        colors: {
            primary: 'var(--color-primary)',
            secondary: 'var(--color-secondary)',
        },
    },
};
