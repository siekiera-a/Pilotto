package pl.pilotto.server.service.system;

import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class WindowsPowerManager implements PowerManager {

    private final Runtime runtime;

    public WindowsPowerManager() {
        runtime = Runtime.getRuntime();
    }

    @Override
    public void shutdown() {
        execCommand("shutdown -s -t 0");
    }

    @Override
    public void logout() {
        execCommand("shutdown -l");
    }

    @Override
    public void hibernate() {
        execCommand("shutdown -h");
    }

    @Override
    public void lock() {
        execCommand("rundll32 user32.dll, LockWorkStation");
    }

    private void execCommand(String command) {
        try {
            runtime.exec(command);
        } catch (IOException e) {
            System.err.println(e.getMessage());
        }
    }
}
