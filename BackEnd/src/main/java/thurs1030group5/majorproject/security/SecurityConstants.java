package thurs1030group5.majorproject.security;

public class SecurityConstants {

    public static final String SECRET = "MajorProjectSecretKey";
    public static final long EXPIRATION_TIME = 30_000; // 30 seconds
    public static final String TOKEN_PREFIX = "Bearer ";
    public static final String HEADER_STRING = "Authorisation";
    public static final String PUBLIC_URLS = "/api/public/**";
}