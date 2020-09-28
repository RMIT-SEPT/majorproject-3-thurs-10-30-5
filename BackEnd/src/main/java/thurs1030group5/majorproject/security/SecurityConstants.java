package thurs1030group5.majorproject.security;

public class SecurityConstants {
//    Secret key for JWT
    public static final String SECRET = "MajorProjectSecretKey";
//    Time until token expires
    public static final long EXPIRATION_TIME = 3600000; // One Hour
//    Prefix of token
    public static final String TOKEN_PREFIX = "Bearer ";
//    Header for token
    public static final String HEADER_STRING = "Authorization";
//    String for URLS that are accessible while not being logged in
    public static final String PUBLIC_URLS = "/api/public/**";
}