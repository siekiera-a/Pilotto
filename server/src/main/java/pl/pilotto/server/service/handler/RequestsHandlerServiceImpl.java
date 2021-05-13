package pl.pilotto.server.service.handler;

import org.springframework.stereotype.Service;
import pl.pilotto.server.service.media.MediaKeysService;

@Service
public class RequestsHandlerServiceImpl implements RequestsHandlerService {

    private final MediaKeysService mediaKeysService;

    public RequestsHandlerServiceImpl(MediaKeysService mediaKeysService) {
        this.mediaKeysService = mediaKeysService;
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
        }
    }

}
