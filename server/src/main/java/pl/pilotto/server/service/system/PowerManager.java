package pl.pilotto.server.service.system;

public interface PowerManager {

    void shutdown();

    void logout();

    void hibernate();

    void lock();

}
