import { Box, Drawer, ListItemText } from "@mui/material"

const NavBar = () => {
    return (
        <Drawer component='nav' sx={ {width: 256} }>
            <Box component='div' className="container_logo">
                <ListItemText>Registro Users</ListItemText>
            </Box>
        </Drawer>
    )
};

export default NavBar;