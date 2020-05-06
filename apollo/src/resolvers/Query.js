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

  // Finding an extended profile based on args specification
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

  // Finding extended profiles based on args specification
  const extendedProfile = await context.prisma.extendedProfiles(args);
  return extendedProfile;
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

  // Finding sports based on args specification
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

  // Finding sport meta based on args specification
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

  // Finding sport metas based on args specification
  const sportMeta = await context.prisma.sportMetas(args);
  return sportMeta;
};

// --------------------------------------------------------------------- Host Query ---------------------------------------------------------------------

/**
 * @param {{ where: import('../generated/prisma-client').HostWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const host = async (_, args, context) => {
  const currentUser = await context.user;
  if (typeof currentUser === 'undefined') {
    context.logger.error('API called by unauthenticated user');
    throw new AuthenticationError('Must be authenticated');
  }
  context.logger.debug('Query.host: %O', currentUser);

  // Finding a host based on args specification
  const host = await context.prisma.host(args.where);
  return host;
};

/**
 * @param {{ where: import('../generated/prisma-client').HostWhereInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const hosts = async (_, args, context) => {
  const currentUser = await context.user;
  if (typeof currentUser === 'undefined') {
    context.logger.error('API called by unauthenticated user');
    throw new AuthenticationError('Must be authenticated');
  }
  context.logger.debug('Query.hosts: %O', currentUser);

  // Finding hosts based on args specification
  const host = await context.prisma.hosts(args);
  return host;
};

// --------------------------------------------------------------------- Coach Query ---------------------------------------------------------------------

/**
 * @param {{ where: import('../generated/prisma-client').CoachWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const coach = async (_, args, context) => {
  const currentUser = await context.user;
  if (typeof currentUser === 'undefined') {
    context.logger.error('API called by unauthenticated user');
    throw new AuthenticationError('Must be authenticated');
  }
  context.logger.debug('Query.coach: %O', currentUser);

  // Finding a coach based on args specification
  const coach = await context.prisma.coach(args.where);
  return coach;
};

/**
 * @param {{ where: import('../generated/prisma-client').CoachWhereInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const coaches = async (_, args, context) => {
  const currentUser = await context.user;
  if (typeof currentUser === 'undefined') {
    context.logger.error('API called by unauthenticated user');
    throw new AuthenticationError('Must be authenticated');
  }
  context.logger.debug('Query.coaches: %O', currentUser);

  // Finding coaches based on args specification
  const coach = await context.prisma.coaches(args);
  return coach;
};

// --------------------------------------------------------------------- Disabilities Query ---------------------------------------------------------------------

/**
 * @param {{ where: import('../generated/prisma-client').DisabilityWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const disability = async (_, args, context) => {
  const currentUser = await context.user;
  if (typeof currentUser === 'undefined') {
    context.logger.error('API called by unauthenticated user');
    throw new AuthenticationError('Must be authenticated');
  }
  context.logger.debug('Query.disability: %O', currentUser);

  // Finding disability based on args specification
  const disability = await context.prisma.disability(args.where);
  return disability;
};

/**
 * @param {{ where: import('../generated/prisma-client').DisabilityWhereInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const disabilities = async (_, args, context) => {
  const currentUser = await context.user;
  if (typeof currentUser === 'undefined') {
    context.logger.error('API called by unauthenticated user');
    throw new AuthenticationError('Must be authenticated');
  }
  context.logger.debug('Query.disabilities: %O', currentUser);

  // Finding disabilities based on args specification
  const disability = await context.prisma.disabilities(args);
  return disability;
};

// --------------------------------------------------------------------- Detailed Disabilities Query ---------------------------------------------------------------------

/**
 * @param {{ where: import('../generated/prisma-client').DetailedDisabilityWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const detailedDisability = async (_, args, context) => {
  const currentUser = await context.user;
  if (typeof currentUser === 'undefined') {
    context.logger.error('API called by unauthenticated user');
    throw new AuthenticationError('Must be authenticated');
  }
  context.logger.debug('Query.detailedDisability: %O', currentUser);

  // Finding detailed disability based on args specification
  const detailedDisability = await context.prisma.detailedDisability(
    args.where
  );
  return detailedDisability;
};

/**
 * @param {{ where: import('../generated/prisma-client').DetailedDisabilityWhereInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const detailedDisabilities = async (_, args, context) => {
  const currentUser = await context.user;
  if (typeof currentUser === 'undefined') {
    context.logger.error('API called by unauthenticated user');
    throw new AuthenticationError('Must be authenticated');
  }
  context.logger.debug('Query.detailedDisabilities: %O', currentUser);

  // Finding detailed disabilities based on args specification
  const detailedDisability = await context.prisma.detailedDisabilities(args);
  return detailedDisability;
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
  sport,
  sports,
  sportMeta,
  sportMetas,
  host,
  hosts,
  coach,
  coaches,
  disability,
  disabilities,
  detailedDisability,
  detailedDisabilities,
  event,
  events,
  activity,
  activities,
  participants,
  participant,
  chats,
  chatRooms,
};
