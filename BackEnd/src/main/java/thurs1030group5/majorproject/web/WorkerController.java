package thurs1030group5.majorproject.web;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import thurs1030group5.majorproject.model.Business;
import thurs1030group5.majorproject.model.Worker;
import thurs1030group5.majorproject.services.WorkerService;

import javax.validation.Valid;
import java.util.List;

@RestController
public class WorkerController {

    private final WorkerService workerService;

    public WorkerController(WorkerService workerService) {
        this.workerService = workerService;
    }

//    Method to get all workers for a business
    @PostMapping("/api/public/worker")
    private List<Worker> getWorkers(@Valid @RequestBody Business business) {
        return workerService.getAllWorkers((business.getId()));
    }

    @PostMapping("/api/public/worker/availability/day")
    private List<Worker> getWorkersByAvailableDay(@Valid @RequestBody String day){
        return workerService.getWorkersByAvailableDay(day);
    }

}
