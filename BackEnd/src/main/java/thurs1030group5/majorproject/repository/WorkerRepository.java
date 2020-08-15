package thurs1030group5.majorproject.repository;

import org.springframework.data.repository.CrudRepository;
import thurs1030group5.majorproject.model.users.Worker;

public interface WorkerRepository extends CrudRepository<Worker, Long> {
}
