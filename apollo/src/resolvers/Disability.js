function detailedDisabilities(parent, args, context) {
  return context.prisma.disability({ id: parent.id }).detailedDisabilities();
}

module.exports = {
  detailedDisabilities,
};
