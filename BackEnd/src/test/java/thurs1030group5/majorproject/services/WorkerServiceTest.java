package thurs1030group5.majorproject.services;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import thurs1030group5.majorproject.model.Business;
import thurs1030group5.majorproject.model.Worker;
import thurs1030group5.majorproject.repository.WorkerRepository;

import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
@AutoConfigureTestDatabase
public class WorkerServiceTest {

    @Autowired
    private WorkerService workerService;

    @MockBean
    private WorkerRepository workerRepository;

    @BeforeEach
    public void setUp() {
        Business business = new Business();
        business.setId((long) 1);
        business.setName("TestBusiness");

        Worker worker1 = new Worker();
        worker1.setId((long) 1);
        worker1.setFirstName("FirstName1");
        worker1.setLastName("LastName1");
        worker1.setAvailability(null);
        worker1.setBusiness(business);

        Worker worker2 = new Worker();
        worker2.setId((long) 2);
        worker2.setFirstName("FirstName2");
        worker2.setLastName("LastName2");
        worker2.setAvailability(null);
        worker2.setBusiness(business);

        Mockito.when(workerRepository.findAllByBusiness_Id((long) 1)).thenReturn(Arrays.asList(worker1, worker2));
    }

    @Test
    public void getAllWorkersByBusinessId() {
        long businessId = 1;
        int expectedSize = 2;
        int actualSize = workerRepository.findAllByBusiness_Id(businessId).size();
        assertEquals(expectedSize, actualSize);
    }
}
