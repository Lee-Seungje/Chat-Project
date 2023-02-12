import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import { instrument } from '@socket.io/admin-ui';

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('build'));

app.get('/', function (req: any, res: any) {
    res.sendFile(__dirname + '/build/index.html');
});

const handleListen = () => console.log('Listening');

const httpServer = http.createServer(app);
const wsServer = new Server(httpServer, {
    cors: {
        origin: ['https://admin.socket.io'],
        credentials: true,
    },
});
instrument(wsServer, {
    auth: false,
});

function publicRooms() {
    const {
        sockets: {
            adapter: { sids, rooms },
        },
    } = wsServer;
    const publicRooms: any = [];
    rooms.forEach((_: any, key: any) => {
        if (sids.get(key) === undefined) {
            publicRooms.push(key);
        }
    });
    return publicRooms;
}

const countRoom = (roomName: any) => {
    return wsServer.sockets.adapter.rooms.get(roomName)?.size;
};

wsServer.on('connection', (socket: any) => {
    wsServer.sockets.emit('room_change', publicRooms());
    let rm = '';
    socket['nickname'] = 'Anon';
    socket.on('enter_room', (roomName: any, done: any) => {
        rm = roomName;
        socket.join(roomName);
        done();
        wsServer.sockets
            .to(roomName)
            .emit('welcome', socket.nickname, countRoom(roomName));
        wsServer.sockets.emit('room_change', publicRooms());
        console.log(roomName, socket.nickname);
    });
    socket.on('disconnecting', () => {
        socket.rooms.forEach(
            (room: any) =>
                socket.to(room).emit('bye', socket.nickname, countRoom(room)) // 프론트에서 -1 해줘야함
        );
    });
    socket.on('disconnect', () => {
        wsServer.sockets.emit('room_change', publicRooms());
    });
    socket.on('new_message', (msg: any, room: any, done: any) => {
        socket.to(room).emit('new_message', socket.nickname + ': ' + msg);
        done();
    });
    socket.on('nickname', (nickname: any) => {
        socket['nickname'] = nickname;
    });
});

httpServer.listen(PORT, handleListen);
