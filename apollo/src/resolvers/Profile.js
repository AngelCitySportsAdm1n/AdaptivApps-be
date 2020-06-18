function activities(parent, args, context) {
  return context.prisma.profile({ email: parent.email }).activities();
}

function events(parent, args, context) {
  return context.prisma.profile({ email: parent.email }).events();
}
function extProfile(parent, args, context) {
  return context.prisma.profile({ email: parent.email }).extProfile();
}
function demographicProfile(parent, args, context) {
  return context.prisma.profile({ email: parent.email }).demographicProfile();
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

function announcements(parent, args, context) {
  return context.prisma.profile({ email: parent.email }).announcements();
}

function notifications(parent, args, context) {
  return context.prisma.profile({ email: parent.email }).notifications();
}

function newsFeedPost(parent, args, context) {
  return context.prisma.profile({ email: parent.email }).newsFeedPost();
}

function newsFeedComment(parent, args, context) {
  return context.prisma.profile({ email: parent.email }).newsFeedComment();
}

function newsFeedLikes(parent, args, context) {
  return context.prisma.profile({ email: parent.email }).newsFeedLikes();
}

module.exports = {
  activities,
  events,
  extProfile,
  demographicProfile,
  chats,
  receivedChats,
  chatRooms,
  announcements,
  notifications,
  newsFeedPost,
  newsFeedComment,
  newsFeedLikes
};
