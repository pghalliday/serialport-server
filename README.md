# serialport-server

Expose serial ports over HTTP.

## Usage

Create a JSON config file with the following contents

```json
{
  "logger": {
    "filename": "/path/to/log/file",
    "level": "info"
  },
  "capture": {
    "directory": "/path/to/capture/directory"
  },
  "serialPorts": {
    "name": {
      "device": "/path/to/device",
      "baudrate": 115200,
      "retryPeriod": 1000
    },
    ...
  }
}
```

The start the server with

```
serialport-server /path/to/config port
```

Capture files will be created at `/path/to/capture/directory/name.cap` and will be downloadable from `http://localhost:port/capturefiles/name.cap`.

Socket.IO sockets for each serial port will be exposed at `http://localhost:port/serialports/name`. See [socket.io-serialport](https://github.com/pghalliday/socket.io-serialport) for the interface.

An HTML interface implemented using [hterm](https://chromium.googlesource.com/apps/libapps/+/HEAD/hterm) will be browsable at `http://localhost:port/`.
