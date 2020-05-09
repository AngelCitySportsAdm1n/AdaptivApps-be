function profile(parent, args, context) {
  return context.prisma.participant({ id: parent.id }).profile();
}
function eventProfile(parent, args, context) {
  return context.prisma.participant({ id: parent.id }).eventProfile();
}
function role(parent, args, context) {
  return context.prisma.participant({ id: parent.id }).role();
}
function activity(parent, args, context) {
  return context.prisma.participant({ id: parent.id }).activity();
}
function event(parent, args, context) {
  return context.prisma.participant({ id: parent.id }).event();
}

module.exports = {
  profile,
  eventProfile,
  role,
  activity,
  event
};
