//CLASSNAME: Booking
//DESCRIPTION: Booking table that connects appointment, user, and worker by their primary keys

package thurs1030group5.majorproject.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;

@Entity
public class Booking {

    //====================== COLUMNS ======================//
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "appointment_id", referencedColumnName = "id")
    private Appointment appointment;

    //Many-to-one relationship with user entities, bookings can only have one user
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "customer", referencedColumnName = "username")
    private AppUser user;

    //Many-to-one relationship with worker entities, bookings can only have one worker
    @ManyToOne()
    @JoinColumn(name = "worker_id", referencedColumnName = "id")
    private Worker worker;
    //====================== COLUMNS ======================//

    //====================== GETTERS / SETTERS ======================//
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Appointment getAppointment() {
        return appointment;
    }

    public void setAppointment(Appointment appointment) {
        this.appointment = appointment;
    }
    @JsonIgnore
    public AppUser getUser() {
        return user;
    }
    @JsonProperty
    public void setUser(AppUser user) {
        this.user = user;
    }

    public Worker getWorker() {
        return worker;
    }

    public void setWorker(Worker worker) {
        this.worker = worker;
    }
    //====================== GETTERS / SETTERS ======================//
}
