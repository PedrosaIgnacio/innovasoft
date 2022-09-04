import { Typography, Box } from "@mui/material";
import React from "react";
import { PersistentDrawerLeft } from "../shared/Drawer";
import ReportProblemRoundedIcon from "@mui/icons-material/ReportProblemRounded";
export const PrivateErrorPage = () => {
	return (
		<PersistentDrawerLeft>
			<Box
				display="flex"
				justifyContent="center"
				flexDirection="column"
				alignItems="center"
				mt={6}
			>
				<Box display="flex" justifyContent="center" alignItems="center">
					<ReportProblemRoundedIcon
						htmlColor="#3298e1"
						sx={{ fontSize: "8rem" }}
					/>
					<Typography
						fontSize="6rem"
						fontWeight="bold"
						sx={{ color: "#3298E1" }}
					>
						404
					</Typography>
				</Box>
				<Typography
					sx={{ color: "GrayText" }}
					fontWeight="medium"
					fontSize="3rem"
				>
					Oops... Page Not Found
				</Typography>
			</Box>
		</PersistentDrawerLeft>
	);
};
