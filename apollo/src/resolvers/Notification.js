function profile (parent, args, context) {
  return context.prisma.notification({ id: parent.id }).profile()
};

function announcement (parent, __, context) {
  return context.prisma.notification({ id: parent.id }).announcement()
}

function chatroom (parent, __, context) {
  return context.prisma.notification({ id: parent.id }).chatroom()
}

module.exports = {
  profile,
  announcement,
  chatroom
}
