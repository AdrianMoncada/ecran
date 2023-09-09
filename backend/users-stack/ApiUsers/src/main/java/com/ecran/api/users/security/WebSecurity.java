package com.ecran.api.users.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

import com.ecran.api.users.service.UsersService;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@EnableWebSecurity
public class WebSecurity{
	private Environment environment;
	private UsersService usersService;
	private BCryptPasswordEncoder bCryptPasswordEncoder;

	public WebSecurity(UsersService usersService, BCryptPasswordEncoder bCryptPasswordEncoder, Environment environment) {
		this.usersService = usersService;
		this.bCryptPasswordEncoder = bCryptPasswordEncoder;
		this.environment=environment;
	}
    
    @Bean
    protected SecurityFilterChain configure(HttpSecurity http) throws Exception {
//		http.cors(cors -> cors.disable());

    	// Configure AuthenticationManagerBuilder
    	AuthenticationManagerBuilder authenticationManagerBuilder =
    			http.getSharedObject(AuthenticationManagerBuilder.class);

    	authenticationManagerBuilder.userDetailsService(usersService)
    	.passwordEncoder(bCryptPasswordEncoder);

    	AuthenticationManager authenticationManager = authenticationManagerBuilder.build();

		AuthenticationFilter authenticationFilter = new AuthenticationFilter(authenticationManager, usersService, environment);
		authenticationFilter.setFilterProcessesUrl(environment.getProperty("login.url.path"));


    	http.csrf((csrf) -> csrf.disable());
		http.cors(withDefaults());
    	http.authorizeHttpRequests((authz) -> authz
        .requestMatchers(HttpMethod.POST, "/users").permitAll()
								.requestMatchers(HttpMethod.POST, "/users/*/watchlist").permitAll()
								.requestMatchers(HttpMethod.POST, "/users/*/addrating").permitAll()
								.requestMatchers(HttpMethod.PATCH, "/users/*/changepassword").permitAll()
						.requestMatchers(HttpMethod.GET, "/users/**").permitAll()
						.requestMatchers(HttpMethod.GET, "/actuator/**").permitAll()
				.requestMatchers(HttpMethod.GET, "/users/status/check").authenticated()
//        .requestMatchers(new AntPathRequestMatcher("/users/*/watchlist")).permitAll()
				)
				.addFilter(authenticationFilter)
				.authenticationManager(authenticationManager)
        .sessionManagement((session) -> session
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS));


    	http.headers((headers) -> headers.frameOptions((frameOptions) -> frameOptions.sameOrigin()));

        return http.build();
    }

	@Bean
	CorsConfigurationSource corsConfigurationSource() {
		CorsConfiguration configuration = new CorsConfiguration();
		configuration.setAllowedOrigins(Arrays.asList("*"));
		configuration.setAllowedMethods(Arrays.asList("*"));
		configuration.setAllowedHeaders(Arrays.asList("*"));
		configuration.setExposedHeaders(Arrays.asList("*"));
		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		source.registerCorsConfiguration("/**", configuration);
		return source;
	}

}
