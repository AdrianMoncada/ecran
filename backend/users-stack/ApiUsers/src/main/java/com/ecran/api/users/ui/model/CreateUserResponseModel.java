package com.ecran.api.users.ui.model;

import lombok.*;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class CreateUserResponseModel {
	private String firstName;
	private String lastName;
	private String email;
	private String userId;
	private Boolean enabled;
}
