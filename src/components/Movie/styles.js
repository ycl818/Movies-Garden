import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  movie: {
    padding: '10px',
  },
  links: {
    alignItems:'center',
    fontWeight: 'bolder',
    [theme.breakpoints.up('xs')]: {
      display: "flex",
      flexDirection: 'none',
    },
    '&:hover': {
      cursor: 'pointer',
      textDecoration: 'none',
    },
  },
  image: {
    borderRadius: '20px',
    height: '300px',
    marginBottom: '10px',
    '&:hover': {
      transition: "0.3s",
      transform: 'scale(1.05)',
    },
  },
  title: {
    color: theme.palette.text.primary,
    textOverflow: 'ellipsis', // name too long...
    width: '230px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    marginTop: '10px',
    marginBottom: 0,
    textAlign: 'center',
  },
}));