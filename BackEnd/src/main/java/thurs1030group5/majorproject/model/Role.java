package thurs1030group5.majorproject.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

//Contains all of the possible roles for a user (ADMIN, WORKER or CUSTOMER)
@Entity
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    private String role;
}
