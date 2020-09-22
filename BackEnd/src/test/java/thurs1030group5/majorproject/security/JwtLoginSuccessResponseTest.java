package thurs1030group5.majorproject.security;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.context.SpringBootTest;
import static org.junit.jupiter.api.Assertions.assertEquals;
import thurs1030group5.majorproject.payload.JwtLoginSuccessResponse;

@SpringBootTest
@AutoConfigureTestDatabase
public class JwtLoginSuccessResponseTest {

    @Test
    public void whenToStringCalled_thenReturnTokenToString() {
        boolean testSuccess = true;
        String token = "token";
        JwtLoginSuccessResponse response = new JwtLoginSuccessResponse(true, token);
        String tokenResponse = "JwtLoginSuccessResponse{" +
                "success=" + testSuccess + ", token='" + token + '\'' +
                '}';
        assertEquals(tokenResponse, response.toString());
    }
}
