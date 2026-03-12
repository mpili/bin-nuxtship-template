export function useNostrConfig() {
  const relays =
    "wss://relay.primal.net,wss://relay.damus.io,wss://nos.lol,wss://relay.nostr.band,wss://purplepag.es,wss://offchain.pub,wss://nostr.wine,wss://relay.nostr.net,wss://nostr-pub.wellorder.net,wss://relay.getalby.com";
  const nip05 = "bin@bitcoinitalianetwork.com";
  const npub = "npub1s0mv35668yg7t4jk49zdltkezn0em0s3jpt2qn8mkneurnw2edws0uy9zw";
  const pubkey = "83f6c8d35a3911e5d656a944dfaed914df9dbe119056a04cfbb4f3c1cdcacb5d";

  return { relays, nip05, npub, pubkey };
}
