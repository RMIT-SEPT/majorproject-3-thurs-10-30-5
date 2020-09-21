//CLASSNAME: Business
//DESCRIPTION: Represents a business that has signed up for the app

package thurs1030group5.majorproject.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Business {

    //====================== COLUMNS ======================//
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

    //One-to-many relationship with worker entities, business can have many workers
    @OneToMany(targetEntity = Worker.class, mappedBy = "business", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Worker> worker = new ArrayList<>();

    //One-to-one relationship with user entities
    //Users can only own one business, and businesses can only have one owner
    @OneToOne()
    @JoinColumn(name = "owner_username", referencedColumnName = "username", insertable = false, updatable = false)
    private AppUser user;
    //====================== COLUMNS ======================//

    //====================== GETTERS / SETTERS ======================//
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    //====================== GETTERS / SETTERS ======================//
}
