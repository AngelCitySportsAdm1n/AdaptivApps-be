function sportsParticipation(parent, args, context) {
  return context.prisma
    .demographicProfile({ email: parent.email })
    .sportsParticipation();
}

module.exports = {
  sportsParticipation,
};
