package thurs1030group5.majorproject.repository;

import org.springframework.data.repository.CrudRepository;
import thurs1030group5.majorproject.model.AppUser;


public interface UserRepository extends CrudRepository<AppUser, Long> {
    AppUser findByUsername(String username);
}
