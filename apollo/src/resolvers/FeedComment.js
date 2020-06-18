function postedBy(parent, args, context) {
    return context.prisma.feedComment({ id: parent.id }).postedBy()
};

function feed(parent, __, context) {
    return context.prisma.feedComment({ id: parent.id }).feed()
}

module.exports = {
    postedBy,
    feed
}
