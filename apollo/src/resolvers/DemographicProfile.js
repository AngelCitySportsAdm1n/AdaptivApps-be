function sportsParticipation(parent, args, context) {
  return context.prisma
    .demographicProfile({ id: parent.id })
    .sportsParticipation();
}

module.exports = {
  sportsParticipation,
};
