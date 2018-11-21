'use strict'

export default (io) => {
  io.on('connection', (socket) => {
    socket.on('SOCKET__CONNECT', async (data) => {
      const { address } = data.details;
      socket.join(address);
      const users = await userModel.getAllUsers(address);
      socket.broadcast.to(address).emit('ACTION', {
        type: 'NEW_USER_CONNECTED',
        data
      });
      // setInterval
      setInterval(async () => {
        const temperature = await temperatureModel.readTemp();
        const humidity = await temperatureModel.readHum();
      socket.broadcast.to(address).emit('ACTION', {
        type: 'TEMPERATURE_UMIDITY',
        temperature: temperature,
        humidity: humidity
      });
      }, 1000)
    socket.on('SOCKET__DISCONNECT', async (address) => {
      const users = await userModel.getAllUsers(address);
      socket.broadcast.to(address).emit('ACTION', {
        type: 'USER_LIST_STATUS_CHANGE',
        data: users
      });
    })
  }
