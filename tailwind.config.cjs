/** @type {import('tailwindcss').Config}*/
const config = {
    content: ["./src/**/*.{html,js,svelte,ts}"],

    theme: {
        fontFamily: {
            button: [
                "Montserrat",
                "ui-sans-serif",
                "system-ui",
                "-apple-system",
                "BlinkMacSystemFont",
                "Segoe UI",
                "Roboto",
                "Helvetica Neue",
                "Arial",
                "Noto Sans",
                "sans-serif",
                "Apple Color Emoji",
                "Segoe UI Emoji",
                "Segoe UI Symbol",
                "Noto Color Emoji",
            ],
        },
        extend: {
            fontWeight: {
                lightbold: "450",
            },
            letterSpacing: {
                "2widest": "0.2em",
            },
            fontSize: {
                "7xl": "4.2rem",
                "10xl": "6rem",
                "20xl": "12rem",
            },
            spacing: {
                "1/6": "16.6666%",
                "1/8": "12.5%"
            },
            aspectRatio: {
                "1-2": "1 / 2",
            },
            rotate: {
                135: "135deg",
            },
            width: {
                120: "30rem",
                "full-2": "calc(100% - 2px)",
            },
            minWidth: {
                16: "4rem",
                32: "8rem",
                64: "16rem",
                96: "24rem",
                128: "32rem",
            },
            height: {
                threeQuarterScreen: "75vh",
                sixthyScreen: "60vh",
                halfScreen: "50vh",
                fifthScreen: "20vh",
                120: "30rem",
                112: "28rem",
                108: "27rem",
                "full-2": "calc(100% - 2px)",
                "full+22": "calc(100% + 22px)",
            },
            minHeight: {
                16: "4rem",
                32: "8rem",
                40: "10rem",
                42: "10.5rem",
                43: "10.75rem",
                44: "11rem",
                48: "12rem",
                64: "16rem",
                96: "24rem",
                128: "32rem",
                "half-viewport": "50vh",
                "three-quarters-viewport": "75vh",
            },
            animation: {
                "enter-alert": "enter-alert 12s linear",
                "loading-spinner": "loading-spinner 2s linear infinite",
            },
            keyframes: {
                "enter-alert": {
                    "9%": { transform: "translateX(-0.5%)" },
                    "91%": { transform: "translateX(0%)" },
                },
                "loading-spinner": {
                    "0%": {
                        transform: "scale(1)",
                    },
                    "50%": {
                        transform: "scale(1.2)",
                    },
                    "100%": {
                        transform: "scale(1)",
                    },
                },
            },
            zIndex: {
                99: 99,
                2: 2,
            },
            translate: {
                leftBlobInitialY: "150%",
                rightBlobInitialY: "170%",
                "1/5": "20%",
                "1/6": "16.66666%",
                "1/20": "5%",
                "1/40": "2.5%",
            },
            backgroundImage: {
                light: "radial-gradient(farthest-corner at 70% 10%, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 2%, rgba(0,0,0,0) 80%)",
                "light-sm":
                    "radial-gradient(farthest-corner at 40% 10%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.4) 2%, rgba(0,0,0,0) 150%)",
            },
            boxShadow: {
                "light-shadow": "0 30px 40px rgba(0,0,0,.1)",
                "light-theater": "0 30px 40px rgba(0,0,0,.8)",
                "dark-theater": "0 20px 80px 20px rgba(0,0,0,.8)",
            },
            colors: {
                expo: "#154CC1",
                "expo-30": "rgba(21, 76, 193, 0.3)",
                "black-30": "rgba(0, 0, 0, 0.3)",
                "black-40": "rgba(0, 0, 0, 0.4)",
                "black-50": "rgba(0, 0, 0, 0.5)",
                "expo-60": "rgba(21, 76, 193, 0.6)",
                "black-60": "rgba(0, 0, 0, 0.6)",
                "expo-80": "rgba(21, 76, 193, 0.8)",
                "black-80": "rgba(0, 0, 0, 0.8)",
                "expo-90": "rgba(21, 76, 193, 0.9)",
                "black-90": "rgba(0, 0, 0, 0.9)",
                "expo-95": "rgba(21, 76, 193, 0.95)",
                "black-95": "rgba(0, 0, 0, 0.95)",
            },
            padding: {
                header: "0px 8.5% 0px",
            },
            brightness: {
                175: "1.75",
            },
            scale: {
                80: "0.8",
                85: "0.85",
            },
            dropShadow: {
                expo: "0.75px 0.75px 0px #154CC1",
                expoLight: "0px 0px 10px rgba(96, 187, 246, 1)",
                "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
                "4xl": [
                    "0 35px 35px rgba(0, 0, 0, 0.25)",
                    "0 45px 65px rgba(0, 0, 0, 0.15)",
                ],
            },
            gradientColorStops: {
                120: "120px"
            },
            gridTemplateColumns: {
                "20-80": "20% 80%",
                "80-20": "80% 20%",
                "40-60": "40% 60%",
                "55-45": "55% 45%",
                "100": "100%",
            },
            gridTemplateRows: {
                "30-70": "30% 70%",
                "35-65": "35% 65%",
                "45-55": "45% 55%",
                "20-80": "20% 80%",
                "80-20": "80% 20%",
            },
            maxHeight: {
                "192": "48rem"
            }
        },
    },

    plugins: [],
};

module.exports = config;
