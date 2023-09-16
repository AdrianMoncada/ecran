package com.ecran.api.users.event;

import com.ecran.api.users.service.UsersService;
import com.ecran.api.users.shared.UserDto;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.MessageSource;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;

@Component
public class RegistrationListener implements ApplicationListener<OnRegistrationCompleteEvent> {
    @Autowired
    private UsersService service;

    @Autowired
    private MessageSource messages;

    @Autowired
    private JavaMailSender mailSender;

    @Override
    public void onApplicationEvent(OnRegistrationCompleteEvent event) {
        this.confirmRegistration(event);
    }

    private void confirmRegistration(OnRegistrationCompleteEvent event) {
        UserDto user = event.getUser();
        String recipientAddress = user.getEmail();
        String subject = "ECRAN: Verifique su mail";
        String confirmationUrl = "https://www.ecran.lat/verification/" + user.getUserId();

        String imageUrl = "https://ecran.s3.amazonaws.com/Logos/%C3%89CRAN.png";

        SimpleMailMessage email = new SimpleMailMessage();
        try {
            MimeMessage mimeMessage = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, "utf-8");
            String html =
                    "<body style='background-color: #0f172a; margin: 0; height: 500px'> <table style = ' background: radial-gradient(122.17% 122.17% at 50% 100%,rgb(233, 213, 255) 0%,rgb(168, 85, 247) 22.35%,rgba(15, 23, 42, 0) 100%); width: 90%; margin-left: 5vw; padding-bottom: 60px; align-items: center;  border-radius: 0px 0px 48px 48px; height: 350px'><tr> <th><img src='"+ imageUrl+"' style='width:40%;  margin-top: 60px;'/></th> </tr><tr><td><p style='color: #e2e8f0; font-family: InterBold; text-align: center; font-size: 24px; font-weight: 400; padding: 45px; margin: 1.5em auto;'> Muchas gracias por registrarse en nuestra página. Por favor, verifique su email: </p></td></tr><tr><td style='text-align: center;'> <a href='" + confirmationUrl + "' style='background-color: rgb(104, 60, 160); padding: 10px 20px; cursor: pointer; border-radius: 10px; text-decoration: none; color: #e2e8f0; font-family: InterBold; font-size: 26px;' >Verificar</a></td></tr></table> </body>";

            mimeMessage.setContent(html, "text/html");
            /** Use this or below line **/
            helper.setText(html, true); // Use this or above line.
            helper.setTo(recipientAddress);
            helper.setSubject(subject);
            helper.setFrom("ecran.lat@gmail.com");
            mailSender.send(mimeMessage);
        } catch (MessagingException ex) {
            System.out.println(ex);
        }
    }
}
