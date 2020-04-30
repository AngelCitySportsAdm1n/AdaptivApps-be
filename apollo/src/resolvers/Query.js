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
  const currentUser = await context.user;
  if (typeof currentUser === 'undefined') {
    context.logger.error('API called by unauthenticated user');
    throw new AuthenticationError('Must be authenticated');
  }
  context.logger.debug('Query.profile: %O', currentUser);

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
  const currentUser = await context.user;
  if (typeof currentUser === 'undefined') {
    context.logger.error('API called by unauthenticated user');
    throw new AuthenticationError('Must be authenticated');
  }
  context.logger.debug('Query.profiles: %O', currentUser);

  // Returns all profiles
  const profile = await context.prisma.profiles(args);

  return profile;
};

// --------------------------------------------------------------------- Extended Profile Query ---------------------------------------------------------------------

/**
 * @param {{ where: import('../generated/prisma-client').ExtendedProfileWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const extendedProfile = async (_, args, context) => {
  const currentUser = await context.user;
  if (typeof currentUser === 'undefined') {
    context.logger.error('API called by unauthenticated user');
    throw new AuthenticationError('Must be authenticated');
  }
  context.logger.debug('Query.extendedProfile: %O', currentUser);

  // Finding an extendedProfile based on args specification
  const extendedProfile = await context.prisma.extendedProfile(args.where);
  return extendedProfile;
};

/**
 * @param {{ where: import('../generated/prisma-client').ExtendedProfileWhereInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const extendedProfiles = async (_, args, context) => {
  const currentUser = await context.user;
  if (typeof currentUser === 'undefined') {
    context.logger.error('API called by unauthenticated user');
    throw new AuthenticationError('Must be authenticated');
  }
  context.logger.debug('Query.extendedProfiles: %O', currentUser);

  // Finding an extendedProfile based on args specification
  const extendedProfile = await context.prisma.extendedProfiles(args);
  return extendedProfile;
};

// --------------------------------------------------------------------- Mobility Status Query ---------------------------------------------------------------------

/**
 * @param {{ where: import('../generated/prisma-client').MobilityStatusWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const mobilityStatus = async (_, args, context) => {
  const currentUser = await context.user;
  if (typeof currentUser === 'undefined') {
    context.logger.error('API called by unauthenticated user');
    throw new AuthenticationError('Must be authenticated');
  }
  context.logger.debug('Query.mobilityStatus: %O', currentUser);

  // Finding an Mobility Status based on args specification
  const mobilityStatus = await context.prisma.mobilityStatus(args.where);
  return mobilityStatus;
};

/**
 * @param {{ where: import('../generated/prisma-client').MobilityStatusWhereInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const mobilityStatuses = async (_, args, context) => {
  const currentUser = await context.user;
  if (typeof currentUser === 'undefined') {
    context.logger.error('API called by unauthenticated user');
    throw new AuthenticationError('Must be authenticated');
  }
  context.logger.debug('Query.mobilityStatuses: %O', currentUser);

  // Finding a Mobility Status based on args specification
  const mobilityStatus = await context.prisma.mobilityStatuses(args);
  return mobilityStatus;
};

// --------------------------------------------------------------------- Military Branch Query ---------------------------------------------------------------------

/**
 * @param {{ where: import('../generated/prisma-client').MilitaryBranchWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const militaryBranch = async (_, args, context) => {
  const currentUser = await context.user;
  if (typeof currentUser === 'undefined') {
    context.logger.error('API called by unauthenticated user');
    throw new AuthenticationError('Must be authenticated');
  }
  context.logger.debug('Query.militaryBranch: %O', currentUser);

  // Finding a Military Branch based on args specification
  const militaryBranch = await context.prisma.militaryBranch(args.where);
  return militaryBranch;
};

/**
 * @param {{ where: import('../generated/prisma-client').MilitaryBranchWhereInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const militaryBranches = async (_, args, context) => {
  const currentUser = await context.user;
  if (typeof currentUser === 'undefined') {
    context.logger.error('API called by unauthenticated user');
    throw new AuthenticationError('Must be authenticated');
  }
  context.logger.debug('Query.militaryBranches: %O', currentUser);

  // Finding a militaryBranch based on args specification
  const militaryBranch = await context.prisma.militaryBranches(args);
  return militaryBranch;
};

// --------------------------------------------------------------------- Sport Query ---------------------------------------------------------------------

/**
 * @param {{ where: import('../generated/prisma-client').SportWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const sport = async (_, args, context) => {
  const currentUser = await context.user;
  if (typeof currentUser === 'undefined') {
    context.logger.error('API called by unauthenticated user');
    throw new AuthenticationError('Must be authenticated');
  }
  context.logger.debug('Query.sport: %O', currentUser);

  // Finding a sport based on args specification
  const sport = await context.prisma.sport(args.where);
  return sport;
};

/**
 * @param {{ where: import('../generated/prisma-client').SportWhereInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const sports = async (_, args, context) => {
  const currentUser = await context.user;
  if (typeof currentUser === 'undefined') {
    context.logger.error('API called by unauthenticated user');
    throw new AuthenticationError('Must be authenticated');
  }
  context.logger.debug('Query.sports: %O', currentUser);

  // Finding a sport based on args specification
  const sport = await context.prisma.sports(args);
  return sport;
};

// --------------------------------------------------------------------- Sport Meta Query ---------------------------------------------------------------------

/**
 * @param {{ where: import('../generated/prisma-client').SportMetaWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const sportMeta = async (_, args, context) => {
  const currentUser = await context.user;
  if (typeof currentUser === 'undefined') {
    context.logger.error('API called by unauthenticated user');
    throw new AuthenticationError('Must be authenticated');
  }
  context.logger.debug('Query.sportMeta: %O', currentUser);

  // Finding a sport meta based on args specification
  const sportMeta = await context.prisma.sportMeta(args.where);
  return sportMeta;
};

/**
 * @param {{ where: import('../generated/prisma-client').SportMetaWhereInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const sportMetas = async (_, args, context) => {
  const currentUser = await context.user;
  if (typeof currentUser === 'undefined') {
    context.logger.error('API called by unauthenticated user');
    throw new AuthenticationError('Must be authenticated');
  }
  context.logger.debug('Query.sportMetas: %O', currentUser);

  // Finding a sport metas based on args specification
  const sportMeta = await context.prisma.sportMetas(args);
  return sportMeta;
};


// --------------------------------------------------------------------- Event Query ---------------------------------------------------------------------

/**
 * @param {{ where: import('../generated/prisma-client').EventWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const event = async (_, args, context) => {
  const currentUser = await context.user;
  if (typeof currentUser === 'undefined') {
    context.logger.error('API called by unauthenticated user');
    throw new AuthenticationError('Must be authenticated');
  }
  context.logger.debug('Query.event: %O', currentUser);

  // Finding an event based on args specification
  const event = await context.prisma.event(args.where);
  return event;
};

/**
 * @param {{ where: import('../generated/prisma-client').EventWhereInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const events = async (_, args, context) => {
  const currentUser = await context.user;
  if (typeof currentUser === 'undefined') {
    context.logger.error('API called by unauthenticated user');
    throw new AuthenticationError('Must be authenticated');
  }
  context.logger.debug('Query.events: %O', currentUser);

  // Returns all events
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
  const currentUser = await context.user;
  if (typeof currentUser === 'undefined') {
    context.logger.error('API called by unauthenticated user');
    throw new AuthenticationError('Must be authenticated');
  }
  context.logger.debug('Query.activity: %O', currentUser);

  // Finding an activity based on args specification
  const activity = await context.prisma.activity(args.where);

  return activity;
};

/**
 * @param {{ where: import('../generated/prisma-client').ActivityWhereInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const activities = async (_, args, context) => {
  const currentUser = await context.user;
  if (typeof currentUser === 'undefined') {
    context.logger.error('API called by unauthenticated user');
    throw new AuthenticationError('Must be authenticated');
  }
  context.logger.debug('Query.activities: %O', currentUser);

  // Returns all activities
  const activity = await context.prisma.activities(args);

  return activity;
};

// --------------------------------------------------------------------- Participant Query ---------------------------------------------------------------------

/**
 * @param {{ where: import('../generated/prisma-client').ParticipantWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const participant = async (_, args, context) => {
  const currentUser = await context.user;
  if (typeof currentUser === 'undefined') {
    context.logger.error('API called by unauthenticated user');
    throw new AuthenticationError('Must be authenticated');
  }
  context.logger.debug('Query.participant: %O', currentUser);

  // Finding the participant based on args specification
  const participant = await context.prisma.participant(args.where);

  return participant;
};

/**
 * @param {{ where: import('../generated/prisma-client').ParticipantWhereInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const participants = async (_, args, context) => {
  const currentUser = await context.user;
  if (typeof currentUser === 'undefined') {
    context.logger.error('API called by unauthenticated user');
    throw new AuthenticationError('Must be authenticated');
  }
  context.logger.debug('Query.participants: %O', currentUser);

  // Returns all participants
  const participant = await context.prisma.participants(args);

  return participant;
};

// --------------------------------------------------------------------- Chat Query ---------------------------------------------------------------------

/**
 * @param {{ where: import('../generated/prisma-client').ChatWhereInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const chats = async (_, args, context) => {
  const currentUser = await context.user;
  if (typeof currentUser === 'undefined') {
    context.logger.error('API called by unauthenticated user');
    throw new AuthenticationError('Must be authenticated');
  }
  context.logger.debug('Query.chats: %O', currentUser);

  // Returns all chats
  const chats = await context.prisma.chats(args);

  return chats;
};

/**
 * @param {{ where: import('../generated/prisma-client').ChatRoomWhereInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const chatRooms = async (_, args, context) => {
  const currentUser = await context.user;
  if (typeof currentUser === 'undefined') {
    context.logger.error('API called by unauthenticated user');
    throw new AuthenticationError('Must be authenticated');
  }
  context.logger.debug('Query.chatRooms: %O', currentUser);

  // Returns all chat rooms
  const chatRooms = await context.prisma.chatRooms(args);

  return chatRooms;
};

module.exports = {
  profile,
  profiles,
  extendedProfile,
  extendedProfiles,
  mobilityStatus,
  mobilityStatuses,
  militaryBranch,
  militaryBranches,
  sport,
  sports,
  sportMeta,
  sportMetas,
  events,
  activity,
  activities,
  participants,
  participant,
  chats,
  chatRooms,
};
