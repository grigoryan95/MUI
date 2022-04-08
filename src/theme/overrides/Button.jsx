export const MuiButton = {
  variants: [
    {
      props: {variant: "gradient", color: 'primary'},
      style: {
        background: 'linear-gradient(91.67deg,red,blue)',
      },
    },
    {
      props: {variant: "search"},
      style: {
        background: 'linear-gradient(91.67deg,#08c9c3,#0494d1)',
        borderRadius: 32,
        height: '36px',
        width: '65px',
        margin: '-10px -10px -10px 10px',
      },
    },
  ],
  styleOverrides: {
    sizeSmall: {
      padding: '8px 20px'
    },
    sizeMedium: {
      padding: '12px 20px'
    },
    sizeLarge: {
      padding: '16px 20px'
    }
  },
};
