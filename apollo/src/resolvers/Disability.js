function detailedDisability(parent, args, context) {
  return context.prisma.disability({ id: parent.id }).detailedDisability();
}

module.exports = {
  profile,
};
