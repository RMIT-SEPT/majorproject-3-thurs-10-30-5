package thurs1030group5.majorproject.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import thurs1030group5.majorproject.model.Availability;
import thurs1030group5.majorproject.model.Worker;
import thurs1030group5.majorproject.repository.AvailabilityRepository;
import thurs1030group5.majorproject.repository.WorkerRepository;

import java.util.ArrayList;
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

    public Worker getWorker(Long workerId) {
        return workerRepository.findWorkerById(workerId);
    }

//Service to get all workers related to a business
    public List<Worker> getAllWorkers(Long businessId) {
        return workerRepository.findAllByBusiness_Id(businessId);
    }

    public List<Worker> getWorkersByAvailableDay(String day){
        List<Worker> workers = workerRepository.findAll();
        List<Worker> availableWorkers = new ArrayList<Worker>();
        String upperDay = day.toUpperCase();

        for(Worker worker : workers){
            if(worker != null) {
                Availability availability = worker.getAvailability();

                if (upperDay.contains("MONDAY")) {
                    if (availability.isMonday()) {
                        availableWorkers.add(worker);
                    }
                } else if (upperDay.contains("TUESDAY")) {
                    if (availability.isTuesday()) {
                        availableWorkers.add(worker);
                    }
                } else if (upperDay.contains("WEDNESDAY")) {
                    if (availability.isWednesday()) {
                        availableWorkers.add(worker);
                    }
                } else if (upperDay.contains("THURSDAY")) {
                    if (availability.isThursday()) {
                        availableWorkers.add(worker);
                    }
                } else if (upperDay.contains("FRIDAY")) {
                    if (availability.isFriday()) {
                        availableWorkers.add(worker);
                    }
                } else if (upperDay.contains("SATURDAY")) {
                    if (availability.isSaturday()) {
                        availableWorkers.add(worker);
                    }
                } else if (upperDay.contains("SUNDAY")) {
                    if (availability.isSunday()) {
                        availableWorkers.add(worker);
                    }
                }
            }
        }


        return availableWorkers;
    }
}

