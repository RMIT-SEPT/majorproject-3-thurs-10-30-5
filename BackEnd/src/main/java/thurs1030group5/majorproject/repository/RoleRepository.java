package thurs1030group5.majorproject.repository;

import org.springframework.data.repository.CrudRepository;
import thurs1030group5.majorproject.model.Role;
import thurs1030group5.majorproject.model.User;

import java.util.List;


public interface RoleRepository extends CrudRepository<Role, Long> {
    Role findByRole(String role);
}
