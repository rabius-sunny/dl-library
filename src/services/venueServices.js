import adminrequests from './adminhttp'

class venueRequests {
  getVenues() {
    return adminrequests.get('/venues')
  }
}

export default new venueRequests()
