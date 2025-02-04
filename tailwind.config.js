/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
    },
    colors: {
      white: "#ffffff",
      black: "#000000",
      "dark-blue": {
        40: "#0078CD",
        60: "#00528C",
        80: "#002A48",
        primary: "#001E3C",
      },
      "mon-yellow": {
        40: "#FCEED5",
        60: "#F1D092",
        80: "#EEC77E",
        primary: "#F7DBA7",
      },
      "pink-red": "#FF564F",
      "green-light": "#34C759",
      "orange-shine": "#FF912C",
      "blue-sea": "#00A7E7",
      neutral: {
        0: "#FDFDFD",
        10: "#EBEEEF",
        20: "#CCD1D2",
        40: "#99A2A5",
        60: "#667479",
        80: "#242B33",
        100: "#00171F",
      },
      transparent: "transparent",
    },
  },
  plugins: [
    ({ addUtilities }) => {
      const fontMapping = {
        bold: "Gilroy-Bold",
        semibold: "Gilroy-SemiBold",
        medium: "Gilroy-Medium",
        regular: "Gilroy-Regular",
      };
      const headingSizes = [
        {
          size: 46,
          lineHeight: 60,
          weights: { bold: 700, medium: 500, regular: 400 },
        },
        {
          size: 36,
          lineHeight: 54,
          weights: { bold: 700, semibold: 600, regular: 400 },
        },
        {
          size: 28,
          lineHeight: 38,
          weights: { bold: 700, medium: 500, regular: 400 },
        },
        {
          fontFamily: "Gilroy-Regular",
          size: 24,
          lineHeight: 36,
          weights: { bold: 700, semibold: 600, regular: 400 },
        },
      ];

      const bodySizes = [
        {
          size: 20,
          lineHeight: 32,
          weights: { bold: 700 },
        },
        {
          size: 20,
          lineHeight: 28,
          weights: { medium: 500, regular: 400 },
        },
        {
          size: 16,
          lineHeight: 24,
          weights: { bold: 700, medium: 500, regular: 400 },
        },
        {
          size: 14,
          lineHeight: 20,
          weights: { bold: 700, medium: 500, regular: 400 },
        },
        {
          size: 12,
          lineHeight: 18,
          weights: { bold: 700, medium: 500, regular: 400 },
        },
        {
          size: 10,
          lineHeight: 16,
          weights: { bold: 700, medium: 500, regular: 400 },
        },
        {
          size: 8,
          lineHeight: 12,
          weights: { bold: 700, semibold: 600, regular: 400 },
        },
      ];

      const utilities = {};

      headingSizes.forEach(({ size, lineHeight, weights }) => {
        Object.entries(weights).forEach(([key, weight]) => {
          utilities[`.heading-${key}-${size}`] = {
            fontWeight: weight,
            fontSize: `${size}px`,
            lineHeight: `${lineHeight}px`,
            fontFamily: fontMapping[key],
          };
        });
      });

      bodySizes.forEach(({ size, lineHeight, weights }) => {
        Object.entries(weights).forEach(([key, weight]) => {
          utilities[`.body-${key}-${size}`] = {
            fontWeight: weight,
            fontSize: `${size}px`,
            lineHeight: `${lineHeight}px`,
            fontFamily: fontMapping[key],
          };
        });
      });

      addUtilities(utilities);
    },
    require("tailwindcss-animate"),
  ],
};
