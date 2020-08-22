package thurs1030group5.majorproject.repository;

import org.springframework.data.repository.CrudRepository;
import thurs1030group5.majorproject.model.User;


public interface UserRepository extends CrudRepository<User, Long> {
    User findByUsername(String username);
}
