function disability(parent, args, context) {
  return context.prisma.extendedProfile({ email: parent.email }).disability();
}

module.exports = {
  disability,
};
