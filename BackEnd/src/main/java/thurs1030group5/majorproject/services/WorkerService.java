package thurs1030group5.majorproject.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import thurs1030group5.majorproject.model.users.Worker;
import thurs1030group5.majorproject.repository.WorkerRepository;

@Service
public class WorkerService {
    @Autowired
    private WorkerRepository workerRepository;

    public Worker saveOrUpdateWorker(Worker worker) {

        return workerRepository.save(worker);
    }
}
