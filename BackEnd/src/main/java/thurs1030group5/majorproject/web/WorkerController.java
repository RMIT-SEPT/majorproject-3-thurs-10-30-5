package thurs1030group5.majorproject.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import thurs1030group5.majorproject.model.Business;
import thurs1030group5.majorproject.model.Worker;
import thurs1030group5.majorproject.services.UserService;
import thurs1030group5.majorproject.services.WorkerService;

import javax.validation.Valid;
import java.util.List;

@RestController
public class WorkerController {

    private final WorkerService workerService;

    @Autowired
    public WorkerController(WorkerService workerService) {
        this.workerService = workerService;

    }

//    Method to get all workers for a business
    @PostMapping("/api/public/worker")
    private List<Worker> getWorkers(@Valid @RequestBody Business business) {
        List<Worker> workers = workerService.getAllWorkers((business.getId()));
        for(Worker worker : workers) {
            worker.setFirstName(worker.getUser().getUserDetails().getFirstName());
            worker.setLastName(worker.getUser().getUserDetails().getLastName());
        }
        return workers;
    }

    @PostMapping("/api/public/worker/availability/day")
    private List<Worker> getWorkersByAvailableDay(@Valid @RequestBody String day){
        return workerService.getWorkersByAvailableDay(day);
    }

}
