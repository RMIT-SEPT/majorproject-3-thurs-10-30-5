package thurs1030group5.majorproject.payload;

//Class to be called when a user logs in
public class JwtLoginSuccessResponse {
//    Contains whether user sucessfully logged in
    private boolean success;
//    Contains a users token (as a string)
    private String token;

    public JwtLoginSuccessResponse(boolean success, String token) {
        this.success = success;
        this.token = token;
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    @Override
    public String toString() {
        return "JwtLoginSuccessResponse{" +
                "success=" + success +
                ", token='" + token + '\'' +
                '}';
    }
}