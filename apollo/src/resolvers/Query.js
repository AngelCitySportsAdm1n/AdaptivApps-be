// @ts-check

const { AuthenticationError } = require('apollo-server');

// Queries must be defined to return fields of the same type
// See the Query field in the type definitions for examples

// --------------------------------------------------------------------- Profile Query ---------------------------------------------------------------------

/**
 * @param {{ where: import('../generated/prisma-client').ProfileWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const profile = async (_, args, context) => {
  const currentUser = context.user;
  if(typeof currentUser === 'undefined') {
    context.logger.error("API called by unauthenticated user")
    throw new AuthenticationError("Must be authenticated")
  }
  context.logger.debug("Query.profile: %O", currentUser)

  // Finding the profile based on args specification
  const profile = await context.prisma.profile(args.where);

  return profile;
};

/**
 * @param {{ where: import('../generated/prisma-client').ProfileWhereInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const profiles = async (_, args, context) => {
  const currentUser = context.user;
  if(typeof currentUser === 'undefined') {
    context.logger.error("API called by unauthenticated user")
    throw new AuthenticationError("Must be authenticated")
  }
  context.logger.debug("Query.profiles: %O", currentUser)

  // Returns all profiles
  const profile = await context.prisma.profiles(args);

  return profile;
};

// --------------------------------------------------------------------- Event Query ---------------------------------------------------------------------

/**
 * @param {{ where: import('../generated/prisma-client').EventWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const event = async (_, args, context) => {
  const currentUser = context.user;
  if(typeof currentUser === 'undefined') {
    context.logger.error("API called by unauthenticated user")
    throw new AuthenticationError("Must be authenticated")
  }
  context.logger.debug("Query.event: %O", currentUser)

  // Returns all profiles
  const event = await context.prisma.event(args.where);
  // This next line ensures user needs to be logged in, else return error
  const user = await context.user;

  return event;
};

/**
 * @param {{ where: import('../generated/prisma-client').EventWhereInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const events = async (_, args, context) => {
  const currentUser = context.user;
  if(typeof currentUser === 'undefined') {
    context.logger.error("API called by unauthenticated user")
    throw new AuthenticationError("Must be authenticated")
  }
  context.logger.debug("Query.events: %O", currentUser)

  // Returns all profiles
  const event = await context.prisma.events(args);

  return event;
};

// --------------------------------------------------------------------- Activity Query ---------------------------------------------------------------------

/**
 * @param {{ where: import('../generated/prisma-client').ActivityWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const activity = async (_, args, context) => {
  const currentUser = context.user;
  if(typeof currentUser === 'undefined') {
    context.logger.error("API called by unauthenticated user")
    throw new AuthenticationError("Must be authenticated")
  }
  context.logger.debug("Query.activity: %O", currentUser)

  // Returns all profiles
  const activity = await context.prisma.activity(args.where);

  return activity;
};

/**
 * @param {{ where: import('../generated/prisma-client').ActivityWhereInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const activities = async (_, args, context) => {
  const currentUser = context.user;
  if(typeof currentUser === 'undefined') {
    context.logger.error("API called by unauthenticated user")
    throw new AuthenticationError("Must be authenticated")
  }
  context.logger.debug("Query.activities: %O", currentUser)

  // Returns all profiles
  const activity = await context.prisma.activities(args);

  return activity;
};

module.exports = {
  profile,
  profiles,
  event,
  events,
  activity,
  activities,
};

