package pl.pilotto.server.service.media;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.nio.file.Path;
import java.nio.file.Paths;

@Service
public class WindowsMediaKeysService implements MediaKeysService {

    public WindowsMediaKeysService(
        @Value("${application.native.mediakeys-path:MediaKeys.dll}") String path) {
        Path projectDir = Paths.get(System.getProperty("user.dir"));
        Path dllRelativePath = Paths.get(path);
        Path dllPath = Paths.get(projectDir.toString(), dllRelativePath.toString());

        System.load(dllPath.toString());
    }

    @Override
    public native void playPause();

    @Override
    public native void next();

    @Override
    public native void prev();

    @Override
    public native void volumeUp();

    @Override
    public native void volumeDown();

}
