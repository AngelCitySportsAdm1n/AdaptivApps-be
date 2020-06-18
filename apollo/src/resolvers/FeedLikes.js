function post(parent, args, context) {
    return context.prisma.feedLike({ id: parent.id }).post()
};

function likedBy(parent, __, context) {
    return context.prisma.feedLike({ id: parent.id }).likedBy()
}

module.exports = {
    post,
    likedBy
}
