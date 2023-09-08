import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdClose } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { HeaderContainer } from "./Header.styles";
import { MdExplore } from "react-icons/md";
import { Avatar, Box, Tooltip, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Header = ({ auth }) => {
	const [openNav, setOpenNav] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const handleSignOut = () => {
		setAnchorElUser(null);
		auth.signOut();
	};

	return (
		<HeaderContainer isScrolled={isScrolled}>
			<Link href="/" className="logo">
				<Image src="/images/home/ecran.svg" alt="logo ecran" width={50} height={100} />{" "}
			</Link>
			<nav className={openNav ? "nav nav-mobile" : "nav"}>
				<div>
					<MdClose className={openNav ? "close-menu" : "noshow"} onClick={() => setOpenNav(false)} />
				</div>
				{auth.user ? (
					<Box className={openNav ? "nav-user-mobile" : "nav-user"} sx={{ flexGrow: 0 }}>
						<Tooltip title="Open settings">
							<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
								<Avatar>
									<AccountCircleIcon />
								</Avatar>
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: "45px" }}
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							<MenuItem onClick={handleCloseUserMenu}>
								<Link href="/my-list">
									<Typography textAlign="center">Mi lista</Typography>
								</Link>
							</MenuItem>
							{/* <MenuItem onClick={handleCloseUserMenu}>
								<Link href="/profile">
									<Typography textAlign="center">Editar Perfil</Typography>
								</Link>
							</MenuItem> */}
							<MenuItem onClick={handleSignOut}>
								<Link href="/">
									<Typography textAlign="center">Cerrar Sesión</Typography>
								</Link>
							</MenuItem>
						</Menu>
						<Link href="/discover" className="buttonExplore">
							<MdExplore className="icon" />
							Explorar
						</Link>
					</Box>
				) : (
					<ul className={openNav ? "nav-ul-mobile" : "nav-ul"}>
						<li>
							<Link href="/signIn" className="link_text">
								Iniciar sesión
							</Link>
						</li>
						<li>
							<Link href="/signUp" className="link_text">
								Registrate
							</Link>
						</li>
						<li>
							<Link href="/discover" className="buttonExplore">
								<MdExplore className="icon" />
								Explorar
							</Link>
						</li>
					</ul>
				)}
			</nav>
			<RxHamburgerMenu className={openNav ? "noshow" : "hamburger"} onClick={() => setOpenNav(true)} />
		</HeaderContainer>
	);
};

export default Header;
