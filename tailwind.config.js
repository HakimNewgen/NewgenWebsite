module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            screens: {
                "3x": "2000px"
            },
            zIndex: {
                '0': -2,
                 '10':-1,
                
                
            }, fontSize: {
                
                '6xl': '4rem',
                'xxs': '1rem',
                
            }, height: {
                sm: '8px',
                md: '16px',
                lg: '200px',
                xl: '650px',
                xxl: '780px',
                xxxl: '1200px',
            },inset: {
                '22': '85px',
               
              }
        },
    },
    variants: {
        extend: {},
    } , 

    plugin: [
        require('@tailwindcss/typography')
    ]
    
}
