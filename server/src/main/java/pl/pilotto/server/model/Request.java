package pl.pilotto.server.model;

import java.io.Serializable;

public class Request implements Serializable {

    private String command;

    public Request() {
    }

    public Request(String command) {
        this.command = command;
    }

    public String getCommand() {
        return command;
    }

    public void setCommand(String command) {
        this.command = command;
    }
}
