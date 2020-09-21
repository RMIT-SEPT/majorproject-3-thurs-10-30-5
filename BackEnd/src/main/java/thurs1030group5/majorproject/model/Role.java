//CLASSNAME: Role
//DESCRIPTION: Contains all of the possible roles for a user (ADMIN, WORKER or CUSTOMER)

package thurs1030group5.majorproject.model;

import javax.persistence.*;

@Entity
public class Role {

    //====================== COLUMNS ======================//
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String role;
    //====================== COLUMNS ======================//

    //====================== GETTERS / SETTERS ======================//
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
    //====================== GETTERS / SETTERS ======================//
}
