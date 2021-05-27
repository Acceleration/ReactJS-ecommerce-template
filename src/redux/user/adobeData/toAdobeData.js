export default (email) => ({
  profileInfo: {
    profileID: email ? email : String(Math.random()),
    userName: email ? email : String(Math.random()),
    language: "en-US",
    // returningStatus: "New"
  }
})