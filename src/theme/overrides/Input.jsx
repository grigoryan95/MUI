export const MuiTextField = {
  styleOverrides: {
    root: {
      "&.variant": {
        "& fieldset": {
          borderRadius: '6px'
        },
        "& .MuiInputBase-input:hover + fieldset": {
          borderColor: `#c4c4c4`
        },
        "& .MuiInputBase-input:focus + fieldset": {
          borderColor: '#08c9c3'
        },
        '.Mui-focused': {
          color: 'black',
          fontSize: '13px',
          '& fieldset': {
            fontSize: 'inherit'
          },
        },
      },
      "&.search": {
        "& fieldset": {
          borderRadius: '22px',
          border: '1px solid #ccc',
        },
        '& label.Mui-focused': {
          color: 'white',
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: 'none',
        },
        '& .MuiOutlinedInput-root': {
          height: '44px',
          '& fieldset': {
            borderColor: '#ccc',
          },
          '&:hover fieldset': {
            borderColor: 'none',
          },
          '&.Mui-focused fieldset': {
            border: '1px solid #08c9c3',
          },
        }
      }
    }
  }
};





