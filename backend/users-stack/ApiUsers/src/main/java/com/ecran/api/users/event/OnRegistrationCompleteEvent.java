package com.ecran.api.users.event;

import com.ecran.api.users.data.models.UserEntity;
import com.ecran.api.users.shared.UserDto;
import lombok.Getter;
import lombok.Setter;
import org.springframework.context.ApplicationEvent;

import java.util.Locale;

@Getter
@Setter
//@AllArgsConstructor
public class OnRegistrationCompleteEvent extends ApplicationEvent {
    private String appUrl;
    private Locale locale;
    private UserDto user;

    public OnRegistrationCompleteEvent(
            UserDto user, Locale locale, String appUrl) {
        super(user);

        this.user = user;
        this.locale = locale;
        this.appUrl = appUrl;
    }

}
