package thurs1030group5.majorproject.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;
import thurs1030group5.majorproject.services.UserService;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Collections;

//Filter used to implement Json Web Tokens
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    @Autowired
    private JwtTokenProvider tokenProvider;

    @Autowired
    private UserService userService;

    @Override
    protected void doFilterInternal(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse,
                                    FilterChain filterChain) throws ServletException, IOException {

        try {

            String jwt = getJWTFromRequest(httpServletRequest);

            if(StringUtils.hasText(jwt)&& tokenProvider.validateToken(jwt)){
                String username = tokenProvider.getUsernameFromJWT(jwt);
                UserDetails userDetails = userService.loadUserByUsername(username);

                UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(
                        userDetails, null, Collections.emptyList());

                authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(httpServletRequest));
                SecurityContextHolder.getContext().setAuthentication(authentication);

            }

        }catch (Exception ex){
            logger.error("Could not set user authentication in security context", ex);
        }


        filterChain.doFilter(httpServletRequest, httpServletResponse);

    }



    private String getJWTFromRequest(HttpServletRequest request){
        String bearerToken = request.getHeader(SecurityConstants.HEADER_STRING);

        if(StringUtils.hasText(bearerToken)&&bearerToken.startsWith(SecurityConstants.TOKEN_PREFIX)){
            return bearerToken.substring(7, bearerToken.length());
        }

        return null;
    }

    public String getUsernameFromAuthenticationHeader(HttpServletRequest request) {
       String token = getJWTFromRequest(request);
       return tokenProvider.getUsernameFromJWT(token);
    }

}
