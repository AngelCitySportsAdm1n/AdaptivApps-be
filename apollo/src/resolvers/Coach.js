function profile(parent, args, context) {
  return context.prisma.coach({ id: parent.id }).profile();
}

module.exports = {
  profile,
};
