/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "dark-blue": {
        primary: "#001E3C",
        40: "#0078CD",
        60: "#00528C",
        80: "#002A48",
      },
      "mon-yellow": {
        primary: "#F7DBA7",
        40: "#FCEED5",
        60: "#F1D092",
        80: "#EEC77E",
      },
      "pink-red": "#FF564F",
      "green-light": "#34C759",
      "orange-shine": "#FF912C",
      "blue-sea": "#00A7E7",
      neutral: {
        100: "#00171F",
        80: "#242B33",
        60: "#667479",
        40: "#99A2A5",
        20: "#CCD1D2",
        10: "#EBEEEF",
        0: "#FDFDFD",
      },
    },
  },
  plugins: [
    ({ addUtilities }) => {
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
          };
        });
      });

      bodySizes.forEach(({ size, lineHeight, weights }) => {
        Object.entries(weights).forEach(([key, weight]) => {
          utilities[`.body-${key}-${size}`] = {
            fontWeight: weight,
            fontSize: `${size}px`,
            lineHeight: `${lineHeight}px`,
          };
        });
      });

      addUtilities(utilities);
    },
  ],
};
