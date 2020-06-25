function participants (parent, args, context) {
  return context.prisma.chatRoom({ id: parent.id }).participants()
};

function chats (parent, args, context) {
  return context.prisma.chatRoom({ id: parent.id }).chats()
};

function notifications (parent, args, context) {
  return context.prisma.chatRoom({ id: parent.id }).notifications()
};

module.exports = {
  participants,
  chats,
  notifications
}
