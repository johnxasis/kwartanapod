function handleReferral(userId, res) {
    // Simulate referral link return
    res.send({ text: `📣 Invite friends using t.me/SwarmMaster_bot?start=${userId}` });
}
module.exports = { handleReferral };