// @ts-check

// Queries must be defined to return fields of the same type
// See the Query field in the type definitions for examples

/**
 * @param {{ where: import('../generated/prisma-client').ProfileWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { Promise }
 */
const profile = async (_, args, context) => {
  // Finding the profile based on args specification
  const profile = await context.prisma.profile(args.where);
<<<<<<< HEAD
  const user = await context.user;
  console.log("Query.profile: %j", profile)
  
=======
  // This next line ensures user needs to be logged in, else return error
  const user = await context.user;

>>>>>>> 7d77b5790922ade0e5e04a1222a6d5d484e207ba
  return profile;
};

/**
 * @param {{ where: import('../generated/prisma-client').ProfileWhereInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { Promise }
 */
const profiles = async (_, args, context) => {
  // Returns all profiles
  const profile = await context.prisma.profiles(args);
  // This next line ensures user needs to be logged in, else return error
  const user = await context.user;

  return profile;
};

module.exports = {
  profile,
  profiles,
};
