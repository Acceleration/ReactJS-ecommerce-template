export default (email) => ({
  profileInfo: {
    profileID: email,
    userName: email.split('@')[0],
    email: email,
    language: "en-US",
    // returningStatus: "New"
  }
})