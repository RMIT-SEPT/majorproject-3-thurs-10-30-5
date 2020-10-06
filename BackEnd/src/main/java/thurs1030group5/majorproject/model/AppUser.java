//CLASSNAME: AppUser
//DESCRIPTION: A class to represent a user account and their details

package thurs1030group5.majorproject.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Entity(name = "User")
public class AppUser implements UserDetails {

    //====================== COLUMNS ======================//
    @Id
    @Size(min = 3, message = "*Your user name must have at least 3 characters")
    @NotBlank(message = "*Please provide a user name")
    private String username;

    @NotBlank(message = "*Please provide your password")
    private String password;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "details_id", referencedColumnName = "id")
    private AppUserDetails userDetails;

    //Holds all bookings a customer/worker account has
    @OneToMany(targetEntity = Booking.class, mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Booking> bookings;

    //REQUIRED FOR SPRING SECURITY (SAYS WHETHER ACTIVE USER, CANNOT AUTHENTICATE IF FALSE)
    private Boolean enabled;

    //Many-to-one relationship with role entities, user can only have one role
    @ManyToOne()
    @JoinColumn(name = "role_id", referencedColumnName = "id", insertable = false, updatable = false)
    private Role role;
    //====================== COLUMNS ======================//

    //====================== GETTERS / SETTERS ======================//
    @Override
    @JsonIgnore
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setPassword(String password) {
        this.password = password;
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
    @JsonIgnore
    public AppUserDetails getUserDetails() {
        return userDetails;
    }

    public void setUserDetails(AppUserDetails userDetails) {
        this.userDetails = userDetails;
    }
    @JsonIgnore
    public List<Booking> getBookings() {
        return bookings;
    }

    public void setBookings(List<Booking> bookings) {
        this.bookings = bookings;
    }

    public Boolean getEnabled() {
        return enabled;
    }

    public void setEnabled(Boolean enabled) {
        this.enabled = enabled;
    }
    //====================== GETTERS / SETTERS ======================//

    //====================== SECURITY/LOGIN FUNCTIONS ======================//
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

    //Creates an authority for the user based on their role (ADMIN, WORKER OR CUSTOMER)
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        List<SimpleGrantedAuthority> authorityList = new ArrayList<>();
        authorityList.add(new SimpleGrantedAuthority(role.getRole()));
        return authorityList;
    }
    //====================== SECURITY/LOGIN FUNCTIONS ======================//
}
