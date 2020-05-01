function event(parent, args, context) {
  return context.prisma.activity({ id: parent.id }).event();
}
function participants(parent, args, context) {
  return context.prisma.activity({ id: parent.id }).participants();
}
function coaches(parent, args, context) {
  return context.prisma.activity({ id: parent.id }).coaches();
}

module.exports = {
  event,
  participants,
  coaches,
};
