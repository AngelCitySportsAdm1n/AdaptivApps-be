function disability(parent, args, context) {
  return context.prisma.extendedProfile({ id: parent.id }).disability();
}

module.exports = {
  disability,
};
