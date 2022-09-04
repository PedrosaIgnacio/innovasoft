import React, { useContext } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import LogoutIcon from "@mui/icons-material/Logout";
import { AuthContext } from "../auth/context/AuthContext";
import { Home } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const drawerWidth = 440;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
	({ theme, open }) => ({
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: `-${drawerWidth}px`,
		...(open && {
			transition: theme.transitions.create("margin", {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
			marginLeft: 0,
		}),
	})
);

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
	transition: theme.transitions.create(["margin", "width"], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: `${drawerWidth}px`,
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	padding: theme.spacing(0, 1),
	...theme.mixins.toolbar,
	justifyContent: "flex-end",
}));

export const PersistentDrawerLeft = ({ children }) => {
	const { logout, username } = useContext(AuthContext);

	const theme = useTheme();
	const [open, setOpen] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const navigate = useNavigate();
	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar
				position="fixed"
				open={open}
				sx={{ bgcolor: "#00152A", borderBottom: "5px solid #3298E1" }}
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						sx={{ mr: 2, ...(open && { display: "none" }) }}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap component="div" sx={{ flexGrow: 2 }}>
						Compania Prueba
					</Typography>
					<Typography marginRight={4}>{username}</Typography>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
						onClick={() => logout()}
					>
						<LogoutIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
			<Drawer
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					"& .MuiDrawer-paper": {
						width: drawerWidth,
						boxSizing: "border-box",
					},
				}}
				variant="persistent"
				anchor="left"
				open={open}
			>
				<DrawerHeader>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === "ltr" ? (
							<ChevronLeftIcon />
						) : (
							<ChevronRightIcon />
						)}
					</IconButton>
				</DrawerHeader>
				<Divider />
				<Box mt={2} mb={2}>
					<Box
						component="img"
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeRakKZ5OBynaqHLdHKWENtBoXs73kckpuDWXN_07M5XqU1XBE3lGhBRxdxx2QxjFrm8o&usqp=CAU"
						height="150px"
						width="150px"
						margin="0 auto"
						display="block"
					/>
					<Typography variant="h5" textAlign="center" fontWeight="bold">
						{username}
					</Typography>
				</Box>
				<Divider />
				<Typography
					variant="h4"
					textAlign="center"
					sx={{ fontWeight: "light" }}
					mt={4}
					mb={4}
				>
					MENU
				</Typography>
				<Divider />

				<List sx={{ margin: "2rem" }}>
					<ListItem key={"Home"} disablePadding>
						<ListItemButton
							onClick={() => navigate("/home", { replace: true })}
						>
							<ListItemIcon>
								<Home />
							</ListItemIcon>
							<ListItemText primary={"Inicio"} />
						</ListItemButton>
					</ListItem>
					<ListItem key={"Clients"} disablePadding>
						<ListItemButton
							onClick={() => navigate("/clients", { replace: true })}
						>
							<ListItemIcon>
								<MailIcon />
							</ListItemIcon>
							<ListItemText primary={"Consulta Clientes"} />
						</ListItemButton>
					</ListItem>
				</List>
			</Drawer>
			<Main open={open}>
				<DrawerHeader />
				{children}
			</Main>
		</Box>
	);
};
