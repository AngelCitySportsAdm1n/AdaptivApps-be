function activities(parent, args, context) {
  return context.prisma.event({ id: parent.id }).activities();
}

function attendees(parent, args, context) {
  return context.prisma.event({ id: parent.id }).attendees();
}
function host(parent, args, context) {
  return context.prisma.event({ id: parent.id }).host();
}
function coaches(parent, args, context) {
  return context.prisma.event({ id: parent.id }).coaches();
}

module.exports = {
  activities,
  attendees,
  host,
  coaches
};
