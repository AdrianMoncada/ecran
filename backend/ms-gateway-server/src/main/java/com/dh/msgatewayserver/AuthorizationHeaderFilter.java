package com.dh.msgatewayserver;

import io.jsonwebtoken.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.gateway.filter.GatewayFilter;
import org.springframework.cloud.gateway.filter.factory.AbstractGatewayFilterFactory;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.http.server.reactive.ServerHttpResponse;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;
import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;
import java.util.*;
import java.util.stream.Collectors;

@Component
public class AuthorizationHeaderFilter extends AbstractGatewayFilterFactory<AuthorizationHeaderFilter.Config>{
    @Autowired
    Environment env;

    public AuthorizationHeaderFilter(){
        super(Config.class);
    }
    public static class Config {
        private List<String> authorities;
        public List<String> getAuthorities() {
            return authorities;
        }

        public void setAuthorities(String authorities) {
            this.authorities = Arrays.asList(authorities.split(" "));
        }

    }

    @Override
    public List<String> shortcutFieldOrder() {
        return Arrays.asList("authorities");
    }

    @Override
    public GatewayFilter apply(Config configuration){
        return (exchange, chain) -> {
            ServerHttpRequest request = exchange.getRequest();
            if(!request.getHeaders().containsKey(HttpHeaders.AUTHORIZATION)) {
                return onError(exchange, "No authorization header", HttpStatus.UNAUTHORIZED);
            }
            String authorizationHeader = request.getHeaders().get(HttpHeaders.AUTHORIZATION).get(0);
            String jwt = authorizationHeader.replace("Bearer", "");
            List<String> authorities = getAuthorities(jwt);
            boolean hasRequiredAuthority = authorities.stream()
                    .anyMatch(authority->configuration.getAuthorities().contains(authority));

            if(!hasRequiredAuthority)
                return onError(exchange,"User is not authorized to perform this operation", HttpStatus.FORBIDDEN);

            return chain.filter(exchange);
        };
    }
    private Mono<Void> onError(ServerWebExchange exchange, String err, HttpStatus httpStatus) {
        ServerHttpResponse response = exchange.getResponse();
        response.setStatusCode(httpStatus);

        return response.setComplete();
    }

    private List<String> getAuthorities(String jwt){
        List<String> returnValue = new ArrayList<>();

        String tokenSecret = env.getProperty("token.secret");
        byte[] secretKeyBytes = Base64.getEncoder().encode(tokenSecret.getBytes());
        SecretKey signingKey = new SecretKeySpec(secretKeyBytes, SignatureAlgorithm.HS512.getJcaName());

        JwtParser jwtParser = Jwts.parserBuilder()
                .setSigningKey(signingKey)
                .build();
        try {
            Jwt<Header, Claims> parsedToken = jwtParser.parse(jwt);
            List<Map<String, String>> scopes = ((Claims)parsedToken.getBody()).get("scope", List.class);
            scopes.stream().map(scopeMap -> returnValue.add(scopeMap.get("authority"))).collect(Collectors.toList());
        } catch (Exception ex) {
            return returnValue;
        }

        return returnValue;
    }
}
