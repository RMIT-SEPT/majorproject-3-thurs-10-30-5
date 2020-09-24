package thurs1030group5.majorproject.repository;

import org.springframework.data.repository.CrudRepository;
import thurs1030group5.majorproject.model.Worker;

import java.util.List;

public interface WorkerRepository extends CrudRepository<Worker, Long> {
    List<Worker> findAllByBusiness_Id(Long business_id);
}
