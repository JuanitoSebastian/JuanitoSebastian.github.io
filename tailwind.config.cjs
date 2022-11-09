/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
        extend: {
          colors: {
            'j-light-lilac': '#F0F0FC',
            'j-lilac': '#CB9CF2',
            'j-dark-lilac': '#540D6E',
            'j-black': '#23201F',
            'j-orange': '#FFA400'
          },
          fontFamily: {
            'roc-grotesk': ['roc-grotesk', 'sans-serif']
          }
        }
      },
	plugins: [],
}
