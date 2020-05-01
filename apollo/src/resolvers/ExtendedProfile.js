function disability(parent, args, context) {
  return context.prisma.extendedProfile({ email: parent.email }).disability();
}

function mobility(parent, args, context) {
  return context.prisma.extendedProfile({ email: parent.email }).mobility();
}

function militaryBranch(parent, args, context) {
  return context.prisma
    .extendedProfile({ email: parent.email })
    .militaryBranch();
}

module.exports = {
  disability,
  mobility,
  militaryBranch,
};
