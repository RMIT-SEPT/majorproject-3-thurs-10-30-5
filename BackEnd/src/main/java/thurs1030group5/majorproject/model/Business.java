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
    private int ownerId;

    @OneToMany(targetEntity = Worker.class, mappedBy = "business", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Worker> worker = new ArrayList<>();

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

    public int getOwnerId() {
        return ownerId;
    }

    public void setOwnerId(int ownerId) {
        this.ownerId = ownerId;
    }
}
