import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  movie: {
    padding: '10px',
  },
  links: {
    alignItems:'center',
    fontWeight: 'bolder',
    textDecoration: 'none',
    [theme.breakpoints.up('xs')]: {
      display: "flex",
      flexDirection: 'column',
    },
    '&:hover': {
      cursor: 'pointer', 
    },
  },
  image: {
    borderRadius: '20px',
    height: '200px',
    marginBottom: '10px',
    [theme.breakpoints.up('xs')]: {
      padding:"2px"
    },
    '&:hover': {
      transition: "0.3s",
      transform: 'scale(1.05)',
    },
  },
  title: {
    color: theme.palette.text.primary,
    textOverflow: 'ellipsis', // name too long...
    width: '150px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    marginTop: '10px',
    marginBottom: 0,
    textAlign: 'center',
  },
}));