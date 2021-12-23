import { Socket } from 'socket.io';

export const recursivelyStopLooser = (arr: any[], socket: Socket) => {
  const half = Math.ceil(arr.length / 2);
  const firstHalf = arr.splice(0, half);
  const secondHalf = arr.splice(-half);
  const timer = setTimeout(() => {
    firstHalf.map((s: any) => {
      socket.to(s.id).emit('stop', true);
      return s;
    });
    recursivelyStopLooser(secondHalf, socket);
  }, (firstHalf.length > 10 ? 10 : firstHalf.length) * 1000);
  if (firstHalf.length === 0) {
    clearTimeout(timer);
  }
};
