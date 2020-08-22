package thurs1030group5.majorproject.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
public class WebSecurityConfiguration extends WebSecurityConfigurerAdapter {


//    USED TO CONFIGURE WHICH PAGES CAN BE ACCESSED
    @Override
    public void configure(HttpSecurity http) throws Exception {
//  TODO   SET TO ACCEPT ALL PAGES AT THE MOMENT, WILL NEED TO CHANGE WHEN HOOKED UP TO FRONT END
        http.csrf().disable().authorizeRequests()
                .antMatchers("/").permitAll();
    }
}
