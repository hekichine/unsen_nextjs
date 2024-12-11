import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        success:"var(--success-color)",
        warning:"var(--warning-color)",
        error:"var(--error-color)",
        tooltip:"var(--tooltip-color)",
        tooltipBackground:"var(--tooltip-background)",
        body: "var(--body-background)",
        text: "var(--text-color)",
        heading: "var(--heading-color)",
        accent: "var(--accent-color)",
        secondary: "var(--secondary-color)",
        link: "var(--link-color)",
        linkHover: "var(--link-color-hover)",
        border: "var(--border-color)",
        button: "var(--button-color)",
        buttonBackground: "var(--button-background)",
        buttonHover: "var(--button-color-hover)",
        buttonBackgroundHover: "var(--button-background-hover)",
        
        // Badge
        badgeSaleBackground: "var(--sale-badge-primary)",
        badgeSaleColor: "var(--sale-badge-secondary)",
        badgeNewBackground: "var(--new-badge-primary)",
        badgeNewColor: "var(--new-badge-secondary)",
        badgePreorderBackground: "var(--preorder-badge-primary)",
        badgePreorderColor: "var(--preorder-badge-secondary)",
        badgeSoldoutBackground: "var(--soldout-badge-primary)",
        badgeSoldoutColor: "var(--soldout-badge-secondary)",
      },
    },
  },
  plugins: [],
} satisfies Config;
