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
import thurs1030group5.majorproject.repository.BusinessRepository;
import static org.junit.jupiter.api.Assertions.assertEquals;
import java.util.Arrays;


@SpringBootTest
@AutoConfigureTestDatabase
public class BusinessServiceTest {

    @Autowired
    private BusinessService businessService;

    @MockBean
    private BusinessRepository businessRepository;

    Business business1;
    @BeforeEach
    public void setUp() {
        business1 = new Business();
        business1.setId((long) 1);
        business1.setName("Business 1");
        Business business2 = new Business();
        business2.setId((long) 2);
        business2.setName("Business 2");

        Mockito.when(businessRepository.findAll()).thenReturn(Arrays.asList(business1, business2));

    }


    @Test
    public void whenValidBusinessId_thenBusinessShouldBeFound() {
        long id = 1;
        assertEquals(id, businessService.getAllBusinesses().get(0).getId());
    }

    @Test
    public void whenGetAllBusiness_thenAllBusinessesAreFound() {
        int size = 2;
        assertEquals(size, businessService.getAllBusinesses().size());
    }

    @Test
    public void whenGetBusinessFromWorkerId_thenBusinessShouldBeFound() {
        long id = 1;
        Worker worker = new Worker();
        worker.setId(id);
        Mockito.when(businessRepository.findBusinessByWorker_Id(id)).thenReturn(business1);
        assertEquals(businessService.getBusinessFromWorkerId(id), business1);

    }
}
