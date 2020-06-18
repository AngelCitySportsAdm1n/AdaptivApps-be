function postedBy(parent, args, context) {
    return context.prisma.feedPost({ id: parent.id }).postedBy()
};

function comments(parent, __, context) {
    return context.prisma.feedPost({ id: parent.id }).comments()
}

function likes(parent, __, context) {
    return context.prisma.feedPost({ id: parent.id }).likes()
}

module.exports = {
    postedBy,
    comments,
    likes
}
