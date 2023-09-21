import { Avatar } from "@mui/material";
import React from "react";
import { ContainerComment } from "./Comments.styles";

const CommentsUser = ({ user }) => {
	return (
		<ContainerComment>
			<div className="header">
				<Avatar>
					<img src={user.imageUrl} alt="avatar" />
				</Avatar>
				<h4 className="username">{user.username}</h4>
				<p className="date">- {user.date}</p>
			</div>
			<p className="comment" dangerouslySetInnerHTML={{ __html: user.comment }}></p>
		</ContainerComment>
	);
};

export default CommentsUser;
