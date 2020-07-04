//@ts-check
const { AuthenticationError } = require('apollo-server');

// --------------------------------------------------------------------- Profile Mutations ---------------------------------------------------------------------

/**
 * @param {{ data: import('../generated/prisma-client').ProfileCreateInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const createProfile = async (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = await context.user;
  if (typeof currentUser === 'undefined') {
    context.logger.error('API called by unauthenticated user');
    throw new AuthenticationError('Must be authenticated.');
  }
  context.logger.debug('Mutation.createProfile: %O', currentUser);

  // Creates a profile based on args data
  const profile = await context.prisma.createProfile(args.data);

  return profile;
};

/**
 * @param {{ data: import('../generated/prisma-client').ProfileUpdateInput, where: import('../generated/prisma-client').ProfileWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const updateProfile = async (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = await context.user;
  if (typeof currentUser === 'undefined') {
    context.logger.error('API called by unauthenticated user.');
    throw new AuthenticationError('Must be authenticated');
  }
  context.logger.debug('Mutation.updateProfile: %O', currentUser);
  // Updates a profile with args passed in
  const profile = await context.prisma.updateProfile(args);

  return profile;
};

/**
 * @param {{ where: import('../generated/prisma-client').ProfileWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const deleteProfile = async (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = await context.user;
  if (typeof currentUser === 'undefined') {
    context.logger.error('API called by unauthenticated user.');
    throw new AuthenticationError('Must be authenticated.');
  }
  context.logger.debug('Mutation.deleteProfile: %O', currentUser);
  // Deletes a profile with args passed in
  const profile = await context.prisma.deleteProfile(args.where);

  return profile;
};

// --------------------------------------------------------------------- Extended Profile Mutations ---------------------------------------------------------------------

/**
 * @param {{ data: import('../generated/prisma-client').ExtendedProfileCreateInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const createExtendedProfile = async (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = await context.user;
  if (typeof currentUser === 'undefined') {
    context.logger.error('API called by unauthenticated user');
    throw new AuthenticationError('Must be authenticated.');
  }
  context.logger.debug('Mutation.createExtendedProfile: %O', currentUser);

  // Creates an extended profile based on args data
  const extendedProfile = await context.prisma.createExtendedProfile(args.data);

  return extendedProfile;
};

/**
 * @param {{ data: import('../generated/prisma-client').ExtendedProfileUpdateInput, where: import('../generated/prisma-client').ExtendedProfileWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const updateExtendedProfile = async (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = await context.user;
  if (typeof currentUser === 'undefined') {
    context.logger.error('API called by unauthenticated user.');
    throw new AuthenticationError('Must be authenticated');
  }
  context.logger.debug('Mutation.updateProfile: %O', currentUser);
  // Updates an extended profile with args passed in
  const extendedProfile = await context.prisma.updateExtendedProfile(args);

  return extendedProfile;
};

/**
 * @param {{ where: import('../generated/prisma-client').ExtendedProfileWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const deleteExtendedProfile = async (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = await context.user;
  if (typeof currentUser === 'undefined') {
    context.logger.error('API called by unauthenticated user.');
    throw new AuthenticationError('Must be authenticated.');
  }
  context.logger.debug('Mutation.deleteProfile: %O', currentUser);
  // Deletes an extended profile with args passed in
  const extendedProfile = await context.prisma.deleteExtendedProfile(
    args.where
  );

  return extendedProfile;
};

// --------------------------------------------------------------------- Demographic Profile Mutations ---------------------------------------------------------------------

/**
 * @param {{ data: import('../generated/prisma-client').DemographicProfileCreateInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const createDemographicProfile = async (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = await context.user;
  if (typeof currentUser === 'undefined') {
    context.logger.error('API called by unauthenticated user');
    throw new AuthenticationError('Must be authenticated.');
  }
  context.logger.debug('Mutation.createDemographicProfile: %O', currentUser);

  // Creates a Demographic profile based on args data
  const demographicProfile = await context.prisma.createDemographicProfile(
    args.data
  );

  return demographicProfile;
};

/**
 * @param {{ data: import('../generated/prisma-client').DemographicProfileUpdateInput, where: import('../generated/prisma-client').DemographicProfileWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const updateDemographicProfile = async (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = await context.user;
  if (typeof currentUser === 'undefined') {
    context.logger.error('API called by unauthenticated user.');
    throw new AuthenticationError('Must be authenticated');
  }
  context.logger.debug('Mutation.updateProfile: %O', currentUser);
  // Updates a Demographic profile with args passed in
  const demographicProfile = await context.prisma.updateDemographicProfile(
    args
  );

  return demographicProfile;
};

/**
 * @param {{ where: import('../generated/prisma-client').DemographicProfileWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const deleteDemographicProfile = async (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = await context.user;
  if (typeof currentUser === 'undefined') {
    context.logger.error('API called by unauthenticated user.');
    throw new AuthenticationError('Must be authenticated.');
  }
  context.logger.debug('Mutation.deleteProfile: %O', currentUser);
  // Deletes an Demographic profile with args passed in
  const demographicProfile = await context.prisma.deleteDemographicProfile(
    args.where
  );

  return demographicProfile;
};

// --------------------------------------------------------------------- Disability Mutations ---------------------------------------------------------------------

/**
 * @param {{ data: import('../generated/prisma-client').DisabilityCreateInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const createDisability = async (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = await context.user;
  if (typeof currentUser === context.user) {
    context.logger.error('API called by unauthenticated user.');
    throw new AuthenticationError('Must be authenticated');
  }
  context.logger.debug('Mutation.createDisability: %O', currentUser);
  // Creates a Disability Table based on args data
  const disability = context.prisma.createDisability(args.data);

  return disability;
};
/**
 * @param {{ data: import('../generated/prisma-client').DisabilityUpdateInput, where: import('../generated/prisma-client').DisabilityWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const updateDisability = async (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = await context.user;
  if (typeof currentUser === context.user) {
    context.logger.error('API called by unauthenticated user.');
    throw new AuthenticationError('Must be authenticated.');
  }
  context.logger.debug('Mutation.updateDisability: %O', currentUser);
  // Updates a Disability with args passed in
  const disability = await context.prisma.updateDisability(args);

  return disability;
};

/**
 * @param {{ where: import('../generated/prisma-client').DisabilityWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const deleteDisability = async (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = await context.user;
  if (typeof currentUser === context.user) {
    context.logger.error('API called by unauthenticated user.');
    throw new AuthenticationError('Must be authenticated.');
  }
  context.logger.debug('Mutation.deleteDisability: %O', currentUser);
  // Deletes a Disability table with args passed in
  const disability = await context.prisma.deleteDisability(args.where);

  return disability;
};

// --------------------------------------------------------------------- Event Mutations ---------------------------------------------------------------------

/**
 * @param {{ data: import('../generated/prisma-client').EventCreateInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const createEvent = async (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = await context.user;
  if (typeof currentUser === 'undefined') {
    context.logger.error('Api called by unauthenticated user.');
    throw new AuthenticationError('Must be authenticated.');
  }
  if (!currentUser.groups.includes('Admin')) {
    context.logger.error('API must be called by an Admin');
    throw new AuthenticationError(
      'You must be an Admin to access this functionality'
    );
  }
  context.logger.debug('Mutation.createEvent: %O', currentUser);
  // Creates an event based on args data
  const event = context.prisma.createEvent(args.data);

  return event;
};

/**
 * @param {{ data: import('../generated/prisma-client').EventUpdateInput, where: import('../generated/prisma-client').EventWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const updateEvent = async (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = await context.user;
  if (typeof currentUser === 'undefined') {
    context.logger.error('API called by unauthenticated user.');
    throw new AuthenticationError('Must be authenticated.');
  }
  if (!currentUser.groups.includes('Admin')) {
    context.logger.error('API must be called by an Admin');
    throw new AuthenticationError(
      'You must be an Admin to access this functionality'
    );
  }
  context.logger.debug('Mutation.updateEvent: %O', currentUser);
  // Updates an event with args passed in
  const event = await context.prisma.updateEvent(args);

  return event;
};

/**
 * @param {{ where: import('../generated/prisma-client').EventWhereUniqueInput, create: import('../generated/prisma-client').EventCreateInput, update: import('../generated/prisma-client').EventUpdateInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const upsertEvent = async (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = await context.user;
  if (typeof currentUser === context.user) {
    context.logger.error('API called by unauthenticated user.');
    throw new AuthenticationError('Must be authenticated.');
  }
  if (!currentUser.groups.includes('Admin')) {
    context.logger.error('API must be called by an Admin');
    throw new AuthenticationError(
      'You must be an Admin to access this functionality'
    );
  }
  context.logger.debug('Mutation.upsertEvent: %O', currentUser);
  // Upserts an participant with args passed in
  const event = await context.prisma.upsertEvent(args);

  return event;
};

/**
 * @param {{ where: import('../generated/prisma-client').EventWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const deleteEvent = async (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = await context.user;
  if (typeof currentUser === 'undefined') {
    context.logger.error('API called by unauthenticated user.');
    throw new AuthenticationError('Must be authenticated.');
  }
  if (!currentUser.groups.includes('Admin')) {
    context.logger.error('API must be called by an Admin');
    throw new AuthenticationError(
      'You must be an Admin to access this functionality'
    );
  }
  context.logger.debug('Mutation.deleteEvent: %O', currentUser);
  // Deletes an Event with args passed in
  const event = await context.prisma.deleteEvent(args.where);

  return event;
};

// --------------------------------------------------------------------- Activity Mutations ---------------------------------------------------------------------

/**
 * @param {{ data: import('../generated/prisma-client').ActivityCreateInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const createActivity = async (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = await context.user;
  if (typeof currentUser === context.user) {
    context.logger.error('API called by unauthenticated user.');
    throw new AuthenticationError('Must be authenticated');
  }
  context.logger.debug('Mutation.createActivity: %O', currentUser);
  // Creates an activity based on args data
  const activity = context.prisma.createActivity(args.data);

  return activity;
};
/**
 * @param {{ data: import('../generated/prisma-client').ActivityUpdateInput, where: import('../generated/prisma-client').ActivityWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const updateActivity = async (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = await context.user;
  if (typeof currentUser === context.user) {
    context.logger.error('API called by unauthenticated user.');
    throw new AuthenticationError('Must be authenticated.');
  }
  context.logger.debug('Mutation.updateActivity: %O', currentUser);
  // Updates an activity with args passed in
  const activity = await context.prisma.updateActivity(args);

  return activity;
};

/**
 * @param {{ where: import('../generated/prisma-client').ActivityWhereUniqueInput, create: import('../generated/prisma-client').ActivityCreateInput, update: import('../generated/prisma-client').ActivityUpdateInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const upsertActivity = async (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = await context.user;
  if (typeof currentUser === context.user) {
    context.logger.error('API called by unauthenticated user.');
    throw new AuthenticationError('Must be authenticated.');
  }
  context.logger.debug('Mutation.upsertActivity: %O', currentUser);
  // Upserts an participant with args passed in
  const activity = await context.prisma.upsertActivity(args);

  return activity;
};

/**
 * @param {{ where: import('../generated/prisma-client').ActivityWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const deleteActivity = async (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = await context.user;
  if (typeof currentUser === context.user) {
    context.logger.error('API called by unauthenticated user.');
    throw new AuthenticationError('Must be authenticated.');
  }
  context.logger.debug('Mutation.deleteActivity: %O', currentUser);
  // Deletes an activity with args passed in
  const activity = await context.prisma.deleteActivity(args.where);

  return activity;
};
// --------------------------------------------------------------------- Participants Mutations ---------------------------------------------------------------------
/**
 * @param {{ data: import('../generated/prisma-client').ParticipantCreateInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const createParticipant = async (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = await context.user;
  if (typeof currentUser === context.user) {
    context.logger.error('API called by unauthenticated user.');
    throw new AuthenticationError('Must be authenticated');
  }
  context.logger.debug('Mutation.createParticipant: %O', currentUser);
  // Creates a participant based on args data
  const participant = context.prisma.createParticipant(args.data);

  return participant;
};
/**
 * @param {{ data: import('../generated/prisma-client').ParticipantUpdateInput, where: import('../generated/prisma-client').ParticipantWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const updateParticipant = async (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = await context.user;
  if (typeof currentUser === context.user) {
    context.logger.error('API called by unauthenticated user.');
    throw new AuthenticationError('Must be authenticated.');
  }
  context.logger.debug('Mutation.updateParticipant: %O', currentUser);
  // Updates a participant with args passed in
  const participant = await context.prisma.updateParticipant(args);

  return participant;
};
/**
 * @param {{ where: import('../generated/prisma-client').ParticipantWhereUniqueInput, create: import('../generated/prisma-client').ParticipantCreateInput, update: import('../generated/prisma-client').ParticipantUpdateInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const upsertParticipant = async (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = await context.user;
  if (typeof currentUser === context.user) {
    context.logger.error('API called by unauthenticated user.');
    throw new AuthenticationError('Must be authenticated.');
  }
  context.logger.debug('Mutation.upsertParticipant: %O', currentUser);
  // Upserts an participant with args passed in
  const participant = await context.prisma.upsertParticipant(args);

  return participant;
};

/**
 * @param {{ where: import('../generated/prisma-client').ParticipantWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const deleteParticipant = async (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = await context.user;
  if (typeof currentUser === context.user) {
    context.logger.error('API called by unauthenticated user.');
    throw new AuthenticationError('Must be authenticated.');
  }
  context.logger.debug('Mutation.deleteParticipant: %O', currentUser);
  // Deletes a participant with args passed in
  const participant = await context.prisma.deleteParticipant(args.where);

  return participant;
};

// --------------------------------------------------------------------- Coach Mutations ---------------------------------------------------------------------

/**
 * @param {{ data: import('../generated/prisma-client').CoachCreateInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const createCoach = async (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = await context.user;
  if (typeof currentUser === context.user) {
    context.logger.error('API called by unauthenticated user.');
    throw new AuthenticationError('Must be authenticated');
  }
  context.logger.debug('Mutation.createCoach: %O', currentUser);
  // Creates a Coach based on args data
  const coach = context.prisma.createCoach(args.data);

  return coach;
};
/**
 * @param {{ data: import('../generated/prisma-client').CoachUpdateInput, where: import('../generated/prisma-client').CoachWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const updateCoach = async (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = await context.user;
  if (typeof currentUser === context.user) {
    context.logger.error('API called by unauthenticated user.');
    throw new AuthenticationError('Must be authenticated.');
  }
  context.logger.debug('Mutation.updateCoach: %O', currentUser);
  // Updates a Coach with args passed in
  const coach = await context.prisma.updateCoach(args);

  return coach;
};

/**
 * @param {{ where: import('../generated/prisma-client').CoachWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const deleteCoach = async (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = await context.user;
  if (typeof currentUser === context.user) {
    context.logger.error('API called by unauthenticated user.');
    throw new AuthenticationError('Must be authenticated.');
  }
  context.logger.debug('Mutation.deleteCoach: %O', currentUser);
  // Deletes a Coach with args passed in
  const coach = await context.prisma.deleteCoach(args.where);

  return coach;
};

// --------------------------------------------------------------------- Host Mutations ---------------------------------------------------------------------

/**
 * @param {{ data: import('../generated/prisma-client').HostCreateInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const createHost = async (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = await context.user;
  if (typeof currentUser === context.user) {
    context.logger.error('API called by unauthenticated user.');
    throw new AuthenticationError('Must be authenticated');
  }
  context.logger.debug('Mutation.createHost: %O', currentUser);
  // Creates a Host based on args data
  const host = context.prisma.createHost(args.data);

  return host;
};
/**
 * @param {{ data: import('../generated/prisma-client').HostUpdateInput, where: import('../generated/prisma-client').HostWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const updateHost = async (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = await context.user;
  if (typeof currentUser === context.user) {
    context.logger.error('API called by unauthenticated user.');
    throw new AuthenticationError('Must be authenticated.');
  }
  context.logger.debug('Mutation.updateHost: %O', currentUser);
  // Updates a Host with args passed in
  const host = await context.prisma.updateHost(args);

  return host;
};

/**
 * @param {{ where: import('../generated/prisma-client').HostWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const deleteHost = async (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = await context.user;
  if (typeof currentUser === context.user) {
    context.logger.error('API called by unauthenticated user.');
    throw new AuthenticationError('Must be authenticated.');
  }
  context.logger.debug('Mutation.deleteHost: %O', currentUser);
  // Deletes a Host with args passed in
  const host = await context.prisma.deleteHost(args.where);

  return host;
};

// --------------------------------------------------------------------- Chat Mutations ---------------------------------------------------------------------

/**
 * @param {{ data: import('../generated/prisma-client').ChatCreateInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const createChat = async (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = await context.user;
  if (typeof currentUser === context.user) {
    context.logger.error('API called by unauthenticated user.');
    throw new AuthenticationError('Must be authenticated.');
  }
  context.logger.debug('Mutation.createChat: %O', currentUser);
  // Creates a chat
  const chat = await context.prisma.createChat(args.data);

  return chat;
};

/**
 * @param {{ data: import('../generated/prisma-client').ChatUpdateInput, where: import('../generated/prisma-client').ChatWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const updateChat = async (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = await context.user;
  if (typeof currentUser === context.user) {
    context.logger.error('API called by unauthenticated user.');
    throw new AuthenticationError('Must be authenticated.');
  }
  context.logger.debug('Mutation.updateChat: %O', currentUser);
  // Updates a chat
  const chat = await context.prisma.updateChat(args);

  return chat;
};

/**
 * @param {{ where: import('../generated/prisma-client').ChatWhereUniqueInput! }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const deleteChat = async (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = await context.user;
  if (typeof currentUser === context.user) {
    context.logger.error('API called by unauthenticated user.');
    throw new AuthenticationError('Must be authenticated.');
  }
  context.logger.debug('Mutation.deleteChat: %O', currentUser);
  // Deletes a chat
  const chat = await context.prisma.deleteChat(args.where);

  return chat;
};
// --------------------------------------------------------------------- Chat Room Mutations ---------------------------------------------------------------------
/**
 * @param {{ data: import('../generated/prisma-client').ChatRoomCreateInput! }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const createChatRoom = async (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = await context.user;
  if (typeof currentUser === context.user) {
    context.logger.error('API called by unauthenticated user.');
    throw new AuthenticationError('Must be authenticated.');
  }
  context.logger.debug('Mutation.createChatRoom: %O', currentUser);
  // Creates a chat room
  const room = await context.prisma.createChatRoom(args.data);

  return room;
};

/**
 * @param {{ data: import('../generated/prisma-client').ChatRoomUpdateInput, where: import('../generated/prisma-client').ChatRoomWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const updateChatRoom = async (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = await context.user;
  if (typeof currentUser === context.user) {
    context.logger.error('API called by unauthenticated user.');
    throw new AuthenticationError('Must be authenticated.');
  }
  context.logger.debug('Mutation.updateChatRoom: %O', currentUser);
  // Updates a chat room
  const room = await context.prisma.updateChatRoom(args);

  return room;
};

/**
 * @param {{ where: import('../generated/prisma-client').ChatRoomWhereUniqueInput! }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const deleteChatRoom = async (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = await context.user;
  if (typeof currentUser === context.user) {
    context.logger.error('API called by unauthenticated user.');
    throw new AuthenticationError('Must be authenticated.');
  }
  context.logger.debug('Mutation.deleteChatRoom: %O', currentUser);
  // Deletes a chat room
  const room = await context.prisma.deleteChatRoom(args.where);

  return room;
};

// --------------------------------------------------------------------- Announcement Mutations ---------------------------------------------------------------------

/**
 * @param {{ data: import('../generated/prisma-client').AnnouncementCreateInput! }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const createAnnouncement = async (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = await context.user;
  if (typeof currentUser === context.user) {
    context.logger.error('API called by unauthenticated user.');
    throw new AuthenticationError('Must be authenticated.');
  }
  context.logger.debug('Mutation.createAnnouncement: %O', currentUser);
  // Creates an announcement
  const announcement = await context.prisma.createAnnouncement(args.data);

  return announcement;
};

/**
 * @param {{ data: import('../generated/prisma-client').AnnouncementUpdateInput!, where: import('../generated/prisma-client').AnnouncementWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const updateAnnouncement = async (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = await context.user;
  if (typeof currentUser === context.user) {
    context.logger.error('API called by unauthenticated user.');
    throw new AuthenticationError('Must be authenticated.');
  }
  context.logger.debug('Mutation.updateAnnouncement: %O', currentUser);
  // Updates an announcement
  const announcement = await context.prisma.updateAnnouncement(args);

  return announcement;
};

/**
 * @param {{ where: import('../generated/prisma-client').AnnouncementWhereUniqueInput! }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const deleteAnnouncement = async (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = await context.user;
  if (typeof currentUser === context.user) {
    context.logger.error('API called by unauthenticated user.');
    throw new AuthenticationError('Must be authenticated.');
  }
  context.logger.debug('Mutation.deleteAnnouncement: %O', currentUser);
  // Deletes an announcement
  const announcement = await context.prisma.deleteAnnouncement(args.where);

  return announcement;
};

// --------------------------------------------------------------------- Notifications Mutations ---------------------------------------------------------------------

/**
 * @param {{ data: import('../generated/prisma-client').NotificationCreateInput! }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const createNotification = async (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = await context.user;
  if (typeof currentUser === context.user) {
    context.logger.error('API called by unauthenticated user.');
    throw new AuthenticationError('Must be authenticated.');
  }
  context.logger.debug('Mutation.createNotification: %O', currentUser);
  // Creates a notification
  const notification = await context.prisma.createNotification(args.data);

  return notification;
};

/**
 * @param {{ data: import('../generated/prisma-client').NotificationUpdateInput!, where: import('../generated/prisma-client').NotificationWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const updateNotification = async (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = await context.user;
  if (typeof currentUser === context.user) {
    context.logger.error('API called by unauthenticated user.');
    throw new AuthenticationError('Must be authenticated.');
  }
  context.logger.debug('Mutation.updateNotification: %O', currentUser);
  // Updates a notification
  const notification = await context.prisma.updateNotification(args);

  return notification;
};

/**
 * @param {{ where: import('../generated/prisma-client').NotificationWhereUniqueInput! }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const deleteNotification = async (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = await context.user;
  if (typeof currentUser === context.user) {
    context.logger.error('API called by unauthenticated user.');
    throw new AuthenticationError('Must be authenticated.');
  }
  context.logger.debug('Mutation.deleteNotification: %O', currentUser);
  // Deletes a notification
  const notification = await context.prisma.deleteNotification(args.where);

  return notification;
};

// --------------------------------------------------------------------- Tag Mutations ---------------------------------------------------------------------
/**
 * @param {{ data: import('../generated/prisma-client').TagCreateInput! }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const createTag = async (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = await context.user;
  if (typeof currentUser === context.user) {
    context.logger.error('API called by unauthenticated user.');
    throw new AuthenticationError('Must be authenticated.');
  }
  context.logger.debug('Mutation.createTag: %O', currentUser);
  // Creates a chat room
  const tag = await context.prisma.createTag(args.data);
  return tag;
};

/**
 * @param {{ where: import('../generated/prisma-client').TagWhereUniqueInput! }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const deleteTag = async (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = await context.user;
  if (typeof currentUser === context.user) {
    context.logger.error('API called by unauthenticated user.');
    throw new AuthenticationError('Must be authenticated.');
  }
  context.logger.debug('Mutation.deleteTag: %O', currentUser);
  // Deletes a notification
  const tag = await context.prisma.deleteTag(args.where);
  return tag;
};

// --------------------------------------------------------------------- Newsfeed Posts, Comments, and Likes Mutations ---------------------------------------------------------------------
/**
 * @param {{ data: import('../generated/prisma-client').FeedPostCreateInput! }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const createFeedPost = async (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = await context.user;
  if (typeof currentUser === context.user) {
    context.logger.error('API called by unauthenticated user.');
    throw new AuthenticationError('Must be authenticated.');
  }
  context.logger.debug('Mutation.createFeedPost: %O', currentUser);
  // Creates a chat room
  const post = await context.prisma.createFeedPost(args.data);

  return post;
};

/**
 * @param {{ data: import('../generated/prisma-client').FeedPostUpdateInput, where: import('../generated/prisma-client').FeedPostWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const updateFeedPost = async (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = await context.user;
  if (typeof currentUser === context.user) {
    context.logger.error('API called by unauthenticated user.');
    throw new AuthenticationError('Must be authenticated.');
  }
  context.logger.debug('Mutation.updateFeedPost: %O', currentUser);
  // Updates a chat room
  const post = await context.prisma.updateFeedPost(args);

  return post;
};

/**
 * @param {{ where: import('../generated/prisma-client').FeedPostWhereUniqueInput! }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const deleteFeedPost = async (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = await context.user;
  if (typeof currentUser === context.user) {
    context.logger.error('API called by unauthenticated user.');
    throw new AuthenticationError('Must be authenticated.');
  }
  context.logger.debug('Mutation.deleteFeedPost: %O', currentUser);
  // Deletes a notification
  const post = await context.prisma.deleteFeedPost(args.where);
  return post;
};

/**
 * @param {{ data: import('../generated/prisma-client').FeedCommentCreateInput! }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const createFeedComment = async (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = await context.user;
  if (typeof currentUser === context.user) {
    context.logger.error('API called by unauthenticated user.');
    throw new AuthenticationError('Must be authenticated.');
  }
  context.logger.debug('Mutation.createFeedComment: %O', currentUser);
  // Creates a chat room
  const comment = await context.prisma.createFeedComment(args.data);

  return comment;
};

/**
 * @param {{ data: import('../generated/prisma-client').FeedCommentUpdateInput, where: import('../generated/prisma-client').FeedCommentWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const updateFeedComment = async (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = await context.user;
  if (typeof currentUser === context.user) {
    context.logger.error('API called by unauthenticated user.');
    throw new AuthenticationError('Must be authenticated.');
  }
  context.logger.debug('Mutation.updateFeedComment: %O', currentUser);
  // Updates a chat room
  const comment = await context.prisma.updateFeedComment(args);

  return comment;
};

/**
 * @param {{ where: import('../generated/prisma-client').FeedCommentWhereUniqueInput! }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const deleteFeedComment = async (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = await context.user;
  if (typeof currentUser === context.user) {
    context.logger.error('API called by unauthenticated user.');
    throw new AuthenticationError('Must be authenticated.');
  }
  context.logger.debug('Mutation.deleteFeedComment: %O', currentUser);
  // Deletes a notification
  const comment = await context.prisma.deleteFeedComment(args.where);
  return comment;
};

/**
 * @param {{ data: import('../generated/prisma-client').FeedLikeCreateInput! }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const createFeedLike = async (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = await context.user;
  if (typeof currentUser === context.user) {
    context.logger.error('API called by unauthenticated user.');
    throw new AuthenticationError('Must be authenticated.');
  }
  context.logger.debug('Mutation.createFeedLike: %O', currentUser);
  // Creates a chat room
  const like = await context.prisma.createFeedLike(args.data);

  return like;
};

/**
 * @param {{ where: import('../generated/prisma-client').FeedLikeWhereUniqueInput! }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const deleteFeedLike = async (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = await context.user;
  if (typeof currentUser === context.user) {
    context.logger.error('API called by unauthenticated user.');
    throw new AuthenticationError('Must be authenticated.');
  }
  context.logger.debug('Mutation.deleteFeedLike: %O', currentUser);
  // Deletes a notification
  const like = await context.prisma.deleteFeedLike(args.where);
  return like;
};

module.exports = {
  createProfile,
  updateProfile,
  deleteProfile,
  createExtendedProfile,
  updateExtendedProfile,
  deleteExtendedProfile,
  createDisability,
  updateDisability,
  deleteDisability,
  createEvent,
  updateEvent,
  upsertEvent,
  deleteEvent,
  createActivity,
  updateActivity,
  upsertActivity,
  deleteActivity,
  createDemographicProfile,
  updateDemographicProfile,
  deleteDemographicProfile,
  createParticipant,
  updateParticipant,
  upsertParticipant,
  deleteParticipant,
  createCoach,
  updateCoach,
  deleteCoach,
  createHost,
  updateHost,
  deleteHost,
  createChat,
  updateChat,
  deleteChat,
  createChatRoom,
  updateChatRoom,
  deleteChatRoom,
  createAnnouncement,
  updateAnnouncement,
  deleteAnnouncement,
  createNotification,
  updateNotification,
  deleteNotification,
  createTag,
  deleteTag,
  createFeedPost,
  updateFeedPost,
  deleteFeedPost,
  createFeedComment,
  updateFeedComment,
  deleteFeedComment,
  createFeedLike,
  deleteFeedLike,
};
