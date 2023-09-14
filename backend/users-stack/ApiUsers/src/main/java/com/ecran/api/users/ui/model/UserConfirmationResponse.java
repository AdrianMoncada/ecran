package com.ecran.api.users.ui.model;

public class UserConfirmationResponse {
    private String code;

    public UserConfirmationResponse(String code) {
        this.code = code;
    }
    public UserConfirmationResponse() {
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }
}
