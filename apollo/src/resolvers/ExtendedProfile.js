function disability(parent, args, context) {
  return context.prisma.extendedProfile({ email: parent.email }).disability();
};

function mobility(parent, args, context) {
  return context.prisma.extendedProfile({ email: parent.email }).mobility();
};

function militaryStatus(parent, args, context) {
  return context.prisma.extendedProfile({ email: parent.email }).militaryStatus();
};

module.exports = {
  disability,
  mobility,
  militaryStatus
}