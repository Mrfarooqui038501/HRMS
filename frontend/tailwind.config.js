// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blink: {
          '0%': { 
            opacity: '1', 
            transform: 'scale(1)', 
            boxShadow: '0 0 10px rgba(0, 255, 0, 0.5)', // Soft green glow for active
            filter: 'brightness(1.2)' // Slightly brighter
          },
          '50%': { 
            opacity: '0.4', 
            transform: 'scale(1.5)', // Slightly larger for pulse effect
            boxShadow: '0 0 20px rgba(0, 255, 0, 0.8)', // Stronger green glow
            filter: 'brightness(1.5)' // More brightness for pulse
          },
          '100%': { 
            opacity: '1', 
            transform: 'scale(1)', 
            boxShadow: '0 0 10px rgba(0, 255, 0, 0.5)', // Return to soft glow
            filter: 'brightness(1.2)' // Return to original brightness
          },
        },
        // You can similarly add a custom keyframe for Inactive if needed
      },
      animation: {
        blink: 'blink 2s ease-in-out infinite', // Slower, smoother blink
      },
    },
  },
  plugins: [],
}

