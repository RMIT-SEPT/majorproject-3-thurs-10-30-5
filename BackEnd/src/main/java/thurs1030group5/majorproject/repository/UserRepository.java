package thurs1030group5.majorproject.repository;

import org.springframework.data.repository.CrudRepository;
import thurs1030group5.majorproject.model.users.User;

import java.util.List;

/*
    NOT SURE IF  NEEDED, ONLY KEPT AS I'M UNSURE OF REPOSITORY POLYMORPHISM, NEED TO INVESTIGATE FURTHER BUT
    SHOULD BE SAFE TO DELETE
 */
public interface UserRepository extends CrudRepository<User, Long> {
    @Override
    Iterable<User> findAllById(Iterable<Long> iterable);

    List<User> findUserByUsername(String username);
}
