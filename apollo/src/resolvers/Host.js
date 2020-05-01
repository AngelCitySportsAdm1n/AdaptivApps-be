function profile(parent, args, context) {
  return context.prisma.host({ id: parent.id }).profile();
}

module.exports = {
  profile,
};
