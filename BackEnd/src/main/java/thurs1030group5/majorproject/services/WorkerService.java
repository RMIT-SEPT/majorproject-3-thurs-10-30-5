package thurs1030group5.majorproject.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import thurs1030group5.majorproject.model.Worker;
import thurs1030group5.majorproject.repository.AvailabilityRepository;
import thurs1030group5.majorproject.repository.WorkerRepository;

import java.util.List;

@Service
public class WorkerService {

    private final WorkerRepository workerRepository;
    private final AvailabilityRepository availabilityRepository;

    @Autowired
    public WorkerService(WorkerRepository workerRepository, AvailabilityRepository availabilityRepository) {
        this.workerRepository = workerRepository;
        this.availabilityRepository = availabilityRepository;


    }
//Service to get all workers related to a business
    public List<Worker> getAllWorkers(Long businessId) {
        return workerRepository.findAllByBusiness_Id(businessId);
    }
}
