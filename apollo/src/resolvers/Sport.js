function participant(parent, args, context) {
  return context.prisma.sport({ id: parent.id }).participant();
}
function sportMeta(parent, args, context) {
  return context.prisma.sport({ id: parent.id }).sportMeta();
}

module.exports = {
  participant,
  sportMeta,
};
