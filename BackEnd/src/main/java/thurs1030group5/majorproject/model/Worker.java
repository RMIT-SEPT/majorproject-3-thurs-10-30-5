//CLASSNAME: Worker
//DESCRIPTION: Represents a worker employed by a business

package thurs1030group5.majorproject.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.List;

@Entity
public class Worker {

    //====================== COLUMNS ======================//
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    //Many-to-one relationship with business entities, worker can only work for one business
    @ManyToOne()
    @JoinColumn(name = "business_id", referencedColumnName = "id", insertable = false, updatable = false)
    private Business business;

    //One-to-one relationship with availability entities
    //Users can only have one availability, and availabilities can only be owned by one user
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "availability_id", referencedColumnName = "id")
    private Availability availability;

    //List of all bookings made with a worker
    @OneToMany(targetEntity = Booking.class, mappedBy = "worker", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Booking> bookings;

    //One-tone relationship with AppUser as worker's account
    //Worker's can only have one account and users can only have one worker
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "account", referencedColumnName = "username")
    private AppUser user;

    @Transient
    private String firstName;

    @Transient
    private String lastName;
    //====================== COLUMNS ======================//

    //====================== GETTERS / SETTERS ======================//
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setBusiness(Business business) {
        this.business = business;
    }

    public Long getAvailabilityId() {
        return availability.getId();
    }
    @JsonIgnore
    public Availability getAvailability() {
        return availability;
    }

    public void setAvailability(Availability availability) {
        this.availability = availability;
    }
    @JsonIgnore
    public AppUser getUser() {
        return user;
    }

    public void setUser(AppUser user) {
        this.user = user;
    }
    @JsonInclude
    @Transient
    public String getFirstName() {
        return firstName;
    }
    @Transient
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
    @JsonInclude
    @Transient
    public String getLastName() {
        return lastName;
    }
    @Transient
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
    //====================== GETTERS / SETTERS ======================//
}
