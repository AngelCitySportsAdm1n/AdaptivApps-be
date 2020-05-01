function activities(parent, args, context) {
  return context.prisma.profile({ email: parent.email }).activities();
}

function events(parent, args, context) {
  return context.prisma.profile({ email: parent.email }).events();
}
function extProfile(parent, args, context) {
  return context.prisma.profile({ email: parent.email }).extProfile();
}

function chats(parent, args, context) {
  return context.prisma.profile({ email: parent.email }).chats();
}

function receivedChats(parent, args, context) {
  return context.prisma.profile({ email: parent.email }).receivedChats();
}

function chatRooms(parent, args, context) {
  return context.prisma.profile({ email: parent.email }).chatRooms();
}

module.exports = {
  activities,
  events,
  extProfile,
  chats,
  receivedChats,
  chatRooms,
};
