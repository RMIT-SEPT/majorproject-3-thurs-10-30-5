package thurs1030group5.majorproject.model;

import com.fasterxml.jackson.databind.util.ArrayBuilders;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Business {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

    @OneToMany(targetEntity = Worker.class, mappedBy = "business", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Worker> worker = new ArrayList<>();

    @ManyToOne()
    @JoinColumn(name = "owner_username", referencedColumnName = "username", insertable = false, updatable = false)
    private User user;

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
}
