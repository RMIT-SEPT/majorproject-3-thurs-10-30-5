package thurs1030group5.majorproject.repository;

import org.springframework.data.repository.CrudRepository;
import thurs1030group5.majorproject.model.Business;

import java.util.List;

public interface BusinessRepository extends CrudRepository<Business, Long> {
    Business findByName(String name);
    List<Business> findAll();

}
