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

// --------------------------------------------------------------------- Adaptive Sport Options Mutations ---------------------------------------------------------------------

/**
 * @param {{ data: import('../generated/prisma-client').AdaptivSportsOptionsCreateInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const createAdaptivSportsOptions = async (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = await context.user;
  if (typeof currentUser === 'undefined') {
    context.logger.error('API called by unauthenticated user');
    throw new AuthenticationError('Must be authenticated.');
  }
  context.logger.debug('Mutation.createAdaptivSportsOptions: %O', currentUser);

  // Creates AdaptivSportOptions based on args data
  const adaptivSportsOptions = await context.prisma.createAdaptivSportsOptions(
    args.data
  );

  return adaptivSportsOptions;
};

/**
 * @param {{ data: import('../generated/prisma-client').AdaptivSportsOptionsUpdateInput, where: import('../generated/prisma-client').AdaptivSportsOptionsWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const updateAdaptivSportsOptions = async (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = await context.user;
  if (typeof currentUser === 'undefined') {
    context.logger.error('API called by unauthenticated user.');
    throw new AuthenticationError('Must be authenticated');
  }
  context.logger.debug('Mutation.updateProfile: %O', currentUser);
  // Updates a Demographic profile with args passed in
  const adaptivSportsOptions = await context.prisma.updateAdaptivSportsOptions(
    args
  );

  return adaptivSportsOptions;
};

/**
 * @param {{ where: import('../generated/prisma-client').AdaptivSportsOptionsWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const deleteAdaptivSportsOptions = async (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = await context.user;
  if (typeof currentUser === 'undefined') {
    context.logger.error('API called by unauthenticated user.');
    throw new AuthenticationError('Must be authenticated.');
  }
  context.logger.debug('Mutation.deleteProfile: %O', currentUser);
  // Deletes an Demographic profile with args passed in
  const adaptivSportsOptions = await context.prisma.deleteAdaptivSportsOptions(
    args.where
  );

  return adaptivSportsOptions;
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

// --------------------------------------------------------------------- DetailedDisability Mutations ---------------------------------------------------------------------

/**
 * @param {{ data: import('../generated/prisma-client').DetailedDisabilityCreateInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const createDetailedDisability = async (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = await context.user;
  if (typeof currentUser === context.user) {
    context.logger.error('API called by unauthenticated user.');
    throw new AuthenticationError('Must be authenticated');
  }
  context.logger.debug('Mutation.createDetailedDisability: %O', currentUser);
  // Creates a DetailedDisability Table based on args data
  const detailedDisability = context.prisma.createDetailedDisability(args.data);

  return detailedDisability;
};
/**
 * @param {{ data: import('../generated/prisma-client').DetailedDisabilityUpdateInput, where: import('../generated/prisma-client').DetailedDisabilityWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const updateDetailedDisability = async (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = await context.user;
  if (typeof currentUser === context.user) {
    context.logger.error('API called by unauthenticated user.');
    throw new AuthenticationError('Must be authenticated.');
  }
  context.logger.debug('Mutation.updateDetailedDisability: %O', currentUser);
  // Updates a DetailedDisability with args passed in
  const detailedDisability = await context.prisma.updateDetailedDisability(
    args
  );

  return detailedDisability;
};

/**
 * @param {{ where: import('../generated/prisma-client').DetailedDisabilityWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma, user: any, logger: import('winston') }} context
 * @returns { Promise }
 */
const deleteDetailedDisability = async (_, args, context) => {
  // This next line ensures user needs to be logged in, else return error
  const currentUser = await context.user;
  if (typeof currentUser === context.user) {
    context.logger.error('API called by unauthenticated user.');
    throw new AuthenticationError('Must be authenticated.');
  }
  context.logger.debug('Mutation.deleteDetailedDisability: %O', currentUser);
  // Deletes a DetailedDisability table with args passed in
  const detailedDisability = await context.prisma.deleteDetailedDisability(
    args.where
  );

  return detailedDisability;
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
  createDetailedDisability,
  updateDetailedDisability,
  deleteDetailedDisability,
  createEvent,
  updateEvent,
  upsertEvent,
  deleteEvent,
  createActivity,
  updateActivity,
  upsertActivity,
  deleteActivity,
  createAdaptivSportsOptions,
  updateAdaptivSportsOptions,
  deleteAdaptivSportsOptions,
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
};
