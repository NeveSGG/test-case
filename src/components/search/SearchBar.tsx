import SearchIcon from '@mui/icons-material/Search';
import { Box, Input } from '@mui/material';
import { SearchButton } from '../ui/SearchButton';

interface SearchBarProps {
    placeholder: string | undefined;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const serachBarStyles = {
    wrapper: {
        backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '0px 1px 12px 2px rgba(0,0,0,0.05)',
        webkitBoxShadow: '0px 1px 12px 2px rgba(0,0,0,0.05)',
        mozBoxShadow: '0px 1px 12px 2px rgba(0,0,0,0.05)',
        border: '1px solid #f3f3f3',
        height: '70px',
        padding: '0 12px 0 23px',
        margin: '40px 0',
        width: '90vw',
        maxWidth: '750px',
    },

    searchIcon: {
        color: '#A8A8A8'
    },

    input: {
        fontFamily: 'Gordita',
        fontWeight: '400',
        fontSize: '18px',
        lineHeight: '18px',
        letterSpacing: '-0.02em',
        fontFeatureSettings: '"ss01" on',
        paddingRight: '24px',
        borderLeft: '1px solid #e0e0e0',
        marginLeft: '20px',
        paddingLeft: '24px',
        height: '42px'
    },

    
}

export function SearchBar(props: SearchBarProps) {
    return (
        <div>
            <Box sx={serachBarStyles.wrapper}>
                <SearchIcon sx={serachBarStyles.searchIcon}/>
                <Input
                    fullWidth={true}
                    disableUnderline={true}
                    placeholder={props.placeholder}
                    onChange={props.onChange}
                    sx={serachBarStyles.input}
                />
                <SearchButton text={'Search'}/>
            </Box>
            
        </div>
    )
}