// server/api/events.ts

export default defineEventHandler(async (event) => {
  try {
    // Format today's date as YYYY-MM-DD
    const today = new Date()
    const formattedToday = today.toISOString().split('T')[0]
    
    // Construct the API URL with the formatted date
    const apiUrl = `https://bin-dev.pockethost.io/api/collections/eventi/records?sort=data&filter=(data%3E=%22${formattedToday}%22)`
    
    // Fetch the data
    const response = await fetch(apiUrl)
    
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`)
    }
    
    const data = await response.json()
    
    // Add eventurl, comunitaurl, locationurl, and imgurl fields to each event
    const eventsWithUrls = data.items.map(item => ({
      ...item,
      eventurl: `https://bitcoinitalianetwork.com/evento/${item.id}`,
      comunitaurl: item.id_comunita ? `https://bitcoinitalianetwork.com/c/${item.id_comunita}` : null,
      locationurl: item.id_nod_osm ? `https://bitcoinitalianetwork.com/osn/${item.id_nod_osm}` : null,
      imgurl: item.img ? `https://bin-dev.pockethost.io/api/files/eventi/${item.id}/${item.img}` : null
    }))
    
    return eventsWithUrls
  } catch (error) {
    console.error('Error fetching events:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch events',
    })
  }
})