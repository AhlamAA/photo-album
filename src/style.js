import { ThemeContext } from '@emotion/react';
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    container: {
        padding: '15px'
    },
    icon: {
        marginRight: '15px'
    }, 
    buttons:{
        marginTop: '35px'
    },
    cardGrid:{
        padding: '20px 0'
    },
    card:{
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    cardMedia:{
        paddingTop: '56.25%'
    },
    cardContent:{
        flexGrow: 1
    },
    cardButton:{
        justifyContent: 'center',
        columnGap: '6px'
    },
    footer:{
        backgroundColor: 'lightgray',
        padding: '50px 0'
    }
})

export default useStyles;