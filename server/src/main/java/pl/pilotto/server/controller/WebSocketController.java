package pl.pilotto.server.controller;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.stereotype.Controller;
import pl.pilotto.server.model.Request;
import pl.pilotto.server.service.handler.RequestsHandlerService;

@Controller
public class WebSocketController {

    private final RequestsHandlerService requestsHandlerService;

    public WebSocketController(RequestsHandlerService requestsHandlerService) {
        this.requestsHandlerService = requestsHandlerService;
    }

    @MessageMapping("/listener")
    public void handleRequest(Request request) {
        requestsHandlerService.processRequest(request.getCommand());
    }

}
