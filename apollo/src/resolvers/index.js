// @ts-check

// All resolvers must be imported here and declared in the resolvers
// object in order to be received by the client. If you are logging
// your resolvers but not seeing anything print to stdout, this is
// the most likely culprit

const Query = require('./Query');
const Mutation = require('./Mutation');
const Activity = require('./Activity');
const Profile = require('./Profile');
const Event = require('./Event');
const Host = require('./Host');
const Coach = require('./Coach');
const Disability = require('./Disability');
const Sport = require('./Sport');
const Participant = require('./Participant');
const Chat = require('./Chat');
const ChatRoom = require('./ChatRoom');
const Subscription = require('./Subscription');
const ExtendedProfile = require('./ExtendedProfile');

const resolvers = {
  Query,
  Mutation,
  Subscription,
  Activity,
  Profile,
  Disability,
  Event,
  Host,
  Sport,
  Coach,
  Participant,
  Chat,
  ExtendedProfile

};

module.exports = resolvers;
