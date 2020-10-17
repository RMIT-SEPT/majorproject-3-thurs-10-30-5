package thurs1030group5.majorproject.repository;

import org.springframework.data.repository.CrudRepository;
import thurs1030group5.majorproject.model.AppUserDetails;

public interface UserDetailsRepository extends CrudRepository<AppUserDetails, Long> {

}
