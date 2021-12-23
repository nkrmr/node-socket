"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recursivelyStopLooser = void 0;
const recursivelyStopLooser = (arr, socket) => {
    const half = Math.ceil(arr.length / 2);
    const firstHalf = arr.splice(0, half);
    const secondHalf = arr.splice(-half);
    const timer = setTimeout(() => {
        firstHalf.map((s) => {
            socket.to(s.id).emit('stop', true);
            return s;
        });
        exports.recursivelyStopLooser(secondHalf, socket);
    }, (firstHalf.length > 10 ? 10 : firstHalf.length) * 1000);
    if (firstHalf.length === 0) {
        clearTimeout(timer);
    }
};
exports.recursivelyStopLooser = recursivelyStopLooser;
