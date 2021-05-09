package pl.pilotto.server.controller;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.stereotype.Controller;
import pl.pilotto.server.model.Request;

@Controller
public class WebSocketController {

    @MessageMapping("/listener")
    public void handleRequest(Request request) {

    }

}
