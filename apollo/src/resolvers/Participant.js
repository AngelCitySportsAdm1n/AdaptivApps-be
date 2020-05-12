function activityProfile(parent, args, context) {
  return context.prisma.participant({ id: parent.id }).activityProfile();
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
  activityProfile,
  eventProfile,
  role,
  activity,
  event,
};
