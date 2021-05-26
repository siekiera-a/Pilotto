package pl.pilotto.server.service.handler;

import org.springframework.stereotype.Service;
import pl.pilotto.server.service.media.MediaKeysService;
import pl.pilotto.server.service.system.PowerManager;

@Service
public class RequestsHandlerServiceImpl implements RequestsHandlerService {

    private final MediaKeysService mediaKeysService;
    private final PowerManager powerManager;

    public RequestsHandlerServiceImpl(MediaKeysService mediaKeysService, PowerManager powerManager) {
        this.mediaKeysService = mediaKeysService;
        this.powerManager = powerManager;
    }

    @Override
    public void processRequest(String request) {
        if ("PLAY_PAUSE".equals(request)) {
            mediaKeysService.playPause();
        } else if ("NEXT".equals(request)) {
            mediaKeysService.next();
        } else if ("PREV".equals(request)) {
            mediaKeysService.prev();
        } else if ("VOLUME_UP".equals(request)) {
            mediaKeysService.volumeUp();
        } else if ("VOLUME_DOWN".equals(request)) {
            mediaKeysService.volumeDown();
        } else if ("HIBERNATE".equals(request)) {
            powerManager.hibernate();
        } else if ("LOG_OUT".equals(request)) {
            powerManager.logout();
        } else if ("SHUTDOWN".equals(request)) {
            powerManager.shutdown();
        } else if ("LOCK".equals(request)) {
            powerManager.lock();
        }
    }

}
