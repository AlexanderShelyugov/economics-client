import { AppBar, Divider, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, Typography } from '@material-ui/core'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import HomeIcon from '@material-ui/icons/Home'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import MenuIcon from '@material-ui/icons/Menu'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import StoreIcon from '@material-ui/icons/Store'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom"

import ProductsPage from './ProductsPage'
import WarehousesPage from './WarehousesPage'

const menuWidth = 240

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    drawer: {
        width: menuWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: menuWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
}))

export default function EconomicsMainPage() {
    const classes = useStyles()
    const theme = useTheme()
    const [open, setOpen] = React.useState(false)

    const handleMenuOpen = () => {
        setOpen(true)
    }

    const handleMenuClose = () => {
        setOpen(false)
    }

    return (
        <Router>
            <div className="{classes.root}">
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            edge="start"
                            className="{classes.menuButton}"
                            color="inherit"
                            aria-label="menu"
                            onClick={handleMenuOpen}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className="{classes.title}">
                            Economics
                    </Typography>
                    </Toolbar>
                </AppBar>
                <aside>
                    <Drawer
                        className={classes.drawer}
                        variant="persistent"
                        anchor="left"
                        open={open}
                        classes={{
                            paper: classes.drawerPaper
                        }}
                    >
                        <div className={classes.drawerHeader}>
                            <IconButton onClick={handleMenuClose}>
                                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                            </IconButton>
                        </div>
                        <Divider />
                        <List>
                            <ListItem
                                button
                                key={1}
                                component={Link}
                                onClick={handleMenuClose}
                                to="/"
                            >
                                <ListItemIcon><HomeIcon /></ListItemIcon>
                                <ListItemText primary="Home" />
                            </ListItem>
                            <ListItem
                                button
                                key={2}
                                component={Link}
                                onClick={handleMenuClose}
                                to="/warehouses"
                            >
                                <ListItemIcon><StoreIcon /></ListItemIcon>
                                <ListItemText primary="Warehouses" />
                            </ListItem>
                            <ListItem
                                button
                                key={3}
                                component={Link}
                                onClick={handleMenuClose}
                                to="/products"
                            >
                                <ListItemIcon><ShoppingCartIcon /></ListItemIcon>
                                <ListItemText primary="Products" />
                            </ListItem>
                        </List>
                    </Drawer>
                </aside>

                <main>
                    <Routes>
                        <Route path="/warehouses">
                            <WarehousesPage />
                        </Route>
                        <Route path="/products">
                            <ProductsPage />
                        </Route>
                        <Route path="/"></Route>
                    </Routes>
                </main>
            </div>
        </Router>
    )
}