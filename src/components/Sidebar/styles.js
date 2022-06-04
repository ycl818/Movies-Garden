import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  imageLink: {
    display:'flex',
    justifyContent:'center',
    padding: '10% 0', //top, bottom 10%
  },
  image: {
    width: '70%',
  },
  links: {
    color: theme.palette.text.primary,
    textDecoration:'none',
  },
  genreImages: {
    filter: theme.palette.mode === 'dark' ? 'dark' : 'invert(1)',
  },

}));