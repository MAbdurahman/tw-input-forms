/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./*.html'], theme: {
         extend: {
             fontFamily: {
                 heading: ['PT Serif', 'serif'],
                 body: ['PT Sans', 'sans-serif'],
                 monospace: ['PT Mono', 'monospace']

             },
         },
    }, plugins: [],
}