import ClassRoom from './0-classroom';

export default function initializeRooms(){ // eslint-disable-line no-unused-vars
    const o1 = new ClassRoom(19);
    const o2 = new ClassRoom(20);
    const o3 = new ClassRoom(34);
    return [o1, o2, o3];
}
