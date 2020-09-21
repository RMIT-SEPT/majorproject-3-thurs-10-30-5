package thurs1030group5.majorproject.model;


import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Set;




@Entity(name = "User")
public class AppUser implements UserDetails {
    @Id
    @Size(min = 3, message = "*Your user name must have at least 3 characters")
    @NotBlank(message = "*Please provide a user name")
    private String username;

    @NotBlank(message = "*Please provide your password")
    private String password;

    @NotBlank(message = "*Please provide your email")
    private String email;

    @OneToOne(mappedBy = "user")
    private Booking booking;

    //REQUIRED FOR SPRING SECURITY (SAYS WHETHER ACTIVE USER, CANNOT AUTHENTICATE IF FALSE)
    private Boolean enabled;

    @ManyToOne()
    @JoinColumn(name = "role_id", referencedColumnName = "id", insertable = false, updatable = false)
    private Role role;


    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }


    public void setUsername(String username) {
        this.username = username;
    }


    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    @Override
    public boolean isEnabled() {
        return enabled;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        List<SimpleGrantedAuthority> authorityList = new ArrayList<>();
        authorityList.add(new SimpleGrantedAuthority(role.getRole()));
        return authorityList;
    }
}
