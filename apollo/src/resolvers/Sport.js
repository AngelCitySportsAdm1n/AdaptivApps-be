function participant(parent, args, context) {
  return context.prisma.sport({ id: parent.id }).participant();
}
function sport(parent, args, context) {
  return context.prisma.sport({ id: parent.id }).sport();
}

module.exports = {
  participant,
  sport,
};
