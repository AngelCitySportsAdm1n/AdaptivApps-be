// @ts-check

/**
 * @param {{ data: import('../generated/prisma-client').ProfileCreateInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { Promise }
 */
const createProfile = async (_, args, context) => {
  // Creates a profile based on args data
  const profile = context.prisma.createProfile(args.data);
  // This next line ensures user needs to be logged in, else return error
  const user = await context.user;

  return profile;
};

/**
 * @param {{ data: import('../generated/prisma-client').ProfileUpdateInput, where: import('../generated/prisma-client').ProfileWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { Promise }
 */
const updateProfile = async (_, args, context) => {
  console.log('updateProfile.args: %j', args);
  // Updates a profile with args passed in
  const profile = context.prisma.updateProfile(args);
  // This next line ensures user needs to be logged in, else return error
  const user = await context.user;

  return profile;
};

/**
 * @param {{ where: import('../generated/prisma-client').ProfileWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { Promise }
 */
const deleteProfile = async (_, args, context) => {
  // Deletes a profile with args passed in
  const profile = context.prisma.deleteProfile(args.where);
  // This next line ensures user needs to be logged in, else return error
  const user = await context.user;

  return profile;
};

module.exports = {
  createProfile,
  updateProfile,
  deleteProfile,
};