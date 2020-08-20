package thurs1030group5.majorproject.repository;

import org.springframework.data.repository.CrudRepository;
import thurs1030group5.majorproject.model.User;

import java.util.List;


public interface UserRepository extends CrudRepository<User, Long> {
    @Override
    Iterable<User> findAllById(Iterable<Long> iterable);

    User findByUsername(String username);
}
